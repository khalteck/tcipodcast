// Need to use the React-specific entry point to import createApi
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db, storage } from "../../firebase/firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  orderBy,
  limit,
  serverTimestamp,
  startAfter,
  endBefore,
  limitToLast,
  deleteDoc,
} from "firebase/firestore";
import generateId from "../../utils/generateId";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

// Create an API service
export const firebaseApi = createApi({
  reducerPath: "firebaseApi", // Unique key to identify the API in the Redux store
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // login user (admin)
    loginUser: builder.mutation({
      async queryFn({ email, password }) {
        try {
          let userData;

          //sign in with firsebase
          await signInWithEmailAndPassword(auth, email, password);

          //get user data from firestore
          const queryRef = query(
            collection(db, "users"),
            where("email", "==", email)
          );
          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            const docData = querySnapshot.docs[0].data();
            userData = { ...docData };
          }

          //return response
          return { data: userData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    //logout user
    logoutUser: builder.mutation({
      async queryFn() {
        try {
          // Sign out with Firebase
          await signOut(auth);

          // Clear everything in local storage
          localStorage.clear();

          // Return response
          return { data: "success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    //get admin info
    fetchAdminInfo: builder.query({
      async queryFn() {
        try {
          const docRef = doc(db, "info", "admin");
          const docSnap = await getDoc(docRef);

          let data;

          if (docSnap.exists()) {
            data = docSnap.data();
          }
          //return response
          return { data: data };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    // ========================================================================================Join community (users)
    joinCommunity: builder.mutation({
      async queryFn(data) {
        try {
          const docRef = doc(db, "community", data?.email);
          const docSnap = await getDoc(docRef);

          if (!docSnap.exists()) {
            const infoDocRef = doc(db, "info", "admin");
            await updateDoc(infoDocRef, {
              total_joined_community: increment(1),
            });
          }

          // Add or merge the document
          await setDoc(
            docRef,
            { ...data, timestamp: serverTimestamp() },
            { merge: true }
          );

          // Return response
          return { data: "success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    //get joined community
    fetchInitialCommunity: builder.query({
      async queryFn() {
        try {
          let communityData = [];

          const queryRef = query(
            collection(db, "community"),
            orderBy("timestamp", "desc"),
            limit(5)
          );
          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              communityData.push(docData);
            });
          }
          //return response
          return { data: communityData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    // fetch next 5 community users
    fetchNextCommunity: builder.mutation({
      async queryFn() {
        try {
          let communityData = [];
          const lastVisibleRaw = JSON.parse(
            localStorage.getItem("lastVisibleCommunity")
          );

          const communityRef = collection(db, "community");

          const lastVisible = await getDoc(
            doc(communityRef, lastVisibleRaw?.email)
          );

          const queryRef = query(
            collection(db, "community"),
            orderBy("timestamp", "desc"),
            startAfter(lastVisible),
            limit(5)
          );

          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              communityData.push(docData);
            });
          }
          //return response
          return { data: communityData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    // fetch previous 5 community users
    fetchPreviousCommunity: builder.mutation({
      async queryFn() {
        try {
          let communityData = [];
          const firstVisibleRaw = JSON.parse(
            localStorage.getItem("firstVisibleCommunity")
          );

          const communityRef = collection(db, "community");

          const firstVisible = await getDoc(
            doc(communityRef, firstVisibleRaw?.email)
          );

          const queryRef = query(
            collection(db, "community"),
            orderBy("timestamp", "desc"),
            endBefore(firstVisible),
            limitToLast(5)
          );

          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              communityData.push(docData);
            });
          }

          // return response
          return { data: communityData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    //=============================================================================to handle immigrants corner videos
    addNewImmigrantsCorner: builder.mutation({
      async queryFn(data) {
        try {
          const newId = generateId();
          const docRef = doc(db, "immigrants_corner", newId);

          const infoDocRef = doc(db, "info", "admin");
          await updateDoc(infoDocRef, {
            total_immigrants_corner: increment(1),
          });

          // Add or merge the document
          await setDoc(docRef, {
            ...data,
            timestamp: serverTimestamp(),
            id: newId,
          });

          // Return response
          return { data: "success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    editImmigrantsCorner: builder.mutation({
      async queryFn(data) {
        try {
          const docRef = doc(db, "immigrants_corner", data?.id);

          // Add or merge the document
          await updateDoc(docRef, {
            ...data?.formData,
          });

          // Return response
          return { data: "success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    deleteImmigrantsCorner: builder.mutation({
      async queryFn(id) {
        try {
          const docRef = doc(db, "immigrants_corner", id);

          const infoDocRef = doc(db, "info", "admin");
          await updateDoc(infoDocRef, {
            total_immigrants_corner: increment(-1),
          });

          await deleteDoc(docRef);

          // Return response
          return { data: "success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    //get joined community
    fetchInitialImmigrantsCorner: builder.query({
      async queryFn() {
        try {
          let immigrantsData = [];

          const queryRef = query(
            collection(db, "immigrants_corner"),
            orderBy("timestamp", "desc"),
            limit(5)
          );
          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              immigrantsData.push(docData);
            });
          }
          //return response
          return { data: immigrantsData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    // fetch next 5 immigrants corner videos
    fetchNextImmigrantsCorner: builder.mutation({
      async queryFn() {
        try {
          let immigrantsCornerData = [];
          const lastVisibleRaw = JSON.parse(
            localStorage.getItem("lastVisibleImmigrants")
          );

          const immigrantsCornerRef = collection(db, "immigrants_corner");

          const lastVisible = await getDoc(
            doc(immigrantsCornerRef, lastVisibleRaw?.id)
          );

          const queryRef = query(
            collection(db, "immigrants_corner"),
            orderBy("timestamp", "desc"),
            startAfter(lastVisible),
            limit(5)
          );

          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              immigrantsCornerData.push(docData);
            });
          }
          //return response
          return { data: immigrantsCornerData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    // fetch previous 5 immigrants corner videos
    fetchPreviousImmigrantsCorner: builder.mutation({
      async queryFn() {
        try {
          let immigrantsCornerData = [];
          const firstVisibleRaw = JSON.parse(
            localStorage.getItem("firstVisibleImmigrants")
          );

          const immigrantsCornerRef = collection(db, "immigrants_corner");

          const firstVisible = await getDoc(
            doc(immigrantsCornerRef, firstVisibleRaw?.id)
          );

          const queryRef = query(
            collection(db, "immigrants_corner"),
            orderBy("timestamp", "desc"),
            endBefore(firstVisible),
            limitToLast(5)
          );

          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              immigrantsCornerData.push(docData);
            });
          }

          // return response
          return { data: immigrantsCornerData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    //======================================================================================= To handle podcasts

    //to handle podcasts
    addNewPodcast: builder.mutation({
      async queryFn(data) {
        try {
          const newId = generateId();
          const docRef = doc(db, "podcasts", newId);

          const fileName = `${newId}.jpeg`;

          //upload thumbnail image to storage
          const storageRef = ref(storage, `/podcasts/${fileName}`);
          await uploadBytes(storageRef, data?.thumbnail);

          //get the uploaded image download url
          const imageUrl = await getDownloadURL(ref(storage, storageRef));

          // create the document in firestor
          await setDoc(docRef, {
            ...data,
            thumbnail: imageUrl,
            timestamp: serverTimestamp(),
            id: newId,
          });

          const infoDocRef = doc(db, "info", "admin");
          await updateDoc(infoDocRef, {
            total_podcasts: increment(1),
          });

          // Return response
          return { data: "success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    editPodcast: builder.mutation({
      async queryFn(data) {
        try {
          const docRef = doc(db, "podcasts", data?.id);

          let imageUrl;
          const isimageEditted = typeof data?.formData?.thumbnail !== "string";

          if (isimageEditted) {
            const fileName = `${data?.id}.jpeg`;

            //upload thumbnail image to storage
            const storageRef = ref(storage, `/podcasts/${fileName}`);

            //first delete existing image
            await deleteObject(storageRef);

            //upload new image
            await uploadBytes(storageRef, data?.formData?.thumbnail);

            //get the uploaded image download url
            const url = await getDownloadURL(ref(storage, storageRef));
            imageUrl = url;
          }

          // Add or merge the document
          await updateDoc(docRef, {
            ...data?.formData,
            thumbnail: isimageEditted ? imageUrl : data?.formData?.thumbnail,
          });

          // Return response
          return { data: "success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    deletePodcast: builder.mutation({
      async queryFn(id) {
        try {
          const docRef = doc(db, "podcasts", id);
          await deleteDoc(docRef);

          // delete existing image
          const fileName = `${id}.jpeg`;
          const storageRef = ref(storage, `/podcasts/${fileName}`);
          await deleteObject(storageRef);

          const infoDocRef = doc(db, "info", "admin");
          await updateDoc(infoDocRef, {
            total_podcasts: increment(-1),
          });

          // Return response
          return { data: "success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    //get initial podcasts
    fetchInitialPodcasts: builder.query({
      async queryFn() {
        try {
          let podcastData = [];

          const queryRef = query(
            collection(db, "podcasts"),
            orderBy("timestamp", "desc"),
            limit(4)
          );
          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              podcastData.push(docData);
            });
          }
          //return response
          return { data: podcastData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    // fetch next 4 podcasts
    fetchNextPodcasts: builder.mutation({
      async queryFn() {
        try {
          let podcastsData = [];
          const lastVisibleRaw = JSON.parse(
            localStorage.getItem("lastVisiblePodcasts")
          );

          const podcastsRef = collection(db, "podcasts");

          const lastVisible = await getDoc(
            doc(podcastsRef, lastVisibleRaw?.id)
          );

          const queryRef = query(
            podcastsRef,
            orderBy("timestamp", "desc"),
            startAfter(lastVisible),
            limit(4)
          );

          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              podcastsData.push(docData);
            });
          }
          //return response
          return { data: podcastsData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    // fetch previous 4 podcasts
    fetchPreviousPodcasts: builder.mutation({
      async queryFn() {
        try {
          let podcastsData = [];
          const firstVisibleRaw = JSON.parse(
            localStorage.getItem("firstVisiblePodcasts")
          );

          const podcastsRef = collection(db, "podcasts");

          const firstVisible = await getDoc(
            doc(podcastsRef, firstVisibleRaw?.id)
          );

          const queryRef = query(
            podcastsRef,
            orderBy("timestamp", "desc"),
            endBefore(firstVisible),
            limitToLast(5)
          );

          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              podcastsData.push(docData);
            });
          }

          // return response
          return { data: podcastsData };
        } catch (e) {
          return { error: e };
        }
      },
    }),

    //===================================================================== client area requests
    //===================================================================== client area requests
    //===================================================================== client area requests

    //get latest podcast episode
    fetchLatestEpisode: builder.query({
      async queryFn() {
        try {
          let podcastData = [];

          const queryRef = query(
            collection(db, "podcasts"),
            orderBy("timestamp", "desc"),
            limit(1)
          );
          const querySnapshot = await getDocs(queryRef);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const docData = doc.data();
              // Convert Firestore Timestamp to a serializable format (ISO string)
              if (docData.timestamp) {
                docData.timestamp = docData.timestamp.toDate().toISOString();
              }
              podcastData.push(docData);
            });
          }
          //return response
          return { data: podcastData };
        } catch (e) {
          return { error: e };
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  // auth
  useLoginUserMutation,
  useLogoutUserMutation,
  useFetchAdminInfoQuery,

  // community - ADMIN
  useJoinCommunityMutation,
  useFetchInitialCommunityQuery,
  useFetchNextCommunityMutation,
  useFetchPreviousCommunityMutation,

  // immigrants corner - ADMIN
  useAddNewImmigrantsCornerMutation,
  useFetchInitialImmigrantsCornerQuery,
  useFetchNextImmigrantsCornerMutation,
  useFetchPreviousImmigrantsCornerMutation,
  useDeleteImmigrantsCornerMutation,
  useEditImmigrantsCornerMutation,

  // podcasts - ADMIN
  useAddNewPodcastMutation,
  useDeletePodcastMutation,
  useEditPodcastMutation,
  useFetchInitialPodcastsQuery,
  useFetchNextPodcastsMutation,
  useFetchPreviousPodcastsMutation,

  // podcasts - CLIENT
  useFetchLatestEpisodeQuery,
} = firebaseApi;

// Need to use the React-specific entry point to import createApi
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../../firebase/firebase-config";
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
} from "firebase/firestore";

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
          //sign out with firsebase
          await signOut(auth);

          //return response
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

    // Join community (users)
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
            localStorage.getItem("lastVisible")
          );

          const docRef = doc(db, "community", lastVisibleRaw?.email);
          const docSnap = await getDoc(docRef);
          const lastVisible = docSnap.doc;

          console.log("lastVisible", lastVisible);

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
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useFetchAdminInfoQuery,
  useJoinCommunityMutation,
  useFetchInitialCommunityQuery,
  useFetchNextCommunityMutation,
} = firebaseApi;

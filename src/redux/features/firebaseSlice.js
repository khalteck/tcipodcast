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
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useFetchAdminInfoQuery,
} = firebaseApi;

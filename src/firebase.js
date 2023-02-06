import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7t07D0nZbK57EUOXnyaIiKMqKeaIgj9s",
  authDomain: "travelguideauth.firebaseapp.com",
  projectId: "travelguideauth",
  storageBucket: "travelguideauth.appspot.com",
  messagingSenderId: "1039742075043",
  appId: "1:1039742075043:web:d43727a80bc32964f8bf16"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
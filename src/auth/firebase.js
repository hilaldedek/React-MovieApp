import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut} from "firebase/auth";


//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const createUser = async(email,password,navigate) =>{
  console.log("selam firebasedesin");
  try{
    let userCredential =await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
    navigate("/");
    
  }catch(error){
    alert(error)
  }
}
export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      console.log(user);
    } else {
      setCurrentUser(false);
      console.log("user signed out");
    }
  });
};
export const logOut = () => {
  signOut(auth);
};
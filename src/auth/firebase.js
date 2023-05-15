import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";


//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
const{currentUser,setCurrentUser}=useContext(AuthContext);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const createUser = async(email,password,navigate,displayName) =>{
  console.log("selam firebasedesin");
  try{
    let userCredential =await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
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
      const {email,displayName}=user;
      setCurrentUser({email,displayName})
    } else {
      setCurrentUser(false);
      console.log("user signed out");
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

export const signUpWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
// export const forgotPassword = (email) => {
//   sendPasswordResetEmail(auth, email)
//     .then(() => {
//       toastWarnNotify("Please check your mail box!");
//     })
//     .catch((err) => {
//       toastErrorNotify(err.message);
//       // alert(err.message);
//       // ..
//     });
// };
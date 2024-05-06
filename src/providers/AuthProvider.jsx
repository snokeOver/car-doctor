import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../helper/GAuth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Register with email and password
  const register = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Login with email and Password
  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // Update user Info
  const UpdateUser = () => {
    return updateProfile(user, payLoad);
  };

  // Log out User
  const logOut = () => {
    return signOut(auth);
  };

  // Observer for the change in User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setUser(user);
      } else {
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);

  const authItems = {
    user,
    register,
    updateProfile,
    loading,
    setLoading,
    signIn,
    logOut,
    setUser,
  };
  return (
    <AuthContext.Provider value={authItems}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

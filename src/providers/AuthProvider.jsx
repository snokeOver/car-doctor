import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../helper/GAuth";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const nSAxios = useAxios();

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
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        try {
          const response = await nSAxios.post(
            "/api/jwt",
            { uid: user.uid },
            { withCredentials: true }
          );
          setLoading(false);
          console.log(response.data);
        } catch (err) {
          console.log(err.message);
          setLoading(false);
        }
      } else {
        try {
          const response = await nSAxios.post(
            "/api/logout",
            {
              uid: user?.uid,
            },
            { withCredentials: true }
          );
          setUser(null);
          setLoading(false);
        } catch (err) {
          console.log("Error logging out:", err.message);
          setLoading(false);
        }
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

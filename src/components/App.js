import AppRouter from "./AppRouter";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { authService } from "../utils/api/fbInstance";
import Loading from "./layout/write/Loading";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
        if (user.displayName === null) {
          user.displayName = "";
        }
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
      console.log(user);
    });
  }, []);
  const refreshUser = (args) => {
    const user = authService.currentUser;
    if (user) {
      setNewName(user.displayName);
    }
    if (args === "logout") {
      setInit(false);
      setIsLoggedIn(false);
      setUserObj(null);
      setInit(true);
    }
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
        ></AppRouter>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;

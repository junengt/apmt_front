import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useState } from "react";
import Items from "../routes/Items";
import StuffDetail from "../routes/StuffDetail";
import NoMatch from "../routes/NoMatch";
import WritingStuff from "../routes/WritingStuff";
import EditProfile from "../routes/EditProfile";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  const [list, setList] = useState();
  const [tags, setTags] = useState();

  const tagsState = (args) => {
    setTags(args);
    console.log("tagState", args);
  };
  const listState = (args) => {
    setList(args);
  };
  console.log(list);

  return (
    <>
      <Router>
        <Navigation
          userObj={userObj}
          listState={listState}
          setList={setList}
          list={list}
        />

        <Routes>
          {isLoggedIn && (
            <>
              <Route
                path="/profile"
                element={
                  <Profile userObj={userObj} refreshUser={refreshUser} />
                }
              />
              <Route
                path="/edit_profile"
                element={
                  <EditProfile userObj={userObj} refreshUser={refreshUser} />
                }
              />
              <Route path="/*" element={<Navigate replace to="/" />} />
              <Route
                path="/new_item"
                element={<WritingStuff tagsState={tagsState} tags={tags} />}
              />
            </>
          )}
          <>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route
              path="items"
              element={<Items listState={listState} list={list} />}
            />
            <Route path="items/:id" element={<StuffDetail />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

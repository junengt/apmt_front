import { HashRouter as Router, Route, Routes } from "react-router-dom";
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

const AppRouter = () => {
  const [list, setList] = useState([]);

  const listState = (args) => {
    setList([Object.values(args)]);
  };
  console.log(list);

  return (
    <>
      <Router>
        <Navigation listState={listState} setList={setList} list={list} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="items"
            element={<Items listState={listState} list={list} />}
          />
          <Route path="items/:id" element={<StuffDetail />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/write-new-stuff" element={<WritingStuff />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;

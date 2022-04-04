import React from "react";
import Mac from "../../toggleGroup/Mac";
import IPad from "../../toggleGroup/IPad";
import Watch from "../../toggleGroup/Watch";
import IPhone from "../../toggleGroup/IPhone";
import AirPods from "../../toggleGroup/AirPods";
import Etc from "../../toggleGroup/Etc";

const ToggleButtons = ({ list, listState }) => {
  return (
    <>
      {list.map((e) => {
        switch (e) {
          case "Mac":
            return <Mac key="1" list={list} listState={listState} />;
          case "iPad":
            return <IPad key="2" list={list} listState={listState} />;
          case "Watch":
            return <Watch key="3" list={list} listState={listState} />;
          case "iPhone":
            return <IPhone key="4" list={list} listState={listState} />;
          case "AirPods":
            return <AirPods key="5" list={list} listState={listState} />;
          case "Etc.":
            return <Etc key="6" list={list} listState={listState} />;
          default:
            return "";
        }
      })}
    </>
  );
};

export default ToggleButtons;

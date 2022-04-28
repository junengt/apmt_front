import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import * as Header from "../components/common/search/Header";
import * as Icon from "../components/common/neighbor/Icon";
import WritePlus from "../components/layout/write/WritePlus";
import Tag from "../components/common/tags/Tag";
import ToggleButtons from "../components/common/tags/ToggleButtons";
//import itemOfJson from "../data/carrot.json";
import queryString from "query-string";
import axios from "axios";

const Items = ({ listState, list }) => {
  const [input, setInput] = useState("empty");
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);

  const params = useLocation();
  const searchText = queryString.parse(params.search).search
    ? queryString.parse(params.search).search
    : "";
  const axiosInstance = axios.create({ headers: {} });
  useEffect(() => {
    axios
      .get("/items?search=" + searchText, axiosInstance)
      .then((result) => {
        setPosts(result.data.data);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }, [searchText, list]);

  const OnSearch = (e) => {
    if (e.key === "Enter" && input === "empty") {
      alert("검색어를 입력해주세요");
    } else if (e.key === "Enter" && input.length < 2) {
      alert("두 글자 이상 입력해 주세요");
    } else if (e.key === "Enter" && input.length >= 2) {
      setSearchParams({ search: input });
    }
  };
  const OnType = (e) => {
    if (e.target.value.trim() !== "") {
      setInput(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="bg-light ">
        <div className="row ">
          <div className="pt-0 col-md-12"></div>
        </div>
      </div>
      <section style={{ backgroundColor: "#fafafa" }}>
        <div
          className="container"
          style={{
            maxWidth: "1100px",
            paddingRight: "10%",
            paddingLeft: "10%",
            width: "100%",
          }}
        >
          <div className="row">
            <div className="col-md-12 " style={{ paddingTop: "60px" }}>
              <form
                action="#"
                method="post"
                className="d-flex m-3"
                style={{
                  justifyContent: "center",
                  width: " 100%",
                }}
                onSubmit={handleSubmit}
              >
                <Header.SearchBarBox>
                  <Header.SearchBarInner>
                    <Icon.Search />
                    <Header.Input
                      placeholder="검색어를 입력 후 Enter를 누르세요"
                      onChange={OnType}
                      onKeyPress={OnSearch}
                    />
                  </Header.SearchBarInner>
                </Header.SearchBarBox>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="chapter" className="chpater">
        <div
          className="container"
          style={{
            maxWidth: "1100px",
            paddingRight: "10%",
            paddingLeft: "10%",
            marginBottom: "60px",
            width: "100%",
            height: "158px",
          }}
        >
          {list && <ToggleButtons list={list} listState={listState} />}
          {list && <Tag tags={list} listState={listState}></Tag>}
        </div>
      </section>
      <section>
        <div
          className="container"
          style={{
            maxWidth: "1152px",
            paddingRight: "10%",
            paddingLeft: "10%",
            width: "100%",
          }}
        >
          <div className="row">
            {posts.map((e) => (
              <Link
                className="col-xs-12 col-sm-6 col-lg-4 text-black"
                to={"/items/" + e.id}
                style={{ textDecoration: "none" }}
                key={e.id}
              >
                <Item key={e.id} item={e} />
              </Link>
            ))}
            {/*{itemOfJson*/}
            {/*  .filter((el) => el.title.includes(searchText))*/}
            {/*  .map((e, i) => {*/}
            {/*    let isFounded = () => {*/}
            {/*      if (!list || list.length === 0) {*/}
            {/*        return true;*/}
            {/*      }*/}
            {/*      if (list && list.length < 2) {*/}
            {/*        ret urn (*/}
            {/*          list && e.tags.split(",").some((ai) => list.includes(ai))*/}
            {/*        );*/}
            {/*      } else {*/}
            {/*        return (*/}
            {/*          list && e.tags.split(",").every((ai) => list.includes(ai))*/}
            {/*        );*/}
            {/*      }*/}
            {/*    };*/}

            {/*    if (isFounded() && itemIndex < maxItem) {*/}
            {/*      itemIndex++;*/}
            {/*      return (*/}
            {/*        <Link*/}
            {/*          className="col-xs-12 col-sm-6 col-lg-4 text-black"*/}
            {/*          to={"/items/" + i}*/}
            {/*          style={{ textDecoration: "none" }}*/}
            {/*          key={i}*/}
            {/*        >*/}
            {/*          <Item key={i} item={e} />*/}
            {/*        </Link>*/}
            {/*      );*/}
            {/*    }*/}
            {/*  })}*/}
          </div>
          <WritePlus />
        </div>
      </section>
    </div>
  );
};

export default Items;

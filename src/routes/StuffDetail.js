import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import WriteSwiper from "../components/layout/write/WriteSwiper";
import OneDepthHeader from "../components/layout/OneDepthHeader";
import DetailUserData from "../components/layout/write/DetailUserData";
import DetailContents from "../components/layout/write/DetailContents";
import OneDepthFooter from "../components/layout/write/OneDepthFooter";
import DetailSale from "../components/layout/write/DetailSale";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import itemOfJson from "../data/carrot.json";

const StuffDetailWrap = styled.div`
  position: relative;
`;

function StuffDetail() {
  const param = useParams();

  const item = itemOfJson[param.id];
  const [trigger, setTrigger] = useState(false);
  // const stuffs = useSelector((state) => state.stuffs.data);
  const detailHead = useRef(null);
  const stuffs = [
    {
      attachmentUrl: [item.img_src],
      createAt: new Date().getTime() - 100000,
      creatorId: "apple_mart",
      id: "8Bp36P7OzIg6Lz5UTeVh",
      input: {
        title: item.title,
        price: item.price,
        contents: item.content,
      },
      view: 111,
      like: 10,
      region: item.region_name,
      tags: item.tags.split(","),
    },
  ];
  const history = useNavigate();
  const { search } = useLocation();
  // const query = queryString.parse(search);
  // const { no } = query;

  //  useCallList();

  const toggleNav = () => {
    const scrollValue = window.scrollY;
    const userData = detailHead.current?.offsetTop;
    if (scrollValue >= userData) setTrigger(true);
    else setTrigger(false);
  };

  const scrollTrigger = () => {
    window.addEventListener("scroll", toggleNav);
    return () => window.removeEventListener("scroll", toggleNav);
  };

  useEffect(() => {
    scrollTrigger();
  }, [scrollTrigger]);

  return (
    <>
      <section
        className="pt-4"
        style={{
          height: "60px",
          width: "100%",
        }}
      ></section>
      {stuffs
        ?.filter((currentItem) => currentItem.id === "8Bp36P7OzIg6Lz5UTeVh")
        .map((stuffItem) => {
          const {
            id,
            tags,
            attachmentUrl,
            creatorId,
            region,
            category,
            input,
            createAt,
            view,
            like,
          } = stuffItem;
          const { title, contents, price } = input;
          return (
            <Container
              style={{
                maxWidth: "1100px",
                paddingRight: "10%",
                paddingLeft: "10%",
                width: "100%",
              }}
            >
              <StuffDetailWrap key="1">
                <OneDepthHeader trigger={trigger} />
                <WriteSwiper carouselImg={attachmentUrl} />
                <Inner>
                  <Link to={"/seller_profile/" + creatorId}>
                    {" "}
                    <DetailUserData
                      username={creatorId}
                      region={region}
                      ref={detailHead}
                    />
                  </Link>
                  <DetailContents
                    view={view}
                    like={like}
                    title={title}
                    contents={contents}
                    time={createAt}
                    tags={tags}
                  />
                  <DetailSale username={creatorId} stuff={stuffs} />
                </Inner>
                <OneDepthFooter price={2000} />
              </StuffDetailWrap>
            </Container>
          );
        })}
    </>
  );
}

export default StuffDetail;

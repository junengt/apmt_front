import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation, useNavigate } from "react-router-dom";
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

const StuffDetailWrap = styled.div`
  position: relative;
`;

function StuffDetail() {
  const param = useParams();
  const [trigger, setTrigger] = useState(false);
  // const stuffs = useSelector((state) => state.stuffs.data);
  const detailHead = useRef(null);
  const stuffs = [
    {
      attachmentUrl: [
        "https://firebasestorage.googleapis.com/v0/b/dangguen-market.appspot.com/o/userid%2Fe8972507-a3ff-48a2-85a6-2cdb9e4d9b58?alt=media&token=1a7e872d-e085-4fcb-a1f6-f147abe6f1e9",
        "https://firebasestorage.googleapis.com/v0/b/dangguen-market.appspot.com/o/userid%2Fe8972507-a3ff-48a2-85a6-2cdb9e4d9b58?alt=media&token=1a7e872d-e085-4fcb-a1f6-f147abe6f1e9",
      ],
      category: 1,
      createAt: 1613727320754,
      creatorId: "yoon_seol",
      id: "8Bp36P7OzIg6Lz5UTeVh",
      input: {
        title: "27인치 모니터 싸게 처분합니다.",
        price: "5,252",
        contents:
          "약간의 스크래치가 많습니다.\n배사홀 없습니다.\n이걸로 물물교환 릴레이하면 뭘로 바꿔주실건가요?",
      },
      region: "구로동",
      tags: ["iPad", "iPad Air"],
    },

    {
      attachmentUrl: [
        "https://firebasestorage.googleapis.com/v0/b/danggu…=media&token=9b7752e0-04d1-463e-8a8e-d7c9c302d3e0",
      ],
      category: "2",
      createAt: 1608457519444,
      creatorId: "stjae",
      id: "dohrJj5vnJIYPEX3bXW5",

      input: {
        price: "5,000",
        contents:
          "예쁜 화초입니다  이 화초는 죽지않습니다\n왜냐면 조화이기때문입니다",
        title: "죽지않는 화초",
      },
      region: "미근동",
      tags: ["iPad", "iPad Air"],
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
                  <DetailUserData
                    username={creatorId}
                    region={region}
                    ref={detailHead}
                  />
                  <DetailContents
                    title={title}
                    contents={contents}
                    category="디지털/가전"
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

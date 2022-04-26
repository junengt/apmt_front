import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WritingHeader from "../components/layout/write/WritingHeader";
import { PaddingInner } from "../components/layout/Inner";
import SelectPhoto from "../components/layout/write/SelectPhoto";
import StuffTitle from "../components/layout/write/StuffTitle";
import WriteContents from "../components/layout/write/WriteContents";
import WritePrice from "../components/layout/write/WritePrice";
import Loading from "../components/layout/write/Loading";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import ToggleButtons from "../components/common/tags/ToggleButtons";
import WritingStuffTag from "../components/common/WritingStuffTag";
import { WriteInputWrap } from "../components/layout/write/WriteInputWrap";
import Tag from "../components/common/tags/Tag";
import { useSelector } from "react-redux";
import getLocation from "../components/layout/neighborhood/getLocation";
import Location from "../components/layout/write/Location";
const WritingStuff = ({ tags, tagsState }) => {
  const location = useLocation();
  const stuffItem = location.state;
  console.log(stuffItem);
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  const [inputs, setInputs] = useState({ title: "", price: "", contents: "" });
  const [attachment, setAttachment] = useState([
    stuffItem?.photoList?.map((e) => e.photoPath),
  ]);
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState(
    useSelector((state) => state.neighbor.address)
  );
  const history = useNavigate();
  const [addr, setAddr] = useState([]);
  const selecAddr = useSelector(({ neighbor: { address } }) => address);
  const geolocation = getLocation();
  useEffect(() => {
    if (stuffItem.data) {
      setRegion(stuffItem.data.region);
    } else {
      geolocation.then((res) => setAddr(Array.from(res)));
    }
  }, []);

  if (userObj.uid === undefined) {
    alert("로그인을 하지않은 상태입니다. 로그인을 해주세요.");
    history("/auth");
    return <p>로그인을 하지않은 상태입니다. 로그인을 해주세요.</p>;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let stuff = {
      input: inputs,
      attachmentUrl: attachment ? attachment : "default",
      region: region,
      tags: tags ? tags : [],
      uid: userObj.uid,
    };

    const { title, contents } = inputs;

    if (title.length < 3) {
      setLoading(false);
      return alert("글 제목을 최소 세 글자 이상 작성해 주세요");
    }

    if (contents.length < 3) {
      setLoading(false);
      return alert("글 내용을 최소 세 글자 이상 작성해 주세요");
    }

    console.log(attachment, stuff);
    setInputs({ title: "", price: "", contents: "" });
    setAttachment([]);
    setLoading(false);
    alert("상품이 성공적으로 등록되었습니다.");
    history("/");
  };

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setInputs({ ...inputs, [name]: value });
  };

  const onPrice = (event) => {
    const regex = /[^0-9]/g;
    const price = event.target.value.replace(regex, "");
    let NumberPrice = Number(price);
    if (NumberPrice >= 99999999) NumberPrice = 99999999;
    let priceComma = NumberPrice.toString().replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
    if (priceComma === "0") priceComma = "";

    setInputs({ ...inputs, price: priceComma });
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;

    let fileUrl = [];

    const fileArr = Array.from(files);
    fileArr.map((file) => {
      const reader = new FileReader();

      reader.onloadend = (event) => {
        const {
          currentTarget: { result },
        } = event;

        fileUrl.push(result);
        setAttachment([...attachment, ...fileUrl]);
      };
      return reader && reader.readAsDataURL(file);
    });
  };

  const onClearPhoto = (no) => {
    setAttachment((state) => {
      return state.filter((item) => item !== state[no]);
    });
  };

  const { title, price, contents } = inputs;

  return (
    <MobileContainer>
      <MobileInner>
        <WritingHeader onClick={onSubmit} />
        <PaddingInner>
          <Location selecAddr={selecAddr} addr={addr} />
          <form>
            <SelectPhoto
              onChange={onFileChange}
              attachment={attachment}
              onClearPhoto={onClearPhoto}
            />
            <StuffTitle onChange={onChange} title={title} />
            <WritingStuffTag tags={tags} tagsState={tagsState} />
            {tags && <ToggleButtons list={tags} listState={tagsState} />}
            <WriteInputWrap>
              {tags && <Tag tags={tags} listState={tagsState}></Tag>}
            </WriteInputWrap>
            <WritePrice onChange={onPrice} price={price} />

            <WriteContents onChange={onChange} contents={contents} />
          </form>
        </PaddingInner>
        {loading && <Loading />}
      </MobileInner>
    </MobileContainer>
  );
};

export default WritingStuff;

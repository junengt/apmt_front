import styled from "styled-components";
import sale from "../../../icon/selllist.png";
import purchase from "../../../icon/buylist.png";
import watch from "../../../icon/like.png";
import { Inner } from "../Inner";

export const DanggeunWrap = styled.div`
  background-color: #fafafb;
`;
export const ProfileImage = styled.img`
  width: 69px;
  height: 69px;
  border: none;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const ProfileName = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ProfileUrl = styled.button`
  width: 100px;
  height: 35px;

  border: 2px solid #f0f0f0;
  border-radius: 5px;

  text-align: center;

  font-size: 14px;
  font-weight: 500;

  background-color: #ffffff;
`;

export const SaleBlock = styled.div`
  width: 61px;
  height: 61px;
  background-image: url(${sale});
  background-size: cover;
`;

export const PurchaseBlock = styled.div`
  width: 61px;
  height: 61px;
  background-image: url(${purchase});
  background-size: cover;
`;

export const WatchBlock = styled.div`
  width: 61px;
  height: 61px;
  background-image: url(${watch});
  background-size: cover;
`;

export const ListBlock = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Ptag = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const TownBlock = styled.div`
  display: flex;

  margin-top: 20px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const LogOut = styled.div`
  display: flex;

  margin-top: 20px;

  border: none;

  cursor: pointer;
`;

export const DanggeunInner = styled(Inner)`
  border-bottom: 1px solid #d7d7d7;
  margin-bottom: 10px;
  &:last-of-type {
    margin: 0;
  }
`;

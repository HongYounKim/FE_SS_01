import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import profileImage from "../assets/maenggu.png";

const Card = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0 0 8px 0;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #555;
  height: 40px;
  overflow: hidden;
  border-bottom: 1px solid rgb(242, 242, 242);
`;

const Meta = styled.div`
  font-size: 13px;
  color: #777;
  margin-top: 8px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  font-size: 13px;
  color: #999;
`;

const Writer = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Likes = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Item = ({ post, index }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const authorNames = ["우빈", "악어", "FURVEN"];
  const likeCounts = [261, 242, 31];

  return (
    <Card>
      <Thumbnail src={post.thumbnail} alt={post.title} />
      <Content>
        <Title>{post.title}</Title>
        <Desc>{post.content}</Desc>
        <Meta>{formattedDate}</Meta>
        <Footer>
          <Writer>
            <img
              src={profileImage}
              alt="profile"
              width="20"
              height="20"
              style={{ borderRadius: "50%" }}
            />
            by {authorNames[index]}
          </Writer>
          <Likes>
            <FaHeart />
            {likeCounts[index]}
          </Likes>
        </Footer>
      </Content>
    </Card>
  );
};

export default Item;

import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Item from "../components/Item";
import styled from "styled-components";
import { dummyData } from "../data/dummy_data";

const Grid = styled.div`
  display: grid;
  gap: 24px;
  padding: 24px;

  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Homepage = () => {
  return (
    <>
      <Header />
      <Category />
      <Grid>
        {dummyData.map((post, index) => (
          <Item key={post.postID} post={post} index={index} />
        ))}
      </Grid>
    </>
  );
};

export default Homepage;

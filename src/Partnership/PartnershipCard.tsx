import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  width: 100%;
  max-width: 340px;
  min-width: 320px;
  background-color: #fff;
  padding: 0 40px;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  margin: 20px auto;
  flex-shrink: 0;
`;
const H3 = styled.h3`
  font-weight: bold;
  margin: 0;
  text-align: center;
  margin-top: 20px;
`;

const P = styled.p`
  color: #999;
  text-align: center;
`;
const Map: React.FunctionComponent<{
  title: string;
  image: string;
  description: string;
}> = (props) => {
  return (
    <DivContainer>
      <ImageContainer>
        <img src={props.image} width="100%" alt={`${props.image}`} />
      </ImageContainer>
      <div>
        <H3>{props.title}</H3>
        <P>{props.description}</P>
      </div>
    </DivContainer>
  );
};

export default Map;

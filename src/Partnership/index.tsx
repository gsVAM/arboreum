import React from "react";
import styled from "styled-components";
import PartnershipCard from "./PartnershipCard";
import Partnerships from "./assets/data/copy.json";

interface partner {
  title: string;
  image: string;
  description: string;
  partnerLogo?: [];
}

const HowItworksContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
`;

const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1272px;
  padding: 100px 20px 150px 20px;
`;

const TitleContainer = styled.div`
  margin: 0 auto 100px auto;
  text-align: center;
  max-width: 720px;
`;

const ContentContainer = styled.div`
  padding: 20px 0;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.11);
`;

const Map: React.FunctionComponent<{}> = () => {
  const PartnershipsCards = Partnerships.map((d: partner, i: number) => {
    return (
      <PartnershipCard
        key={i}
        title={d.title}
        description={d.description}
        image={d.image}
      />
    );
  });
  return (
    <HowItworksContainer>
      <DivContainer>
        <TitleContainer>
          <h1>Partnerships</h1>
          <h3>
            We partner with businesses, financial institutes, and NGOs to build
            a wide range of smartphone-enabled credit inclusion products
          </h3>
        </TitleContainer>
        <ContentContainer>{PartnershipsCards}</ContentContainer>
      </DivContainer>
    </HowItworksContainer>
  );
};

export default Map;

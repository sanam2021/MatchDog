import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  background-color: #fff;
  position: relative;
`;

const Container = styled.div`
 
  text-align: center;
`;

const FeatureRow = styled.div`
  display: flex;
  justify-content: center;

`;

const FeatureBox = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
`;

const Icon = styled.i`
  color: #ef8172;
  margin-bottom: 1rem;
  font-size: 5rem;

  &:hover {
    color: #ff4c68;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1.2rem;
`;

const FeaturesSection = () => {
  return (
    <SectionContainer >
      <Container>
        <FeatureRow>
          <FeatureBox>
            <Icon className="icon fas fa-check-circle fa-5x"></Icon>
            <FeatureTitle className="feature-title">Easy to use.</FeatureTitle>
            <FeatureDescription>
              Unleash the Power of Socializing with Dogs
            </FeatureDescription>
          </FeatureBox>
          <FeatureBox>
            <Icon className="icon fas fa-bullseye fa-4x"></Icon>
            <FeatureTitle className="feature-title">Accurate.</FeatureTitle>
            <FeatureDescription>
              Unleash the possibilities with our dog-loving community.
            </FeatureDescription>
          </FeatureBox>
          <FeatureBox>
            <Icon className="icon fas fa-heart fa-4x"></Icon>
            <FeatureTitle className="feature-title">
              Made with love.
            </FeatureTitle>
            <FeatureDescription>
              Discover true companionship for your furry friend.
            </FeatureDescription>
          </FeatureBox>
        </FeatureRow>
      </Container>
    </SectionContainer>
  );
};

export default FeaturesSection;

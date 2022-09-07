import React from "react";

// Styles
import { StyledCardContainer } from "./HomePage.style";

// Components
import Card from "../../components/Card";

export const HomePage = () => {
  return (
    <StyledCardContainer>
      <Card
        title={"Registration"}
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae lorem massa. Cras eget magna sit amet elit feugiat pretium a quis est. "
        }
        text={"Register New Customer"}
        link={"/registration"}
      />

      <Card
        title={"Customers"}
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae lorem massa. Cras eget magna sit amet elit feugiat pretium a quis est. "
        }
        text={"View All Customers"}
        link={"/customers"}
      />
    </StyledCardContainer>
  );
};

export default HomePage;

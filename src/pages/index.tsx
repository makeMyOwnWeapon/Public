import React from 'react';
import { Button, ImageContainer, ButtonContainer, Title } from './styles';

const Home = () => {
  return (
    <div>
      <Title>Choose your body size</Title>
      <ImageContainer />
      <ButtonContainer>
        <Button color="#92B6D6">선택</Button>
        <Button color="#91C7A0">선택</Button>
        <Button color="#FAD647">선택</Button>
        <Button color="#E5985E">선택</Button>
        <Button color="#D75D5B">선택</Button>
      </ButtonContainer>
    </div>
  );
};

export default Home;

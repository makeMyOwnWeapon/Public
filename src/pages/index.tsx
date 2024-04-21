import React from 'react';
import { Button, Container, Title } from './styles';
const Home = () => {
  return (
    <div>
      <Container />
      <Title>Choose your body size</Title>
      <Button $left={291} color="#92B6D6">선택</Button>
      <Button $left={461} color="#91C7A0">선택</Button>
      <Button $left={640} color="#FAD647">선택</Button>
      <Button $left={825} color="#E5985E">선택</Button>
      <Button $left={1040} color="#D75D5B">선택</Button>
    </div>
  );
};

export default Home;
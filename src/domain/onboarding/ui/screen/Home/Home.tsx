import React from "react";
import styled from "styled-components/native";

const Vi = styled.View`
  flex: 1;
`;
const Message = styled.Text`
  font-size: 90px;
  color: black;
`;

export function Home() {
  return (
    <Vi>
      <Message>hey</Message>
    </Vi>
  );
}

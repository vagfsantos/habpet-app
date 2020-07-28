import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../theme/colors';

const ButtonText = styled.Text<{ color: Colors }>`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 18px;
`;

const Button = styled.TouchableOpacity<{ backgroundColor: Colors}>`
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 40px;
  justify-content: center;
`;

interface ButtonProps {
  children: string;
  onPress: () => any;
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ children, onPress }) => (
  <Button backgroundColor={Colors.PRIMARY_DARK} onPress={onPress}>
    <ButtonText color={Colors.WHITE}>{children}</ButtonText>
  </Button>
);

export const ButtonSecondary: React.FC<ButtonProps> = ({ children, onPress }) => (
  <Button backgroundColor={Colors.SECONDARY} onPress={onPress}>
    <ButtonText color={Colors.PRIMARY_DARK}>{children}</ButtonText>
  </Button>
);

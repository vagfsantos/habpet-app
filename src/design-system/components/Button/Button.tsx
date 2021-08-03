import React from 'react';
import { Colors } from '@design-system/tokens/colors';
import styled from 'styled-components/native';
import { FontFamilies } from '@design-system/tokens/fonts';
import { darken } from 'polished';

const ButtonWrapper = styled.TouchableHighlight.attrs({
  underlayColor: darken(0.1, Colors.HIGHLIGHT),
})<{ width: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: 50px;
  background-color: ${Colors.HIGHLIGHT};
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

const ButtonText = styled.Text`
  color: ${Colors.PRIMARY};
  font-size: 18px;
  font-family: ${FontFamilies.RUBIK};
`;

interface Props {
  onPress: () => void;
  children: string;
  width?: number;
}

export function Button({ children, onPress, width }: Props) {
  return (
    <ButtonWrapper width={width} onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
}

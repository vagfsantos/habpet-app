import { Colors } from '@design-system/tokens/colors';
import { FontFamilies } from '@design-system/tokens/fonts';
import styled from 'styled-components/native';

export const Paragraph = styled.Text`
  color: ${Colors.WHITE};
  font-size: 18px;
  font-family: ${FontFamilies.RUBIK};
`;

export const Title = styled.Text`
  color: ${Colors.SECONDARY};
  font-size: 48px;
  font-family: ${FontFamilies.BALOO};
`;

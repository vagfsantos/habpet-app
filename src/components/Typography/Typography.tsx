import styled from 'styled-components/native';
import Fonts from '../../theme/fonts';
import Colors from '../../theme/colors';

interface TextProps {
  color?: Colors;
  bold?: boolean;
}

export const H1 = styled.Text<TextProps>`
  font-size: 48px;
  font-family: ${Fonts.PRIMARY};
  color: ${(props) => props.color};
`;

export const P = styled.Text<TextProps>`
  font-size: 18px;
  font-family: ${(props) => (props.bold ? Fonts.SECONDARY_BOLD : Fonts.SECONDARY)};
  line-height: 25px;
  color: ${(props) => props.color};
`;

H1.defaultProps = {
  color: Colors.GREY,
};

P.defaultProps = {
  color: Colors.GREY,
};

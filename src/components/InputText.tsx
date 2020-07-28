import styled from 'styled-components/native';
import Colors from '../theme/colors';

const InputText = styled.TextInput.attrs({
  placeholderTextColor: Colors.PRIMARY_DARK,
})`
  font-size: 24px;
  line-height: 28px;
  height: 50px;
  border-bottom-width: 2px;
  border-bottom-color: ${Colors.PRIMARY_DARK};
  color: ${Colors.SECONDARY};
`;

export default InputText;

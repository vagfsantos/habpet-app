import React from 'react';
import styled from 'styled-components/native';
import {
  Platform, Keyboard, TouchableWithoutFeedback, View,
} from 'react-native';
import Colors from '../../../theme/colors';
import Container from '../../../components/Container';

const ScreenKeyboardAvoiding = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  background-color: ${Colors.PRIMARY};
`;

const Screen = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20%;
`;

interface Props {
  children: React.ReactNode | React.ReactNodeArray
}

const CreateHabitContainer: React.FC<Props> = ({ children }) => (
  <ScreenKeyboardAvoiding>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Screen>
          <View>{children}</View>
        </Screen>
      </Container>
    </TouchableWithoutFeedback>
  </ScreenKeyboardAvoiding>
);

export default CreateHabitContainer;

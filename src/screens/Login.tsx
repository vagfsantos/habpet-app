import React from 'react';
import styled from 'styled-components/native';
import Colors from '../theme/colors';
import Logo from '../assets/logo.svg';
import DogWatermark from '../assets/dog-watermark.svg';

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${Colors.SECONDARY};
`;

const LogoWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 75px;
`;

const HabiPetLogo = styled(Logo)`
  flex: 0.75;
`;

const Background = styled(DogWatermark)`
  align-self: center;
`;

const Slogan = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${Colors.TERCIARY}
`;

const Button = styled.TouchableHighlight`
  width: 70%;
  height: 50px;
  background-color: ${Colors.PRIMARY_DARK};
  border-radius: 40px;
  justify-content: center;
  align-self: center;
  margin-top: 65px;
`;

const ButtonText = styled.Text`
  color: ${Colors.WHITE};
  text-align: center;
  font-size: 18px;
`;

const Login: React.FC = () => (
  <Screen>
    <Background />
    <LogoWrapper>
      <HabiPetLogo width={100} />
    </LogoWrapper>
    <Slogan>Raise your habits like a pet</Slogan>
    <Button onPress={() => {}}>
      <ButtonText>Login with google</ButtonText>
    </Button>
  </Screen>
);

export default Login;

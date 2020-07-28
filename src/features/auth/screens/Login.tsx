import React from 'react';
import styled from 'styled-components/native';
import { useHistory } from 'react-router-native';
import Logo from '../../../assets/logo.svg';
import DogWatermark from '../../../assets/dog-watermark.svg';
import Colors from '../../../theme/colors';
import { P } from '../../../components/Typography';
import { ButtonPrimary } from '../../../components/Button';
import Routes from '../../../enums/routes';

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${Colors.SECONDARY};
`;

const Slogan = styled(P)`
  color: ${Colors.TERCIARY};
  align-self: center;
`;

const LogoWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 75px;
`;

const HabiPetLogo = styled(Logo)`
  flex: 0.75;
`;

const DogOutline = styled(DogWatermark)`
  align-self: center;
`;

const ButtonWrapper = styled.View`
  width: 70%;
  align-self: center;
  margin-top: 65px;
`;


const Login: React.FC = () => {
  const history = useHistory();

  return (
    <Screen>
      <DogOutline />
      <LogoWrapper>
        <HabiPetLogo width={100} />
      </LogoWrapper>
      <Slogan>Raise your habits like a pet</Slogan>
      <ButtonWrapper>
        <ButtonPrimary onPress={() => history.push(Routes.DASHBOARD)}>
          Login with google
        </ButtonPrimary>
      </ButtonWrapper>
    </Screen>
  );
};

export default Login;

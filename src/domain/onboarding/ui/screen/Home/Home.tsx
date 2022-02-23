import { Button } from '@design-system/components/Button';
import { Center } from '@design-system/components/Center';
import { Screen } from '@design-system/components/Screen';
import { Paragraph } from '@design-system/components/Typography';
import { Colors } from '@design-system/tokens/colors';
import { FontFamilies } from '@design-system/tokens/fonts';
import { OnboardingRoutes } from '@domain/onboarding/routes';
import React from 'react';
import { useHistory } from 'react-router-native';
import styled from 'styled-components/native';

const TitleWrapper = styled.View`
  margin-bottom: 32px;
`;

const Title = styled.Text`
  color: ${Colors.SECONDARY};
  font-size: 70px;
  font-family: ${FontFamilies.BALOO};
  margin-bottom: -20px;
`;

export function Home() {
  const { push } = useHistory();
  const handleLogin = () => {
    push(OnboardingRoutes.NEW_HABIT);
  };

  return (
    <Screen>
      <Center>
        <TitleWrapper>
          <Title>HabPet</Title>
          <Paragraph>Grow your habits with a pet</Paragraph>
        </TitleWrapper>

        <Button width={214} onPress={handleLogin}>
          Get started
        </Button>
      </Center>
    </Screen>
  );
}

import React from 'react';
import { Button } from '@design-system/components/Button';
import { Screen } from '@design-system/components/Screen';
import { Center } from '@design-system/components/Center';

export function Home() {
  const handleLogin = () => {
    alert('You have successfully logged in!');
  };

  return (
    <Screen>
      <Center>
        <Button width={174} onPress={handleLogin}>
          Login with Google
        </Button>
      </Center>
    </Screen>
  );
}

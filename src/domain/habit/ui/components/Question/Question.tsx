import { Paragraph, Title } from '@design-system/components/Typography';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Tabulation = styled.View`
  padding-left: 24px;
`;

const Subtitle = styled(Paragraph)`
  margin-bottom: 18px;
`;

export function Question(props: Props) {
  return (
    <>
      <Title>{props.title}</Title>
      <Tabulation>
        <Subtitle>{props.subtitle}</Subtitle>
        {props.children}
      </Tabulation>
    </>
  );
}

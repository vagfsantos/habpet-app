import { Center } from '@design-system/components/Center';
import { Screen } from '@design-system/components/Screen';
import { Paragraph, Title } from '@design-system/components/Typography';
import { Question } from '@domain/habit/ui/components/Question';
import React from 'react';

export function HabitName() {
  return (
    <>
      <Question
        title="New Habit"
        subtitle="Let's create a new habit. Describe the activity do you want to do."
      >
        <Paragraph>Child</Paragraph>
      </Question>
    </>
  );
}

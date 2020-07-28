import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../theme/colors';
import { P, H1 } from '../../../components/Typography';
import NewHabitStacks from '../enums/NewHabitStacks';
import { ButtonSecondary } from '../../../components/Button';
import CreateHabitContainer from '../components/CreateHabitContainer';
import InputText from '../../../components/InputText';
import NewHabitSelectors from '../../../store/selectors/new-habit';
import NewHabitStore from '../../../store/slices/new-habit';

const InnerWrapper = styled.View`
  padding-left: 28px;
`;

const ButtonWrapper = styled.View`
  width: 115px;
`;

const PetCircle = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${Colors.GREY};
  border: 4px solid ${Colors.SECONDARY};
  margin-bottom: 24px;
`;

const InputWrapper = styled.View`
  margin: 24px 0;
`;

const HabitSchedule: React.FC = () => {
  const dispatch = useDispatch();
  const timesPerWeek = useSelector(NewHabitSelectors.getTimesPerWeek);
  const habitName = useSelector(NewHabitSelectors.getHabitName);
  const navigation = useNavigation();
  const [value, setValue] = useState<string>(timesPerWeek);

  const handleSubmit = () => {
    dispatch(NewHabitStore.actions.updateNewHabit({ timesPerWeek: value }));
    navigation.navigate(NewHabitStacks.HABIT_CREATED);
  };

  return (
    <CreateHabitContainer>
      <PetCircle />
      <H1 color={Colors.SECONDARY}>Schedule</H1>
      <InnerWrapper>
        <P color={Colors.WHITE}>
          How many times a week you are going to spend doing the
          {' '}
          <P bold>{habitName}</P>
          {' '}
          habit?
        </P>
        <InputWrapper>
          <InputText
            keyboardType="numeric"
            placeholder="E.g 3 times a week"
            onChangeText={(text) => setValue(text)}
            value={value}
            maxLength={1}
          />
        </InputWrapper>
        <ButtonWrapper>
          <ButtonSecondary onPress={handleSubmit}>Next</ButtonSecondary>
        </ButtonWrapper>
      </InnerWrapper>
    </CreateHabitContainer>
  );
};

export default HabitSchedule;

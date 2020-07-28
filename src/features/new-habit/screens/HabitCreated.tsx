import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { useHistory } from 'react-router-native';
import Colors from '../../../theme/colors';
import { P, H1 } from '../../../components/Typography';
import Routes from '../../../enums/routes';
import { ButtonSecondary } from '../../../components/Button';
import CreateHabitContainer from '../components/CreateHabitContainer';
import NewHabitSelectors from '../../../store/selectors/new-habit';
import HabitsStore from '../../../store/slices/habits';
import NewHabitStore from '../../../store/slices/new-habit';

const InnerWrapper = styled.View`
  padding-left: 28px;
`;

const ButtonWrapper = styled.View`
  width: 115px;
  margin-top: 24px;
`;

const PetCircle = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${Colors.GREY};
  border: 4px solid ${Colors.SECONDARY};
  margin-bottom: 24px;
`;

const HabitCreated: React.FC = () => {
  const dispatch = useDispatch();
  const newHabit = useSelector(NewHabitSelectors.getNewHabit);
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(HabitsStore.actions.createHabit(newHabit));
    dispatch(NewHabitStore.actions.newHabitCreated());
    history.push(Routes.HABITS);
  };

  return (
    <CreateHabitContainer>
      <PetCircle />
      <H1 color={Colors.SECONDARY}>All set!</H1>
      <InnerWrapper>
        <P color={Colors.WHITE}>
          Meet your new friend Petname. It likes when you do the
          {' '}
          <P bold>{newHabit.habitName}</P>
          {' '}
          so make sure to do it
          <P bold>{newHabit.timesPerWeek}</P>
          {' '}
          time(s) a week to keep your buddy healthy and happy
        </P>
        <ButtonWrapper>
          <ButtonSecondary onPress={handleSubmit}>Done</ButtonSecondary>
        </ButtonWrapper>
      </InnerWrapper>
    </CreateHabitContainer>
  );
};

export default HabitCreated;

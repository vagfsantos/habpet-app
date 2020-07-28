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

const InputWrapper = styled.View`
  margin: 24px 0;
`;

const ButtonWrapper = styled.View`
  width: 115px;
`;

const NewHabit: React.FC = () => {
  const dispatch = useDispatch();
  const habitName = useSelector(NewHabitSelectors.getHabitName);
  const navigation = useNavigation();
  const [value, setValue] = useState(habitName);

  const handleSubmit = () => {
    dispatch(NewHabitStore.actions.updateNewHabit({ habitName: value }));
    navigation.navigate(NewHabitStacks.PET_PICKING);
  };

  return (
    <CreateHabitContainer>
      <H1 color={Colors.SECONDARY}>New Habit</H1>
      <InnerWrapper>
        <P color={Colors.WHITE}>
          Let’s create a new habit.
        </P>
        <P color={Colors.WHITE}>
          Describe the activity do you want to do.
        </P>
        <InputWrapper>
          <InputText
            placeholder="E.g Read a book"
            onChangeText={(text) => setValue(text)}
            value={value}
          />
        </InputWrapper>
        <ButtonWrapper>
          <ButtonSecondary onPress={handleSubmit}>Next</ButtonSecondary>
        </ButtonWrapper>
      </InnerWrapper>
    </CreateHabitContainer>
  );
};

export default NewHabit;

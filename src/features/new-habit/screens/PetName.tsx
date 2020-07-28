import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  border: 4px solid ${Colors.SECONDARY}
  margin-bottom: 24px;
`;

const InputWrapper = styled.View`
  margin: 24px 0;
`;

const PetName: React.FC = () => {
  const dispatch = useDispatch();
  const petName = useSelector(NewHabitSelectors.getPetName);
  const navigation = useNavigation();
  const [value, setValue] = useState<string>(petName);

  const handleSubmit = () => {
    dispatch(NewHabitStore.actions.updateNewHabit({ petName: value }));
    navigation.navigate(NewHabitStacks.HABIT_SCHEDULE);
  };

  return (
    <CreateHabitContainer>
      <PetCircle />
      <H1 color={Colors.SECONDARY}>Name it</H1>
      <InnerWrapper>
        <P color={Colors.WHITE}>
          Your pet needs a name, how would you like to call it?
        </P>
        <InputWrapper>
          <InputText
            placeholder="E.g Snoop"
            onChangeText={(text) => setValue(text)}
            value={petName}
          />
        </InputWrapper>
        <ButtonWrapper>
          <ButtonSecondary onPress={handleSubmit}>Next</ButtonSecondary>
        </ButtonWrapper>
      </InnerWrapper>
    </CreateHabitContainer>
  );
};

export default PetName;

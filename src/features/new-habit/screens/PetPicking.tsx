import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../theme/colors';
import { P, H1 } from '../../../components/Typography';
import NewHabitStacks from '../enums/NewHabitStacks';
import { ButtonSecondary } from '../../../components/Button';
import CreateHabitContainer from '../components/CreateHabitContainer';
import NewHabitSelectors from '../../../store/selectors/new-habit';
import NewHabitStore from '../../../store/slices/new-habit';

const InnerWrapper = styled.View`
  padding-left: 28px;
`;

const ButtonWrapper = styled.View`
  width: 115px;
`;

const PetCircle = styled.TouchableOpacity<{ isActive: boolean }>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${Colors.GREY};
  margin-right: 5px;
  ${(props) => props.isActive && `border: 4px solid ${Colors.SECONDARY}`}
`;

const PetList = styled.View`
  flex-direction: row;
  margin: 24px 0;
`;

const pets = ['dog', 'cat'];

const PetPicking: React.FC = () => {
  const dispatch = useDispatch();
  const pet = useSelector(NewHabitSelectors.getPet);
  const habitName = useSelector(NewHabitSelectors.getHabitName);
  const navigation = useNavigation();
  const [value, setValue] = useState<string>(pet);

  const handleSubmit = () => {
    dispatch(NewHabitStore.actions.updateNewHabit({ pet: value }));
    navigation.navigate(NewHabitStacks.PET_NAME);
  };

  return (
    <CreateHabitContainer>
      <H1 color={Colors.SECONDARY}>Pet Picking</H1>
      <InnerWrapper>
        <P color={Colors.WHITE}>
          Now, what do you think to raise your new habit
          {' '}
          <P bold>{habitName}</P>
          {' '}
          like a pet?
        </P>
        <PetList>
          {pets.map((p) => <PetCircle onPress={() => setValue(p)} isActive={p === value} />)}
        </PetList>
        <ButtonWrapper>
          <ButtonSecondary onPress={handleSubmit}>Next</ButtonSecondary>
        </ButtonWrapper>
      </InnerWrapper>
    </CreateHabitContainer>
  );
};

export default PetPicking;

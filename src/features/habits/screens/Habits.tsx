import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useHistory } from 'react-router-native';
import Colors from '../../../theme/colors';
import { H1, P } from '../../../components/Typography';
import HabitsSelectors from '../../../store/selectors/habits';
import { ButtonSecondary } from '../../../components/Button';
import Routes from '../../../enums/routes';

const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${Colors.PRIMARY};
`;

const Container = styled.View`
  flex: 1;
  padding: 24px 36px;
`;

const PetCircle = styled.View<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  background-color: ${Colors.GREY};
  border: 4px solid ${Colors.SECONDARY};
  margin-bottom: 8px;
`;

const HabitDetailsWrapper = styled.View`
  margin: 0px 0px 16px;
`;

const ButtonWrapper = styled.View`
  width: 172px;
`;

const Habits: React.FC = () => {
  const history = useHistory();
  const habits = useSelector(HabitsSelectors.getHabits);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const petCircleSize = screenWidth * 0.8;
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <BackgroundContainer>
      <Carousel
        data={habits}
        itemWidth={screenWidth}
        sliderWidth={screenWidth}
        layoutCardOffset={40}
        onSnapToItem={(index) => setSlideIndex(index)}
        renderItem={({ item: habit }) => (
          <Container key={habit.id}>
            <PetCircle size={petCircleSize} />
            <HabitDetailsWrapper>
              <H1 color={Colors.SECONDARY}>{habit.petName}</H1>
              <P color={Colors.WHITE} bold>{habit.habitName}</P>
              <P color={Colors.WHITE}>
                {habit.timesPerWeek}
                {' '}
                times a week
              </P>
            </HabitDetailsWrapper>
            <ButtonWrapper>
              <ButtonSecondary
                onPress={() => { history.push(Routes.LOGIN); }}
              >
                Check today
              </ButtonSecondary>
            </ButtonWrapper>
          </Container>
        )}
      />

      <Pagination
        dotsLength={habits.length}
        activeDotIndex={slideIndex}
        containerStyle={{
          justifyContent: 'flex-end',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: -10,
          backgroundColor: Colors.PRIMARY_DARK,
        }}
        inactiveDotStyle={{
          backgroundColor: Colors.WHITE,
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.8}
      />
    </BackgroundContainer>

  );
};

export default Habits;

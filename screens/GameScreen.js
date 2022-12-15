import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NumberContiner from '../components/game/NumberContainer';

import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guest</Title>
      <NumberContiner>{currentGuess}</NumberContiner>
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/*<View>LOG ROUNDS</View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

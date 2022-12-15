import {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import NumberContiner from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuesshandler(diretion) {
    if (
      (diretion === 'lower' && currentGuess < userNumber) ||
      (diretion === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that is wrong...', [
        {text: 'Sorry', style: 'cancel'},
      ]);
      return;
    }
    if (diretion === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guest</Title>
      <NumberContiner>{currentGuess}</NumberContiner>
      <View>
        <Text>Higher or Lower</Text>
        <View style={styles.buttons}>
          <PrimaryButton onPress={nextGuesshandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuesshandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
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
  buttons: {},
});

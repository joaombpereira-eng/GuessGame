import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Title from '../components/Title';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guest</Title>
      {/* GUESS */}
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

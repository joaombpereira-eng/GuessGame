import {StyleSheet, View} from 'react-native';

import Colors from '../../constants/colors';

export default function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //Shadow - Android Only
    shadowColor: 'black', // Shadow - iOS Only
    shadowOffset: {width: 0, height: 2}, // Shadow - iOS Only
    shadowRadius: 6, // Shadow - iOS Only
    shadowOpacity: 0.25, // Shadow - iOS Only
  },
});

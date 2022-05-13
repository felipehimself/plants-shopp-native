import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: GlobalStyles.paddingHorizontal,
    backgroundColor: GlobalStyles.colors.colorWhiteLight,
  },
});

export default Favorites;

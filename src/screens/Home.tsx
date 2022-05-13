import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';
import Input from '../components/ui/Input';
const Home = () => {
  return (
    <View style={styles.container}>
      <Input />
      <Text>aa</Text>
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

export default Home;

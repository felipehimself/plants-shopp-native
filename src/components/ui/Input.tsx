import { View, TextInput, StyleSheet } from 'react-native';
import GlobalStyles from '../../constants/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';

const Input = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name='search'
        size={24}
        color={GlobalStyles.colors.colorGrayMed}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        selectionColor={GlobalStyles.colors.primaryTintColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.colorWhite,
    borderRadius: GlobalStyles.borderRadius.borderRadiusMed,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#fafafa',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 0.5,
    marginVertical: 10,
  },

  icon: {
    paddingLeft: 10,
  },

  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
  },
});

export default Input;

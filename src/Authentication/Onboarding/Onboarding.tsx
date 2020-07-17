import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// interface componentNameProps {}

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'cyan',
      flex: 1
  }
});

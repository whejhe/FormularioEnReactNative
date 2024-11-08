import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Formulario from './screens/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Formulario />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
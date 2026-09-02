import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import QuizScreen from './screens/QuizScreen';

export default function App() {
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<QuizScreen />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#FAFAFA' },
});

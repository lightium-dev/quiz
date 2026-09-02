import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultCard({ score, total, onRestart }) {
return (
<View style={styles.container}>
<Text style={styles.score}>{score}/{total}</Text>
<Text style={styles.message}>Great job! Keep practicing</Text>
<TouchableOpacity style={styles.button} onPress={onRestart}>
<Text style={styles.buttonText}>Restart</Text>
</TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
score: { fontSize: 48, fontWeight: 'bold', marginBottom: 12 },
message: { fontSize: 18, marginBottom: 24, color: '#666' },
button: { paddingVertical: 14, paddingHorizontal: 32, borderRadius: 10, backgroundColor: '#5B4CFF' },
buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});

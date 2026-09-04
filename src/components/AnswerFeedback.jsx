import { View, Text, StyleSheet } from 'react-native';

export default function AnswerFeedback({ isCorrect }) {
if (isCorrect === null) return null;

return (
<View style={[styles.banner, { backgroundColor: isCorrect ? '#3D8B5F' : '#D9534F' }]}>
<Text style={styles.text}>{isCorrect ? 'Correct!' : 'Incorrect'}</Text>
</View>
);
}

const styles = StyleSheet.create({
banner: { padding: 12, borderRadius: 8, marginTop: 8, alignItems: 'center' },
text: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
}); 


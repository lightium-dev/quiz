import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function QuestionCard({ question, onAnswer }) {
if (!question) {
return null;
}

return (
<View style={styles.card}>
<Text style={styles.questionText}>{question.text}</Text>
{question.options.map((option, index) => (
<TouchableOpacity key={index} style={styles.option} onPress={() => onAnswer(index)}>
<Text style={styles.optionText}>{option}</Text>
</TouchableOpacity>
))}
</View>
);
}

const styles = StyleSheet.create({
card: { marginVertical: 16 },
questionText: { fontSize: 20, fontWeight: '600', marginBottom: 16 },
option: { padding: 14, borderRadius: 16, backgroundColor: '#F0F0F0', marginBottom: 10 },
optionText: { fontSize: 16 },
});
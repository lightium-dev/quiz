import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CATEGORIES = [
{ id: 'general', label: 'General Knowledge' },
{ id: 'logic', label: 'Logic' },
{ id: 'entertainment', label: 'Entertainment' },
];

export default function CategorySelector({ onSelect }) {
return (
<View style={styles.container}>
<Text style={styles.title}>Quiz Eclair</Text>
{CATEGORIES.map((cat) => (
<TouchableOpacity key={cat.id} style={styles.card} onPress={() => onSelect(cat.id)}>
<Text style={styles.cardText}>{cat.label}</Text>
</TouchableOpacity>
))}
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center' },
title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
card: { padding: 20, borderRadius: 12, backgroundColor: '#EFEBFF', marginBottom: 16 },
cardText: { fontSize: 18, fontWeight: '600', textAlign: 'center' },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ current, total }) {
const safeTotal = total > 0 ? total : 1;
const percent = Math.min((current / safeTotal) * 100, 100);

return (
<View style={styles.container}>
<Text style={styles.label}>Question {current}/{total || '-'}</Text>
<View style={styles.track}>
<View style={[styles.fill, { width: `${percent}%` }]} />
</View>
</View>
);
}
const styles = StyleSheet.create({
container: { marginBottom: 8 },
label: { fontSize: 14, marginBottom: 6, color: '#666' },
track: { height: 8, borderRadius: 4, backgroundColor: '#E0E0E0', overflow: 'hidden' },
fill: { height: 8, backgroundColor: '#5B4CFF' },
});

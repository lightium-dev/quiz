import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import CategorySelector from '../components/CategorySelector';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import AnswerFeedback from '../components/AnswerFeedback';
import ResultCard from '../components/ResultCard';
import { fetchQuestions } from '../services/apiService';

export default function QuizScreen() {
const [selectedCategory, setSelectedCategory] = useState(null);
const [questions, setQuestions] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [score, setScore] = useState(0);
const [isLoading, setIsLoading] = useState(false);
const [isFinished, setIsFinished] = useState(false);
const [errorMsg, setErrorMsg] = useState(null);
const [feedback, setFeedback] = useState(null);

const handleSelectCategory = async (category) => {
setSelectedCategory(category);
setIsLoading(true);
setErrorMsg(null);
try {
const data = await fetchQuestions(category);
setQuestions(data);
} catch (err) {
console.log('Fetch error:', err.message);
setErrorMsg('Could not load questions: ' + err.message);
} finally {
setIsLoading(false);
}
};

const handleAnswer = (optionIndex) => {
if (feedback !== null) return;

const currentQuestion = questions[currentIndex];
const isCorrect = optionIndex === currentQuestion.correctIndex;

setFeedback(isCorrect);
if (isCorrect) {
setScore((prev) => prev + 1);
}

setTimeout(() => {
setFeedback(null);
if (currentIndex + 1 < questions.length) {
setCurrentIndex((prev) => prev + 1);
} else {
setIsFinished(true);
}
}, 1000);
};

const handleRestart = () => {
setSelectedCategory(null);
setQuestions([]);
setCurrentIndex(0);
setScore(0);
setIsFinished(false);
setFeedback(null);
setErrorMsg(null);
};

return (
<View style={styles.container}>
{!selectedCategory && (
<CategorySelector onSelect={handleSelectCategory} />
)}

{errorMsg && (
<Text style={styles.error}>{errorMsg}</Text>
)}

{selectedCategory && isLoading && (
<ActivityIndicator size="large" color="#5B4CFF" />
)}

{selectedCategory && !isLoading && !isFinished && questions.length > 0 && (
<>
<ProgressBar current={currentIndex + 1} total={questions.length} />
<QuestionCard question={questions[currentIndex]} onAnswer={handleAnswer} />
<AnswerFeedback isCorrect={feedback} />
</>
)}

{isFinished && (
<ResultCard score={score} total={questions.length} onRestart={handleRestart} />
)}
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, padding: 16, justifyContent: 'center' },
error: { color: 'red', textAlign: 'center', marginTop: 12, paddingHorizontal: 20 },
});
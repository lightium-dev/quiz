const BASE_URL = 'http://192.168.1.155:3000';

export async function fetchQuestions(category) {
const response = await fetch(`${BASE_URL}/questions?category=${category}`);
if (!response.ok) {
throw new Error('Failed to fetch questions');
}
return response.json();
}

export async function submitScore(score) {
const response = await fetch(`${BASE_URL}/score`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ score }),
});
return response.json();
}

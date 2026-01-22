// 1. Проверка что JS загружен
console.log('✅ JS подключен! ArtFlow Studio работает.');
// 2. Кнопка "Сгенерировать идею"
document.getElementById('generateIdeaBtn').onclick = function() {
    const idea = 'Нарисуй пейзаж акварелью'; // Одна фиксированная идея
    document.getElementById('generatedIdea').textContent = idea;
};

// 3. Кнопка "Использовать"
document.getElementById('useIdeaBtn').onclick = function() {
    const idea = document.getElementById('generatedIdea').textContent;
    document.getElementById('ideaInput').value = idea;
};
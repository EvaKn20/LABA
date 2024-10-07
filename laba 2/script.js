// 1. Создаем объект personalMovieDB с заданными свойствами
const personalMovieDB = {
    privat: false, // Можно изменить на true, чтобы скрыть таблицу
    movies: {
        "Inception": 9,
        "The Matrix": 8,
        "Interstellar": 10
    }
};

// 2. Функция для вывода объекта movies в виде таблицы на страницу
function displayMoviesTable(movies) {
    // Создаем элементы таблицы
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    
    // Добавляем заголовки таблицы
    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'Название фильма';
    const ratingHeader = document.createElement('th');
    ratingHeader.textContent = 'Оценка';
    
    headerRow.appendChild(titleHeader);
    headerRow.appendChild(ratingHeader);
    table.appendChild(headerRow);

    // Добавляем строки с данными о фильмах
    for (const [title, rating] of Object.entries(movies)) {
        const row = document.createElement('tr');
        
        const titleCell = document.createElement('td');
        titleCell.textContent = title;
        
        const ratingCell = document.createElement('td');
        ratingCell.textContent = rating;
        
        row.appendChild(titleCell);
        row.appendChild(ratingCell);
        table.appendChild(row);
    }

    // Добавляем таблицу на страницу
    document.body.appendChild(table);
}

// 3. Функция для проверки свойства privat и вывода таблицы, если приватность отключена
function showMovies() {
    if (!personalMovieDB.privat) {
        displayMoviesTable(personalMovieDB.movies);
    }
}

// Вызов функции для отображения таблицы
showMovies();

// app.js

// Функція для зміни мови
function changeLanguage() {
    var languageSelector = document.getElementById("language");
    var selectedLanguage = languageSelector.value;

    // Здійснюємо переключення мови
    switch (selectedLanguage) {
        case "uk":
            // Змінюємо текстовий контент для української мови
            document.body.innerHTML = "<h1>Головна</h1><p>Це головна сторінка вашого сайту.</p>";
            break;
        case "en":
            // Змінюємо текстовий контент для англійської мови
            document.body.innerHTML = "<h1>Home</h1><p>This is the home page of your website.</p>";
            break;
        case "gag":
            // Змінюємо текстовий контент для гагаузької мови
            document.body.innerHTML = "<h1>Baș</h1><p>Bu senin saytının baș sahypasy.</p>";
            break;
        default:
            console.error("Невідома мова");
    }
}

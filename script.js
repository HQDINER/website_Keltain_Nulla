
    function changeLanguage() {
        var selectedLanguage = document.getElementById("language").value;

        document.documentElement.lang = selectedLanguage;

        // Змінюємо текст на сторінці відповідно до обраної мови
        if (selectedLanguage === "uk") {
            document.title = "Головна";
            document.querySelector("h1").innerText = "Головна";
            document.querySelectorAll("nav ul li a")[0].innerText = "Головна";
            document.querySelectorAll("nav ul li a")[1].innerText = "Новини";
            document.querySelectorAll("nav ul li a")[2].innerText = "Про нас";
            document.querySelector("label").innerText = "Мова:";
            document.querySelector("option[value='uk']").innerText = "Українська";
            document.querySelector("option[value='en']").innerText = "English";
            document.querySelector("option[value='gag']").innerText = "Gagauz";
        } else if (selectedLanguage === "en") {
            document.title = "Home";
            document.querySelector("h1").innerText = "Home";
            document.querySelectorAll("nav ul li a")[0].innerText = "Home";
            document.querySelectorAll("nav ul li a")[1].innerText = "News";
            document.querySelectorAll("nav ul li a")[2].innerText = "About Us";
            document.querySelector("label").innerText = "Language:";
            document.querySelector("option[value='uk']").innerText = "Ukrainian";
            document.querySelector("option[value='en']").innerText = "English";
            document.querySelector("option[value='gag']").innerText = "Gagauz";
        } else if (selectedLanguage === "gag") {
            document.title = "Baş Sahypa";
            document.querySelector("h1").innerText = "Baş Sahypa";
            document.querySelectorAll("nav ul li a")[0].innerText = "Baş Sahypa";
            document.querySelectorAll("nav ul li a")[1].innerText = "Habarlar";
            document.querySelectorAll("nav ul li a")[2].innerText = "Biz Barada";
            document.querySelector("label").innerText = "Dil:";
            document.querySelector("option[value='uk']").innerText = "Ukrayna";
            document.querySelector("option[value='en']").innerText = "Iňlisçe";
            document.querySelector("option[value='gag']").innerText = "Gagauzça";
        }
    }


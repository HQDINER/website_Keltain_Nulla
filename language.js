document.addEventListener('DOMContentLoaded', function () {
    // Перевіряємо, чи збережена мова у localStorage
    let selectedLanguage = localStorage.getItem('selectedLanguage');

    // Якщо мова вже обрана, встановлюємо її
    if (selectedLanguage) {
        document.getElementById('language').value = selectedLanguage;
        changeLanguage();
    }
});

function changeLanguage() {
    let selectedLanguage = document.getElementById('language').value;

    // Зберігаємо обрану мову у localStorage
    localStorage.setItem('selectedLanguage', selectedLanguage);

    // Викликаємо функцію, яка змінює текстовий контент сторінки відповідно до обраної мови
    updateContent(selectedLanguage);
}

function updateContent(selectedLanguage) {
    // Отримуємо всі елементи, які потрібно змінити
    let pageTitle = document.getElementById('page-title');
    let homeHeading = document.getElementById('home-heading');
    let aboutHeading = document.getElementById('about-heading');
    let homeLink = document.getElementById('home-link');
    let newsLink = document.getElementById('news-link');
    let aboutLink = document.getElementById('about-link');
    let homeContent = document.getElementById('home-content');
    let newsContent = document.getElementById('news-content');
    let aboutContent = document.getElementById('about-content');

    // Змінюємо текстовий контент згідно з обраною мовою
    if (pageTitle) {
        pageTitle.innerText = getPageTitleContent(selectedLanguage);
    }

    if (homeHeading) {
        homeHeading.innerText = getHomeHeadingContent(selectedLanguage);
    }

    if (aboutHeading) {
        aboutHeading.innerText = getAboutHeadingContent(selectedLanguage);
    }
    if (homeLink) {
        homeLink.innerText = getHomeLinkContent(selectedLanguage);
    }

    if (newsLink) {
        newsLink.innerText = getNewsLinkContent(selectedLanguage);
    }

    if (aboutLink) {
        aboutLink.innerText = getAboutLinkContent(selectedLanguage);
    }

    if (homeContent) {
        homeContent.innerText = getHomeContent(selectedLanguage);
    }

    if (newsContent) {
        newsContent.innerText = getNewsContent(selectedLanguage);
    }

    if (aboutContent) {
        aboutContent.innerText = getAboutContent(selectedLanguage);
    }
}

function getPageTitleContent(language) {
    switch (language) {
        case 'en':
            return "Home";
        case 'gag':
            return "Baş Sahypa";
        case 'pl':
            return "Główna";
        case 'bl':
            return "Галоўная";
        case 'es':
            return "Pagina de inicio";
        case 'fr':
            return "Page d'accueil";
        case 'de':
            return "Startseite";
        case 'de':
            return "Startseite";
        case 'sk':
            return "Hlavný";
        case 'cn':
            return "主页";
        default:
            return "Головна";
    }
}

function getHomeHeadingContent(language) {
    switch (language) {
        case 'en':
            return "Home";
        case 'gag':
            return "Baş Sahypa";
        case 'pl':
            return "Główna";
        case 'bl':
            return "Галоўная";
        case 'es':
            return "Pagina de inicio";
        case 'fr':
            return "Page d'accueil";
        case 'de':
            return "Startseite";
        case 'sk':
            return "Hlavný";
        case 'cn':
            return "主页";
        default:
            return "Головна";
    }
}

function getAboutHeadingContent(language) {
    switch (language) {
        case 'en':
            return "About Us";
        case 'gag':
            return "Biziñ barêda";
        case 'pl':
            return "O nas";
        case 'bl':
            return "Пра нас";
        case 'es':
            return "Sobre nosotros";
        case 'fr':
            return "À propos de nous";
        case 'de':
            return "Über uns";
        case 'sk':
            return "O nás";
        case 'cn':
            return "关于我们";
        default:
            return "Про нас";
    }
}
function getHomeLinkContent(language) {
    switch (language) {
        case 'en':
            return "Home";
        case 'gag':
            return "Baş Sahypa";
        case 'pl':
            return "Główna";
        case 'bl':
            return "Галоўная";
        case 'es':
            return "Pagina de inicio";
        case 'fr':
            return "Page d'accueil";
        case 'de':
            return "Startseite";
        case 'sk':
            return "Hlavný";
        case 'cn':
            return "主页";
        default:
            return "Головна";
    }
}

function getNewsLinkContent(language) {
    switch (language) {
        case 'en':
            return "About the game";
        case 'gag':
            return "Oyun hakkında";
        case 'pl':
            return "O grze";
        case 'bl':
            return "Пра гульню";
        case 'es':
            return "Sobre el juego";
        case 'fr':
            return "À propos du jeu";
        case 'de':
            return "Über das Spiel";
        case 'sk':
            return "O hre";
        case 'cn':
            return "关于游戏";
        default:
            return "Про гру";
    }
}

function getAboutLinkContent(language) {
    switch (language) {
        case 'en':
            return "About Us";
        case 'gag':
            return "Biz Barada";
        case 'pl':
            return "O nas";
        case 'bl':
            return "Пра нас";
        case 'es':
            return "Sobre nosotros";
        case 'fr':
            return "À propos de nous";
        case 'de':
            return "Über uns";
        case 'sk':
            return "O nás";
        case 'cn':
            return "关于我们";
        default:
            return "Про нас";
    }
}

function getHomeContent(language) {
    switch (language) {
        case 'en':
            return "\"Keltainen Nola\" is a fantasy board game with elements of DND,\
where players start as ordinary youths, fight against opponents,\
acquire treasures, and develop their characters, becoming mages,\
thieves, warriors, or clerics. You can try the game for free.";
        case 'gag':
            return "\"Keltainen Nola\" - bu bir fantastik temalı masa oyunudur ve DND\
elementleri içerir, oyuncular normal gençler olarak başlayarak\
rakiplerle mücadele eder, hazine kazanır ve karakterlerini geliştirir,\
sihirbazlar, hırsızlar, savaşçılar veya kliyeler olurlar. Oyunu ücretsiz deneyebilirsiniz.";
        case 'pl':
            return "\"Keltainen Nola\" to gra planszowa w stylu fantasy z elementami DND,\
             w której gracze, zaczynając jako zwykli młodzieńcy, walczą z przeciwnikami,\
              zdobywają skarby i rozwijają swoje postacie, stając się magami, złodziejami,\
               wojownikami lub klerykami. Możesz wypróbować grę za darmo.";
        case 'bl':
            return "\"Keltainen Nola\" - гэта настольная гульня з парадкамі DND,\
             у свеце фэнтэзі з фантастычнымі расамі,\
              дзе гульцы, пачынаючы як звычайныя хлопцы,\
               бараняцца з супернікамі, здабываюць скарбы\
                і распрацоўваюць свае персанажы, становячыся магамі,\
                 злодзеямі, ваянамі ці клірыкамі. Вы можаце спрабаваць гульню бясплатна.";
        case 'es':
            return "\"Keltainen Nola\" es un juego de mesa de temática fantástica con elementos de DND,\
             donde los jugadores, comenzando como jóvenes ordinarios, luchan contra oponentes,\
              reúnen tesoros y desarrollan sus personajes, convirtiéndose en magos, ladrones,\
               guerreros o clérigos. Puedes probar el juego gratis.";
        case 'fr':
            return "\"Keltainen Nola\" est un jeu de société sur le thème de la fantasy avec des éléments de DND,\
             où les joueurs, commençant comme de jeunes ordinaires, affrontent des adversaires,\
              rassemblent des trésors et développent leurs personnages, devenant des magiciens,\
               des voleurs, des guerriers ou des clercs. Vous pouvez essayer le jeu gratuitement.";
        case 'de':
            return "\"Keltainen Nola\" ist ein Fantasy-Brettspiel mit DND-Elementen,\
             bei dem die Spieler, die als gewöhnliche Jugendliche beginnen,\
              Gegner bekämpfen, Schätze sammeln und ihre Charaktere entwickeln,\
               indem sie zu Zauberern, Dieben, Kriegern oder Klerikern werden. Sie können das Spiel kostenlos ausprobieren.";
        case 'sk':
            return "\"Keltainen Nola\" je fantázia zameraná stolná hra s prvkami DND,\
             kde hráči, začínajúc ako obyčajní mladí, bojujú proti protivníkom,\
              zbierajú poklady a rozvíjajú svoje postavy, stávajúc sa kúzelníkmi,\
               zlodejmi, bojovníkmi alebo kňazmi. Môžete vyskúšať hru zadarmo.";
        case 'cn':
            return "\"Keltainen Nola\" 是一款奇幻主题的桌上游戏，具有 DND 元素，\
             在这款游戏中，玩家们从普通青年开始，与对手战斗，收集宝藏，\
              并发展他们的角色，成为法师，小偷，战士或神职人员。你可以免费尝试游戏。";
        default:
            return "\"Keltainen Nola\" - це настільна гра у стилі фентезі з елементами DND,\
             де гравці, починають як звичайні юнаки, б'ються із суперниками,\
              здобувають скарби та розвивають своїх персонажів, стаючи магами,\
               ворами, воїнами чи клириками. Ви можете спробувати гру безкоштовно.";
    }
}



function getNewsContent(language) {
    switch (language) {
        case 'en':
            return "\"Keltainen Nola\" is a turn-based tabletop card game with DND\
elements in a medieval fantasy world with fantastic races. Fight monsters,\
acquire treasures, and emerge victorious! This game falls into the fantasy genre,\
where you'll encounter fantastical denizens of this world, and you need to be vigilant at every step,\
lest even good acquaintances cast covetous eyes upon your treasures.\
You haven't seen so many interesting cards yet. And if you're ready for all this - onwards to adventure!\
The party begins with you being an ordinary lad, without professions. Don't fret, for\
even from the first turn, you might be able to obtain a valuable\
item, become a wizard, a thief, a warrior, or a cleric.";
        case 'gag':
            return "\"Keltainen Nola\" - bu ölgen şahmatlaştıru oyunu, DND\
elementterimen jobalanğan ortanıñ ortasında jasalğan ortalıq qartar oyunı, demek,\
fantastïkalıq rasalar-men, monsıtrlar-men qwıstew, sırtqı qezenqerde qarapayım jatalardan,\
joldas jasaw jañe jeñu! Bul fentezi janrındağı oyun, jattığw jatpaytın júrısınde\
menmeni jatasaw qatarınan atılımış monsıtrlar-men qesdesedi,\
jattığw adamdardy jatasaw, jañe közge túsqanında, köptegen\
turaktarında twra bólwı twııs. Sızdıñ közge túsıtıñ qızıwşy qartalarıdı\
körgen bolma. Äğer sız barlığınandan mätinğe dayın bol";
        case 'pl':
            return "\"Keltainen Nola\" to gra planszowa krok po kroku z elementami DND\
w świecie średniowiecznej fantastyki z fantastycznymi rasami. Walcz z potworami, zdobywaj skarby i zwyciężaj!\
Gra ta należy do gatunku fantasy, gdzie spotkasz złych mieszkańców tego świata, śmieszne stworzenia\
i na każdym kroku musisz być uważny, bo nawet dobrzy znajomi mogą pożądać twoich skarbów.\
Nie widziałeś jeszcze wielu interesujących kart. Jeśli jesteś gotów na wszystko to do przodu,\
ku przygodzie! Partia zaczyna się od tego, że jesteś zwykłym młodzieńcem bez zawodu.\
Nie smuć się, bo nawet już na pierwszym ruchu możesz zdobyć cenny przedmiot,\
stać się magiem, złodziejem, wojownikiem lub klerykiem.";
        case 'bl':
            return "\"Keltainen Nola\" - гэта настольная гульня з парадкамі DND\
ў сярэдневякоўным фэнтэзі свеце з фантастычнымі расамі. Бароніце з манстрамі,\
збірайце скарбы і перамагайце! Гэтая гульня належыць да жанру фэнтэзі,\
дзе вы сутыкаецеся зь злымі жыхарамі гэтага свету і смешнымі манстрамі, і вам трэба быць уважлівымі\
на кожным кроце, інакш дажы добрыя сябры могуць захацець вашых скарбоў.\
Вы яшчэ не бачылі шмат цікавых карт. І калі вы гатовыя да ўсё гэта - наперад, на пригоду!\
Гульня пачынаецца з таго, што вы звычайны хлопец без прафесіі. Не хмурцецеся, бо нават\
з першага ходу вы можаце атрымаць каштоўны прадмет, можна стаць чараўнікам, цім, ваякам альбо клярыкам.";
        case 'es':
            return "\"Keltainen Nola\" es un juego de mesa por turnos con elementos de DND\
en un mundo de fantasía medieval con razas fantásticas. ¡Lucha contra monstruos, recoge tesoros y triunfa! Este\
juego pertenece al género de fantasía, donde te encontrarás con habitantes malvados de este mundo y monstruos\
divertidos, y debes estar atento en cada paso, porque incluso buenos amigos pueden suspirar por tus tesoros.\
Todavía no has visto muchas cartas interesantes. Y si estás listo para todo esto, adelante hacia la aventura!\
La partida comienza con el hecho de que eres un joven común, sin profesión. No te pongas triste, porque incluso\
desde el primer turno puedes obtener un objeto valioso, puedes convertirte en un mago, ladrón, guerrero o clérigo.";
        case 'fr':
            return "\"Keltainen Nola\" est un jeu de société au tour par tour avec des éléments de DND\
dans un monde de fantasy médiéval avec des races fantastiques. Combattez les monstres,\
collectez des trésors et triomphez ! Ce jeu appartient au genre fantastique, où vous rencontrerez les habitants\
maléfiques de ce monde et des monstres amusants, et vous devez être attentif à chaque étape, car même de bons\
amis pourraient convoiter vos trésors. Vous n'avez pas encore vu beaucoup de cartes intéressantes.\
Et si vous êtes prêt pour tout cela, allez-y pour l'aventure ! La partie commence par le fait que vous êtes un jeune\
homme ordinaire, sans profession. Ne soyez pas triste, car même dès le premier coup, vous pouvez obtenir un objet\
précieux, devenir un magicien, un vole er, un guerrier ou un prêtre.";
        case 'de':
            return "\"Keltainen Nola\" ist ein rundenbasiertes Brettspiel mit DND-Elementen in einer mittelalterlichen Fantasy-Welt mit\
fantastischen Rassen. Kämpfe gegen Monster, sammle Schätze und triumphiere! Dieses Spiel gehört zum\
Fantasy-Genre, wo du auf böse Bewohner dieser Welt und lustige Monster triffst und bei jedem Schritt aufmerksam\
sein musst, denn sogar gute Freunde könnten es auf deine Schätze abgesehen haben. Du hast noch nicht viele\
interessante Karten gesehen. Und wenn du bereit für all das bist, auf zur Abenteuer! Das Spiel beginnt damit, dass du\
ein gewöhnlicher junger Mann bist, ohne Beruf. Sei nicht traurig, denn schon im ersten Zug kannst du einen\
wertvollen Gegenstand bekommen, du kannst ein Magier, Dieb, Krieger oder Kleriker werden.";
        case 'sk':
            return "\"Keltainen Nola\" je hra na doske založená na kolách s prvky DND\
v stredovekém fantasy svete s fantastickými rasami. Bojujte proti\
príšerám, zbierajte poklady a víťazte! Táto hra patrí do žánru fantasy,\
kde sa stretnete s nepríjemnými obyvateľmi tohto sveta a zábavnými príšerami,\
a musíte byť ostražití na každom kroku, pretože aj vaši dobrí priatelia by mohli byť zvedaví na vaše poklady.\
Ešte ste nevideli veľa zaujímavých kariet. A ak ste na to všetko pripravení, choďte na dobrodružstvo!\
Hra začína tým, že ste obyčajný mladík, bez povolania. Nezúfajte, pretože už v prvom kole môžete získať cenný\
predmet, môžete sa stať kúzelníkom, zlodejom, bojovníkom alebo kňazom.";
        case 'cn':
            return "\"Keltainen Nola\" 是一款基於回合的桌上遊戲，具有 DND 元素，在一\
個中世紀幻想世界中，有著奇幻種族。與怪物戰鬥，收集寶藏並取得勝\
利！這款遊戲屬於奇幻類型，在這個世界中，您會遇到不友好的居民和有\
趣的怪物，每一步都必須保持警惕，因為即使是您的好朋友也可能對您的財寶感興趣。\
您還沒看過太多有趣的卡片。如果您準備好了，就去冒險吧！遊戲從您成為一個普通年輕人開始，\
沒有職業。不要沮喪，因為即使從第一輪開始，您也可以獲得寶貴的物品，您可以成為一個魔法師、小偷、戰士或牧師。";
        default:
            return "\"Keltainen Nola\" - це покрокова настільна карткова гра з елементами DND\
у світі середньовічного фентезі з фантастичними расами, боріться з монстрами, здобувайте\
скарби і переможете! Ця гра в жанрі фентезі піти, а вже там вам\
зустрінуться фантатичні мешканці цього світу, і на кожному кроці потрібно бути уважним,\
а не то навіть добрі знайомі зазіхнуть на ваші скарби. Ви ще не бачили так багато цікавих карт.\
І якщо ви на все це готові - вперед, у пригоду! Партія починається з того, що ви звичайний юнак,\
без професій. Не засмучуйтеся, адже навіть з першого ходу ви, можливо, зможете отримати цінний предмет,\
можна стати магом, або злодієм, або воїном і кліриком.";
    }
}

function getAboutContent(language) {
    switch (language) {
        case 'en':
            return "Our roles in the project:\n\
PM - Alicia Asavalyuk\n\
Data Analyst - Edita Matviienko, Tamara Vusata\n\
QA - Ivan Nenov, Pavlo Serman, Artem Slabiy, Mykola Furman\n\
Back-end Dev - Arseniy Zaikov, Oleksiy Skrypnychenko\n\\n\
Front-End Dev - Artem Bogdanenko, Oleksiy Skrypnychenko\n\
Game Designers - Ivan Kushnirenko, Tamara Vusata\n\
Sound Designers - Mykita Bohorosh, Arthur Basyuk, Oleksandr Muravtsev\n\
Designers - Yulia Karanfilova, Maria Kravchenko, Alicia Asavalyuk, Maxim Zhosan\n\
Story - Oleksandr Muravtsev, Mykita Bohorosh, Mykola Furman, Ivan Kushnirenko\n\
\n\
Best of luck with your project! If you have any questions or need assistance, feel free to reach out.\n\
\n\
To contact us:\n\
Email - keltainen_Nola@gmail.com";
        case 'gag':
            return "Rollarımız proyektte:\n\
            PM - Alisiya Asawalyuk\n\
            Data Analyst - Edita Matvienko, Tamara Wusata\n\
            QA - Ivan Nenov, Pavlo Serman, Artem Slabiy, Mykola Furman\n\
            Back-end Dev - Arseniy Zaykov, Oleksiy Skripnichenko\n\
            Front-End Dev - Artem Bogdanenko, Oleksiy Skripnichenko\n\
            Game Designers - Ivan Kushnirenko, Tamara Wusata\n\
            Sound Designers - Nikita Bogorosh, Artur Basyuk, Oleksandr Muravtsev\n\
            Designers - Yuliya Karanfilova, Maria Kravchenko, Alisiya Asawalyuk, Maksim Zhosan\n\
            Story - Oleksandr Muravtsev, Nikita Bogorosh, Mykola Furman, Ivan Kushnirenko\n\
            Udaçı wam w proektte! Eğer sorğın bar yada kömek gereq bolsa, azatça sor.\n\
            Biz bilän ayırylyp durmağa bar.\n\nDla svazi s namı:\nEmai - keltainen_Nola@gmail.com";
        case 'pl':
            return "Nasze role w projekcie:\n\
PM - Alicia Asavalyuk\n\
Analityk danych - Edita Matviienko, Tamara Vusata\n\
QA - Ivan Nenov, Pavlo Serman, Artem Slabiy, Mykola Furman\n\
Back-end Dev - Arseniy Zaikov, Oleksiy Skrypnychenko\n\
Front-End Dev - Artem Bogdanenko, Oleksiy Skrypnychenko\n\
Projektanci gier - Ivan Kushnirenko, Tamara Vusata\n\
Projektanci dźwięku - Mykita Bohorosh, Arthur Basyuk, Oleksandr Muravtsev\n\
Projektanci - Yulia Karanfilova, Maria Kravchenko, Alicia Asavalyuk, Maxim Zhosan\n\
Scenarzyści - Oleksandr Muravtsev, Mykita Bohorosh, Mykola Furman, Ivan Kushnirenko\n\
\n\
Powodzenia w projekcie! Jeśli masz jakiekolwiek pytania lub potrzebujesz pomocy, śmiało się z nami skontaktuj.\n\
\n\
Kontakt z nami:\n\
E-mail - keltainen_Nola@gmail.com";
        case 'bl':
            return "Нашы ролі ў праекце:\n\
PM - Аліса Асавалюк\n\
Data-Analyst - Эдзіта Мацвіенка, Вусатая Тамара\n\
QA - Іван Ненаў, Паўло Серман, Слабы Арцём, Мікалай Фурман\n\
Back-end Dev - Зайкоў Арсеній, Аляксей Скрыпнічэнка\n\
Front-End Dev - Арцём Багданенка, Аляксей Скрыпнічэнка\n\
Game-Designers - Кушнірэнка Іван, Вусатая Тамара\n\
Sound Designers - Мікіта Багарош, Артур Басюк, Аляксандр Мураўцаў\n\
Designers - Юлія Каранфілава, Марыя Краўчанка, Алісія Асавалюк, Жосан Максім\n\
Story - Аляксандр Мураўцаў, Мікіта Багарош, Мікалай Фурман, Іван Кушнірэнка\n\
\n\
Звяжыцеся з намі:\n\
Электронная пошта - keltainen_Nola@gmail.com";
        case 'es':
            return "Nuestros roles en el proyecto:\n\
PM - Alicia Asavalyuk\n\
Analista de datos - Edita Matviienko, Tamara Vusata\n\
QA - Ivan Nenov, Pavlo Serman, Artem Slabiy, Mykola Furman\n\
Back-end Dev - Arseniy Zaikov, Oleksiy Skrypnychenko\n\\n\
Front-End Dev - Artem Bogdanenko, Oleksiy Skrypnychenko\n\
Diseñadores de juegos - Ivan Kushnirenko, Tamara Vusata\n\
Diseñadores de sonido - Mykita Bohorosh, Arthur Basyuk, Oleksandr Muravtsev\n\
Diseñadores - Yulia Karanfilova, Maria Kravchenko, Alicia Asavalyuk, Maxim Zhosan\n\
Historia - Oleksandr Muravtsev, Mykita Bohorosh, Mykola Furman, Ivan Kushnirenko\n\
\n\
Mucha suerte con su proyecto! Si tiene alguna pregunta o necesita ayuda, no dude en comunicarse.\n\
\n\
Para contactarnos:\n\
Correo electrónico - keltainen_Nola@gmail.com";
        case 'fr':
            return "Nos rôles dans le projet :\n\
PM - Alicia Asavalyuk\n\
Analyste de données - Edita Matviienko, Tamara Vusata\n\
QA - Ivan Nenov, Pavlo Serman, Artem Slabiy, Mykola Furman\n\
Back-end Dev - Arseniy Zaikov, Oleksiy Skrypnychenko\n\
Front-End Dev - Artem Bogdanenko, Oleksiy Skrypnychenko\n\
Game Designers - Ivan Kushnirenko, Tamara Vusata\n\
Sound Designers - Mykita Bohorosh, Arthur Basyuk, Oleksandr Muravtsev\n\
Designers - Yulia Karanfilova, Maria Kravchenko, Alicia Asavalyuk, Maxim Zhosan\n\
Histoire - Oleksandr Muravtsev, Mykita Bohorosh, Mykola Furman, Ivan Kushnirenko\n\
\n\
Bonne chance pour votre projet! Si vous avez des questions ou avez besoin d'aide, n'hésitez pas à nous contacter.\n\
\n\
Pour nous contacter :\n\
E-mail - keltainen_Nola@gmail.com";
        case 'de':
            return "Unsere Rollen im Projekt:\n\
PM - Alicia Asavalyuk\n\
Datenanalyst - Edita Matviienko, Tamara Vusata\n\
QA - Ivan Nenov, Pavlo Serman, Artem Slabiy, Mykola Furman\n\
Backend-Entwickler - Arseniy Zaikov, Oleksiy Skrypnychenko\n\
Frontend-Entwickler - Artem Bogdanenko, Oleksiy Skrypnychenko\n\
Spieldesigner - Ivan Kushnirenko, Tamara Vusata\n\
Sounddesigner - Mykita Bohorosh, Arthur Basyuk, Oleksandr Muravtsev\n\
Designer - Yulia Karanfilova, Maria Kravchenko, Alicia Asavalyuk, Maxim Zhosan\n\
Story - Oleksandr Muravtsev, Mykita Bohorosh, Mykola Furman, Ivan Kushnirenko\n\
\n\
Viel Erfolg bei Ihrem Projekt! Bei Fragen oder Hilfebedarf können Sie sich gerne an uns wenden.\n\
\n\
Kontaktieren Sie uns:\n\
E-Mail - keltainen_Nola@gmail.com";
        case 'sk':
    return "Naše role v projekte:\n\
PM - Alicia Asavalyuk\n\
Analytik dát - Edita Matviienko, Tamara Vusata\n\
QA - Ivan Nenov, Pavlo Serman, Artem Slabiy, Mykola Furman\n\
Backend vývojári - Arseniy Zaikov, Oleksiy Skrypnychenko\n\
Frontend vývojári - Artem Bogdanenko, Oleksiy Skrypnychenko\n\
Herní dizajnéri - Ivan Kushnirenko, Tamara Vusata\n\
Zvukoví dizajnéri - Mykita Bohorosh, Arthur Basyuk, Oleksandr Muravtsev\n\
Dizajnéri - Yulia Karanfilova, Maria Kravchenko, Alicia Asavalyuk, Maxim Zhosan\n\
Príbeh - Oleksandr Muravtsev, Mykita Bohorosh, Mykola Furman, Ivan Kushnirenko\n\
\n\
Veľa úspechov vo vašom projekte! Ak máte otázky alebo potrebujete pomoc, neváhajte nás kontaktovať.\n\
\n\
Kontaktujte nás:\n\
E-mail - keltainen_Nola@gmail.com";
        case 'cn':
    return "我们在项目中的角色:\n\
PM - Alicia Asavalyuk\n\
数据分析员 - Edita Matviienko，Tamara Vusata\n\
QA - Ivan Nenov，Pavlo Serman，Artem Slabiy，Mykola Furman\n\
后端开发人员 - Arseniy Zaikov，Oleksiy Skrypnychenko\n\
前端开发人员 - Artem Bogdanenko，Oleksiy Skrypnychenko\n\
游戏设计师 - Ivan Kushnirenko，Tamara Vusata\n\
声音设计师 - Mykita Bohorosh，Arthur Basyuk，Oleksandr Muravtsev\n\
设计师 - Yulia Karanfilova，Maria Kravchenko，Alicia Asavalyuk，Maxim Zhosan\n\
故事 - Oleksandr Muravtsev，Mykita Bohorosh，Mykola Furman，Ivan Kushnirenko\n\
\n\
祝您的项目成功！如果您有任何问题或需要帮助，请随时联系我们。\n\
\n\
联系我们：\n\
电子邮件 - keltainen_Nola@gmail.com";


        default:
            return "Цей проект розробляють студенти з групи КН-31 коледжу ВСП ФКЗІ ДУІТЗ\n\
\n\
Наші ролі у розробці проєкту:\n\
PM - Алісія Асавалюк\n\
Data-Analyst - Едіта Матвієнко, Вусата Тамара\n\
QA - Ненов Іван , Павло Серман , Слабий Артем , Фурман Микола\n\
Back-end Dev - Зайков Арсеній , Олексій Скрипніченко\n\
Front-End Dev - Артем Богданéнко , Олексій Скрипніченко\n\
Game-Designers - Кушніренко Іван , Вусата Тамара\n\
Sound Designers - Богорош Микита , Артур Басюк , Олександр Муравцев\n\
Designers - Каранфілова Юлія , Кравченко Марія , Алісія Асавалюк , Жосан Максим\n\
Story - Олександр Муравцев , Богорош Микита , Фурман Микола , Кушниренко Іван\n\
\n\
З'вязатися з нами:\n\
Електронна адреса - keltainen_Nola@gmail.com";
    }
}

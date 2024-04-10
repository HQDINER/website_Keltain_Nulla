// newslanguage.js
document.addEventListener('DOMContentLoaded', function () {
    // Перевіряємо, чи збережена мова у localStorage
    let selectedLanguage = localStorage.getItem('selectedLanguage') || 'uk';

    // Якщо мова вже обрана, встановлюємо її
    document.getElementById('language').value = selectedLanguage;
    changeLanguage();
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
    let pageTitle = document.getElementById('page-title-news');
    let newsHeading = document.getElementById('news-heading');
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

    if (newsHeading) {
        newsHeading.innerText = getNewsHeadingContent(selectedLanguage);
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

function getNewsHeadingContent(language) {
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
    // Код функції getHomeContent для інших сторінок...
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
зустрінуться фантастичні мешканці цього світу, і на кожному кроці потрібно бути уважним,\
а не то навіть добрі знайомі зазіхнуть на ваші скарби. Ви ще не бачили так багато цікавих карт.\
І якщо ви на все це готові - вперед, у пригоду! Партія починається з того, що ви звичайний юнак,\
без професій. Не засмучуйтеся, адже навіть з першого ходу ви, можливо, зможете отримати цінний предмет,\
можна стати магом, або злодієм, або воїном і кліриком.";
    }
}

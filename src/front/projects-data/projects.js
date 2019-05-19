import imgPobo from "./pobo-max.jpg";
import imgFolow from "./folow-max.jpg";
import imgGrep from "./grep-max.jpg";
import imgMotiv from "./motiv-max.jpg";

export default [
    {
        id: 1,
        title: "Сайт ресторана Pobo.ru",
        text: `Серия правок по верстке, 
        изменение логики react-компонентов, 
        работа с api яндекс карт,
        верстка с нуля некоторых страниц, 
        работа с хостингом heroku, командная разработка через GitLab.`,
        tags: "react webpack nodeJS git scss html",
        url: "https://dev.pobo.ru/#/about",
        img: imgPobo
    },
    {
        id: 2,
        title: "Новостной блог",
        text: "Это учебный проект целью которого было освоение генератора статических сайтов jekyll.",
        tags: "jekyll js gulp html sass",
        url: "https://apexof.github.io/folow/",
        img: imgFolow
    },
    {
        id: 3,
        title: "Сайт фотографа",
        text: `Адаптивная pixelPerfect верстка по PSD макету. 
        С помощью js и jquery были реализованы всплывающие меню и слайдеры`,
        tags: "Bootstrap js jquery gulp html sass",
        url: "https://apexof.github.io/grep/",
        img: imgGrep
    },
    {
        id: 4,
        title: "Motivator",
        text: `Сервис по учету финансов.
        В проекте множество форм, модальных окон, графики, регистрация через Auth0, 
        Drag-and-drop интерфейсы (с поддержкой мобильных устройств), 
        цветовая кастомизация отчетов, видео-презентация, демо-аккаунт и многое другое.
        `,
        tags: "react redux nodeJS/Express MongoDB git webpack scss html",
        url: "https://take-my-money.herokuapp.com/",
        img: imgMotiv
    }
];

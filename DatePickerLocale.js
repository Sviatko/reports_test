const EN = 'en';
const UK = 'uk';
const RU = 'ru';

const EN_BTN_DONE = 'Done';
const UK_BTN_DONE = 'Готово';
const RU_BTN_DONE = 'Готово';

const EN_MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

const UK_MONTHS_FULL = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень',
    'Жовтень', 'Листопад', 'Грудень'];

const RU_MONTHS_FULL = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'];

const EN_MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const UK_MONTHS_SHORT = ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'];

const RU_MONTHS_SHORT = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

const EN_WEEK_DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const UK_WEEK_DAYS_FULL = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];

const RU_WEEK_DAYS_FULL = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const EN_WEEK_DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

const UK_WEEK_DAYS_SHORT = ['Нед', 'Пон', 'Вів', 'Ср', 'Чет', 'П`ят', 'Суб'];

const RU_WEEK_DAYS_SHORT = ['Вос', 'Пон', 'Вто', 'Ср', 'Чет', 'Пят', 'Суб'];

const EN_WEEK_DAYS_LETTER = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const UK_WEEK_DAYS_LETTER = ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'];

const RU_WEEK_DAYS_LETTER = ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'];

function getMonthsFull(locale) {
    var result;
    switch (locale) {
        case EN:
            result = EN_MONTHS_FULL;
            break;
        case UK:
            result = UK_MONTHS_FULL;
            break;
        case RU:
            result = RU_MONTHS_FULL;
            break;
        default:
            result = EN_MONTHS_FULL;
            break;
    }
    return result;
}

function getMonthsShort(locale) {
    var result;
    switch (locale) {
        case EN:
            result = EN_MONTHS_SHORT;
            break;
        case UK:
            result = UK_MONTHS_SHORT;
            break;
        case RU:
            result = RU_MONTHS_SHORT;
            break;
        default:
            result = EN_MONTHS_SHORT;
            break;
    }
    return result;
}

function getWeekDaysFull(locale) {
    var result;
    switch (locale) {
        case EN:
            result = EN_WEEK_DAYS_FULL;
            break;
        case UK:
            result = UK_WEEK_DAYS_FULL;
            break;
        case RU:
            result = RU_WEEK_DAYS_FULL;
            break;
        default:
            result = EN_WEEK_DAYS_FULL;
            break;
    }
    return result;
}

function getWeekDaysShort(locale) {
    var result;
    switch (locale) {
        case EN:
            result = EN_WEEK_DAYS_SHORT;
            break;
        case UK:
            result = UK_WEEK_DAYS_SHORT;
            break;
        case RU:
            result = RU_WEEK_DAYS_SHORT;
            break;
        default:
            result = EN_WEEK_DAYS_SHORT;
            break;
    }
    return result;
}

function getWeekDaysLetter(locale) {
    var result;
    switch (locale) {
        case EN:
            result = EN_WEEK_DAYS_LETTER;
            break;
        case UK:
            result = UK_WEEK_DAYS_LETTER;
            break;
        case RU:
            result = RU_WEEK_DAYS_LETTER;
            break;
        default:
            result = EN_WEEK_DAYS_LETTER;
            break;
    }
    return result;
}

function getDoneBtn(locale) {
    var result;
    switch (locale) {
        case EN:
            result = EN_BTN_DONE;
            break;
        case UK:
            result = UK_BTN_DONE;
            break;
        case RU:
            result = RU_BTN_DONE;
            break;
        default:
            result = EN_BTN_DONE;
            break;
    }
    return result;
}
const year = new Date().getFullYear(); 
const month = new Date().getMonth(); 
const today = new Date(year, month, 0).getTime(); 
const now = new Date().getTime(); 
const week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7)); 
const day = new Date().getDate()
export const scheduleObject = {
    Monday: `Расписание на понедельник:
1 пара) 14:30-16:00 - Нет пары
2 пара) 16:10-17:40 - Алгебра практика Белова О.О. 209
3 пара) 17:50-19:20 - Математический анализ лекция
4 пара) 19:50-21:20 - Геометрия лекция Кулешов А.В. 233
5 пара) 21:30-22:00 - Нет пары
6 пара) 23:10-00:40 - Физра  
    `,
    Tuesday: `
1 пара) 14:30-16:00 - Философия практика/лекция 
2 пара) 10:10-17:40 - Философия практика/лекция 
3 пара) 17:50-19:20 - Философия практика/лекция 
4 пара) 19:50-21:20 - Иностранный язык Игнатович Ю.О. 232/217
    `,
    Wednesday: `
1 пара) 14:30-16:00 - ${week%2==0 ? "Основы предпринимательской деятельности лекция Минкова Е.С. онлайн" : "Стартегии личностно-профессионального развития (факультатив) Шпилевая С.Г. онлайн"}
2 пара) 16:10-17:40 - Нет пары
3 пара) 17:50-19:20 - Алгебра лекция Белова О.О. 231
4 пара) 19:50-21:20 - Нет пары
5 пара) 21:30-22:00 - Основы программирования лекция Тарачков М.В. 233 ОНЛАЙН, ходить необязательно.
    `,
    Thursday: `
1 пара) 14:30-16:00 - Философия Лекция/Практика 10 потоков в разных корпусах
2 пара) 16:10-17:40 - Философия Лекция/Практика 10 потоков в разных корпусах
3 пара) 17:50-19:20 - Философия Лекция/Практика 10 потоков в разных корпусах
4 пара) 19:50-21:20 - Математический анализ практика Полякова К.В. 213/118
5 пара) 21:30-22:00 - Основы российской государственности Литвин В.Л. 118 
    `,
    Friday: `
1 пара) 14:30-16:00 - Нет пары
2 пара) 16:10-17:40 - Нет пары
3 пара) 17:50-19:20 - ${week%2 ? "Основы программирования 230а" : "Основы российской государственности Литвин В.Л. 118"}
4 пара) 19:50-21:20 - Нет пары
5 пара) 21:30-22:00 - Геометрия практика Ставицкая Е.П. 233
6 пара) 23:10-00:40 - Физра  
    `,
    Saturday: `
1 пара) 14:30-16:00 - ${ (day<=21 && month==9) ? "Философия лекция на Озерова 57 (Верхнее озеро)" : "Основы программирования 230а"}
2 пара) 16:10-17:40 - ${ (day<=21 && month==9) ? "Философия лекция на Озерова 57 (Верхнее озеро)" : "Основы программирования 230а"}
3 пара) 17:50-19:20 - ${ (day<=21 && month==9) ? "Философия лекция на Озерова 57 (Верхнее озеро)" : "Основы предпринимательской деятельности Минкова Е.С. 213"}
${ (day==21 && month==10) ? "4 пара) 19:50-21:20 - Философия лекция на Озерова 57 (Верхнее озеро)" : ""}  
    `
}



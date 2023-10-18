import express from 'express'
import {PORT, TOKEN} from './config.js'
import { Telegraf } from 'telegraf'
import { getMainMenu, getSecondMenu } from './keys.js'
import {scheduleObject} from './schedule.js'
import { pleasures } from './pleasures.js'

const app = express()
const bot= new Telegraf(TOKEN)
const scheduleHears = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
let currentMenu=getMainMenu();
bot.start(ctx => {
    ctx.reply('Привет, котенок! Выбери что хочешь сделать из кнопок ниже!', currentMenu)

})

bot.hears('Посмотреть расписание', ctx => {
    currentMenu=getSecondMenu()
    ctx.reply('Хорошо, а сейчас выбери на какой день тебе нужно расписание!', currentMenu)

})

bot.hears('Назад', ctx => {
    currentMenu=getMainMenu()
    ctx.reply('Слушаюсь!', currentMenu)
})

bot.hears("Понедельник", ctx => {
    ctx.reply(scheduleObject.Monday)
})
bot.hears("Вторник", ctx => {
    ctx.reply(scheduleObject.Tuesday)
})
bot.hears("Среда", ctx => {
    ctx.reply(scheduleObject.Wednesday)
})
bot.hears("Четверг", ctx => {
    ctx.reply(scheduleObject.Thursday)
})
bot.hears("Пятница", ctx => {
    ctx.reply(scheduleObject.Friday)
})
bot.hears("Суббота", ctx => {
    ctx.reply(scheduleObject.Saturday)
})

bot.hears("Получить приятности в любой момент!", ctx => {
    let randomPleasures = Math.floor(Math.random() * pleasures.length);
    ctx.reply(pleasures[randomPleasures])
})

bot.on('text', ctx => {
    ctx.reply('Не пиши ничего лишнего пожалуйста :3, бот не умеет думать, нажимай на кнопочки которые я сделал для тебя <3', currentMenu)
})

bot.launch()

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))
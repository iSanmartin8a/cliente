/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
const secretNumber = Math.trunc(Math.random() * 20) + 1
const score = 20
const highscore = 0

const scoreField = document.querySelector('.score').textContent
const highscoreField = document.querySelector('.highscore').textContent
const numberFile = document.querySelector('.guess').textContent

scoreField = score
highscoreField = highscore
numberFile = secretNumber

console.log(`El campo score tiene el valor ${scoreField}`)

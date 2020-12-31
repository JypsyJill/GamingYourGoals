// import axios from 'axios';
// import React, {Component} from 'react';

/////////////////////////////////////////// mathmetics.js /////////////////////////////////////////////////////


//total represents target_number
export const percentage = (total, progress) => Math.round((progress / total) * 100)

//takes the response from the axios request and gets all the progress_for_the_day (updatedGoalRes)
export const totalProgress = ((acc, currentVal) => acc + currentVal.progress_for_the_day, 0)

//export this to get the goalPercent
export const percentComplete = (target_number, totalProgress) => {
  const calculatedPercent = percentage(target_number, totalProgress)

  return `${calculatedPercent}%`
}

//FORMERLY getNumberOfWeekDays - RENAMED FOR BETTER UNDERSTANDING
//gets the number of days OFF you have between now and the deadline
//dayNum renamed to dayOff for better readability, also dayoff = 0 is the same as dayOff = dayOff || 0
export const getNumberOfDaysOff = (begDate, endDate, weekDayOff) => {

  const daysInInterval = (endDate.getTime() - begDate.getTime()) / (1000 * 3600 * 24)

  const toNextTargetDay = (7 + weekDayOff - begDate.getDay()) % 7
  const daysFromFirstTargetDay = Math.max(daysInInterval - toNextTargetDay, 0)
 
  return Math.ceil(daysFromFirstTargetDay / 7)
}

//This combines min & max calc, getRndInteger, and smallNum
export const getRndChallengeNum = (targetNum, totalProgressNum, dateDiff) => {
  const division = ( targetNum - totalProgressNum) / dateDiff

  const min = division * 0.85
  const max = division * 1.15

  const randInt = Math.floor(Math.random() * (max - min)) + min

  return randInt > 99 ? randInt.toFixed(0)
      : (Math.round(randInt * 4) / 4).toFixed(2)
}

//Though I'm not sure if you want to calculate from the beginning day, so here's a new function that calculated the difference of days between today and the end date 
export const dateDiff = (endDate, weekDayOff) => {
  const today = new Date().getDate()
  let tomorrow = new Date()
  tomorrow.setDate(today + 1)

  const nonProgDays = getNumberOfDaysOff(tomorrow, endDate, weekDayOff)
  const difference = endDate.getTime() - tomorrow.getTime()

  return Math.floor(difference / (1000 * 3600 * 24) + 1 - nonProgDays)
}

export const randomNumFromRange = (targetNum, totalProgressNum, endDayStr, weekDayOff = 0) => {
  const endDate = new Date(endDayStr)

  const dateDifference = dateDiff(endDate, weekDayOff)
  const challengeNum = getRndChallengeNum(targetNum, totalProgressNum, dateDifference)

  return challengeNum
}

// dateDiff (this.state.end_date);
// getNumberOfDaysOff (this.state.beg_date, end_date, 0);
// getRndChallengeNum (this.state.target_number, 0, dateDiff)
// randomNumFromRange (this.state.target_number, 0, endDayStr, weekDayOff = 0)
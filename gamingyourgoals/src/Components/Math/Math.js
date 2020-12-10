import axios from 'axios';
import React, {Component} from 'react';

class Math extends Component {
  constructor(){
    super();
    this.state = {
      beg_date: '',
      end_date: '',
      target_number: '',
      time_zone: '',
      time_to_text: '',
      no_prog_days_of_wk: '',
      no_prog_cal_days: '',
      user_id: ''
    }
    
  }
}
// calculates the number of days between dates
export const dateDiff = (startDate, endDate) => {
  const diff = Date.parse(endDate) - Date.parse(startDate)
  return Math.floor(diff / 86400000)
}
  

const endDay = new Date('Dec 31, 2020')
let startDay = new Date('Dec 1, 2020')

// calculates number of days of the week excluding Sundays (will update to make any day of the week excludable, including multiple days)

export function getNumberOfWeekDays(startDay, endDay, dayNum){
  // Sunday's num is 0 with Date.prototype.getDay.
  dayNum = dayNum || 0;
  // Calculate the number of days between start and end.
  var daysInInterval = Math.ceil((endDay.getTime() - startDay.getTime()) / (1000 * 3600 * 24));
  // Calculate the nb of days before the next target day (e.g. next Sunday after start).
  var toNextTargetDay = (7 + dayNum - startDay.getDay()) % 7;
  // Calculate the number of days from the first target day to the end.
  var daysFromFirstTargetDay = Math.max(daysInInterval - toNextTargetDay, 0);
  // Calculate the number of weeks (even partial) from the first target day to the end.
  return Math.ceil(daysFromFirstTargetDay / 7);
}

// calculate the number of progress days
let nonProgDays = (getNumberOfWeekDays(startDay, endDay))
// console.log(nonProgDays)
let dateDiff = endDay.getTime() - startDay.getTime();
let days = dateDiff/(1000*3600*24)+1-nonProgDays;

// calculate the range of numbers so randomization occurs properly

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export function smallNum(n) {
  let result;
  if (n > 99) {
  result = (n).toFixed(0)
} else {
  result = (Math.round(n *4)/4).toFixed(2)
}
return result;
}

console.log(cjGoal)
console.log(cjMin)
console.log(cjMax)
getRndInteger(cjMin, cjMax)
console.log(smallNum(getRndInteger(cjMin,cjMax)))
// console.log (days)


// console.log (endDay)
// console.log (startDay)
// 


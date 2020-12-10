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
// let beg_date = this.state.beg_date;
// let end_date = this.state.end_date;
// calculates number of days of the week excluding Sundays (will update to make any day of the week excludable, including multiple days)

export function getNumberOfWeekDays(beg_date, end_date, dayNum){
  // Sunday's num is 0 with Date.prototype.getDay.
  dayNum = dayNum || 0;
  // Calculate the number of days between start and end.
  var daysInInterval = Math.ceil((end_date.getTime() - beg_date.getTime()) / (1000 * 3600 * 24));
  // Calculate the nb of days before the next target day (e.g. next Sunday after start).
  var toNextTargetDay = (7 + dayNum - beg_date.getDay()) % 7;
  // Calculate the number of days from the first target day to the end.
  var daysFromFirstTargetDay = Math.max(daysInInterval - toNextTargetDay, 0);
  // Calculate the number of weeks (even partial) from the first target day to the end.
  return Math.ceil(daysFromFirstTargetDay / 7);
}

// calculate the number of progress days
export const dateDiff = (endDate, begDate) => {
  const nonProgDays = getNumberOfWeekDays(endDate, begDate)
  const difference = endDate.getTime() - begDate.getTime()

  return difference / (1000 * 3600 * 24) + 1 - nonProgDays
}
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

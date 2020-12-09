import axios from 'axios';
import React, {Component} from 'react';







let cjDays = 1;
let cjGoal = 2238/cjDays;
let cjMin = (cjGoal *.85)
let cjMax = (cjGoal *1.15)

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function smallNum(n) {
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

const endDay = new Date('Dec 31, 2020')
let startDay = new Date('Dec 1, 2020')

function getNumberOfWeekDays(startDay, endDay, dayNum){
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

console.log("Start:", startDay);
console.log("Start's week day num:", startDay.getDay());
console.log("Finish:", endDay);
console.log("Finish's week day num:", endDay.getDay());

console.log("Number of Sundays:", getNumberOfWeekDays(startDay, endDay));

let nonProgDays = (getNumberOfWeekDays(startDay, endDay))
console.log(nonProgDays)
let differenceInTime = endDay.getTime() - startDay.getTime();
let days = differenceInTime/(1000*3600*24)+1-nonProgDays;

console.log (days)


console.log (endDay)
console.log (startDay)
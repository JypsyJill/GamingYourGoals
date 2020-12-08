 

 
const date1 = new Date("Dec 1, 2020 06:15:00 MST"); // Monday
const date2 = new Date("Dec 31, 2020 06:15:00 MST"); // Thursday

const alldates = Array
  .from(Array(date2.getDate() - date1.getDate() + 1), () => new Date())
  .map((el, ind) => new Date(el.setTime(date1.getTime() + 1000 * 60 * 60 * 24 * ind)));
var progressDays = alldates.filter(function(e,index){
  return (e.getDay() !=0);
})
console.log(progressDays.join("\n"));
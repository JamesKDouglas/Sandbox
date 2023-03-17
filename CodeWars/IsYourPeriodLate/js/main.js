function periodIsLate(last, today, cycleLength) {
  let numMs = 24*60*60*1000;
  return (((today-last)/numMs)>cycleLength)?true:false;
}
/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  mon = "Monday",
  tues = "Tuesday",
  wedn = "Wednesday",
  thur = "Thursday",
  fri = "Friday",
  sat = "Saturday",
  sun = "Sunday",
}

const isWeekend = (day: string): boolean => {
  if (Days[day] === "Saturday" || Days[day] === "Sunday") {
    return true;
  }
  return false;
};

console.log("day", isWeekend("Monday"));

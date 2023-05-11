const { makeCalender, display, getMonthName } = require("./src/calender.js");

const main = function () {
  const [month, year] = process.argv.slice(2);
  const calender = makeCalender(month, year);
  const monthCode = month - 1;
  const monthName = getMonthName(monthCode);
  display(calender, monthName, year);
};

main();

const { makeCalender, display, getMonthName } = require("./src/calender.js");

const main = function () {
  let [month, year] = process.argv.slice(2);

  if (process.argv.length === 2) {
    const today = new Date();
    month = today.getMonth() + 1;
    year = today.getFullYear();
  }
  const calender = makeCalender(month, year);
  const monthCode = month - 1;
  const monthName = getMonthName(monthCode);
  display(calender, monthName, year);
};

main();

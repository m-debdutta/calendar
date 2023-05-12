const { makeCalender, display, getMonthName } = require("./src/calender.js");
const { showUsage, parseArguments } = require("./src/arguments.js");

const main = function () {
  const args = process.argv.slice(2);
  const { month, year, isValid } = parseArguments(args);

  if (!isValid) {
    showUsage();
    process.exit(1);
  }

  const calender = makeCalender(+month, +year);
  const monthCode = +month - 1;
  const monthName = getMonthName(monthCode);

  display(calender, monthName, year);
};

main();

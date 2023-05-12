const isValidInput = function (args) {
  const input = args.join("");
  return /^[\d]+$/.test(input) || args.length === 0;
};

const parseArguments = function (args) {
  let isValid = isValidInput(args);

  let month = +args[0];
  let year = +args[1];

  if (month > 12 || month < 1) {
    isValid = false;
  }

  if (args.length === 0) {
    const today = new Date();
    month = today.getMonth() + 1;
    year = today.getFullYear();
  }

  return { month, year, isValid };
};

const showUsage = function () {
  console.error("Usage:");
  console.error("node main.js to get the current month calender");
  console.error("node main.js [month] [year]");
  console.error("month should be within: [1...12]");
};

exports.showUsage = showUsage;
exports.parseArguments = parseArguments;

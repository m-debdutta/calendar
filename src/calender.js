const heading = function (month, year) {
  return `${month} ${year}`;
};

const getNumberOfDays = function (month) {
  const numberOfDays = 31;
  return numberOfDays;
};

const getDetails = function () {
  const presentDate = new Date();
  presentDate.setDate(1);
  const [day, month, _, year] = presentDate.toDateString().split(" ");
  return { day, month, year };
};

const generateLine = function (start, end) {
  const line = [];
  for (let index = start; index <= end; index++) {
    line.push(index.toString().padStart(2));
  }
  return line;
};

const makeCalender = function (dayCode, numberOfDays) {
  let startDate = 1;
  const calender = [];
  let firstLine = new Array(dayCode);
  firstLine.fill("  ");
  let endDate = 7 - dayCode;
  firstLine = firstLine.concat(generateLine(startDate, endDate));
  calender.push(firstLine);
  while (startDate <= numberOfDays) {
    startDate = endDate + 1;
    endDate = endDate + 7;
    if (endDate > numberOfDays) {
      endDate = numberOfDays;
    }
    const line = generateLine(startDate, endDate);
    calender.push(line);
  }

  return calender;
};

const main = function () {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const { day, month, year } = getDetails();
  const numberOfDays = getNumberOfDays(month);

  const code = days.indexOf(day);
  const calender = makeCalender(code, numberOfDays);

  console.log(heading(month, year));
  console.log("su mo tu we th fr sa");
  console.log(calender.join("\n").replaceAll(",", " "));
};

main();

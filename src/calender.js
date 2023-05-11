const heading = function (month, year) {
  const header = `${month} ${year}`;
  const pad = 10 + Math.floor(header.length / 2);

  return header.padStart(pad);
};

const chunkIntoWeeks = function (calenderData) {
  const calender = [];

  for (let index = 0; index < calenderData.length; index += 7) {
    const week = calenderData.slice(index, index + 7);
    calender.push(week);
  }

  return calender;
};

const formatCalender = function (calender) {
  const calenderData = chunkIntoWeeks(calender);

  return calenderData
    .map(function (lines) {
      return lines.join(" ");
    })
    .join("\n");
};

const getEndDate = function (date) {
  return date.getUTCDate();
};

const getFirstDayOfMonth = function (date) {
  date.setUTCDate(1);
  return date.getUTCDay();
};

const createPadding = function (times) {
  let padding = new Array(times);

  return padding.fill("  ");
};

const getDates = function (monthEndDate) {
  let dates = new Array(monthEndDate).fill();

  return dates.map(function (_, index) {
    return (index + 1).toString().padStart(2);
  });
};

const getMonthInfo = function (month, year) {
  const monthStartsOn = new Date(year, month);

  const endDate = getEndDate(monthStartsOn);
  const startDay = getFirstDayOfMonth(monthStartsOn);

  return { endDate, startDay };
};

const makeCalender = function (month, year) {
  const { endDate, startDay } = getMonthInfo(month, year);

  const dates = getDates(endDate);
  const padding = createPadding(startDay);

  const calender = padding.concat(dates);

  return formatCalender(calender);
};

const getMonthName = function (monthCode) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[monthCode];
};

const display = function (calender, month, year) {
  console.log(heading(month, year));
  console.log("Su Mo Tu We Th Fr Sa");
  console.log(calender);
};

exports.display = display;
exports.makeCalender = makeCalender;
exports.getMonthName = getMonthName;
exports.getMonthInfo = getMonthInfo;

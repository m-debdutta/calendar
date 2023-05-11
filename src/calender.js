const heading = function (month, year) {
  const header = `${month} ${year}`;
  const length = header.length;
  const pad = 10 + Math.floor(length / 2);

  return header.padStart(pad);
};

const addPadding = function (times) {
  let padding = new Array(times);

  return padding.fill("  ");
};

const getDates = function (monthEndDate) {
  let dates = new Array(monthEndDate);

  for (let index = 0; index < dates.length; index++) {
    dates[index] = (index + 1).toString().padStart(2);
  }

  return dates;
};

const formatCalander = function (calenderData) {
  const calender = [];

  for (let index = 0; index < calenderData.length; index += 7) {
    const week = calenderData.slice(index, index + 7);
    calender.push(week);
  }

  return calender;
};
const getMonthInfo = function (month, year) {
  const presentDate = new Date();
  presentDate.setFullYear(year);
  presentDate.setMonth(month);

  presentDate.setDate(0);
  const monthEndDate = presentDate.getDate();

  presentDate.setDate(1);
  const startDay = presentDate.getDay();

  return { monthEndDate, startDay };
};

const makeCalender = function (month, year) {
  const { monthEndDate, startDay } = getMonthInfo(month, year);
  const dates = getDates(monthEndDate);
  const padding = addPadding(startDay);

  const calender = padding.concat(dates);

  return formatCalander(calender);
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
  console.log(calender.join("\n").replaceAll(",", " "));
};

exports.makeCalender = makeCalender;
exports.display = display;
exports.getMonthName = getMonthName;

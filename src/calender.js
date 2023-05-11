const heading = function (month, year) {
  const header = `${month} ${year}`;
  const length = header.length;
  const pad = 10 + Math.round(length / 2);

  return header.padStart(pad);
};

const addPadding = function (times) {
  let padding = new Array(times);
  return padding.fill("  ");
};

const getDates = function (endDate) {
  let dates = new Array(endDate);
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

const makeCalender = function (inputMonth, inputYear) {
  const presentDate = new Date();

  presentDate.setFullYear(inputYear);
  presentDate.setMonth(inputMonth);

  presentDate.setDate(0);
  const endDate = presentDate.getDate();

  presentDate.setDate(1);
  const startDay = presentDate.getDay();

  const dates = getDates(endDate);
  const padding = addPadding(startDay);

  const calender = padding.concat(dates);
  return formatCalander(calender);
};

const main = function (month, year) {
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
  const calender = makeCalender(month, year);
  const monthCode = 5 - 1;
  console.log(heading(months[monthCode], year));
  console.log("Su Mo Tu We Th Fr Sa");
  console.log(calender.join("\n").replaceAll(",", " "));
};

main(5, 3023);

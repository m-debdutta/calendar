const heading = function (month, year) {
	const header = `${month} ${year}`;
	const pad = 10 + Math.floor(header.length / 2);

	return header.padStart(pad);
};

const chunkIntoWeeks = function (calendarData) {
	const calendar = [];

	for (let index = 0; index < calendarData.length; index += 7) {
		const week = calendarData.slice(index, index + 7);
		calendar.push(week);
	}

	return calendar;
};

const formatcalendar = function (calendar) {
	const calendarData = chunkIntoWeeks(calendar);

	return calendarData
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
	return new Array(times).fill("  ");
};

const getDates = function (monthEndDate) {
	const dates = new Array(monthEndDate).fill();

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

const makecalendar = function (month, year) {
	const { endDate, startDay } = getMonthInfo(month, year);
	const dates = getDates(endDate);
	const padding = createPadding(startDay);

	const calendar = padding.concat(dates);

	return formatcalendar(calendar);
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

const display = function (calendar, month, year) {
	console.log(heading(month, year));
	console.log("Su Mo Tu We Th Fr Sa");
	console.log(calendar);
};

exports.display = display;
exports.makecalendar = makecalendar;
exports.getMonthName = getMonthName;
exports.getMonthInfo = getMonthInfo;

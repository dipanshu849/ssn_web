import getNsetCalendarData from "../backend/table/eventNathleticsCalendar";

const calenderTimeNavigator = () => {
  const calendar = document.querySelector("#calender__time-navigator");

  calendar.value = new Date().toISOString().slice(0, 10);

  calendar.addEventListener("change", () => {
    getNsetCalendarData("events", calendar.value);
    getNsetCalendarData("athletics", calendar.value);
  });
};

export default calenderTimeNavigator;

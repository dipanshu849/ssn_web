import { supabase } from "../../supabaseClient";

const getNsetCalendarData = (
  type,
  selectedDate = new Date().toISOString().slice(0, 10)
) => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  const calendarContainer = document.querySelector(
    `.calender__type-${type}-content`
  );
  calendarContainer.replaceChildren();

  const calendarWrapper = document.createElement("div");
  calendarWrapper.classList.add(
    `calender__type-${type}-content`,
    "calender__type-content-item"
  );
  calendarContainer.appendChild(calendarWrapper);
  const calendarHeader = document.createElement("div");
  calendarHeader.classList.add("calender__type-content-item-heading");
  calendarHeader.innerHTML = `
            <p>${getCompleteDate(selectedDate)}</p>
            <p>${getWeekDay(selectedDate)}</p>
        `;

  calendarWrapper.appendChild(calendarHeader);

  const calendarBody = document.createElement("div");
  calendarBody.classList.add("calender__type-content-item-description");
  const calendarList = document.createElement("ul");
  calendarList.classList.add("calender__type-content-item-list");
  const calendarHeaderLi = document.createElement("li");
  calendarHeaderLi.innerHTML = `
            <div class="calendar__type-event">Event</div>
            <div class="calendar__type-start-time">Start Time</div>
            <div class="calendar__type-end-time">End Time</div>
            <div class="calendar__type-place">Venue</div>
            <div class="calendar__type-result">Result</div>
  `;

  calendarWrapper.appendChild(calendarBody);
  calendarBody.appendChild(calendarList);
  calendarList.appendChild(calendarHeaderLi);

  ///
  async function fetchEventData() {
    return new Promise(async (resolve, reject) => {
      let { data, error } = await supabase.from(`${type}-table`).select("*");

      if (error) {
        reject(error);
      }
      resolve(data);
    });
  }
  ///

  ///
  function getWeekDay(date) {
    const day = new Date(date).getDay();
    return weekDays[day];
  }

  function getCompleteDate(date) {
    const day = new Date(date).getDate();
    const month = months[new Date(date).getMonth()];
    const year = new Date(date).getFullYear();

    return `${day} ${month} ${year}`;
  }
  ///

  fetchEventData().then((rows) => {
    rows.forEach((row) => {
      if (row.date == selectedDate) {
        const calendarListItem = document.createElement("li");
        calendarListItem.innerHTML = `
            <div class="calendar__type-event">${row.event}</div>
            <div class="calendar__type-start-time">${row.start__time}</div>
            <div class="calendar__type-end-time">${row.end__time}</div>
            <div class="calendar__type-place">${row.place}</div>
            <div class="calendar__type-result">${row.result__of__event}</div>
        `;
        calendarList.appendChild(calendarListItem);
      }
    });
  });
};

export default getNsetCalendarData;

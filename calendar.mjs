document.addEventListener('DOMContentLoaded', function () {
  const calendarContainer = document.getElementById('calendarContainer');
  const today = moment();
  const selectedDate = moment();

  function renderCalendar(monthToShow) {
    calendarContainer.innerHTML = '';

    // Container principal
    const calendarWrapper = document.createElement('div');
    calendarWrapper.classList.add('calendar-wrapper');

    // Adiciona a linha dos dias da semana
    const weekdaysElement = document.createElement('div');
    weekdaysElement.classList.add('weekdays');
    const startOfMonth = monthToShow.clone().startOf('month'); // Define startOfMonth here
    for (let i = 0; i < 7; i++) {
      const weekdayElement = document.createElement('div');
      weekdayElement.classList.add('weekday');
      weekdayElement.textContent = startOfMonth.clone().weekday(i).format('ddd');
      weekdaysElement.appendChild(weekdayElement);
    }
    calendarWrapper.appendChild(weekdaysElement);

    // Adiciona os dias do mês
    const daysOfMonthElement = document.createElement('div');
    daysOfMonthElement.classList.add('days-of-month');
    const daysInMonth = monthToShow.daysInMonth(); // Calculate daysInMonth
    for (let i = 0; i < daysInMonth; i++) {
      const day = startOfMonth.clone().add(i, 'days');
      const isToday = day.isSame(today, 'day');
      const isSelected = day.isSame(selectedDate, 'day');

      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      if (isToday) {
        dayElement.classList.add('today');
      }
      if (isSelected) {
        dayElement.classList.add('selected');
      }
      dayElement.textContent = day.format('D');
      dayElement.addEventListener('click', function () {
        selectedDate.year(day.year());
        selectedDate.month(day.month());
        selectedDate.date(day.date());
        renderCalendar(monthToShow);
      });

      daysOfMonthElement.appendChild(dayElement);
    }
    calendarWrapper.appendChild(daysOfMonthElement);

    // Adiciona o container principal ao documento
    calendarContainer.appendChild(calendarWrapper);
  }

  renderCalendar(today);
});

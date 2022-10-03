function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Part 1

  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createMonthDays () {
    
    const days = document.getElementById('days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let decemberDays = decemberDaysList[index];

        let dayListItem = document.createElement('li');
        dayListItem.innerHTML = decemberDays;
        dayListItem.className = 'day';

        if (decemberDays === 24 || decemberDays === 25 | decemberDays === 31) {
          dayListItem.classList.add('holiday');
        }

        if (decemberDays === 4 || decemberDays === 11 || decemberDays === 18 || decemberDays === 25) {
          dayListItem.classList.add('friday');
        }

        days.appendChild(dayListItem);
    }
  }
    createMonthDays();

    // Part 2

  
document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#form');
  form.addEventListener('submit', handleForm)

});

const handleForm = function() {
  event.preventDefault();
  const resultSubmit = document.querySelector('#team-list');
  const newListItem1 = document.createElement('li')
  newListItem1.textContent = `Name: ${event.target.teamName.value}`

  const newListItem2 = document.createElement('li')
  newListItem2.textContent = `Goal Difference: ${event.target.goalDifference.value}`

  const newListItem3 = document.createElement('li')
  newListItem3.textContent = `Points: ${event.target.points.value}`

  const list = document.querySelector('ul');
  list.appendChild(newListItem1);
  list.appendChild(newListItem2);
  list.appendChild(newListItem3);

  handleTable(event)

  event.target.reset();
};

const handleTable = function(evt) {
  const resultSubmit = document.querySelector('#team-table');
  const newRowItem1 = document.createElement('td')
  newRowItem1.textContent = `${evt.target.teamName.value}`

  const newRowItem2 = document.createElement('td')
  newRowItem2.textContent = `${evt.target.goalDifference.value}`

  const newRowItem3 = document.createElement('td')
  newRowItem3.textContent = `${evt.target.points.value}`

  const newRow = document.createElement('tr')
  newRow.appendChild(newRowItem1);
  newRow.appendChild(newRowItem2);
  newRow.appendChild(newRowItem3);

  resultSubmit.appendChild(newRow);

}

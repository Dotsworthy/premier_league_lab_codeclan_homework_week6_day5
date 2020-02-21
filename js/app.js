document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#form');
  form.addEventListener('submit', handleForm)
});

const handleForm = function() {
  event.preventDefault();
  const resultSubmit = document.querySelector('#team-list');
  const newListItem1 = document.createElement('li')
  newListItem1.textContent = `teamName: ${event.target.teamName.value}`

  const newListItem2 = document.createElement('li')
  newListItem2.textContent = `goalDifference: ${event.target.goalDifference.value}`

  const newListItem3 = document.createElement('li')
  newListItem3.textContent = `points: ${event.target.points.value}`

  const list = document.querySelector('ul');
  list.appendChild(newListItem1);
  list.appendChild(newListItem2);
  list.appendChild(newListItem3);

  event.target.reset();
};

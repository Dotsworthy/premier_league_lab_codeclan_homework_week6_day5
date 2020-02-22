

document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#form');
  form.addEventListener('submit', handleTable);

  const deleteAll = document.querySelector('#reset');
  deleteAll.addEventListener('click', handleButtonClick);

  const sortTable = document.querySelector('#table-head')
  sortTable.addEventListener('click', handleColumnClick);

});

const Row = function(teamName, goalDifference, points) {
  this.teamName = teamName;
  this.goalDifference = goalDifference;
  this.points = points;
};

let sortDirection = false;
let teamData = [];

window.onload = () => {
  loadTableData(teamData);
};

const loadTableData = function(teamData) {
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';

  for (let team of teamData) {
    dataHtml += `<tr><td>${team.teamName}</td><td>${team.goalDifference}</td><td>${team.points}</td></tr>`;
  };

  tableBody.innerHTML = dataHtml;
};

const handleTable = function() {
  event.preventDefault();

  const newRowItem1 = event.target.teamName.value
  const newRowItem2 = event.target.goalDifference.value
  const newRowItem3 = event.target.points.value


  const newRow = new Row(newRowItem1,newRowItem2,newRowItem3);
  teamData.push(newRow);
  loadTableData(teamData);
  event.target.reset();

};

const handleButtonClick = function() {
  const resultSubmit = document.querySelector('#team-list');
  document.querySelector('#table-body').innerHTML = '';
};

const handleColumnClick = function() {

};

document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#form');
  form.addEventListener('submit', handleTable);

  const deleteAll = document.querySelector('#reset');
  deleteAll.addEventListener('click', handleButtonClick);

});

const Row = function(teamName, goalDifference, points) {
  this.teamName = teamName.toString();
  this.goalDifference = goalDifference;
  this.points = points;
};

let teamData = [];
let sortDirection = false;

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
  document.querySelector('#tableData').innerHTML = '';
};

const sortColumn = function(columnName) {
  sortDirection = !sortDirection;
  sortColumnNumber(sortDirection, columnName);

  loadTableData(teamData);
};

const sortColumnNumber = function(sort, columnName) {
  tableData = teamData.sort((team1, team2) => {
      return sort ? team1[columnName] - team2[columnName] : team2[columnName] - team1[columnName]
    }
  )
};


document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#form');
  form.addEventListener('submit', handleTable);

  const deleteAll = document.querySelector('#reset');
  deleteAll.addEventListener('click', handleButtonClick);

  // const sortTable = document.querySelector('#table-head')
  // sortTable.addEventListener('click', sortColumn);

});

const Row = function(teamName, goalDifference, points) {
  this.teamName = teamName;
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
  document.querySelector('#table-body').innerHTML = '';
};

const sortColumnByNumber = function(columnName) {
  const dataType = teamData[0][columnName];
  sortDirection = !sortDirection;
  sortColumnNumber(sortDirection, columnName);

  // switch(dataType) {
  //   case 'number':
  //   sortColumnNumber(sortDirection, columnName);
  //   break;
  //
  //   case 'string':
  //   sortColumnNumber(sortDirection, columnName);
  // };

  loadTableData(teamData);
};
  // console.log(teamData);

const sortColumnNumber = function(sort, columnName) {
  tableData = teamData.sort((team1, team2) => {
      return sort ? team1[columnName] - team2[columnName] : team2[columnName] - team1[columnName]
    }
  )
  console.log(teamData);
};

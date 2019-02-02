var url = 'http://dct-api-data.herokuapp.com/tickets';
var apiKey = '90f66164c2fb6511';

var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var errorHandle = document.getElementById('error');
var ticketFormHandle = document.getElementById('ticketForm');
var nameHandle = document.getElementById('name');
var departmentHandle = document.getElementById('department');
var messageHandle = document.getElementById('message');
var highHandle = document.getElementById('high');
var lowHandle = document.getElementById('low');
var mediumHandle = document.getElementById('medium');
var progressHandle = document.getElementById('progress');

function buildRow(ticket) {
  return `
  <tr>
    <td>${ticket.ticket_code}</td>
    <td>${ticket.name}</td>
    <td>${ticket.department}</td>
    <td>${ticket.priority}</td>
    <td>${ticket.message}</td>
    <td onclick=ticketStatusUpdate(this) id=${ticket.ticket_code}>${checkBoxSatus(ticket)}</td>
  </tr>
`
}

function ticketStatusUpdate(ticket){
 console.log(ticket);
 ticket_id = ticket.id
 console.log(ticket_id);

 axios.get(`${url}/${ticket_id}?api_key=${apiKey}`).then(function(response){
  
    var ticket = response.data;
    console.log(ticket);
    
    if (ticket.status == 'completed'){
      update(ticket.ticket_code, 'open');
    } else{
      update(ticket.ticket_code, 'completed');
    }

 }).catch(function(err){

 })
 
}

function update(ticket_id, givenStatus){
  console.log(ticket_id);
  var params= {
    status: givenStatus
  }
  axios.put(`${url}/${ticket_id}?api_key=${apiKey}`, params).then(function(response){
      console.log(response.data);
  }).catch(function(err){

  })
}

// var ticketStatusUpdateHandle = document.getElementById('ticketStatusUpdate');

// ticketStatusUpdateHandle.addEventListener('click', function(){
  
// }, false)

function checkBoxSatus(ticket) {
return ticket.status == 'completed' ? '<input type="checkbox" checked/>' : '<input type="checkbox"/>'

}

function calculatePercentage(tickets){
    var completedTickets = tickets.filter(function(ticket){
        return ticket.status == 'completed'
    });
    var result = Math.round((completedTickets.length / tickets.length) * 100);
    return result;
}

axios.get(`${url}?api_key=${apiKey}`)
.then(function(response) {
  var tickets = response.data;
  countHandle.innerHTML = tickets.length;
  var output = '';
  tickets.forEach(function(ticket) {
    output += buildRow(ticket)
  });
  tableBodyHandle.innerHTML = output;
  calculatePercentage(tickets);
  progressHandle.setAttribute('value', calculatePercentage(tickets));
})
.catch(function(err) {
  errorHandleFunc('Something went wrong !!! Please check the logs if u are an administrator');
});
ticketFormHandle.addEventListener('submit', function(e) {
  e.preventDefault();
  var data = {
    name: nameHandle.value,
    department: departmentHandle.value,
    priority: highHandle.checked ? highHandle.value : (mediumHandle.checked ? messageHandle.value : lowHandle.value),
    message: messageHandle.value
  }
  axios.post(`${url}?api_key=${apiKey}`, data )
  .then(function(response) {
    var ticket = response.data
    countHandle.innerHTML = Number(countHandle.innerHTML) + 1;
    ticketFormHandle.reset();
    tableBodyHandle.innerHTML += buildRow(ticket);
  })
  .catch(function(error) {
    errorHandleFunc('post action error')
  });
});
function errorHandleFunc(msg) {
  errorHandle.setAttribute('id', 'errorStyle')
  errorHandle.innerText = msg;
}
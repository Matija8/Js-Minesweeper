'use strict';


//set as desired.
var num_of_rows = 5;
var num_of_cols = 7;


//get the game area (table).
var table = document.getElementById('play_area');
initializePlayArea(table, num_of_cols, num_of_rows);


//add event listeners
document.querySelectorAll('.table-cell').forEach(function(item){
    item.addEventListener('click', fja.bind(item));
});


setMine('0,1');



function fja(event){
    console.log('ID is: ' + this.id);
    console.log(this.getAttribute('has-mine'));
    if(this.getAttribute('has-mine') == 1){  //bug! nije se jos set-ovala mina? izvaditi f-ju?
        alert('Cell: ' + this.id + ' has a mine!');
        this.innerHTML = 'x';
    } else {
        this.innerHTML = 'o';
    }
}




//Function definitions

function initializePlayArea(table, num_of_cols, num_of_rows){
    //adding rows.
    for(var i = 0; i<num_of_rows; i++){
        var table_row = document.createElement('tr');
        //adding columns(cells).
        for(var j = 0; j<num_of_cols; j++){
            var table_cell = document.createElement('td');
            //table_cell.innerHTML = i + ',' + j;
            table_cell.classList.add('table-cell');
            table_cell.setAttribute('id' , i + ',' + j);
            table_cell.setAttribute('has-mine', false);
            table_row.appendChild(table_cell);
        }
        table.appendChild(table_row);
    }
}

function setMine(id){
    var cell = document.getElementById(id);
    cell.setAttribute('has-mine', 1);
}
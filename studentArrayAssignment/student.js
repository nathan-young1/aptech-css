var students={
    allStudents: [{FirstName: 'Jack',LastName: 'Ma'},{FirstName: 'Okorie',LastName: 'Jonathan'},{FirstName: 'Elon',LastName: 'Musk'}],
    writeToTable: function(){
        for(let student of this.allStudents){
        var tableRow = document.createElement('tr');
        var firstNameColumn = document.createElement('td');
        var lastNameColumn = document.createElement('td');
        firstNameColumn.innerText = student.FirstName;
        lastNameColumn.innerText = student.LastName;
        tableRow.appendChild(firstNameColumn);
        tableRow.appendChild(lastNameColumn);
        document.getElementById('table').appendChild(tableRow);
        }
    }
}

students.writeToTable();
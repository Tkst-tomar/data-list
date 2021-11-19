var data = []

function saveData() {

    var table = `<tr><th>Employee's Name</th><th>Id</th><th>Salary</th><th>Delete</th><th>Edit</th></tr>`
    var name = document.getElementById("name").value
    var id = document.getElementById("id").value
    var sal = document.getElementById("salary").value

    var person = { ename: name, eid: id, esalary: sal }

    i = 0
    data.push(person)

    data.forEach(x => {
        i++
        table += `<tr id="row${i}"><th>${x.ename}</th><th>${x.eid}</th><th>${x.esalary}</th><th onclick="deleteData(this.parentElement)"><i class="far fa-trash-alt"></i></th><th onclick="editData(this.parentElement)"><i class="far fa-edit"></i></th></tr>`
    });

    document.getElementById("tabledata").innerHTML = table
}
function deleteData(element) {

    if (data.length == 1) {
        document.getElementById("tabledata").innerText = "No Data availale"
        document.getElementById("tabledata").style.color = "red"
    } else {
        console.log(data.length)
        var string = document.getElementById(element.id).firstChild.innerText

        for (key in data) {
            if (data[key].ename == string) {
                data.splice(key, 1)
            }
        }
        var table = `<tr><th>Employee's Name</th><th>Id</th><th>Salary</th><th>Delete</th><th>Edit</th></tr>`
        data.forEach(x => {
            i++
            table += `<tr id="row${i}"><th>${x.ename}</th><th>${x.eid}</th><th>${x.esalary}</th><th onclick="deleteData(this.parentElement)"><i class="far fa-trash-alt"></i></th><th onclick="editData(this.parentElement)"><i class="far fa-edit"></i></th></tr>`
        });

        document.getElementById("tabledata").innerHTML = table
    }


}
function editData(edit) {
    var string = document.getElementById(edit.id).firstChild.innerText
    document.getElementById("btn").innerText = "Edit Data"
    for (key in data) {
        if (data[key].ename == string) {
            document.getElementById("name").value = data[key].ename
            document.getElementById("id").value = data[key].eid
            document.getElementById("salary").value = data[key].esalary
        }

    }
    for (key in data) {
        if (data[key].ename == string) {
            data.splice(key, 1)
        }
    }
    var table = `<tr><th>Employee's Name</th><th>Id</th><th>Salary</th><th>Remove Data</th></tr>`
    data.forEach(x => {
        i++
        table += `<tr id="row${i}"><th>${x.ename}</th><th>${x.eid}</th><th>${x.esalary}</th><th onclick="deleteData(this.parentElement)"><i class="far fa-trash-alt"></i></th></tr>`
    });
        document.getElementById("btn").innerText = "Click To Save Data"
}

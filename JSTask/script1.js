let eid = document.getElementById("emp-id");
let ename = document.getElementById("emp-name");
let eage = document.getElementById("emp-age");
let egender = document.getElementById("emp-gender");
let form = document.getElementById("empForm");
let err = document.getElementById("input-area");
let testarr = [];
let id_list = [];


form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    if (validateID() == true && validateName() == true && validateAge() == true && validateGen() == true){
        addData(); 
    }
    else{
        console.log("Error");
    }
   
});

function validateID(){
    let isValid = true;

    if (eid.value.trim() == "" || eid.value < 0){
        setError(eid, "Please enter valid ID.")
        isValid = false;
    }
    else if(id_list.includes(eid.value)){
        setError(eid, "ID already present.")
        isValid = false;

    }
    else{
        setSuccess(eid);
        isValid = true;
    }


    
    return isValid;
}

function validateName(){
    let isValid = true;
    var letters = /^[A-Za-z]+$/;
    
    if (ename.value.trim() == ""){
        setError(ename, "Please enter Name")
        isValid = false;
    }
    else if(!ename.value.match(letters)){
        setError(ename, "Only Alphabets.")
        isValid = false;
    }

    else{
        setSuccess(ename);
        isValid = true;
    }

    return isValid;
}

function validateAge(){
    let isValid = true;
    if (eage.value.trim() == ""){
        setError(eage, "Please enter Age.")
        isValid = false;
    }
    else if(eage.value < 20 || eage.value >60){
        setError(eage, "Age not valid")
        isValid = false;

    }
    else{
        setSuccess(eage);
        isValid = true;
    }
    return isValid;
}

function validateGen(){
    let isValid = true;
    if (egender.value == ""){
        setError(egender, "Select Gender")
        isValid = false;
    }
    else{
        setSuccess(egender);
        isValid = true;
    }
    return isValid;
}

function setError(element, errorMessage){
    const parent = element.parentElement;
    if (parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if (parent.classList.contains('error')){
        parent.classList.remove('error');
    }
}

function displayData(){

    var htmltab = "<table>";

        htmltab += "<thead>";
        htmltab += "<tr>";
        htmltab += "<th>"+'ID'+"</th>";
        htmltab += "<th>"+'Name'+"</th>";
        htmltab += "<th>"+'Age'+"</th>";
        htmltab += "<th>"+'Gender'+"</th>";
        htmltab += "<th>"+'Action'+"</th>";
        htmltab += "</tr>";
        htmltab += "</thead>";
        for (let i = 0; i < testarr.length; i++){
            htmltab += "<tr>";
            htmltab += "<td>"+testarr[i].id+"</td>";
            htmltab += "<td>"+testarr[i].name+"</td>";
            htmltab += "<td>"+testarr[i].age+"</td>";
            htmltab += "<td>"+testarr[i].gender+"</td>";
            htmltab += "<td>"+`<button class="btn delete-btn" onclick="deleteData(${testarr[i].id})">Delete</button> `+"</td>";
        }
        htmltab += "</table>";
        document.getElementById("emp-table").innerHTML = htmltab;
    }
    console.log(id_list);
    console.log(testarr);


function clearForm(){
    eid.value = "";
    ename.value = "";
    eage.value = "";
    egender.value = "";
}

function addData(){
    var eid = document.getElementById("emp-id").value;
    var ename = document.getElementById("emp-name").value;
    var eage = document.getElementById("emp-age").value;
    var egender = document.getElementById("emp-gender").value;
    var errorArea = document.getElementById("error-area");
    var errorMsg = "";
    var letters = /^[A-Za-z]+$/;

    // if (eid == "" || ename == "" || eage == "" || egender == ""){
    //     alert("All fields are Manndotary");
    //     errorArea.innerHTML += "\nAll fields are Manndotary\n";
    // }

    // if(id_list.includes(eid)){
    //     alert("Alreasy there");
    //     errorArea.innerHTML += "ID already exists.";
    //     errorArea.innerHTML += "<br>";
    // }

    // if(eage != "" && (eage < 19 || eage > 60)){
    //     alert("Enter valid age");
    //     errorArea.innerHTML += "Please enter valid Age.";
    // }
 
   
    // if(!ename.match(letters)){
    //     alert("Name should only contain Alpha");  
    //     errorArea.innerHTML += "Name should only contain Alphabets.";
    // }


        testarr.push({id:eid, name:ename, age:eage, gender:egender})
        id_list.push(eid);
        clearForm();
        displayData();

       
        //    for (el of id_list){
        //     alert(el + " is used");
        //    }
        
        errorArea.innerHTML = `${id_list}` + " is used";
        
}




function deleteData(elementId){

    let del = testarr.filter((item,index) => {
        if (elementId == item.id){
            testarr.splice(index,1);
            displayData();
        }
    })
}



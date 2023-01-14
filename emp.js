function addemploye(){
    // store the details of employee in localstorage when add butoon clicks
    // there are lot of details to store so we are storing that in a object 
    employe={name:fname.value,id:id1.value,designation:desig.value,salary:salarys.value,experience:exp.value}

    // check whether details alredy present
    if(employe.id in localStorage){
        alert("alredy present")
    }else{
    localStorage.setItem(employe.id,JSON.stringify(employe))
    alert("employe added successfully")
    }
}

function searched(){
   key=searching.value
   if(key in localStorage){
    emp=JSON.parse(localStorage.getItem(key))
    result.innerHTML=`<p>employe name is ${emp.name}<p>
    <p>employe id is ${emp.id}<p>
    <p>employe designation is ${emp.designation}<p>
    <p>employe salary is ${emp.salary}<p>
    <p>employe experience is ${emp.experience}<p>
    `
   }
   else{
    result.innerHTML=""
    alert("employee not found")
   }
}
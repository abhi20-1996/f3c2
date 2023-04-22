//variables
var idx=0;
var count=0;
var nameInput=document.getElementById("eName");
var professionInput=document.getElementById("profession");
var ageInput=document.getElementById("age");
var myBtn=document.getElementById("btn");

myBtn.addEventListener("click", (event) =>{
    console.log(nameInput);
    event.preventDefault();
var name=nameInput.value;
var profession=professionInput.value;
var age=ageInput.value;
if(name=="" || profession=="" || age==""){
  document.getElementById("error").style.display="block";
  document.getElementById("error").style.color="red";
  document.getElementById("error").style.fontSize="20px"
}
else{
  document.getElementById("error").style.display="none";
  document.getElementById("default").style.display="none";
  document.getElementById("success").style.display="block";
  document.getElementById("success").style.color="#43FF78";
  document.getElementById("success").style.fontSize="20px";
  idx++;
  document.getElementById("employees").innerHTML+=`
  <div class="employeesBox" id="${idx}">
  <div id="employeesInfo">
    <span>${idx}.</span>
    <span>Name: ${name}</span>
    <span>Profession: ${profession}</span>
    <span>Age: ${age}</span>
  </div>
  <button id="del" onclick="deleteUser(${idx})">Delete User</button>
</div>
`;
}
document.getElementById("employeesForm").reset();
}); 

function deleteUser(id){
 userToDelete= document.getElementById(id);
 document.getElementById("employees").removeChild(userToDelete);
  count++;
  if(count==idx){
    idx=0;
      document.getElementById("default").style.display="block";
      document.getElementById("success").style.display="none";
  }
}

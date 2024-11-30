// declaring global array
let usersArray=[];
let index = 0;

function addUser(){

    let start = document.getElementById("start")
    start.classList.add('d-none');

   let resetBtn=  document.getElementById("resetBtn")
   resetBtn.classList.remove('d-none');

    let userName = document.getElementById("fullName").value.toUpperCase();

    let luckyNo = document.getElementById("luckyNo").value;

    // Create user object
    index = index + 1
    let user = {
        index : index,
        name : userName,
        luckyNo : luckyNo
    }
    
    // Push into my array
    usersArray.push(user);
    
    // Targetted success alert row
    let mySuccessAlert=  document.getElementById("successAlert");
    mySuccessAlert.classList.remove("d-none");

    // Help to hide success alert afte 5 sec
   setTimeout(()=>{
    mySuccessAlert.classList.add("d-none")
   },5000)

    //Doing input box value as blank    
    document.getElementById("fullName").value ="";
    document.getElementById("luckyNo").value ="";

    createBox(user);



}

function createBox(user){

    console.log(user);
    
    // let name = user.name.toUpperCase();
    // create div element
    let myDiv = document.createElement("div");

    // Adding requireed style to our above div col-sm-2 border rounded-2 p-3
    myDiv.classList.add("col-sm-3", "border" , "rounded-2" , "p-3", "my-2", "me-sm-4" , "card")

    // create first para tag and adding data
    let para1 = document.createElement("p");
    para1.innerHTML =`Token No : ${user.index}`;

    // create heading tag and adding data
    let h5 = document.createElement("h5");
    h5.innerHTML =`${user.name}`

    // create second para tag and adding data
    let para2 = document.createElement("p");
    para2.innerHTML =`Lucky No : ${user.luckyNo}`


    // Target my parent row
    let parentCard= document.getElementById("parentCard");
    parentCard.appendChild(myDiv);


    myDiv.appendChild(para1);
    myDiv.appendChild(h5);
    myDiv.appendChild(para2);

}

function chooseWinner(){

    if(usersArray.length==0){
       let dangerAlert= document.getElementById("dangerAlert")
       dangerAlert.classList.remove("d-none");

       setTimeout(()=>{
        dangerAlert.classList.add("d-none")
       },5000)

       return;
    }


    // random user logic{
    let min =0;
    let max = usersArray.length - 1;

   let winnerIndex= Math.floor(Math.random() * (max-min + 1)) + min
   console.log(usersArray[winnerIndex]);

   let winnerName = document.getElementById("winnerName")
   let winnerNo = document.getElementById("winnerNo")

   winnerName.innerHTML = `Name : ${usersArray[winnerIndex].name}`;
   winnerNo.innerHTML = ` Lucky No : ${usersArray[winnerIndex].luckyNo}`;

   let winnerCardId = document.getElementById("winnerCardId")
   winnerCardId.classList.remove("d-none")
   
}

function closeWinner(){
    let winnerCardId = document.getElementById("winnerCardId")
   winnerCardId.classList.add("d-none")
}


function resetUser(){
    usersArray = [];

    let start = document.getElementById("start")
    start.classList.remove("d-none");

    let parent = document.getElementById("parentCard");
    let childDivs = parent.querySelectorAll("div");
    childDivs.forEach((child) => {
        parent.removeChild(child);
    });

    let resetBtn = document.getElementById("resetBtn");
    resetBtn.classList.add('d-none');
}

let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');

let examCenter = ['delhi', 'pune', 'allahabad', 'jaipur', 'chandigarh', 'goa'];
let students = [];

let detailContainer = document.getElementById('output');
detailContainer.classList.add('hide');


// if(nameInput.value == "" || emailInput.value == ""){
//     submit = document.getElementById('submit');
//     submit.classList.add('hide');
// }
// else{
//     submit.classList.remove('hide');
    
// }


function displayinfo() {
    let detailContainer = document.getElementById('output');
    detailContainer.innerHTML = "";
    students.map((std) => {

        detailContainer.classList.remove('hide');
        let detaildiv = document.createElement('div');
        detaildiv.classList.add('detail');
        let nameelement = document.createElement('p');
        nameelement.innerText = std.namesave;
        let emailelement = document.createElement('p');
        emailelement.innerText = std.emailsave;
        let resultelement = document.createElement('p');

        detailContainer.appendChild(detaildiv);
        detaildiv.appendChild(nameelement);
        detaildiv.appendChild(emailelement);
        detaildiv.appendChild(resultelement);

        let randomcenter = Math.floor(Math.random() * examCenter.length);
        resultelement.innerText = examCenter[randomcenter];
        // console.log(examCenter[randomcenter]);
        // console.log(randomcenter);
    })
}

function center() {


    
    let student = {
        namesave: nameInput.value,
        emailsave: emailInput.value,
    }
    console.log(students)
    let emailCheck = students.filter((a) => {
        return a.emailsave == emailInput.value
    })
    if (emailCheck.length == 0) {
        students.push(student);
        displayinfo();
    }
    else {
        alert('user already exist.')
    }
}

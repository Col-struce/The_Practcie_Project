import {Add , letsgreet , namie , thisPerson , arr} from './modules.js' ;

console.log(`Test Module form modules.js ---> : ${Add(8,59)}`) ;
console.log(`Let's we ---> ${letsgreet()}`) ;
console.log(`The protagonist of Succession is ${namie}`) ;
console.log(`The Job title he needed is ${thisPerson.jobTitle} of Waystar Royco`) ;
console.log(`Today is ${arr[1]} Semptember 2026`) ;


// External Script
function showMassege() {
    alert("This is an goddamn External Script!!") ;
}

function shownumber() {
    alert("343") ;
}

// document.alert(shownumber) ;
// alert("Welcome to my website")

// innerHTML
function myFunction() {
    document.getElementById("demo").innerHTML= "Hello JavaScript";
}

// document.write("You're goddamn nuts!!");

// window.alert
window.alert("Welcome to my website")

// console.log
console.log(document.getElementById("demo"));

/* 
    this is comments on JavaScript
    Are you fucking nuts??!!
*/
console.log("What the fuck is this shit,man??!!")

a = 45;
b = 69;
c = a + b;
console.log(c);


// function fetchAndDisplayUsers() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Network response was not ok" + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         const usersContainer = document.getElementById("users-Container");
//         usersContainer.innerHTML = "" ; // Clear any existing content

//         data.forEach(user => {
//             const userDiv = document.createElement("div");
//             userDiv.innerHTML = `
//                 <h2>${user.name}</h2>
//                 <p><strong>Email : </strong>${user.email}</p>
//                 <p><strong>Phone : </strong>${user.phone}</p>
//                 <p><strong>Website : </strong>${user.website}</p>
//                 <p><strong>Company : </strong>${user.company.name}</p>
//                 <p><strong>Address : City : </strong>${user.address.city} , <strong>Zipcode : </strong>${user.address.zipcode} , 
//                 <strong>Suite : </strong>${user.address.suite}</p>
//             ` ;

//             usersContainer.appendChild(userDiv) ;
//         })
//     })
//     .catch(error => {
//         console.error("There was the problem with the fetch operation",error);
//     });
// }

// fetchAndDisplayUsers() ;

function fetchWithUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not OK",response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const userContainer = document.getElementById("users-Container");
        userContainer.innerHTML = "" ;

        data.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email : </strong>${user.email}</p>
                <p><strong>Phone : </strong>${user.phone}</p>
                <p><strong>Address : </strong><strong>Street : </strong>${user.address.street}, <strong>Suite : </strong>${user.address.suite},<strong>Zip Code : </strong>${user.address.zipcode}, <strong>City : </strong>${user.address.city}</p>
                <p><strong>Company : </strong>${user.company}</p>
                <p><strong>Website : </strong>${user.website}</p>
            ` ;
            userContainer.appendChild(userDiv);
        })
    })
    .catch(error => {
        console.log("There was the problems with the fetch operater",error);
    });
}

fetchWithUsers();
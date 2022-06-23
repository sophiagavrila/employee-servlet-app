console.log('Hello Javascript world!!!');

// grab the table  element from the page so
// we can modify how it looks and add elements

// var let const
let table = document.querySelector('table');
// this saves teh table element to the variable


let button = document.getElementById('all-emps')
// WHEN the button is clicked, we
// make a call to the server, fetch the JSON
// DATA and pasrse it and append it to the table

// button.addEventListener('click', sayHello)
button.addEventListener('click', fetchEmps);

function fetchEmps() {

    // Fetch API is modern interface that allows you
    // to make HTTP requests to a server and process the results that 
    // you get back asynchrnously
    let hostname = window.location.hostname;  // this will grab the IP of where it's deployed  

    // this is a template literal (introduced in ES6)
    fetch(`http://${hostname}:8080/employee-servlet-app/employees`)
    .then(response => response.json()) // trakes a json string and transforms
                                        // it to a javaScript object
    .then(obj => console.log(obj)); // print the JS obj to the console

}

// // object literal in JS
// let user = {

//     firstName: "first",
//     lastName: "last",
//     username : "bob",
//     passowrd : "secretpass"

// }


function sayHello() {

    console.log('Hello there!')

}
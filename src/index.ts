import "./index.scss";
import "./index.js";

function greeter(person) {
    return "Hello, " + person;
}

let user = "Ange Lee";

console.log(greeter(user));

// document.body.innerHTML = greeter(user);
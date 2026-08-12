let url = window.location.search;
let data = new URLSearchParams(url);
let name = data.get("name");
let email = data.get("email");
let age = data.get("age");
let skill = data.get("skill");
let day = data.get("day");

document.write(`Name: ${name}<br>`);
document.write(`Email: ${email}<br>`);
document.write(`Age: ${age}<br>`);
document.write(`Skill Level: ${skill}<br>`);
document.write(`Preferred Day: ${day}<br>`);
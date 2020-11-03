"use strict";

const link = "https://spreadsheets.google.com/feeds/list/1rGVQ4CfWb9x9UlASXHQa9WS7katdjPVRZKpaffObkdM/1/public/values?alt=json"
window.addEventListener("DOMContentLoaded", getData);
let jsonData = []

function getData() {
    fetch(link)
        .then(e => e.json())
        .then(data => {
            jsonData = data.feed.entry;
            showData(jsonData)
        });
}

let object_method = [];
let object_description = [];
let object_apply = [];

const array_number_method = document.querySelector("#array-number-method");
const chosen_method = document.querySelector("#chosen-method");
const method_p = document.querySelector("#method-p");
const actual_result = document.querySelector("#actual-result");

let array_method = 0;
let array_description = 0;
let array_apply = 0;

function showData(data) {
    //const myData = data.feed.entry;

    data.forEach(element => {
        object_method.push(element.gsx$namemethod.$t);
        object_description.push(element.gsx$description.$t);
        object_apply.push(element.gsx$apply.$t);
    });

    array_method = _.toArray(object_method);
    array_description = _.toArray(object_description);
    array_apply = _.toArray(object_apply);

    array_method.forEach(e => {
        let newOption = document.createElement("option");
        newOption.innerHTML = e;
        newOption.setAttribute("value", e);
        array_number_method.appendChild(newOption);
    })
}

array_number_method.addEventListener("change", function () {
    let searchedIndex = _.indexOf(array_method, array_number_method.value);
    chosen_method.innerHTML = array_apply[searchedIndex];
    method_p.textContent = array_description[searchedIndex];

    let lodash = array_apply[searchedIndex].toString();
    console.log(lodash);
    actual_result.textContent = eval(lodash);
})

const array = [1, 2, 3, 0, null, 4, 4, 5];
const second_array = [2, 4, 6, 8];

/* let users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
]; */

const show_array_number = document.querySelector("#array-number");
const show_array_number_2 = document.querySelector("#array-number-2");

show_array_number.innerHTML = `const array = [${array}]`;
show_array_number_2.innerHTML = `const second_array = [${second_array}]`;






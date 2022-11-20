/*
@file: Vote.js
@author: @rishisant
@date: 2022-19-11
*/


export function castVote(id, occur) {
    var votedfor = document.getElementsByClassName("vf")[occur];
    if (votedfor.innerHTML !== "Pick a name!") {
        return;
    }
    // console.log("hello" + id);
    // if (localStorage.getItem("voted") === "true") { return; }

    /* note that there will be multiple elements name1,name2,name3. we
    must use occurence to determine which className[index] to change the div on*/
    var selected_div = document.getElementById("name" + String(id));
    votedfor.innerHTML = "You voted for \"" + selected_div.innerHTML + "\"!";

    // goal is to set animation to cast_vote, and then at the end, set the values
    // accordingly, ie font color and background color (use setTimeout)
    selected_div.style.animation = "cast_vote 2s 1";
    setTimeout(() => {
        selected_div.style.backgroundColor = "#A22A2A";
        selected_div.style.color = "#D6D6D6";
        selected_div.style.animation = "";
    }, 2000);

    // set voted to true
    localStorage.setItem("voted", "true"); 

    return;
}

function tweet() {
    let msgTweet = document.querySelector("[contenteditable]").innerText.replace("\n", "<br>");
    let tweetHour = hour();
    let msgTweetOut = document.getElementById("tweetOut").innerHTML = msgTweet + " " + tweetHour;
}
let btn = document.getElementById("tweetButton");
btn.addEventListener("click", tweet);

function charactersCounter() {
    let msgTweet = document.querySelector("[contenteditable]").innerText;
    let charactersTypeds = msgTweet.length;
    let charactersLimit = 140;
    let charactersRemaining = charactersLimit - charactersTypeds;

    if (charactersRemaining > 10 && charactersRemaining <= 20) {
        document.getElementById("counter").style.color = "#800000";
    } else if (charactersRemaining < 10) {
        document.getElementById("counter").style.color = "#FF0000";
    }
    document.getElementById("counter").innerHTML = charactersRemaining;
}
let commentsTweet = document.getElementById("comments");
commentsTweet.addEventListener("keyup", charactersCounter);

function btnDisabled() {
    let msgTweet = document.querySelector("[contenteditable]").innerText;
    let charactersTypeds = msgTweet.length;

    if (msgTweet === null && msgTweet === "") {
        document.getElementById("tweetButton").disabled = true;
    } else if (charactersTypeds > 140) {
        document.getElementById("tweetButton").disabled = true;
    } else {
        document.getElementById("tweetButton").disabled = false;
    }
}
let btnDisabledEnabled = document.getElementById("comments");
btnDisabledEnabled.addEventListener("keyup", btnDisabled);

function hour() {
    let data = new Date();
    let hora = data.getHours();
    let min = data.getUTCMinutes();
    let str_hora = hora + ":" + min;
    return str_hora;
}

function postTweet() {
    let x = document.getElementById("postComments");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let btnDisplayPost = document.getElementById("tweetButton");
btnDisplayPost.addEventListener("click", postTweet);
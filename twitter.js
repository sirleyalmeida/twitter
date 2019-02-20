function tweet() {
    let msgTweet = document.querySelector("textarea").value;
    let tweetHour = hour();
    let msgTweetOut = document.getElementById("tweetOut").innerHTML = msgTweet + "\n" + tweetHour;
}
let btn = document.getElementById("tweetButton");
btn.addEventListener("click", tweet);

function charactersCounter() {
    let msgTweet = document.getElementById("comments").value;
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

function hour() {
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let str_hora = hora + ':' + min;
    return str_hora;
}
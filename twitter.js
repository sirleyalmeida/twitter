function tweetPost() {
	const msgTweet = document.querySelector("[contenteditable]").innerText.replace(/\n/g, "<br>");

	const newDiv = document.createElement("div");
	const time = document.createElement("p");
	time.setAttribute("class", "time");
	time.innerHTML = new Date().toLocaleString();
	const tweetUp = document.createElement("p");
	tweetUp.setAttribute("class", "tweet");
	tweetUp.innerHTML = msgTweet;
	newDiv.appendChild(time);
	newDiv.appendChild(tweetUp);
	const tweetOut = document.getElementById("tweetOut");
	tweetOut.insertBefore(newDiv, tweetOut.childNodes[0]);

	document.querySelector("[contenteditable]").innerText = "";
	btnDisabled();
	charactersCounter();
}
const btnT = document.getElementById("tweetButton");
btnT.addEventListener("click", tweetPost);

function charactersCounter() {
	const counter = document.getElementById("counter");
	const charTweet = document.querySelector("[contenteditable]").innerText;
  const charactersTypeds = charTweet.length;
  const charactersLimit = 140;
	const charactersRemaining = charactersLimit - charactersTypeds;

	if (charactersRemaining > 10 && charactersRemaining <= 20) {
		counter.style.color = "#800000";
	} else if (charactersRemaining < 10) {
		counter.style.color = "#FF0000";
	}
	  counter.innerHTML = charactersRemaining;
}
const commentsTweet = document.getElementById("comments");
commentsTweet.addEventListener("keyup", charactersCounter);

function btnDisabled() {
	const tweetButton = document.getElementById("tweetButton");
	const charTweet = document.querySelector("[contenteditable]").innerText;
	const charactersTypeds = charTweet.length;
	
	if (charTweet === null || charTweet === "") {
		tweetButton.disabled = true;
	} else if (charactersTypeds > 140) {
		tweetButton.disabled = true;
	} else {
		tweetButton.disabled = false;
	}
}
const btnDisabledEnabled = document.getElementById("comments");
btnDisabledEnabled.addEventListener("keyup", btnDisabled);

function postedTweet() {
	const postComments = document.getElementById("postComments");

	if (postComments.style.display === "none") {
		postComments.style.display = "none";
	} else {
		postComments.style.display = "block";
	}
}
const btnDisplayPost = document.getElementById("tweetButton");
btnDisplayPost.addEventListener("click", postedTweet);
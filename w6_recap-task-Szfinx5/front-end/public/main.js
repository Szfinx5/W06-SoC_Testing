const url = "http://localhost:3000";

const tweetsList = document.querySelector("#tweets-list");
const refreshTweetsButton = document.querySelector("#refresh-button");
const sendTweetButton = document.querySelector("#send-tweet-button");

refreshTweetsButton.addEventListener("click", refreshTweets);
sendTweetButton.addEventListener("click", postTweet);

async function refreshTweets() {
  const response = await fetch(`${url}/tweets`);
  const { payload } = await response.json();
  tweetsList.innerHTML = "";
  for (let i = 0; i < payload.length; i++) {
    renderTweet(payload[i]);
  }
}

async function postTweet() {
  const formData = gatherFormData();
  console.log(formData);
  const response = await fetch(`${url}/tweets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  console.log(data);
}

function gatherFormData() {
  const name = document.querySelector("#name-input").value;
  const tweet = document.querySelector("#tweet-input").value;
  return {
    name,
    tweet,
  };
}

function renderTweet(tweet) {
  const li = document.createElement("li");
  li.textContent = `${tweet.name}: ${tweet.tweet}`;
  tweetsList.appendChild(li);
}

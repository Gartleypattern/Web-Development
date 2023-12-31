// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector(".show-hide");
const commentWrapper = document.querySelector(".comment-wrapper");

commentWrapper.style.display = "none";

showHideBtn.onclick = function () {
  let showHideText = showHideBtn.textContent;
  if (showHideText === "Show comments") {
    showHideBtn.textContent = "Hide comments";
    commentWrapper.style.display = "block";
  } else {
    showHideBtn.textContent = "Show comments";
    commentWrapper.style.display = "none";
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector(".comment-form");
const nameField = document.querySelector("#name");
const commentField = document.querySelector("#comment");
const list = document.querySelector(".comment-container");

form.onsubmit = function (e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement("li");
  const namePara = document.createElement("p");
  const commentPara = document.createElement("p");
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = "";
  commentField.value = "";
}

function playAudio() {
  var audio = document.getElementsByTagName("audio")[0];
  audio.play();
}

function pauseAudio() {
  var audio = document.getElementsByTagName("audio")[0];
  audio.pause();
}

// Function to toggle the visibility of comments
function toggleComments() {
  var commentWrapper = document.querySelector(".comment-wrapper");
  var showHideButton = document.querySelector(".show-hide");

  // Toggle visibility of comments
  commentWrapper.classList.toggle("comments-hidden");

  // Update the aria-pressed attribute for accessibility
  var isPressed = commentWrapper.classList.contains("comments-hidden");
  showHideButton.setAttribute("aria-pressed", isPressed.toString());
}

// Event listener for the return key
document
  .querySelector(".show-hide")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      toggleComments();
    }
  });

// Event listener for click (for mouse users)
document.querySelector(".show-hide").addEventListener("click", toggleComments);

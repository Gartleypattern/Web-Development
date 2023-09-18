const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");
const letter = document.getElementById("letter");

showButton.addEventListener("click", function () {
  letter.style.display = "block";
});

hideButton.addEventListener("click", function () {
  letter.style.display = "none";
});

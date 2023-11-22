const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];
randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace(/:insertx:/g, name);
    newStory = newStory.replace(/Bob/g, name); // Replace 'Bob' with custom name
  }

  if (document.getElementById("uk").checked) {
    const weightInPounds = 300;
    const temperatureInFahrenheit = 94;

    const weightInStone = Math.round(weightInPounds / 14);
    const temperatureInCelsius = Math.round(
      ((temperatureInFahrenheit - 32) * 5) / 9
    );

    newStory = newStory.replace(/:inserty:/g, "the soup kitchen");
    newStory = newStory.replace(
      "94 fahrenheit",
      temperatureInCelsius + " centigrade"
    );
    newStory = newStory.replace("300 pounds", weightInStone + " stone");
  }

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  story.textContent = newStory;
  story.style.visibility = "visible";
}

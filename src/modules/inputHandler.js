import createAndDisplayLocationConditions from "./controller";

export let temperatureScale = 'C';
export let currentLocation = 'Winnipeg';

export function initializeSearchListener() {
  const searchForm = document.querySelector("form");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const input = formData.get('search');
    currentLocation = input;
    searchForm.reset();
    createAndDisplayLocationConditions(currentLocation);
  });
}

export function initializeScaleButtonListener() {
  const button = document.querySelector('.scale');

  button.addEventListener('click', () => {
    toggleScale();
    createAndDisplayLocationConditions(currentLocation);
  });
}

function toggleScale() {
  if (temperatureScale === 'C') {
    temperatureScale = 'F';
  }
  else {
    temperatureScale = 'C';
  }
}

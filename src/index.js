import './CSS/styles.css'
import './CSS/weather-icons.css'
import { initializeSearchListener } from './modules/inputHandler';
import { initializeScaleButtonListener } from './modules/inputHandler';
import createAndDisplayLocationConditions from './modules/controller';
import { currentLocation } from './modules/inputHandler';

initializeSearchListener();
initializeScaleButtonListener();

createAndDisplayLocationConditions(currentLocation);
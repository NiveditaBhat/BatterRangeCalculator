import "./css/style.css";
import "./scripts/imageImporter.js";
import BatterRangeCalculator from "./scripts/batterRangeCalculator.js";

const batterRangeCalculator = new BatterRangeCalculator();

batterRangeCalculator.setupEvents();

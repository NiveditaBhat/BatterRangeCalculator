# Battery Range Calculator

This is a simple project built with vanilla javascript that computes range for a hypotetic Tesla Model S.

## Features

- Clicking on the arrow-down icon in the first hero section points to the user to the
  battery range calculator.
- Battery range calculator is built for two types of the Tesla Model S that
  displays the maximum distance covered by each type of car, based on the user
  choices for speed, temperature (with and without heating/cooling), and wheel size.
  It has the following controls
  - A range of speeds from `70` to `140` km/h using steps of `10km`;
  - A range of temperatures from `-10º` to `40º` using steps of `10º`
  - A toggle for air conditioner/heating system. 
  - A wheel size selection with `19"` and `21"`.
- Depending on the distance, animation speed of the car wheels changes.

## Built With
- HTML
- CSS (Sass preprocessor)
- Javascript
- Webpack bundler

## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.
2. Clone the repository:
   ```sh
   git clone https://github.com/NiveditaBhat/BatterRangeCalculator.git
   ```
3. Install NPM packages at the project root
   ```sh
   npm install
   ```

## Usage
### Development
  Run the development server with hot module replacement:
   ```sh
   npm run start
   ```
  Open your browser and visit http://localhost:1234 to see the application.

### Production
Generate a production-ready build:
 ```sh
   npm run build
   ```
This will create optimized and minified files in the dist directory.

## Webpack Configuration
The project uses Webpack5 for bundling and optimizing assets. There are configurations for dev and production, webpack.dev.js and webpack.prod.js

## ESLint Configuration
The project uses ESLint to maintain code quality and adhere to coding standards. The ESLint configuration is defined in the .eslintrc.json file.

 ```sh
   npm run lint
   ```


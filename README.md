# Chef Claude

A React-based recipe suggestion app where users can input four or more cooking ingredients and receive a suggested recipe. The recipe is generated using the Mistral model from Hugging Face.

## Features
- Input at least four cooking ingredients.
- Fetch a suggested recipe using the Mistral AI model.
- Interactive UI with conditional rendering.
- Demonstrates React fundamentals, including `useState`, working with APIs, and conditional rendering.

## Technologies Used
- React
- JavaScript
- Hugging Face API (Mistral model)
- CSS for styling

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/recipe-suggester.git
   cd recipe-suggester
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your Hugging Face API key:
   ```sh
   HF_ACCESS_TOKEN=your_api_key_here
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
1. Enter at least four ingredients in the input field.
2. Click the "Get a recipe" button.
3. The app will call the Mistral model via Hugging Face API and display a suggested recipe.
4. If fewer than four ingredients are entered, the section with the "Get a recipe" button is not displayed.

## Code Structure
- `src/Main.jsx` - Main component managing state, API call, and user submission
- `src/components/IngredientsList.jsx` - Handles display of the ingredient list.
- `src/components/ClaudeRecipe.jsx` - Displays the suggested recipe.
- `src/components/ai.js` - Handles API requests.

## React Concepts Demonstrated
- `useState` for managing form input and API responses.
- Fetching data from an external API (Hugging Face's Mistral model).
- Conditional rendering for loading states.
- Working with forms.

## Future Enhancements
- Add a loading animation while fetching data.
- Expand support for multiple recipe models.
- Ingredient input verification

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.
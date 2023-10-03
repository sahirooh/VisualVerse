
# VisualVerse

VisualVerse is a creative project that harnesses the power of OpenAI's DALL-E API to generate captivating images from user-provided text. With an intuitive user interface built using Node.js, React.js, and Vite, VisualVerse allows users to transform their textual descriptions into visually stunning AI-generated imagery.

## Features

- **Text to Image Generation:** Transform textual descriptions into visually appealing images.
- **Creative Exploration:** Experiment with different phrases and sentences to visualize them in unique ways.
- **Interactive User Interface:** User-friendly interface for effortless text-to-image conversion.
- **OpenAI's DALL-E API:** Utilizes OpenAI's cutting-edge DALL-E API for high-quality image generation.
- **Social Media:** Explore user generated posts and share your own posts with the community.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- Node.js and npm (https://nodejs.org/)
- OpenAI API Key (Get it from [OpenAI](https://www.openai.com/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sahirooh/VisualVerse.git
   cd VisualVerse
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your OpenAI API Key:

   - Create a `.env` file in the root directory.
   - Add your OpenAI API key,
   - Add your MongoDB URL,
   - Add your Cloudinary Cloud name, api key and api secret to the `.env` file:

   ```
   OPENAI_API_KEY="your-openai-api-key"
   MONGODB_URL="your-mongodb-url"
   CLOUDINARY_CLOUD_NAME="your-cloudinary-account"
   CLOUDINARY_API_KEY="your-cloudinary-account"
   CLOUDINARY_API_SECRET="your-cloudinary-account"
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://127.0.0.1:5173`.

## Usage

1. Visit the web interface in your browser.
2. Enter your text description in the provided input field.
3. Click the "Generate" button to see the AI-generated image.
4. Explore different texts to see how the AI interprets them visually.
5. Click "share with the community" button to share your generated image with the community.
6. You can search all the user generated post in the home page.

## Contributing

We welcome contributions from the community! If you want to contribute to VisualVerse, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to your branch: `git push origin feature-name`
5. Submit a pull request detailing your changes.

## License

This project is licensed under the MIT License - see the [MIT](https://opensource.org/license/mit/) file for details.

-

Give a star if you like. Thank You.

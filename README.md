# News App

This is a news app project that consists of two sections: a news list and settings. In the settings section, you can customize the news selection.

## Features

- News list: Displays a list of news articles.
- Settings: Allows customization of the news selection.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/moroz-art-dev/news-app.git
```

2. Navigate to the project directory:

```bash
cd news-app
```

3. Create a `.env` file in the root directory and add the following line, replacing `<API_KEY>` with your API key obtained from [newsapi.org](https://newsapi.org/):

```plaintext
VITE_API_KEY=<API_KEY>
```

4. Install the dependencies using yarn:

```bash
yarn install
```

## Usage

1. Start the development server:

```bash
yarn dev
```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Demo

You can also check out the live demo of this app at [news-app-eight-amber.vercel.app](https://news-app-eight-amber.vercel.app). Please note that the news selection functionality will not work in the demo because the API key is restricted to developers.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React DOM: Library for rendering React components.
- React Hook Form: Form validation library for React.
- Axios: Promise-based HTTP client for making API requests.
- MobX: State management library.
- MobX React Lite: React bindings for MobX.
- FontAwesome: Icon library for React components.
- React HTML Parser: HTML parsing library for React.

## API

This project uses the [newsapi.org](https://newsapi.org/) API to fetch news data. Make sure you have an API key from newsapi.org and set it in the `.env` file as mentioned in the installation steps.

## License

This project is licensed under the [MIT License](LICENSE).
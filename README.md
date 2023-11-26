# Minify

## Overview

Minify is a simple yet powerful URL shortener built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with TypeScript. The URL shortener allows users to create shortened versions of long URLs, making them easier to share and manage.

## Features

- Shorten URLs: Paste a long URL, and a shorter URL is automatically generated.
- Custom URLs: Users can customize their shortened URLs, choosing their own custom alias.
- QR Code Generation: Generate QR codes for the shortened URLs for easy sharing.
- Analytics: Basic analytics to track the performance of shortened URLs, including click counts and origin tracking.
- Link History: View a history of created links for easy management and reuse.

## Tech Stack

- Frontend: React.js with TypeScript
- Backend: Node.js with Express.js and TypeScript
- Database: MongoDB
- Other Technologies: Mongoose for MongoDB modeling, QR code generation API for QR code functionality.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` in both the frontend and backend directories.
3. Set up MongoDB and update the connection string in the backend (`src/index.ts`).
4. Run the development server using `npm start` in both the frontend and backend directories.

## Usage

- Visit the frontend in your browser and start using the URL shortener.
- Customize your URLs, generate QR codes, and view link analytics.

## Folder structure (updated!)

```
server/
|-- src/
| |-- controllers/
| | |-- urlController.ts
| |-- routes/
| | |-- urlRoutes.ts
| |-- models/
| | |-- UrlModel.ts
| |-- services/
| | |-- urlService.ts
| |-- index.ts

```

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License.

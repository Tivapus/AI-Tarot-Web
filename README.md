# 🔮 AI Tarot Web

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Tivapus/AI-Tarot-Web/deploy.yml?branch=main)](https://github.com/Tivapus/AI-Tarot-Web/actions)

An interactive web application for AI-powered Tarot card readings. This project combines a modern frontend built with Next.js, a robust Go backend, and the power of Google's Gemini API to deliver insightful and personalized interpretations of your tarot spreads.

![AI Tarot Screenshot](https://raw.githubusercontent.com/Tivapus/AI-Tarot-Web/main/screenshot.png)

> _Note: I've added a path for a screenshot. Please add a file named `screenshot.png` to your main branch for it to display correctly._

## ✨ Features

- **Interactive Card Deck:** Shuffle and draw cards with a smooth, beautifully animated interface.
- **Multiple Spread Types:** Choose from different reading types (e.g., single card, three-card spread).
- **AI-Powered Interpretations:** Ask a specific question and receive a detailed interpretation of your chosen cards, powered by the Google Gemini API.
- **Responsive Design:** A seamless experience on both desktop and mobile devices.
- **Modern Tech Stack:** Built with performance, scalability, and developer experience in mind.

## 🛠️ Tech Stack

This project is a full-stack application composed of two main services.

| Service      | Technology                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white) |
| **Backend**  | ![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)                                                                                                                                                                                                                                                                                                                                     |
| **AI**       | ![Google Gemini](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google&logoColor=white)                                                                                                                                                                                                                                                                                                              |
| **DevOps**   | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)                                                                                                                                                                                           |

## 🚀 Getting Started

You can get a local copy up and running by following these simple steps. This project is fully containerized with Docker for easy setup.

### Prerequisites

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/products/docker-desktop/) and [Docker Compose](https://docs.docker.com/compose/)
- A **Google Gemini API Key**. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Tivapus/AI-Tarot-Web.git](https://github.com/Tivapus/AI-Tarot-Web.git)
    cd AI-Tarot-Web
    ```

2.  **Configure Environment Variables:**
    There are two services that need environment variables. Create a `.env` file in each directory.

    - **Backend (`ai-tarot-backend/`)**
      Create a file named `.env` inside the `ai-tarot-backend` directory:

      ```bash
      touch ai-tarot-backend/.env
      ```

      Add your Gemini API key to this file:

      ```env
      # ai-tarot-backend/.env
      GEMINI_API_KEY=your_google_gemini_api_key_here
      ```

    - **Frontend (`ai-tarot-frontend/`)**
      Create a file named `.env.local` inside the `ai-tarot-frontend` directory:
      ```bash
      touch ai-tarot-frontend/.env.local
      ```
      Add the backend API URL. When running with Docker Compose, the service name `ai-tarot-backend` acts as the hostname.
      ```env
      # ai-tarot-frontend/.env.local
      NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
      ```

3.  **Build and Run with Docker Compose:**
    From the root directory of the project, run the following command:

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker images for both the frontend and backend and start the services.

4.  **Access the Application:**
    - Frontend (Next.js): [http://localhost:3000](http://localhost:3000)
    - Backend (Go): [http://localhost:8080](http://localhost:8080)

## 🕹️ Usage

1.  Navigate to the homepage at [http://localhost:3000](http://localhost:3000).
2.  Select the type of reading you want (e.g., 1-card or 3-card spread).
3.  Enter the question you want to ask the cards.
4.  Click the "Shuffle" button to shuffle the deck.
5.  Select the required number of cards from the fanned deck.
6.  Once you've made your selections, you will be taken to the results page to see the AI-generated interpretation of your reading.

## 🔌 API Endpoints

The Go backend exposes the following REST API endpoint:

- **`POST /api/interpret`**
  - Receives a user's question and the names of the selected cards, and returns an AI-generated interpretation from the Gemini API.
  - **Request Body:**
    ```json
    {
      "question": "What should I focus on in my career?",
      "cards": ["The Magician", "The Sun", "Temperance"]
    }
    ```
  - **Success Response (200 OK):**
    ```json
    {
      "interpretation": "The combination of The Magician, The Sun, and Temperance suggests..."
    }
    ```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Tivapus/AI-Tarot-Web/issues).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Contact

Tivapus - [GitHub](https://github.com/Tivapus)

Project Link: [https://github.com/Tivapus/AI-Tarot-Web](https://github.com/Tivapus/AI-Tarot-Web)

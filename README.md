# SynChronize - Time Tracking and Productivity Web App

Welcome to SynChronize, a powerful time tracking and productivity web application for authenticated users.

## Features

- **Time Tracking:**
  - Use the timer to track work hours in real-time.
  - Enter time conveniently in a weekly timesheet.
  - Visualize and manage your time with the calendar feature.

- **Calendar for Events and Reminders:**
  - Plan and organize your schedule with the integrated calendar.
  - Set events, reminders, and receive notifications.

- **Activity History:**
  - Analyze and export detailed reports of your tracked time.
  - View your activity log to see where you spent your time.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Firebase Integration

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.

2. **Authentication Setup:**
   - Configure Firebase Authentication to control user access.

3. **Firestore Setup:**
   - Set up Firestore to store user-specific data such as tracked time and activity history.

4. **Firebase Configuration:**
   - Copy your Firebase configuration from the Firebase Console and replace the placeholder in `src/firebase/config.js` with your actual Firebase config.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/synchronize.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd synchronize
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Running Locally

To run the application locally, use the following command:

```bash
npm run dev
```
This will start the development server, and you can access the application in your browser at http://localhost:3000

## Usage

1. **Sign Up:**
   - Create an account using your email and password.

2. **Sign In:**
   - Log in with your credentials.

3. **Explore and Utilize Features:**
   - Use the timer, calendar, and activity log to manage your time effectively.

# Task Manager Application

## Overview

This is a simple task manager application that allows users to create, manage, and track tasks. It features a clean, dark-themed UI built with Tailwind CSS, and it stores tasks in the browser's local storage for persistent data. The application provides basic functionalities such as adding, editing, deleting, and marking tasks as completed. It also includes task prioritization and due dates.

## Features

- **Add, Edit, and Delete Tasks:** Users can manage tasks efficiently.
- **Task Priority:** Set priority levels (Low, Medium, High) to organize tasks.
- **Task Due Date:** Set due dates to keep track of deadlines.
- **Dark-Themed UI:** Built using Tailwind CSS for a modern and responsive interface.
- **Task Storage:** Tasks are saved in the browser's local storage.

## Setup Instructions

1. **Clone the repository:**
    git clone https://github.com/yourusername/task-manager.git

2. **Navigate to the project folder:**
    cd task-manager

3. **Install dependencies: Ensure that you have Node.js installed, then run:**
    npm install

4. **Run the application: After installing dependencies, start the project with:**
    npm start

    This will launch the application locally at http://localhost:3000.

## Assumptions Made During Development

- **No Backend:** The application is built to work with local storage only and doesn’t require a backend server for now. Future versions may integrate a database like MongoDB or Firebase for data persistence across devices.
- **Browser Compatibility:** This project assumes that users are using modern browsers that support local storage and ES6 JavaScript features.
- **No User Authentication:** The application does not have user accounts; tasks are saved locally, and users won’t be able to access tasks across different devices unless integrated with a cloud database.

## Future Improvements

1. Recurring tasks support.
2. Drag-and-drop task reordering.
3. Task reminder notifications.
4. Integration with a cloud database for cross-device synchronization.
5. User authentication for a personalized experience.
# Classroom Management Web App

## Overview

This web app is a customizable classroom management tool that allows teachers to manage key classroom tasks such as tracking attendance, assigning homework, sending announcements, and viewing student profiles. The platform is designed to offer an intuitive interface that can be tailored to the unique needs of individual classrooms, ensuring that teachers have full control over their administrative workflow.

## Features

- **Attendance Tracking**: Teachers can mark student attendance for each class and view detailed attendance reports.
- **Homework Assignment Management**: Teachers can create and assign homework tasks, set deadlines, and track student submissions.
- **Announcements & Notifications**: Teachers can send announcements to the class and notify students of important events, deadlines, and updates.
- **Customizable Dashboard**: Teachers can configure their dashboard to display the most relevant information, such as upcoming assignments, recent attendance records, and student activity.
- **Student Profiles**: View and manage detailed profiles of each student, including contact information, performance data, and attendance history.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, ReactJS
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB (with Mongoose ORM)
- **File Storage**: Cloudinary (for image and file uploads)
- **Middleware**: Multer (for file uploads)
- **Authentication**: JSON Web Token (JWT) for secure login and user sessions
- **Version Control**: Git and GitHub

## Installation

### Prerequisites

Ensure that you have the following installed on your system:
- **Node.js** (v14.x or higher)
- **MongoDB** (local or cloud-based)
- **Cloudinary** account for file storage (or you can modify the app to use another storage provider)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/YourUsername/shiksha-shetu.git
    cd shiksha-shetu
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   
    Create a `.env` file in the root directory and add the following details:
    
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4. Start the application:

    ```bash
    npm start
    ```

   The server will start on `http://localhost:8000` (or the port defined in your environment variables).

### Cloudinary Setup

To store images and files, you need to have a Cloudinary account. Once set up, configure the following values in your `.env` file:
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

### MongoDB Setup

Make sure to have a running instance of MongoDB (either locally or a cloud provider like MongoDB Atlas). Replace the `MONGO_URI` in your `.env` file with your MongoDB connection string.

## API Endpoints

### User Routes

- `POST /users/register`: Register a new user (teacher or student)
- `POST /users/login`: Login and receive a JWT token
- `GET /users/profile`: Get the profile of the logged-in user

### Announcements Routes

- `POST /announcements`: Create a new announcement
- `GET /announcements`: Get all announcements


### Lecture Notes Routes

- `POST /lecturenotes`: Upload lecture notes
- `GET /lecturenotes`: Retrieve all lecture notes


### Lab Assignments Routes

- `POST /labassignment`: Create a new lab assignment
- `GET /labassignment`: Get all lab assignments
- `GET /labassignment/:id`: Get details of a specific lab assignment
- `POST /labassignment/:id/submissions`: Submit an assignment
- `GET /labassignment/:id/submissions`: View all submissions for a specific lab assignment

### Attendance Routes

- `POST /attendance`: Mark attendance for students
- `GET /attendance`: Get attendance records
- `GET /attendance/:studentemail`: Get attendance for a specific student

### File Upload (Profile Photo)

- `POST /profile/uploadProfilePhoto`: Upload a profile photo using Multer and Cloudinary

## How It Works

### User Authentication
- JWT is used for authentication. A user must log in to obtain an access token, which is required to access protected routes like managing assignments, announcements, or attendance.

### File Management
- Multer is used to handle file uploads from users. For example, teachers can upload lecture notes and lab assignments.
- Cloudinary is used to store the uploaded files, providing secure cloud storage and quick retrieval of files, including profile photos, lecture notes, and lab assignments.

### Announcements & Notifications
Teachers can easily send announcements and notifications to their students. Announcements can be time-sensitive and are displayed to all students in the course.

### Homework Management
Teachers can create and assign homework or lab assignments to students. Students can view all their pending assignments and submit their work before the due date.

### Lecture Notes
Teachers can post Lecture Notes. Students can view all the Lecture Notes of particular courses.

### Attendance Tracking
Teachers can track attendance for each student, and students can view their attendance history. 

## Future Enhancements

- **Grades Management**: Add functionality to allow teachers to grade assignments and provide feedback.
- **Parent Access**: Allow parents to access their child's performance and attendance reports.
- **Live Chat**: Integrate a real-time chat feature for better communication between students and teachers.
- **Mobile App**: Build a mobile app version to make the platform more accessible to users.

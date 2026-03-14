## AI Model (Google Colab)

You can run the AI virtual try-on model here:

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/#scrollTo=c951t_-W7oD8&fileId=https%3A//huggingface.co/yisol/IDM-VTON.ipynb)# Virtual-Tryon


# 👗 Virtual Try-On AI Platform

An AI-powered platform that allows users to **virtually try on
clothing** by uploading their photo and a clothing image. The system
uses a deep learning virtual try-on model to generate a realistic image
of the person wearing the selected outfit.

------------------------------------------------------------------------

## 🚀 Features

-   Upload **person image**
-   Upload **clothing image**
-   AI-powered **virtual try-on generation**
-   Fast **image processing**
-   Clean and responsive **frontend UI**
-   Cloud-based **image storage**

------------------------------------------------------------------------

## 🏗️ Project Architecture

This project is divided into three main parts:

### 1️⃣ Frontend

The frontend provides a user interface where users can upload images and
view the generated virtual try-on result.

**Technologies Used** - React - Tailwind CSS - Axios

**Features** - Image upload - Image preview - Send request to backend -
Display generated output image

------------------------------------------------------------------------

### 2️⃣ Backend

The backend handles API requests, manages image uploads, and
communicates with the AI model.

**Technologies Used** - Node.js - Express.js - Multer - Cloudinary

**Responsibilities** - Receive images from frontend - Upload images to
Cloudinary - Send images to AI model - Return generated image to
frontend

------------------------------------------------------------------------

### 3️⃣ AI Model

The AI model performs the **virtual try-on generation** by combining the
person image and clothing image.

**Model Used** - IDM-VTON

**Process** 1. Take user image 2. Take clothing image 3. Run model
inference 4. Generate final try-on image

The model is executed using **Python in a Google Colab environment**.

------------------------------------------------------------------------

## 📂 Project Structure

    virtual-tryon
    │
    ├── frontend
    │   ├── React UI
    │   └── Image upload interface
    │
    ├── backend
    │   ├── Express server
    │   ├── API routes
    │   └── Cloudinary integration
    │
    ├── ai-model
    │   └── virtual_tryon_model.ipynb
    │
    └── README.md

------------------------------------------------------------------------

## ⚙️ Installation

### 1️⃣ Clone the Repository

    git clone https://github.com/PayalA25/Virtual-Tryon.git
    cd Virtual-Tryon

------------------------------------------------------------------------

### 2️⃣ Backend Setup

    cd backend
    npm install

Create `.env` file

    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

Run backend server

    npm start

------------------------------------------------------------------------

### 3️⃣ Frontend Setup

    cd frontend
    npm install
    npm run dev

------------------------------------------------------------------------

## 📸 How It Works

1.  User uploads **person image**
2.  User uploads **clothing image**
3.  Frontend sends images to backend
4.  Backend uploads images to Cloudinary
5.  AI model generates **virtual try-on result**
6.  Generated image is returned and displayed to the user

------------------------------------------------------------------------

## 🌐 Future Improvements

-   Support multiple clothing categories
-   Real-time virtual try-on
-   Improve mobile responsiveness
-   Deploy AI model on GPU server
-   Add authentication system

------------------------------------------------------------------------

## 👩‍💻 Author

**Payal Abhale**

GitHub:\
https://github.com/PayalA25

------------------------------------------------------------------------

⭐ If you like this project, consider giving it a **star on GitHub**!

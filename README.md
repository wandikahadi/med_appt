# 🏥 StayHealthy

StayHealthy adalah aplikasi web layanan kesehatan yang memungkinkan pengguna untuk:

- Mencari dokter berdasarkan spesialisasi
- Melakukan booking appointment
- Instant consultation dengan dokter
- Mengelola profil pengguna
- Melihat dan mengunduh laporan medis (PDF)
- Login dan registrasi akun

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- Logout
- Session Storage Authentication

### User Profile
- View Profile
- Edit Profile
- Update Name and Phone Number
- Email hanya dapat dilihat (readonly)

### Appointments
- Search doctor by speciality
- Book appointment
- Cancel appointment
- Notification appointment

### Instant Consultation
- Search doctor instantly
- Book consultation
- Auto generate date and time
- Real-time notification update

### Reports
- View Medical Report
- Download Medical Report as PDF
- Patient Information
- Prescription Information

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- ReactJS Popup
- jsPDF

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Express Validator

---

## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Notification.jsx
│   ├── DoctorCard/
│   ├── DoctorCardIC/
│   ├── AppointmentForm/
│   ├── AppointmentFormIC/
│   └── InstantConsultation/
│
├── pages/
│   ├── Home.jsx
│   ├── Appointment.jsx
│   ├── Reviews.jsx
│   ├── HealthBlog.jsx
│   ├── Profile.jsx
│   ├── ProfileEdit.jsx
│   ├── Reports.jsx
│   └── auth/
│       ├── Login.jsx
│       └── Sign_Up.jsx
│
├── layouts/
│
├── AppRoutes.jsx
├── App.jsx
└── config.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/stayhealthy.git
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

atau

```bash
npm start
```

---

### Backend

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

Run server

```bash
npm start
```

atau

```bash
nodemon index.js
```

---

## 🔐 API Endpoints

### Authentication

#### Register

```http
POST /api/auth/register
```

Body

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "phone": "08123456789",
  "password": "123456"
}
```

---

#### Login

```http
POST /api/auth/login
```

Body

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

### User

#### Get User Profile

```http
GET /api/auth/user
```

Headers

```http
email: john@gmail.com
```

---

#### Update User

```http
PUT /api/auth/user
```

Headers

```http
email: john@gmail.com
```

Body

```json
{
  "name": "John Doe Updated",
  "phone": "08123456789"
}
```

---

## 💾 Session Storage

Application stores:

```javascript
sessionStorage.setItem("auth-token", token);
sessionStorage.setItem("email", email);
sessionStorage.setItem("name", name);
sessionStorage.setItem("phone", phone);
```

---

## 💾 Local Storage

Appointment Information

```javascript
doctorData
appointmentData
```

Example

```json
{
  "doctorName": "Dr. Denis Raj",
  "doctorSpeciality": "Dentist",
  "name": "Jasmine",
  "phoneNumber": "8568986412",
  "appointmentDate": "2024-06-01",
  "timeSlot": "09:00 AM"
}
```

---

## 📄 Report Generation

StayHealthy menggunakan:

```bash
jspdf
```

untuk:

- View Report
- Download Report
- Generate PDF Prescription

Install:

```bash
npm install jspdf
```

---

## 📸 Screens

### Home Page

- Search doctor
- Health services

### Appointment Page

- Search by speciality
- Book appointment

### Instant Consultation

- Consult instantly
- Real-time booking

### Profile

- View profile
- Edit profile

### Reports

- View PDF
- Download PDF

---

## 👨‍💻 Author

Developed by:

**Your Name**

StayHealthy Healthcare Management System
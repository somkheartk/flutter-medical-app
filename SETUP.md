# Quick Start Guide - คู่มือเริ่มต้นด่วน

## การติดตั้งและรันโปรเจค

### 1. ติดตั้ง Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

Backend จะรันที่: `http://localhost:3000`

### 2. ติดตั้ง Flutter App

**ข้อกำหนดเบื้องต้น:**
- ติดตั้ง Flutter SDK: https://flutter.dev/docs/get-started/install
- ดาวน์โหลดฟอนต์ Kanit จาก Google Fonts: https://fonts.google.com/specimen/Kanit

**ขั้นตอนการติดตั้ง:**

1. ดาวน์โหลดไฟล์ฟอนต์ Kanit และวางไว้ใน `flutter_app/assets/fonts/`:
   - Kanit-Regular.ttf
   - Kanit-Bold.ttf
   - Kanit-Light.ttf
   - Kanit-Medium.ttf

2. รันคำสั่ง:
```bash
cd flutter_app
flutter pub get
flutter run
```

## ทดสอบ API

### Health Check
```bash
curl http://localhost:3000/api/health
```

### ดูรายการผู้ป่วย
```bash
curl http://localhost:3000/api/patients
```

### ดูรายการนัดหมาย
```bash
curl http://localhost:3000/api/appointments
```

### สร้างผู้ป่วยใหม่
```bash
curl -X POST http://localhost:3000/api/patients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ทดสอบ ทดลอง",
    "age": 30,
    "gender": "ชาย",
    "phone": "084-567-8901"
  }'
```

### สร้างนัดหมายใหม่
```bash
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "patientName": "ทดสอบ ทดลอง",
    "date": "2024-11-20",
    "time": "14:00",
    "doctor": "นพ. ทดสอบ ดีมาก",
    "status": "pending"
  }'
```

## โครงสร้างโปรเจค

### Flutter App
```
flutter_app/
├── lib/
│   ├── main.dart           # Entry point with Kanit font config
│   ├── models/             # Data models
│   │   ├── appointment.dart
│   │   └── patient.dart
│   ├── screens/            # UI screens
│   │   ├── home_screen.dart
│   │   ├── appointments_screen.dart
│   │   └── patients_screen.dart
│   └── services/           # API services
│       └── api_service.dart
└── pubspec.yaml            # Dependencies and assets
```

### NestJS Backend
```
backend/
└── src/
    ├── main.ts             # Entry point
    ├── app.module.ts       # Main module
    ├── appointments/       # Appointments module
    │   ├── appointments.controller.ts
    │   ├── appointments.service.ts
    │   └── appointments.module.ts
    └── patients/           # Patients module
        ├── patients.controller.ts
        ├── patients.service.ts
        └── patients.module.ts
```

## คุณสมบัติหลัก

### Flutter App
- ✅ ใช้ Kanit font ทั้งแอป
- ✅ UI ภาษาไทย
- ✅ จัดการนัดหมาย (CRUD)
- ✅ จัดการผู้ป่วย (CRUD)
- ✅ เชื่อมต่อ Backend API

### NestJS Backend
- ✅ RESTful API
- ✅ CORS enabled for Flutter
- ✅ TypeScript
- ✅ Modular architecture
- ✅ Sample data included

## หมายเหตุ

- Backend ใช้ in-memory storage (ข้อมูลจะหายเมื่อรีสตาร์ท)
- สำหรับ production ควรใช้ database (MongoDB, PostgreSQL, etc.)
- Kanit font files ต้องดาวน์โหลดแยกจาก Google Fonts

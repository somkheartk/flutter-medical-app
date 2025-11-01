# Flutter Medical App

แอปพลิเคชันทางการแพทย์ที่พัฒนาด้วย Flutter และ NestJS

## คุณสมบัติ (Features)

- 📱 หน้าจอหลัก (Home Screen) - แสดงสถิติและเมนูหลัก
- 📅 การจัดการนัดหมาย (Appointments Management) - จัดการนัดหมายของผู้ป่วย
- 👥 การจัดการผู้ป่วย (Patient Management) - จัดการข้อมูลผู้ป่วย
- 🔤 ใช้ฟอนต์ Kanit สำหรับภาษาไทย

## โครงสร้างโปรเจค (Project Structure)

```
flutter-medical-app/
├── flutter_app/          # Flutter frontend
│   ├── lib/
│   │   ├── main.dart
│   │   ├── models/       # Data models
│   │   ├── screens/      # UI screens
│   │   └── services/     # API services
│   ├── assets/
│   │   └── fonts/        # Kanit font files
│   └── pubspec.yaml
└── backend/              # NestJS backend
    ├── src/
    │   ├── main.ts
    │   ├── appointments/
    │   └── patients/
    └── package.json
```

## การติดตั้ง (Installation)

### Flutter App

1. ติดตั้ง Flutter: https://flutter.dev/docs/get-started/install
2. ดาวน์โหลดฟอนต์ Kanit จาก Google Fonts และวางไว้ใน `flutter_app/assets/fonts/`
3. รันคำสั่ง:

```bash
cd flutter_app
flutter pub get
flutter run
```

### NestJS Backend

1. ติดตั้ง Node.js และ npm
2. รันคำสั่ง:

```bash
cd backend
npm install
npm run start:dev
```

## การใช้งาน (Usage)

1. เริ่มต้น Backend server ที่ port 3000
2. เริ่มต้น Flutter app
3. แอปจะเชื่อมต่อไปยัง backend API อัตโนมัติ

## เทคโนโลยีที่ใช้ (Technologies)

- **Frontend**: Flutter
- **Backend**: NestJS
- **Font**: Kanit (Google Fonts)
- **Language**: Dart, TypeScript

## API Endpoints

- `GET /api/appointments` - รายการนัดหมายทั้งหมด
- `POST /api/appointments` - สร้างนัดหมายใหม่
- `DELETE /api/appointments/:id` - ลบนัดหมาย
- `GET /api/patients` - รายการผู้ป่วยทั้งหมด
- `POST /api/patients` - สร้างข้อมูลผู้ป่วยใหม่
- `DELETE /api/patients/:id` - ลบข้อมูลผู้ป่วย
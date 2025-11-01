import { Injectable } from '@nestjs/common';
import { Patient } from './patient.interface';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [
    {
      id: '1',
      name: 'สมชาย ใจดี',
      age: 45,
      gender: 'ชาย',
      phone: '081-234-5678',
    },
    {
      id: '2',
      name: 'สมหญิง สวยงาม',
      age: 38,
      gender: 'หญิง',
      phone: '082-345-6789',
    },
    {
      id: '3',
      name: 'วิชัย สมบูรณ์',
      age: 52,
      gender: 'ชาย',
      phone: '083-456-7890',
    },
  ];

  findAll(): Patient[] {
    return this.patients;
  }

  findOne(id: string): Patient | undefined {
    return this.patients.find((patient) => patient.id === id);
  }

  create(patient: Omit<Patient, 'id'>): Patient {
    const newPatient: Patient = {
      id: Date.now().toString(),
      ...patient,
    };
    this.patients.push(newPatient);
    return newPatient;
  }

  update(id: string, patient: Partial<Patient>): Patient | null {
    const index = this.patients.findIndex((p) => p.id === id);
    if (index === -1) return null;

    this.patients[index] = {
      ...this.patients[index],
      ...patient,
    };
    return this.patients[index];
  }

  delete(id: string): boolean {
    const index = this.patients.findIndex((p) => p.id === id);
    if (index === -1) return false;

    this.patients.splice(index, 1);
    return true;
  }
}

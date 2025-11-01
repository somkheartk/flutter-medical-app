import { Injectable } from '@nestjs/common';
import { Appointment } from './appointment.interface';

@Injectable()
export class AppointmentsService {
  private appointments: Appointment[] = [
    {
      id: '1',
      patientName: 'สมชาย ใจดี',
      date: '2024-11-15',
      time: '09:00',
      doctor: 'นพ. สมศักดิ์ ชาญกล',
      status: 'confirmed',
    },
    {
      id: '2',
      patientName: 'สมหญิง สวยงาม',
      date: '2024-11-16',
      time: '10:30',
      doctor: 'พญ. สุดา แก้วกัน',
      status: 'pending',
    },
  ];

  findAll(): Appointment[] {
    return this.appointments;
  }

  findOne(id: string): Appointment | undefined {
    return this.appointments.find((appointment) => appointment.id === id);
  }

  create(appointment: Omit<Appointment, 'id'>): Appointment {
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      ...appointment,
    };
    this.appointments.push(newAppointment);
    return newAppointment;
  }

  update(id: string, appointment: Partial<Appointment>): Appointment | null {
    const index = this.appointments.findIndex((a) => a.id === id);
    if (index === -1) return null;

    this.appointments[index] = {
      ...this.appointments[index],
      ...appointment,
    };
    return this.appointments[index];
  }

  delete(id: string): boolean {
    const index = this.appointments.findIndex((a) => a.id === id);
    if (index === -1) return false;

    this.appointments.splice(index, 1);
    return true;
  }
}

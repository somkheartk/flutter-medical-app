export interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  doctor: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

class Appointment {
  final String id;
  final String patientName;
  final String date;
  final String time;
  final String doctor;
  final String status; // pending, confirmed, cancelled

  Appointment({
    required this.id,
    required this.patientName,
    required this.date,
    required this.time,
    required this.doctor,
    required this.status,
  });

  factory Appointment.fromJson(Map<String, dynamic> json) {
    return Appointment(
      id: json['id']?.toString() ?? '',
      patientName: json['patientName']?.toString() ?? '',
      date: json['date']?.toString() ?? '',
      time: json['time']?.toString() ?? '',
      doctor: json['doctor']?.toString() ?? '',
      status: json['status']?.toString() ?? 'pending',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'patientName': patientName,
      'date': date,
      'time': time,
      'doctor': doctor,
      'status': status,
    };
  }
}

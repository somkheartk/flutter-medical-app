import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/appointment.dart';
import '../models/patient.dart';

class ApiService {
  // Change this to your backend URL
  static const String baseUrl = 'http://localhost:3000/api';

  // Appointments endpoints
  Future<List<Appointment>> getAppointments() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/appointments'));
      
      if (response.statusCode == 200) {
        final List<dynamic> jsonList = json.decode(response.body);
        return jsonList.map((json) => Appointment.fromJson(json)).toList();
      } else {
        throw Exception('Failed to load appointments');
      }
    } catch (e) {
      // Log error for debugging
      print('Error fetching appointments: $e');
      // Return empty list as fallback
      return [];
    }
  }

  Future<Appointment> createAppointment(Appointment appointment) async {
    final response = await http.post(
      Uri.parse('$baseUrl/appointments'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(appointment.toJson()),
    );

    if (response.statusCode == 201) {
      return Appointment.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to create appointment');
    }
  }

  Future<void> deleteAppointment(String id) async {
    final response = await http.delete(
      Uri.parse('$baseUrl/appointments/$id'),
    );

    if (response.statusCode != 200 && response.statusCode != 204) {
      throw Exception('Failed to delete appointment');
    }
  }

  // Patients endpoints
  Future<List<Patient>> getPatients() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/patients'));
      
      if (response.statusCode == 200) {
        final List<dynamic> jsonList = json.decode(response.body);
        return jsonList.map((json) => Patient.fromJson(json)).toList();
      } else {
        throw Exception('Failed to load patients');
      }
    } catch (e) {
      // Log error for debugging
      print('Error fetching patients: $e');
      // Return empty list as fallback
      return [];
    }
  }

  Future<Patient> createPatient(Patient patient) async {
    final response = await http.post(
      Uri.parse('$baseUrl/patients'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(patient.toJson()),
    );

    if (response.statusCode == 201) {
      return Patient.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to create patient');
    }
  }

  Future<void> deletePatient(String id) async {
    final response = await http.delete(
      Uri.parse('$baseUrl/patients/$id'),
    );

    if (response.statusCode != 200 && response.statusCode != 204) {
      throw Exception('Failed to delete patient');
    }
  }
}

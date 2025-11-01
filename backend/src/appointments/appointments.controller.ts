import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment.interface';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  findAll(): Appointment[] {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Appointment {
    const appointment = this.appointmentsService.findOne(id);
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return appointment;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() appointment: Omit<Appointment, 'id'>): Appointment {
    return this.appointmentsService.create(appointment);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() appointment: Partial<Appointment>,
  ): Appointment {
    const updated = this.appointmentsService.update(id, appointment);
    if (!updated) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return updated;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): void {
    const deleted = this.appointmentsService.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
  }
}

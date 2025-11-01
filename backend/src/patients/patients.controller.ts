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
import { PatientsService } from './patients.service';
import { Patient } from './patient.interface';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  findAll(): Patient[] {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Patient {
    const patient = this.patientsService.findOne(id);
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return patient;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() patient: Omit<Patient, 'id'>): Patient {
    return this.patientsService.create(patient);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() patient: Partial<Patient>,
  ): Patient {
    const updated = this.patientsService.update(id, patient);
    if (!updated) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return updated;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): void {
    const deleted = this.patientsService.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
  }
}

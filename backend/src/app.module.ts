import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [AppointmentsModule, PatientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

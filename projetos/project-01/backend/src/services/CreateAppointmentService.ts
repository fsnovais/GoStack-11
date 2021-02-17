import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import { getCustomRepository} from 'typeorm';
import {startOfHour} from 'date-fns';

import AppError from '../errors/AppError'

interface requestDTO {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {

  public async execute({provider_id, date} : requestDTO) : Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(
     appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw new AppError("This appointment is already booked.");
      }

    const appointment = appointmentRepository.create({
      provider_id,
      date: appointmentDate
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;

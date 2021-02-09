import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import { getCustomRepository} from 'typeorm';
import {startOfHour} from 'date-fns';

interface requestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {

  public async execute({provider, date} : requestDTO) : Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(
     appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw Error("This appointment is already booked.");
      }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;

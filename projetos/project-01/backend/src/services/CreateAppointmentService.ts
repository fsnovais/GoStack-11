import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import {startOfHour} from 'date-fns';

interface requestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  constructor(appointmentRepository : AppointmentsRepository) {
    this.appointmentRepository = appointmentRepository;
  }
  private appointmentRepository : AppointmentsRepository;

  public execute({provider, date} : requestDTO) : Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentRepository.findByDate(
     appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw Error("This appointment is already booked.");
      }

    const appointment = this.appointmentRepository.create({
      provider,
      date: appointmentDate
    });
    return appointment;
  }
}

export default CreateAppointmentService;

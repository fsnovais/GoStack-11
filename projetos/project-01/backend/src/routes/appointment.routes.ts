import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import {getCustomRepository} from 'typeorm';

const appointmentRouter = Router();

appointmentRouter.post('/', async (request, response) => {
try {
  const { provider, date } = request.body;

  const appointmentDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({provider, date: appointmentDate})

  return response.json(appointment);
} catch (err) {
  return response.status(400).json({error: err.message})
}
}
);

appointmentRouter.get('/', async (request, response) => {
  const appointmentRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentRepository.find();
  return response.json(appointments);
});

export default appointmentRouter;

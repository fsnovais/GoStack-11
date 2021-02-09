import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentRouter = Router();
const appointmentRepository = new AppointmentsRepository();


appointmentRouter.post('/', (request, response) => {
try {
  const { provider, date } = request.body;

  const createAppointment = new CreateAppointmentService(appointmentRepository);

  const appointmentDate = parseISO(date);

  const appointment = createAppointment.execute({provider, date: appointmentDate})

  return response.json(appointment);
} catch (err) {
  return response.status(400).json({error: err.message})
}
}
);

appointmentRouter.get('/', (request, response) => {
  const appointments = appointmentRepository.all();
  return response.json(appointments);
});

export default appointmentRouter;

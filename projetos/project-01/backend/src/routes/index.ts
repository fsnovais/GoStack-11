import { Router } from 'express';
import appointmentRouter from './appointment.routes';

const router = Router();

router.use('/appointments', appointmentRouter);

export default router;

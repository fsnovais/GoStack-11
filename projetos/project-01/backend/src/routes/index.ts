import { Router } from 'express';
import appointmentRouter from './appointment.routes';
import usersRouter from './users.routes'
import sessionRouter from './sesssions.router'

const router = Router();

router.use('/appointments', appointmentRouter);
router.use('/users', usersRouter);
router.use('/sessions', sessionRouter)

export default router;

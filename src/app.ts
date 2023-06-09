import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
// import { UserRoutes } from './app/modules/users/user.routs';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import router from './app/routes';
import httpStatus from 'http-status';
// import usersServices from './app/modules/users/users.services'
const app: Application = express();

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
// app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/', router);

// academic semester routes
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes);

app.use(globalErrorHandler);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'NOT FOUND',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API NOT FOUND',
      },
    ],
  });
  next();
});

export default app;

import express from 'express';
import { PrismaClient } from '@prisma/client';
const auth = require('./routes/Auth');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use('/auth', auth);


app.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on port 3000');
  });
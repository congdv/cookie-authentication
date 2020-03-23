import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './router';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use(cors());
app.use(express.static('dist'));
app.use(cookieParser());
app.get('/ping', (_req, res) => { 
  console.log('someone pinged here');
  res.send('pong');
});
app.use('/api',authRouter);

// Serve any other file as the distribution index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
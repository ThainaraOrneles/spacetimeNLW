import fastify from 'fastify';
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors, {
  //colocar todas as URls de front-end que poderão acessar o back-end
  //Ex. origin: ['http://localhost:3000', 'http://exemplo.com.br']
  //o true significa que qualquer front-end poderá acessar 
  origin: true,
})

app.register(memoriesRoutes)

app.listen({
  port:3333,
}).then(() => {
  console.log('🚀 HTTP server running on http://localhost:3333');
});
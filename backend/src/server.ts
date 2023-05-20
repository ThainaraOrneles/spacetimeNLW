import 'dotenv/config'

import fastify from 'fastify';
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';

const app = fastify();

app.register(cors, {
  //colocar todas as URls de front-end que poderão acessar o back-end
  //Ex. origin: ['http://localhost:3000', 'http://exemplo.com.br']
  //o true significa que qualquer front-end poderá acessar 
  origin: true,
})

//O valor de secret deve ser uma string complexa
app.register(jwt, {
 secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app.listen({
  port:3333,
}).then(() => {
  console.log('🚀 HTTP server running on http://localhost:3333');
});
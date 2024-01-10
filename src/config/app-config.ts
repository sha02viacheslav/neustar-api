import MongoStore = require('connect-mongo');
import * as dotenv from 'dotenv';
import { SessionOptions } from 'express-session';
import { Secrets } from '../main';
import { environment } from 'src/environment';

dotenv.config();

export const SessionConfig = async (): Promise<SessionOptions> => {
  return {
    secret: environment.local ? process.env.SECRET : Secrets.secret,
    cookie: {
      maxAge: 60 * 60 * 1000, // 1hr timer
      sameSite: process.env.PORT ? ('none' as const) : ('lax' as const),
      secure: !!process.env.PORT,
    },
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: environment.local ? process.env.SESSIONS_URI : Secrets.sessionsUri,
      ttl: 60 * 60, // 1 hour timer
      collectionName: 'Neustar_Order_Insights_Dashboard_Sessions', // Session collection name in MongoDB,
      crypto: {
        secret: environment.local ? process.env.SECRET : Secrets.secret,
      },
    }),
  };
};

export const ApplicationConfig = async () => {
  return {
    session: await SessionConfig(),
    cors: {
      origin: true,
      credentials: true,
    },
  };
};

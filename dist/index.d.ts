import { Express } from 'express';
import serverless = require('serverless-http');
export declare const createNestServer: (expressInstance: Express) => Promise<import("@nestjs/common").INestApplication>;
export declare const handler: serverless.Handler;

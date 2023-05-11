import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './app.module';
import { config } from './config';
import { ValidationPipe } from '@nestjs/common';

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below
const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
    if (!cachedServer) {
        const expressApp = express();
        const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
        nestApp.use(eventContext());
        nestApp.setGlobalPrefix(config.contextPath);
        nestApp.useGlobalPipes(
            new ValidationPipe({
                transform: true,
            }),
        );
        await nestApp.init();
        cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
    }
    return cachedServer;
}

// TODO fix explicit any
// eslint-disable-next-line
export const handler: Handler = async (event: any, context: Context) => {
    cachedServer = await bootstrapServer();
    return proxy(cachedServer, event, context, 'PROMISE').promise;
};

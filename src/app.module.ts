import { config } from './config';
import { ExceptionsModule, AllExceptionsFilter } from '@streamamg/cloudpay-api-common-error-handler';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { SiteConfigMiddleware, SiteConfigModule } from '@streamamg/cloudpay-api-common-site-context';
import { PlaygroundController } from './playground/playground.controller';

@Module({
    imports: [
        SiteConfigModule.registerAsync({
            siteConfigDDBTable: config.dynamodb.siteConfigurationTable,
            region: config.region,
        }),
        ExceptionsModule,
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
    ],
    controllers: [PlaygroundController],
})
export class AppModule implements NestModule {
    // eslint-disable-next-line
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(SiteConfigMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}

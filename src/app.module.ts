import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Config, IConfig } from './core/config/config';
import { PrismaModule } from './infrastructure/db/prisma.service';
import { UserModule } from './user/user.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessagingModule } from './infrastructure/messaging/messaging.service';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    MessagingModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: IConfig,
      useValue: Config,
    },
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Config, IConfig } from './core/config/config';
import { PrismaModule } from './core/infrastructure/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
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

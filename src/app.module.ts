import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, MailController],
  providers: [AppService, MailService],
})
export class AppModule {}

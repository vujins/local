import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrightnessModule } from './brightness/brightness.module';

@Module({
  imports: [ConfigModule.forRoot(), BrightnessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

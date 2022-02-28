import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrightnessModule } from './brightness/brightness.module';

@Module({
  imports: [BrightnessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

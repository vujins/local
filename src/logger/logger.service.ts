import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs/promises';
import * as moment from 'moment';

@Injectable()
export class LoggerService {
  info(msg: string): Promise<void> {
    return this.log(msg, 'INFO');
  }

  warn(msg: string): Promise<void> {
    return this.log(msg, 'WARNING');
  }

  error(msg: string): Promise<void> {
    return this.log(msg, 'ERROR');
  }

  private log(msg: string, level: string): Promise<void> {
    if (!msg) return;

    const curremtMoment = moment();
    const logFilePath = path.join(__dirname, '../../logs', `${curremtMoment.format('yyyy-MM-DD')}.log`);

    return fs.appendFile(logFilePath, `[${curremtMoment.format('DD/MM/yyyy, hh:mm:ss')}] ${level} ${msg}\n`);
  }
}

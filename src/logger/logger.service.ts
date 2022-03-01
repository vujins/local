import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs/promises';
import * as moment from 'moment';

@Injectable()
export class LoggerService {
  info(msg: string): Promise<void> {
    return this.log(msg, 'INFO');
  }

  error(msg): Promise<void> {
    return this.log(msg, 'ERROR');
  }

  private log(msg: string, level: string): Promise<void> {
    const curremtMoment = moment();
    const logFilePath = path.join(__dirname, '../../logs', `${curremtMoment.format('yyyy-MM-DD')}.log`);

    return fs.appendFile(logFilePath, `[${curremtMoment.format('DD/MM/yyyy, hh:mm:ss')}] ${level} ${msg}\n`);
  }
}

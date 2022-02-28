import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

@Injectable()
export class BrightnessService {
  private readonly execute = promisify(exec);

  async setBrightness(monitor: number, brightness: number) {
    const command = `DMT "DMT:General:ChangeBrightness ${monitor}:${brightness}"`;
    const { stderr, stdout } = await this.execute(command);

    if (stdout) {
      console.log('stdout: ', stdout);
    }
    if (stderr) {
      console.log('stderr: ', stderr);
    }
  }
}

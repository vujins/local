import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

@Injectable()
export class BrightnessService {
  private readonly execute = promisify(exec);

  async setBrightness(monitor: number, sunlight: number): Promise<number> {
    const brightness = this.getBrightness(sunlight);
    const command = `DMT "DMT:General:ChangeBrightness ${monitor}:${brightness}"`;
    const { stderr, stdout } = await this.execute(command);

    if (stdout) {
      console.log('stdout: ', stdout);
    }
    if (stderr) {
      console.log('stderr: ', stderr);
    }

    return brightness;
  }

  /** This will convert sunlight value (0-83000 lux) to brightness 0-100 */
  private getBrightness(sunlight: number) {
    const sigmoid = this.getSigmoid(sunlight / 60);

    // sigmoid(0) = 0.5
    // (sigmoid(x/usporenje) - 0.5)*200 - 100 je max
    return Math.round((sigmoid - 0.5) * 200);
  }

  private getSigmoid(z: number) {
    return 1 / (1 + Math.exp(-z));
  }
}

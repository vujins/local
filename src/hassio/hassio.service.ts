import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HassioService {
  private readonly sunlightSensorEntity = 'sensor.light_detection_sensor_light_level';

  public async getSunlight() {
    return this.getState(this.sunlightSensorEntity);
  }

  private async getState(entity: string) {
    const token = process.env.HASSIO_TOKEN;
    // if the token is wrong, hassio will ban my user because of failed attepmts
    if (!token) {
      return 0;
    }

    const response = await axios.get(`https://nesty.duckdns.org/api/states/${entity}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'appliaction/json',
      },
    });

    const data = response.data;

    return data.state;
  }
}

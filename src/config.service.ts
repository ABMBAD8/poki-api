import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
    constructor() {
        const nodeEnv = this.nodeEnv;
        dotenv.config({ path: `.${nodeEnv}.env` });

        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
    }

    get(key: string) {
        return process.env[key];
    }

    public getNumber(key: string): number {
        return Number(this.get(key));
    }

    get nodeEnv(): string {
        return this.get('NODE_ENV') || 'development';
    }
}

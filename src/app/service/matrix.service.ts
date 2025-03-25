import { Injectable } from '@angular/core';
import * as sdk from 'matrix-js-sdk';

@Injectable({ providedIn: 'root' })
export class MatrixService {
  private client: sdk.MatrixClient;

  constructor() {
    const userId = '@tempmail__123:matrix.org';
    const accessToken = 'syt_dGVtcG1haWxfXzEyMw_kRGkNebigMcBjdQXmscK_1nl9l7';

    this.client = sdk.createClient({
      baseUrl: 'https://matrix.org',
      userId,
      accessToken,
      deviceId: 'testing'
    });
  }

  async initClient() {
    await this.client.initRustCrypto();
    return this.client;
  }
}

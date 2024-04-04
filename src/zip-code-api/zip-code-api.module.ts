import { Module } from '@nestjs/common';
import { ZipCodeApiService } from './zip-code-api.service';
import { ZipCodeApiController } from './zip-code-api.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [ZipCodeApiController],
  providers: [ZipCodeApiService],
})
export class ZipCodeApiModule {}

import { Controller } from '@nestjs/common';
import { ZipCodeApiService } from './zip-code-api.service';

@Controller('zip-code-api')
export class ZipCodeApiController {
  constructor(private readonly zipCodeApiService: ZipCodeApiService) {}
}

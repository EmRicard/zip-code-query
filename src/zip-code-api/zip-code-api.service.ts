import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { QueryZipCodeFromViaCepDto } from './dto/query-zip-code-via-cep.dto';

@Injectable()
export class ZipCodeApiService {
  constructor(private readonly httpService: HttpService) {}

  private async get(uri: string) {
    return (await lastValueFrom(this.httpService.get(uri))).data;
  }

  async getZipCodeFromViaCep(query: QueryZipCodeFromViaCepDto): Promise<any> {
    try {
      return await this.get(`https://viacep.com.br/ws/${query.zipCode}/json/`);
    } catch (error) {
      return { message: 'invalid zip_code' };
    }
  }
}

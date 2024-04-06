import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { Observable, catchError, firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable()
export class ZipCodeApiService {
  private readonly logger = new logger(ZipCodeApiService);
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<any[]>{ 
    const { data } = await firstValueFrom(
      this.httpService.get<any[]>('http://viacep.com.br/ws/01001000/json/').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
  }
}

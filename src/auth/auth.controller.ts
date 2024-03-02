import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    singIn(@Body() singInDTO: Record<string, any>){
        return this.authService.singIn(singInDTO.username, singInDTO.password);
    }
}

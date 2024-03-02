import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async singIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    delete user.password;

    return user;
  }
}

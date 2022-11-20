import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt';
import { AuthUser } from './AuthUser.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(authUser: AuthUser) {
    const user = await this.userService.findUsersByEmail(authUser.email);
    const isMatch = await bcrypt.compare(authUser.password, user.password);

    return isMatch;
  }
}

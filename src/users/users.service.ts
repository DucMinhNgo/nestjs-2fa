import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'duc.ngo@gmail.com',
      username: 'ducngo',
      password: '123456',
      twoFactorAuthenticationSecret: 'H4PDSPALPFIXKH3W',
      isTwoFactorAuthenticationEnabled: false,
    },
    {
      userId: 1,
      email: 'duy.pham@gmail.com',
      username: 'duypham',
      password: '123456',
      twoFactorAuthenticationSecret: 'H4PDSPALPFIXKH3A',
      isTwoFactorAuthenticationEnabled: false,
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async setTwoFactorAuthenticationSecret(secret: string, userId: number) {
    this.users.find(
      (user) => user.userId === userId,
    ).twoFactorAuthenticationSecret = secret;
  }

  async turnOnTwoFactorAuthentication(userId: number) {
    this.users.find(
      (user) => user.userId === userId,
    ).isTwoFactorAuthenticationEnabled = true;
  }
}

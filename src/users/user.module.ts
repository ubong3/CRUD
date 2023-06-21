import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { crudEntity } from 'src/entity/entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([crudEntity])

  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

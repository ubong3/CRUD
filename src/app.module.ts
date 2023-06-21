
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { crudEntity } from './entity/entity';
import { UserModule } from './users/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      //my default de password is empty
      password: '',
      database: 'crud',
      entities: [crudEntity],
      // autoLoadEntities: true,
      synchronize: true,
      
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

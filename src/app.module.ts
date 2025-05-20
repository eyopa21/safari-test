import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from './auth/config/jwt.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationsModule } from './applications/applications.module';
import { BanksController } from './banks/banks.controller';
import { BanksModule } from './banks/banks.module';
import { BranchesModule } from './branches/branches.module';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
    load: [ jwtConfig],
  }),
  TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  }),AuthModule, CommonModule, UsersModule, ApplicationsModule, BanksModule, BranchesModule, TransactionsModule],
  controllers: [AppController, BanksController],
  providers: [AppService, TransactionsService],
})
export class AppModule {}

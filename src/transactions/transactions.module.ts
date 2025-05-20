import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { ApplicationsModule } from 'src/applications/applications.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transactions } from './entity/transactions.entity';
import { TransactionsHistory } from './entity/history.entity';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transactions, TransactionsHistory]),  ApplicationsModule],
  controllers: [TransactionsController], 
  providers: [TransactionsService]
})
export class TransactionsModule {}

import { Body, Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { CreateApplicationDto } from './dto/createApplication.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applications } from './entity/applications.entity';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [TypeOrmModule.forFeature([Applications]), TransactionsModule],
  providers: [ApplicationsService],
  controllers: [ApplicationsController], 
  exports: [ApplicationsService],
})
export class ApplicationsModule { 
}

import { Module } from '@nestjs/common';
import { BanksService } from './banks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banks } from './entity/banks.entity';
import { BranchesModule } from 'src/branches/branches.module';

@Module({

  imports: [TypeOrmModule.forFeature([Banks]), BranchesModule],
  providers: [BanksService]
})
export class BanksModule {}

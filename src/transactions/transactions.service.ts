import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Transactions } from './entity/transactions.entity';
import { CreateTransactionDto } from './dto/createTransaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplicationsService } from 'src/applications/applications.service';
import { STATUS } from 'src/applications/constants/status.enum';
import { TransactionsHistory } from './entity/history.entity';

@Injectable()
export class TransactionsService {

    constructor(
        @InjectRepository(Transactions)
        private readonly transactionsRepository: Repository<Transactions>,

        private readonly connection: Connection,
        private readonly applicationsService: ApplicationsService,
    ){}

    async createTransaction(createTransactionDto: CreateTransactionDto) {

        const application = await this.applicationsService.getApplicationByAccountNumber(createTransactionDto.accountNumber);
        if (!application) {
            throw new NotFoundException('Application not found');
        }
        if(application.status !== STATUS.SUBMITTED){
            throw new NotFoundException('Application not found');
          }
          
        const transaction = await this.transactionsRepository.create({
            ...createTransactionDto
        });

        const queryRunner = this.connection.createQueryRunner()
        await queryRunner.connect()
        await queryRunner.startTransaction()

        try {
   
            const history = new TransactionsHistory()
            history.transactionId = transaction.id
            

            await queryRunner.manager.save(history)
            await queryRunner.manager.save(transaction)


            await queryRunner.commitTransaction()
        } catch (error) {
            await queryRunner.rollbackTransaction()
        } finally {
            await queryRunner.release()
        }


      

        
        
    }
}

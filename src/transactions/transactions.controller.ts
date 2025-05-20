import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/createTransaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(
        private readonly transactionsService: TransactionsService,
    ) {}


    @Post('/create')
    createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
        return this.transactionsService.createTransaction(createTransactionDto);
    }
}

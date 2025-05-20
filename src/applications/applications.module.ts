import { Body, Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { CreateApplicationDto } from './dto/createApplication.dto';

@Module({
  providers: [ApplicationsService],
  controllers: [ApplicationsController]
})
export class ApplicationsModule { 
}

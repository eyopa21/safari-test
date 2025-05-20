import { Injectable, NotFoundException } from '@nestjs/common';
import { Applications } from './entity/applications.entity';
import { Repository } from 'typeorm';
import { STATUS } from './constants/status.enum';
import { CreateApplicationDto } from './dto/createApplication.dto';

@Injectable()
export class ApplicationsService {
    constructor(
        private readonly applicationsRepository: Repository<Applications>,
    ){


    }

createApplication(createApplicationDto: CreateApplicationDto){
    const application = this.applicationsRepository.create({
        ...createApplicationDto,
        status: STATUS.SUBMITTED
    });

    return this.applicationsRepository.save(application);
} 

 async   getApplicationByAccountNumber(account_number: string) {
        const application =  await this.applicationsRepository.findOne({
            where: {
              account_number
            },
           
          });

          if (!application) {
            throw new NotFoundException('Application not found');
          }

         

          return application;
    };

}

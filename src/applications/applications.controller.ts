import { Body, Controller } from '@nestjs/common';
import { CreateApplicationDto } from './dto/createApplication.dto';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController {
    constructor(
        private readonly applicationsService: ApplicationsService,
      ) {
      }
      createApplication(@Body() createApplicationDto: CreateApplicationDto) {
          
        return this.applicationsService.createApplication(createApplicationDto);
      }
}

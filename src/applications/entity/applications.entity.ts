import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
 
  import { Exclude } from 'class-transformer';
import { STATUS } from '../constants/status.enum';
 
  
  @Entity()
  export class Applications {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: String })
    bank_name: string;

    @Column({ type: String })
    branch_name: string;
  
    @Column({ type: 'date' })
    account_name: Date;
  
    @Column({ type: String, unique: true })
    account_number: string;
  
    @Column({ type: 'enum', enum: STATUS })
    status: STATUS;
  

  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
  
  
   
  }
  
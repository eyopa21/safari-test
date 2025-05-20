import { STATUS } from 'src/applications/constants/status.enum';
import { Branches } from 'src/branches/entity/branches.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
 

 
  
  @Entity()
  export class TransactionsHistory {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: String })
    value: string;

    @Column({ type: Number })
    transactionId: number;

   
       @Column({ type: 'enum', enum: STATUS })
    Status: STATUS;
    
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    


  
   
  }
  
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
  export class Transactions {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: String })
    accountNumber: string;

    @Column({ type: Number })
    amount: number;

    @Column({ type: String })
    narration: string;
    
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    


  
   
  }
  
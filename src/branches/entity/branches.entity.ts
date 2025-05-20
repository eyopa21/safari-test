import { Banks } from 'src/banks/entity/banks.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
 

  
  @Entity()
  export class Branches {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: String })
    value: string;

    @Column({ type: Number })
    bank_id: number;


  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;


    @ManyToOne(() => Banks, (bank) => bank.branches)
    @JoinColumn({ name: 'bank_id' })
    bank: Banks;
  
  
   
  }
  
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
  export class Banks {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: String })
    value: string;

    
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    

  @OneToMany(() => Branches, (branch) => branch.bank, { cascade: true })
  branches: Branches[];
  
   
  }
  
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("customer")
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ type: "date" })
  dateCreated: string;
}

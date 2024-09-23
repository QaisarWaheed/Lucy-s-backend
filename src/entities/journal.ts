import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Journal {
  @PrimaryGeneratedColumn()
  VoucherNumber: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @Column()
  CreditAmount: number;

  @Column()
  debitAmount: number;

  @Column()
  AccountCode: string;

  @Column()
  AccountTitle: string;
}

export default Journal;

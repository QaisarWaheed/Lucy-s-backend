import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class cashCredit {
  @PrimaryGeneratedColumn()
  voucherNumber: number;

  @Column()
  CreditAmount: number;

  @Column()
  AccountCode: string;

  @Column()
  AccountTitle: string;

  @Column()
  CreditDetails: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created: Date;
}

export default cashCredit;

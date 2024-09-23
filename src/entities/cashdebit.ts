import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class cashDebit {
  @PrimaryGeneratedColumn()
  voucherNumber: number;

  @Column()
  DebitAmount: number;

  @Column()
  AccountCode: string;

  @Column()
  AccountTitle: string;

  @Column()
  DebitDetails: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created: Date;
}

export default cashDebit;

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class AccountOpen {
  @PrimaryGeneratedColumn()
  AccountCode: number;

  @Column()
  Title: string;

  @Column()
  Debit: number;

  @Column()
  Credit: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  openingDate: Date;
}
export default AccountOpen;

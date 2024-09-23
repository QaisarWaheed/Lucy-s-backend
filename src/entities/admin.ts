import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Admin {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  password: string;
}

export default Admin;

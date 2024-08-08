import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  author_id: number;

  @Column({ length: 255 })
  author_name: string;

  @Column("text", { nullable: true })
  author_bio: string;
}

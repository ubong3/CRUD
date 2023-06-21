import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class crudEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
// id is set as primary generatecolumn
    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({unique: true})
    email: string;

    @Column()
    phone: number;

    @Column()
    password: string;

    @CreateDateColumn()
    create_At: Date;

}

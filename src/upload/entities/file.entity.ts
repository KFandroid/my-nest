import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class File {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
}
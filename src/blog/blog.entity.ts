import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Category } from '../category/category.entity'
@Entity()
export class Blog {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @Column()
    title: string;

    @Column("text")
    text: string;

    @ManyToMany(type => Category)
    @JoinTable()
    categories: Category[];


}
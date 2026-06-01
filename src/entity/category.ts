import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({
        type: 'tinyint',
    })
    type!: number

    @Column()
    user_id!: number

    @Column({
        type: 'tinyint',
    }) can_edit!: number

}
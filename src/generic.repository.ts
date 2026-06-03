import { Repository, ObjectLiteral } from "typeorm";

export abstract class GenericDataService<T extends ObjectLiteral> {
    constructor(private repository: Repository<T>) { }

    abstract getRepoName(): string;

    async getAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async save(item: T): Promise<T> {
        const savedItem = await this.repository.save(item);
        console.log(`${this.getRepoName()} saved successfully.`);
        return savedItem;
    }

    async remove(item: T): Promise<T> {
        const removedItem = await this.repository.remove(item);
        console.log(`${this.getRepoName()} deleted successfully.`);
        return removedItem;
    }
}
import { Repository } from "typeorm";
import { Category } from "./entity/category";
import { GenericDataService } from "./generic.repository";

export class CategoryService extends GenericDataService<Category> {
    constructor(repository: Repository<Category>) {
        super(repository);
    }

    getRepoName(): string {
        return "Category";
    }
}
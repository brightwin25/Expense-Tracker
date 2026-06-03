import { Category } from "./entity/category";
import { appSourse } from "./db";
import { CategoryService } from "./category.service";

async function main() {
    await appSourse.initialize();

    const categoryRepo = appSourse.getRepository(Category);

    const categoryService = new CategoryService(categoryRepo);

    const categories = await categoryService.getAll();
    console.log("Initial categories:", categories);

    const category = new Category();
    category.name = 'test4';
    category.type = 1;
    category.user_id = 2;
    category.can_edit = 0;

    await categoryService.save(category);

    const categoriesAfterAdd = await categoryService.getAll();
    console.log("After Add:", categoriesAfterAdd);

    if (categoriesAfterAdd[10]) {
        categoriesAfterAdd[10].name = 'Edit';
        await categoryService.save(categoriesAfterAdd[10]);
        console.log("After Edit:", await categoryService.getAll());

        await categoryService.remove(categoriesAfterAdd[10]);
        console.log("After Delete:", await categoryService.getAll());
    }
}

main().catch(console.error);
// import { Category } from "./entity/category";
// import { appSourse } from "./db";


// async function main() {
//     await appSourse.initialize();
//     const categoryRepository = appSourse.getRepository(Category);
//     const categories = await categoryRepository.find();
//     console.log(categories);
//     const category = new Category();
//     category.name = 'test4',
//         category.type = 1,
//         category.user_id = 2,
//         category.can_edit = 0,
//         await categoryRepository.save(category);
//     const categoriesAfterAdd = await categoryRepository.find();
//     console.log(categoriesAfterAdd);
//     categoriesAfterAdd[10].name = 'Edit';
//     await categoryRepository.save(categoriesAfterAdd[10]);
//     console.log(await categoryRepository.find());
//     await categoryRepository.delete(categoriesAfterAdd[10]);
//     console.log(await categoryRepository.find());
// };

// main().catch(console.error);
import express from "express";

const app = express();

app.listen(3000, () => {
    console.log('Server Running');
})
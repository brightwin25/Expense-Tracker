import { Request, Response } from "express";
import { appSourse } from "../db";
import { Category } from "../entity/category";
import { CategoryService } from "../category.service";

const categoryRepo = appSourse.getRepository(Category);
const categoryService = new CategoryService(categoryRepo);

export class CategoryController {

    static async getAll(req: Request, res: Response) {
        try {
            const categories = await categoryService.getAll();
            console.log("Initial categories:", categories);
            res.status(200).json(categories);

        } catch (err) {
            res.status(500).json({
                message: "Failed to fetch categories",
                error: err
            });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const { name, type, user_id, can_edit } = req.body;
            const category = new Category();

            category.name = name;
            category.type = type;
            category.user_id = user_id;
            category.can_edit = can_edit;
            const result = await categoryService.save(category);

            res.status(201).json(result);

        } catch (err) {
            res.status(500).json({
                message: "Failed to create category",
                error: err
            });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id, name, type, user_id, can_edit } = req.body;
            const categoryToBeUpdated = await categoryService.getOneById(id);

            if (!categoryToBeUpdated) {
                return res.status(500).json({ message: 'No category found with this id.' })
            }

            categoryToBeUpdated.name = name;
            categoryToBeUpdated.type = type;
            categoryToBeUpdated.user_id = user_id;
            categoryToBeUpdated.can_edit = can_edit;

            const result = await categoryService.save(categoryToBeUpdated);
            res.status(200).json(result);

        } catch (err) {
            res.status(500).json({
                message: "Failed to create category",
                error: err
            });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const categoryToBeDeleted = await categoryService.getOneById(id);

            if (!categoryToBeDeleted) {
                return res.status(500).json({ message: 'No category found with this id.' })
            }

            const result = await categoryService.remove(categoryToBeDeleted);
            res.status(200).json(result);

        } catch (err) {
            res.status(500).json({
                message: "Failed to create category",
                error: err
            });
        }
    }

}
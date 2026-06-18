import { Router } from "express";
import { CategoryController } from "../controller/category.controller";

const router = Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 */
router.get("/", CategoryController.getAll);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *               can_edit:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Category created
 */
router.post("/", CategoryController.create);

/**
 * @swagger
 * /categories:
 *   put:
 *     summary: Update a category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               type:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *               can_edit:
 *                 type: integer
 *             required:
 *               - id
 *               - name
 *               - type
 *               - user_id
 *               - can_edit
 *     responses:
 *       200:
 *         description: Category updated successfully
 */
router.put("/", CategoryController.update);

/**
 * @swagger
 * /categories:
 *   delete:
 *     summary: Delete a category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Category deleted successfully
 */
router.delete("/", CategoryController.delete);

export default router;
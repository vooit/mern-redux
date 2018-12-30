import express from 'express';
import * as userController from '../controllers/user.server.controller';

const router = express.Router();

router.route('/')
    .get(userController.getUsers)
    .post(userController.addUser)
    .put(userController.updateUser);
router.route('/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser);
export default router;
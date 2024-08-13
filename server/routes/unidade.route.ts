import { onCreateNewUnidade, onDeleteUnidadeById, onGetAllUnidades, onUpdateUnidadeById } from '../controllers/unidades.controller';
import express from "express";

const router = express.Router();

router.get('/all', onGetAllUnidades);
router.post('/new', onCreateNewUnidade);
router.put('/update/:id', onUpdateUnidadeById);
router.delete('/delete/:id', onDeleteUnidadeById);

module.exports = router;
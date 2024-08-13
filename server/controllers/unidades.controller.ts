import { Request, Response } from "express";
import pool from "../database/database";

export const onGetAllUnidades = async (req: Request, res: Response) => {
  try {
    pool.query("SELECT * FROM unidades order by nome asc", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  } catch (error) {
    console.error(error);
  }
};

export const onCreateNewUnidade = async (req: Request, res: Response) => {
  const { nome, regiao, senha } = req.body;
  try {
    pool.query(
      "INSERT INTO unidades (id, nome, senha, regiao) VALUES (uuid_generate_v4(), $1, $2, $3) RETURNING *",
      [nome, regiao, senha],
      (error, results) => {
        if (error) {
          throw error;
        }
        res
          .status(201)
          .send(`unidade adicionada de ID : ${results.rows[0].id}`);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const onGetUnidadeById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    pool.query(
      "SELECT * FROM unidades WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const onUpdateUnidadeById = async (req: Request, res: Response) => {
  const { nome, regiao, senha } = req.body;
  const  id = req.params.id;
  try {
    pool.query(
      "UPDATE unidades SET nome = $1, regiao = $2, senha = $3 WHERE id = $4",
      [nome, regiao, senha, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`unidade com ID foi modificada: ${id}`);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const onDeleteUnidadeById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    pool.query(
      "DELETE FROM unidades WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`unidade deletada de ID: ${id}`);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

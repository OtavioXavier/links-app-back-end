import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Route middleware

const UnidadeRouter= require("./routes/unidade.route");
app.use("/", UnidadeRouter);

app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
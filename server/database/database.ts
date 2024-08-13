import { Pool } from "pg";

const pool: Pool = new Pool({
  user: "postgres",
  password: "5estrelasAvsi",
  host: "localhost",
  port: 5432,
  database: "links_app",
})

export default pool;
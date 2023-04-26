import mysql from "mysql";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "olxdev9!",
  database: "bastian-gabriel",
});

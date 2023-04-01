  import express from "express"
  import mysql from "mysql"

  const app = express()
  const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"hotel_project_db"
  })

  app.get("/", (req, res) => {
    res.json("wheeeee")
  })

  app.get("/hotels")

  app.listen(8800, () => {
    console.log("Connected to db!")
  })
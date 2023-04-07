  import express from "express"
  import mysql from "mysql"

  const app = express()
  const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"hotel_project_db"
  })

  app.use(express.json())

  /**
   * EXAMPLE QUERY, search by date, area, and rating 
   * 
   * {
   * 
   *  start_date: "2020-02-02",
   *  end_date: "2020-02-05",
   *  room_capacity: "",
   *  city: Santa Clara,
   *  country: "Speedshead Bay",
   *  chain: "",
   *  rating: 3,
   *  num_rooms: "",
   *  price_low: "",
   *  price_high: ""
   * 
   * }
   * 
   * 
   */

  app.post("/query", (req, res) => {
    const q_start = "SELECT r.*, h.chainName, h.city, h.country, h.star_rating, h.num_rooms " +
                    "FROM rooms r " +
                    "JOIN hotels h ON r.hotel = h.address "
    let q_middle = ""
    const q_end = ";"

    // Start/end date
    if (req.body.start_date !== "" || req.body.end_date !== "") {
      q_middle += "LEFT JOIN bookings b ON r.room_num = b.room_num AND r.hotel = b.hotel " +
                  "WHERE b.room_num IS NULL OR (";
      if (req.body.start_date !== "") {
        q_middle += `b.endDate < '${req.body.start_date}' `

        if (req.body.end_date !== "") {
          q_middle += `OR b.startDate > '${req.body.end_date}'`
        }
        
        q_middle += ")"

      } else if (req.body.end_date !== "") {
        q_middle += `b.startDate > '${req.body.end_date}')`
      }

    } 

    // Capacity
    if (req.body.room_capacity !== "") {
      q_middle += ` AND r.capacity >= '${req.body.room_capacity}'`
    }

    const q = q_start + q_middle + q_end;

    console.log(q);

    db.query(q, (err, data) => {
      if (err) {
        return res.json(err)
      }

      return res.json(data)
    })
  })
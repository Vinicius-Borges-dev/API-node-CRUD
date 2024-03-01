import { config } from "dotenv";
import conn from "../Database/conn.js";

config();

class userModel {


  static async userExists(email){
    return new Promise((resolve,reject)=>{
      const sql = `SELECT ${process.env.DB_TABLE1_COLUMN2} FROM ${process.env.DB_TABLE1} WHERE ${process.env.DB_TABLE1_COLUMN2} = ?`;
      conn.query(sql, [email], (err, result)=>{
        if(err) return reject(err)
        return resolve(result > 0)
      })
    })
  }


  async createUser(data) {
    const {username, email, password} = data;
    if(userModel.userExists(email)) return ({userExists: true, success: false})
    return new Promise((resolve,reject)=>{
      const sql = ``;
  })
  }
}

export default userModel;

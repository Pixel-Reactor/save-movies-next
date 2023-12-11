import  mysql  from "mysql2/promise"

let pool:any;
async function DBconn(){
    if(!pool){
        pool = mysql.createPool({
            connectionLimit: 100,
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PWD,
            database:process.env.DB_DB
        })
    }
   
    return await pool.getConnection()
}

export default DBconn

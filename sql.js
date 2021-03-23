const mysql = require('mysql2')
const connection = mysql.createPool({
    host: "cnudb.soga.ng",
    user: "cnu",
    password: "r912",
    database: "cnu"
})

// http://viewcnudb.soga.ng

connection.query(`select * from user`,afterData)

function afterData(error,result,field){
    if(error){
        console.log(error)
        return
    }
    console.log(result)
}

// connection.query(`INSERT INTO user(user_name,user_age,user_phone)`,afterData)
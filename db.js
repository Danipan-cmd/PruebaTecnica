const sql = require('mssql');
const config = {
    user: 'TEST',
    password: 'T3st2026',
    server: '192.168.20.79',
    database: 'PruebaTecnica',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
async function connectDB() {
    try {
        let pool = await sql.connect(config);
        console.log("Conectado a SQL Server");
        let result = await pool.request().query('SELECT 1');
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}
connectDB();


const { Pool } = require('pg')

const config = {
    user: 'postgres',
    host:'localhost',
    password: 'postgres',
    database:'libros'
}

const pool = new Pool(config)

const obtenerData = async (tabla) => {
    try {
        const res = await pool.query(`SELECT * FROM ${tabla}`)
        console.log(res.rows)
    } catch(e){
        console.log(e)
    }
}

const insertarLibtro = async () => {
    const consulta = 'INSERT INTO mis_libros values ($1,$2,$3)'
    const valores = [4,'php desde cero','Victor Robles']
    try { 
        const res = await pool.query(consulta,valores)
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

const borrarLibro = async (autor) => {
    const consulta = 'DELETE FROM mis_libros WHERE autor= $1'
    const valor = [autor]
    try { 
        const res = await pool.query(consulta,valor)
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

const modificarLibro = async (newA,oldA) => {
    const consulta = 'UPDATE mis_libros SET autor=$1 WHERE autor= $2'
    const valores = [newA,oldA]
    try { 
        const res = await pool.query(consulta,valores)
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

//insertarLibro()
//obtenerData('usuarios')
//borrarLibro('Victor Robles');
//obtenerData('mis_libros')
//modificarLibro('Fernando Herrera','Victor Robles')
obtenerData('mis_libros')
const cnx = require('../Services/cnx');
const sql = require('mssql');


async function getTask() {
    
    try {
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from Task');
        return salida.recordsets;
    } catch(err) {
        console.log(err);
    }
}


async function newTask(task) {
    try {
        let pool = await sql.connect(cnx);
        let newTask = await pool.request()
            .input('name_task', sql.VarChar, task.name_task)                       
            .execute('SP_CREATE_TASK');

        return newTask.recordsets;

    } catch(err) {
         throw new Error (`Ha ocurrido un error en el SP, mira los parametros ${err.procName}... ${err.message}`)
    }
}

async function updateTask(task) {
    try {
        let pool = await sql.connect(cnx);
        let updTask = await pool.request()           
            .input('id_task', sql.Int, task.id_task)
            .input('name_task', sql.VarChar, task.name_task)    
            .input('task_state', sql.Bit, task.task_state)         
            .execute('SP_UPDATE_TASK');

        return updTask.recordsets;

    } catch(err) {
         throw new Error (`Ha ocurrido un error en el SP, mira los parametros ${err.procName}... ${err.message}`)
    }
}



async function delTask(task) {    
    try {
        let pool = await sql.connect(cnx);
        let delTask = await pool.request()
            .input('id_task', sql.Int, task.id_task)                    
            .execute('SP_DELETE_TASK');

        return delTask.recordsets;

    } catch(err) {
         throw new Error (`Ha ocurrido un error en el SP, mira los parametros ${err.procName}... ${err.message}`)
    }
}


module.exports = {
    getTask: getTask,
    newTask : newTask,
    updateTask :updateTask,
    delTask :delTask,
    
}
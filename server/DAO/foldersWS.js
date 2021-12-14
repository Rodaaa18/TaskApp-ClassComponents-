const cnx = require('../Services/cnx');
const sql = require('mssql');


async function getFolder() {
    
    try {
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from Folders');
        return salida.recordsets;
    } catch(err) {
        console.log(err);
    }
}


async function newFolder(folder) {
    try {
        let pool = await sql.connect(cnx);
        let newFolder = await pool.request()
            .input('name_folder', sql.VarChar, folder.name_folder)                       
            .execute('SP_CREATE_FOLDER');

        return newFolder.recordsets;

    } catch(err) {
         throw new Error (`Ha ocurrido un error en el SP, mira los parametros ${err.procName}... ${err.message}`)
    }
}

async function updateFolder(folder) {
    try {
        let pool = await sql.connect(cnx);
        let updFolder = await pool.request()           
            .input('id_folder', sql.Int, folder.id_folder)
            .input('name_folder', sql.VarChar, task.name_folder) 
            .input('state_folder', sql.Bit, task.state_folder)            
            .execute('SP_UPDATE_FOLDER');

        return updFolder.recordsets;

    } catch(err) {
         throw new Error (`Ha ocurrido un error en el SP, mira los parametros ${err.procName}... ${err.message}`)
    }
}

async function delFolder(folder) {
    try {
        let pool = await sql.connect(cnx);
        let delFolder = await pool.request()
            .input('id_folder', sql.Int, folder.id_folder)                    
            .execute('SP_DELETE_FOLDER');

        return delTask.recordsets;

    } catch(err) {
         throw new Error (`Ha ocurrido un error en el SP, mira los parametros ${err.procName}... ${err.message}`)
    }
}


module.exports = {
    getFolder: getFolder,
    newFolder : newFolder,
    updateFolder :updateFolder,
    delFolder:delFolder
}
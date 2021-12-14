console.log ('Hola mundo');
const taskWs = require('./DAO/taskWS');
const Task = require('./Domain/Task');
const {request} = require('express');
const foldersWS = require('./DAO/foldersWS');


var express = require('express');
var bodyP = require('body-parser');
var cors = require('cors');



var app = express();
var router = express.Router();

app.use(bodyP.urlencoded({extended: true}));
app.use(bodyP.json());
app.use(cors());
app.use('/API', router);

/**
 * Get tasks
 */
router.route('/task').get((request, response) => {
    console.log('entro')
    taskWs.getTask().then(result => {
        response.json(result[0]);
    });
});

/**
 * Insert tasks
 */
 router.route('/task').post((request, response) => {
     let task = {...request.body}
     taskWs.newTask(task).then(result => {         
        response.json(result[0]);
    }, (err)=> {
        console.log(err.message);
        response.json(err.message)
    });
});
/**
 * Update Checkbox
 */

router.route('/task/check').put((request, response) => {
    let task = {...request.body}
    taskWs.updateCheckbox(task).then(result => {
       response.json(result[0]);
   }, (err)=> {
       console.log(err.message);
       response.json(err.message)
   });
});
/**
 * Update tasks
 */
 router.route('/task').put((request, response) => {
    let task = {...request.body}
    taskWs.updateTask(task).then(result => {
       response.json(result[0]);
   }, (err)=> {
       console.log(err.message);
       response.json(err.message)
   });
});

/**
 * Delete tasks
 */
 router.route('/task').delete((request, response) => {
    let task = {...request.body}
    taskWs.delTask(task).then(result => {
       response.json('Task has been deleted successfully');
   }, (err)=> {
       console.log(err.message);
       response.json(err.message)
   });
});

/**
 * Get Folders
 */
 router.route('/Folders').get((request, response) => {    
    foldersWS.getFolder().then(result => {
        response.json(result[0]);
    });
});

/**
 * Insert Folders
 */
 router.route('/Folders').post((request, response) => {
    let task = {...request.body}
    foldersWS.newFolder(task).then(result => {         
       response.json(result[0]);
   }, (err)=> {
       console.log(err.message);
       response.json(err.message)
   });
});


/**
 * Update Folders
 */
 router.route('/Folders').put((request, response) => {
    let task = {...request.body}
    foldersWS.updateFolder(task).then(result => {
       response.json('Task has been updated successfully');
   }, (err)=> {
       console.log(err.message);
       response.json(err.message)
   });
});

/**
 * Delete Folders
 */
 router.route('/Folders').delete((request, response) => {
    let task = {...request.body}
    foldersWS.delFolder(task).then(result => {
       response.json('Task has been deleted successfully');
   }, (err)=> {
       console.log(err.message);
       response.json(err.message)
   });
});




var portcnx = process.env.PORT || 5000;
app.listen(portcnx);
console.log ('Chau');
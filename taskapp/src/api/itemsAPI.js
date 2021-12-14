export function getToDoItems() {
    return fetch('http://localhost:5000/API/task')
        .then((response) => {return response.json(); })
        .then((data) => {            
            return data;
        }).catch((error) => {
            return error;
        });
}

export function putUpdateTask(jsonData) {

    return fetch('http://localhost:5000/API/task',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },        
        body: JSON.stringify(jsonData)})       
        .then((response) => {return response.json(); })
        .then((data) => { 
            
            return data;
        }).catch((error) => {
            return error;
        });
}

export function putUpdateCheck(jsonData) {
    
    return fetch('http://localhost:5000/API/task/check',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },        
        body: JSON.stringify(jsonData)})       
        .then((response) => {return response.json(); })
        .then((data) => { 
            
            return data;
        }).catch((error) => {
            return error;
        });
}
export function removeTask(id_task) {
    const jsonData = {id_task:id_task}

    return fetch('http://localhost:5000/API/task', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },         
          body: JSON.stringify(jsonData)})              
          .then((response) => {return response.json(); })
          .then((data) => { 
            
              return data;
          }).catch((error) => {
              return error;
          });
}
export function postToDoItem(data) {
    const jsonData = {name_task:data}
    return fetch('http://localhost:5000/API/task',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },        
        body: JSON.stringify(jsonData)})       
        .then((response) => {return response.json(); })
        .then((data) => {                    
            return data;
        }).catch((error) => {
            return error;
        });
}

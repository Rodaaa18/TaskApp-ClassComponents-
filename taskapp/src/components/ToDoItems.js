import React from "react";
import {
  getToDoItems,
  postToDoItem,
  putUpdateCheck,
  putUpdateTask,
  removeTask,
} from "../api/itemsAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class ToDoItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      value: "",
      modalInsertar: false,
      modalEditar: false,
      editItem: { id_task: null, name_task: "", task_state: false },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditTaskSubmit = this.handleEditTaskSubmit.bind(this);
 
    
  }

  componentDidMount() {
    getToDoItems().then((data) => {
      this.setState({ todoItems: data });
    });
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({ value: value });
  }

  handleEdit(event) {
    let value = event.target.value;
    this.setState({ editItem: { ...this.state.editItem, name_task: value } });
  }  

  handleSubmit(event) {
    event.preventDefault();
    postToDoItem(this.state.value).then((response) => {
      // debugger;
      this.setState({
        todoItems: [...this.state.todoItems, response[0]],
        value: "",
        modalInsertar: false,
      });
    });
  }

  showModalInsert = () => {
    this.setState({ modalInsertar: true });
  };
  DontshowModalInsert = () => {
    this.setState({ modalInsertar: false });
  };
  removeTasks(data) {
    this.setState({ idTask: data.id_task });
  }
  closeModalEdit = () => {
    this.setState({ modalEditar: false });
  };
  openModalEdit = (id_task, name_task, task_state) => {
    this.setState({
      modalEditar: true,
      editItem: {
        id_task: id_task,
        name_task: name_task,
        task_state: task_state,
      },
    });
  };

  handleCheckSubmit=(event, id_task)=> {

    event.preventDefault();
    let newItem = this.state.todoItems.find(
      (x) => x.id_task === id_task  
    );    
    newItem.task_state=!newItem.task_state

    putUpdateTask(newItem).then(() => {
      this.setState((prevState) => {
        let newData = prevState.todoItems;
        let editedItem = newData.find(
          (x) => x.id_task === id_task  
        );
        
        
        Object.assign(editedItem, newItem);
        return { todoItems: newData };
        
      });
    });
  }

  handleEditTaskSubmit(event) {
    event.preventDefault();
    
    putUpdateTask(this.state.editItem).then(() => {
      this.setState((prevState) => {
        let newData = prevState.todoItems;
        let editedItem = newData.find(
          (x) => x.id_task === this.state.editItem.id_task   
        );
        
        Object.assign(editedItem, this.state.editItem);
        return { todoItems: newData, modalEditar: false };
        
      });
    });
  }

 
  handleDeleteSubmit=(event, id_task)=>{     
    event.preventDefault();  
    removeTask(id_task).then(() => {
        this.setState({
            todoItems:this.state.todoItems.filter(x=>x.id_task!==id_task)
        })
          
      });
  }
  render() {
    return (
      <>
        <h1 className="bg-primary text-white text-center p-4">Ensolvers APP</h1>
        <Container>
          <br />
          <Button color="primary" onClick={() => this.showModalInsert()}>
            {" "}
            Insertar Tarea
          </Button>
          <br />
          <br />

          <Table>
            <thead>
              <tr>
                <th>Tareas</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todoItems.map((item) => (
                <tr>
                  <td >
                    <input type="checkbox" name = "Done" checked={item.task_state} onChange= {(e)=>this.handleCheckSubmit(e,item.id_task)} ></input>
                    {"   "}
                    {item.name_task}
                  </td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() =>
                        this.openModalEdit(
                          item.id_task,
                          item.name_task,
                          item.task_state
                        )
                      }
                    >
                      Edit
                    </Button>
                    {"  "}
                    <Button color="danger" onClick= {(e)=>this.handleDeleteSubmit(e,item.id_task)}>
                     Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3> Insertar Tarea</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Tarea:</label>
              <input
                className="form-control"
                name="name_task:"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <form onSubmit={this.handleSubmit}>
              <Button color="primary"> Insertar</Button>
              <Button color="danger" onClick={() => this.DontshowModalInsert()}>
                {" "}
                Cancelar
              </Button>
            </form>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Edit Task</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Tarea:</label>
              <input
                className="form-control"
                name="name_task"
                type="text"
                value={this.state.editItem.name_task}
                onChange={this.handleEdit}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <form onSubmit={this.handleEditTaskSubmit}>
              <Button color="primary"> Insertar</Button>
              <Button color="danger" onClick={() => this.closeModalEdit()}>
                {" "}
                Cancelar
              </Button>
            </form>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ToDoItems;

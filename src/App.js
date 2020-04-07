import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import './App.css';
import uuid from 'react-uuid';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      tasks: [],
      task: '',
      id: uuid()
    };

    console.log('counter:' + this.state.counter)
  }

  // increcment = () => {
  //   this.setState({ counter: ++this.state.counter});
  //   console.log('counter:' + this.state.counter)
  // }

  // decrecment = () => {
  //   if(this.state.counter > '0')
  //   {
  //     this.setState({ counter: --this.state.counter });
  //   }

  //   console.log('counter:' + this.state.counter)
  // }

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  onSubmitButton = (event) => {
    event.preventDefault();

    const newTask = {
      id: this.state.id,
      task: this.state.task
    };
    console.log(newTask);

    const updatedTasks = [...this.state.tasks, newTask];

    this.setState({
      tasks: updatedTasks,
      task: '',
      id: uuid(),
      counter: ++this.state.counter
    });

    console.log("tasks array:" + " " + this.state.tasks)
  }

  DeletButtonHandle = (task) => {
    var array = [...this.state.tasks];
    var index = array.indexOf(task)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        tasks: array,
        counter: --this.state.counter
      })
    }
  }


  render() {
    return (
      <div className='App'>

        :רשימת מטלות

        <Alert variant='primary'>
          !  יש לך {this.state.counter} מטלות קיימות
        </Alert>

        <Form className='Form' onSubmit={this.onSubmitButton}>

          <Form.Label>:רשמו מטלה חדשה
          <Form.Control
              type="srting"
              placeholder="...מטלה חדשה"
              value={this.state.task}
              onChange={this.handleChange}>
            </Form.Control>
          </Form.Label>
          <button variant="primary" type="submit" className="SubmitButton">
            +
        </button>
        </Form>
        {this.state.tasks.map((task, key) => (
          <div key={key}>
            <Alert variant="primary">{task.task}
              <button variant="primary" type="submit" className="DeletButton" onClick={() => this.DeletButtonHandle(task)}>
                -
        </button>
            </Alert>
            {/* <div>{"id number:" + ' ' + task.id}</div> */}

          </div>
        ))}

        {/* <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={ () => this.increcment()}>+</Button>
          <Button variant="secondary" onClick={ () => this.decrecment()}>-</Button>
        </ButtonGroup>  */}

      </div>
    );
  }
}

export default App;

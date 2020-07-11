import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid/v1';

class TasksList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'eggs'},
                {id: uuid(), name: 'mild'},
                {id: uuid(), name: 'stone'},
                {id: uuid(), name: 'wolf'}
        ]
    }


    render() {
        const {items} = this.state;
        return(
            <Container>
                <Button color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, {id: uuid(), name: name}]
                        }));
                    }
                }}
                >Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="tasks-list">
                        {items.map(({id,name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn mr-3" color="danger" size="small" 
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }));
                                    }} >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default TasksList;
import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid/v1';

import {connect} from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class TasksList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const {items} = this.props.item;
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

TasksList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems})(TasksList);
import React from 'react';

class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: 'italic',
            color: '#dddddd',
            textDecor: 'line-through'
        }
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    onChange={() => this.props.handleChange(this.props.id)} 
                    checked={this.props.completed} />
                <p style={this.props.completed ? completedStyle : null}>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default TodoItem;
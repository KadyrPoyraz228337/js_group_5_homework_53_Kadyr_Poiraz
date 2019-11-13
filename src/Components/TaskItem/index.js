import React, {Component} from 'react';
import "./style.css";

class TaskItem extends Component {
    render() {
        const task = this.props;
        return (
            <div className="taskItem">
                <div className="taskItem__header">
                    {task.isChecked ? task.task+'(выполнено)' : task.task}
                </div>
                <div className="taskItem__body">
                    {task.isChecked ? <input type="checkbox" className="taskItem__checkbox" onClick={task.checked} checked/> : <input type="checkbox" className="taskItem__checkbox" onClick={task.checked}/>}
                    {task.isEdit ? <input type="text" value={task.content} onChange={task.onChange} className="taskItem__input"/> : <p className="taskItem__p">{task.isChecked ? <del>{task.content}</del> : task.content}</p>}
                    {task.isChecked ? null : <a href="#" className="taskItem__edit" onClick={task.editOnClick}>{task.isEdit ? 'Применить' : 'Изменить'}</a>}
                    <a href="#" className="taskItem__delete" onClick={task.deleteOnClick}>Удалить</a>
                </div>
            </div>
        )
    }
}

export default TaskItem;
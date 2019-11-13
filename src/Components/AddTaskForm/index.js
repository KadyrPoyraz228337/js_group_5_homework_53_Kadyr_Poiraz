import React, {Component} from 'react';
import "./style.css";

class AddTAskForm extends Component {
    render() {
        const addTask = this.props;
        return (
            <div>
                <form action="#">
                    <div className="form">
                        <div className="form__titleBlock">
                            <h1 className="form__title">
                                todo.app
                            </h1>
                        </div>
                        <div className="form__inputBlock">
                            <input type="text" className="form__input" id="input"/>
                            <button className="form__button" onClick={addTask.onClick}>Добавить</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTAskForm;
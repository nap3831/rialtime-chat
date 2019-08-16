import React, { Component } from 'react'

class InputData extends Component {
    state = {
        msg: ""
    }

    onTextChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    onClickButton = () => {
        this.props.onClickButtonHandler(this.state.msg)
        this.setState({
            msg : ""
        })
    }
    render() {
        return (
            <div className="panel-footer">
                <div className="input-group">
                    <input
                        onChange={this.onTextChange}
                        value={this.state.msg}
                        id="btn-input" type="text" className="form-control input-sm" placeholder="ใส่ข้อความให้พี่ได้เลยจ้า." />
                    &nbsp;
                        <button
                        onClick={this.onClickButton}
                        className="btn btn-primary mt-3 w-100" id="btn-chat">
                        ส่งข้อความ</button>
                </div>
            </div>
        )
    }
}

export default InputData

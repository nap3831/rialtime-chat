import React, { Component } from 'react'

class ListData extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        return (
            <div className="text-warp">
                {
                    this.props.listMsg.map(msg => {
                        return <p key={msg.key}>{msg.message}</p>
                    })
                }
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )
    }
}

export default ListData
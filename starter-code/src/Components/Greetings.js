import React, { Component } from 'react';


class Greetings extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>Lang: {this.props.lang}</p>
                    <p>Text: {this.props.text}</p>
                </div>
            </div>
        )

    }


}
export default Greetings;
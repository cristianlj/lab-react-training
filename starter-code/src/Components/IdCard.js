import React, { Component } from 'react';

class IdCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>Last name: {this.props.lastName}</span>
                    <span>First name:  {this.props.firstName}</span>
                    <span>Gender: {this.props.gender}</span>
                    <span>Height:   {this.props.height}</span>
                    <span>Birth:   {this.props.birth.toString()}</span>
                </div>
                <div> <img src={this.props.picture} /></div>
            </div>
        )
    }
}

export default IdCard;
import React, {Component} from 'react'
import "./dropdown.css"

class Dropdown extends React.Component {

    state = {showContent: false}

    handleClick = (e) => {
        e.preventDefault()

        this.setState({showContent: !this.state.showContent})        
        
    }

    render(){
        const { title, content } = this.props
        const className = this.state.showContent ? 'show' : 'hide';
        return <div className="dropdown">
            <button className="dropdown_btn" onClick={this.handleClick}>{title}</button>
            <div className={className}>
                {Array.isArray(content) ? (
                    <ul>{content.map((element) => (<li>{element}</li>))}</ul>
                ) : (<p>{content}</p>)}
                
            </div>
        </div>
    }
}

export default Dropdown;
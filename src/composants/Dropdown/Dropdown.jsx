import React, {Component} from 'react'
import "./dropdown.css"

class Dropdown extends React.Component {

    state = {showContent: false}

    handleClick = (e) => {
        e.preventDefault()

        this.setState({showContent: !this.state.showContent})        
        
    }

    render(){
        const className = this.state.showContent ? 'show' : 'hide';
        return <div className="dropdown">
            <button className="dropdown_btn" onClick={this.handleClick}></button>
            <div className={className}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ratione, aut maxime accusantium, ipsum optio suscipit laboriosam consectetur, blanditiis id libero! Unde incidunt laborum similique reiciendis vitae earum illum dicta!</p>
            </div>
        </div>
    }
}

export default Dropdown;
import React, {Component} from 'react'
import "./banner.css"


class Banner extends Component {
    render(){
        return <div className="banner">
            <img className= "banner_img" src={this.props.image} alt="bannière"></img>
            <p className="banner_title">{this.props.title}</p>
        </div>
    }
}

export default Banner;
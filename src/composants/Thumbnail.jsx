import React, {Component} from 'react'
import housings from "../housing-list"

class Thumbnail extends React.Component {

    render(){
        return(
            <div>
                <a>
                    <img scr= {this.props.details.cover} alt="couverture du logement"></img>
                    <title>{this.props.details.title}</title>
                </a>
            </div>
        )
        
    }
}

export default Thumbnail;
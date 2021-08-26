import React, {Component} from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { housings } from '../../housing-list';
import "./housing.css"


class Housing extends React.Component {

    
    // state = {
    //     housing: {housings.map((housing) => () }
    // }

    render(){
        const urlSplited = window.location.pathname.split('/');
        const id = urlSplited[2];
        const index = housings.findIndex((housing) => {
            return housing.id === id
        })
        return <div>
            {/* <Carousel/> */}
            
            <div>
                <div>
                    {housings[index].title}
                    {housings[index].location}                    
                </div>
            </div>
        </div>
    }
}

export default Housing;
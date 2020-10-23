import React from 'react';
import cv from '../images/cover.png'
import '../css/Header.css'
import add from '../images/add.jpg'

class Cover extends React.Component{
    render(){
        return(
<div>
<img src={cv} alt="cover image" className="img-fluid cent"/>
<br />
<br />
<br />

<img src={add} alt="cover image" className="img-fluid adds"/>

</div>

        )
    }
}
export default Cover;
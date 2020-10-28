import React from 'react';
import last from "../images/last.png";
import "../css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAppleAlt} from '@fortawesome/free-solid-svg-icons'
import apple from "../images/apple.png"
class Footera extends React.Component{
render(){
const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

    return(
        <div>
<br />        
<br />        
<div className="footera">
<div className="container">
<div className="row">
<div className="col-4">
<img src={last} className="img-fluid" />
</div>
<div className="col-4 ">
<div className="insideaz">
<h2>TRY THE OLX APP</h2>
<h5 style={{fontSize : "17px"}}>Buy, sell and find just about anything using the app on your mobile.</h5>
</div>

</div>
<div className="col-4 ">
<div className="insidea">
<h5>GET YOUR APP TODAY</h5>
<div classNam="btns">
<button type="button" class="btn btn-dark czx" >
<FontAwesomeIcon icon={faAppleAlt} className="apple"/>
<span className="texa ml-2 ">Download on the</span>
<h6 className="ml-3 tex">App Store</h6>
</button>
<button type="button" class="btn btn-dark czx ml-2" >
<FontAwesomeIcon icon={faAppleAlt} className="apple"/>
<span className="texa ml-2 ">Download on the</span>
<h6 className="ml-4 tex">Google Play</h6>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    )
}
}

export default Footera;
import React from 'react';
import last from "../images/last.png";
import "../css/Header.css";
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
<div className="col-4 bg-danger">
<img src={last} className="img-fluid" />
</div>
<div className="col-4 bg-primary">
<h2>TRY THE OLX APP</h2>
<h5>Buy, sell and find just about anything using the app on your mobile.</h5>

</div>
<div className="col-4 bg-success">
<h6>GET YOUR APP TODAY</h6>
<div>
<button type="button" class="btn btn-dark">
    <img src={apple} className="app" />
</button>
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
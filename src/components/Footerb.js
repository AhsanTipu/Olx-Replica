import React from 'react';
import "../css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  from '@fortawesome/free-solid-svg-icons'
class Footerb extends React.Component{
    render(){
        return(
            <div className="footerb pt-2">
<div className="container">
<div className="row">
<div className="col-2 pt-3 pb-3">
<h5 style={{fontSize:"15px"}}>POPULAR CATEGORIES</h5>
<a className="la">Cars</a>
<br />
<a className="la">Flats For Rent</a>
<br />
<a className="la">Jobs</a>
<br />
<a className="la">Mobile Phones</a>



</div>
<div className="col-2 pt-3 pb-3">
<h5 style={{fontSize:"15px"}}>TRENDING SEARCHES</h5>
<a className="la">Bikes</a>
<br />
<a className="la">Watches</a>
<br />
<a className="la">Books</a>
<br />
<a className="la">Dogs</a>


</div>
<div className="col-2 pt-3 pb-3">
<h5 style={{fontSize:"15px"}}>ABOUT US</h5>
<a className="la">About OLX Group</a>
<br />
<a className="la">OLX Blog</a>
<br />
<a className="la">Contact Us</a>
<br />
<a className="la">OLX for Businesses</a>


</div>
<div className="col-2 pt-3 pb-3">
<h5 style={{fontSize:"15px"}}>OLX</h5>
<a className="la">Help</a>
<br />
<a className="la">Sitemap</a>
<br />
<a className="la">Legal & Privacy information</a>



</div>
<div className="col-4 pt-3 pb-3">
<h5 style={{fontSize:"15px"}}>FOLLOW US</h5>


</div>
</div>
</div>
            </div>
        )
    }
}
export default Footerb;
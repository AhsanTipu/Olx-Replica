import React from 'react';
import logo from '../images/logo.png'
import '../css/Header.css'
import sell from '../images/sell.png'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextField } from '@material-ui/core';



class Header extends React.Component{
    render(){
        return(
        <div className="head">
<div className="container">
<div className="row">
<div className="col-4 pt-2 ">
<img src={logo} alt="Logo" className="logo"/>
<TextField className="headm">
<FontAwesomeIcon icon={faSearch} />
    
</TextField>

</div>
<div className="col-4  ">
<h1 className="searchb">AHSAN</h1>
</div>
<div className="col-4 pt-2 ">
<div className='inner'>
    <h6 className="login pt-1">Login</h6>
</div>
<img src={sell} alt="Logo" className="sell"/>

</div>
</div>

</div>
        </div>
        
        
        )
            
    }
}

export default Header;
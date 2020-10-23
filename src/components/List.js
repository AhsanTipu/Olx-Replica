import { List } from '@material-ui/core';
import React from 'react';
import '../css/Header.css'


class ListCat extends React.Component{
render(){
    return(
        <div className="maind">
                   <div className='container'>
<div className='row'>
<div className="col-12  listv">
<h6 className="cate pt-3">All Categories</h6>

<div className="insided">
<ul className="lista">
    <li className="listab mx-1 pt-3"><a >Mobile phones</a></li>
    <li className="listab mx-1 pt-3"><a>Cars</a></li>
    <li className="listab mx-1 pt-3"><a>Motor Cycles</a></li>
    <li className="listab mx-1 pt-3"><a>TV-Video-Audio</a></li>
    <li className="listab mx-1 pt-3"><a>Tablets</a></li>
</ul>
</div>
</div>
</div>
        </div>
        
        </div>
 
    )
}
}
export default ListCat;
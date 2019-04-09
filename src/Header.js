import React, {Component} from 'react'

class Header extends Component{
  render(){
    return (
    <nav class="navbar navbar-expand-lg navbar-dark  sticky-top pb-1 mnav">
    <a className="navbar-brand h-1 mbrand" href="./" >
    <label className="mbrand">Don Bosco<br/>Sports Academy</label>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="./">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./">About</a>
        </li>
        {/*First level dropdown */}
        <li class="nav-item dropdown">
          <li class="nav-link dropdown-toggle" style={{cursor: 'pointer'}} id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
          Events
          </li>
          <ul class="dropdown-menu bg-light">
            {/* second level dropdown */}
            <li class="dropright">
              <li class="dropdown-toggle dropdown-item " style={{cursor: 'pointer'}} id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Outdoor</li>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./"><img src="https://image.flaticon.com/icons/svg/10/10585.svg"
                  alt="" height="20" width="20"/> Cricket</a> </li>
                <li><a class="dropdown-item" href="./"><img src="https://image.flaticon.com/icons/svg/55/55243.svg"
                  alt="" height="20" width="20"/> Basketball</a></li>
                <li><a class="dropdown-item" href="./"><img src="https://image.flaticon.com/icons/svg/731/731947.svg"
                  alt="" height="20" width="20"/> Softball</a></li>
              </ul>
            </li>

            {/*second level dropdown*/}
            <li class="dropright">
              <li class="dropdown-toggle dropdown-item " style={{cursor: 'pointer'}} id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Indoor</li>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./"><img src="https://image.flaticon.com/icons/svg/726/726165.svg"
                  alt="" height="20" width="20"/> Chess</a></li>
                <li><a class="dropdown-item" href="./"><img src="https://image.flaticon.com/icons/svg/125/125252.svg"
                  alt="" height="20" width="20"/> Table Tennis</a></li>
                <li><a class="dropdown-item" href="./"><img src="https://image.flaticon.com/icons/svg/53/53773.svg"
                  alt="" height="20" width="20"/> Archery</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./">Alumini</a>
        </li>
      </ul>
    </div>
    <div class="float-sm">
     <div class="fl-fl float-fb">
       <i class="fab fa-facebook-square fa-2x " style={{padding: "5px"}}></i>
       <a href="" >Like us!</a>
     </div>
     <div class="fl-fl float-tw">
       <i class="fab fa-twitter fa-2x" style={{padding: "5px"}}></i>
       <a href="" >Follow us!</a>
     </div>
     <div class="fl-fl float-gp">
         <i class="fab fa-youtube fa-2x" style={{padding: "5px"}}></i>
       <a href="" >Subscribe!</a>
     </div>
   </div>
  </nav>
    )
  }
}

export default Header

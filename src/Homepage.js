import React, {Component} from 'react'

class Homepage extends Component {

  render(){
    return (
      <div>
  {/*<div class="mbg">
  </div>*/}
  <div class="show" data-wow-delay="2s" style={{width: "80%"}}>
    <div class="row">
      <div class="col carousel-padding">
        <div id="departmentPhotos" class="carousel slide" data-interval="3000" data-pause="hover" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#departmentPhotos" data-slide-to="0" class="active"></li>
            <li data-target="#departmentPhotos" data-slide-to="1"></li>
            <li data-target="#departmentPhotos" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.iitbhu.ac.in/contents/institute/deans/dosa/img/councils_games02.jpg" class="d-block h-600 w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide heading</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/full/public/file-20180906-190665-140czlp.jpg?itok=AgorKbuP&mtime=1537334388"
                class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide heading</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="http://www.sparknz.co.nz/content/dam/SparkNZ/images/news/Hockey_Large.jpg" class="d-block w-100"
                alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide heading</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#departmentPhotos" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#departmentPhotos" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="show pl-2">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </p>
  </div>
  <div class="pl-2 show mt-2 ">
    <div class="col">
      <div class="rounded circle d-flex flex-row">
        <img  src="https://image.freepik.com/free-icon/important-person_318-10744.jpg" width="400px" height="400px" alt=""/>
      </div>
      <blockquote class="blockquote text">
        <p class="mb-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
      <div class="rounded circle d-flex flex-row-reverse">
        <img src="https://image.freepik.com/free-icon/important-person_318-10744.jpg" width="400px" height="400px"
          alt=""/>
      </div>
      <blockquote class="blockquote text-right">
        <p class="mb-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
      <div class="rounded circle d-flex flex-row">
        <img
          src="https://image.freepik.com/free-icon/important-person_318-10744.jpg" width="400px" height="400px" alt=""/>
      </div>
      <div >
        <blockquote class="blockquote text">
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default Homepage

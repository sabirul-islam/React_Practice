import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () =>{
    return(
        <React.Fragment>
<div class="container">
<h1 className="text-center text-info text-capitalize mt-3 mb-5">Welcome to my world</h1>

  <div className="row">
    <div className="col-sm">
    <div class="card">
    <img src="https://picsum.photos/199" class="card-img-top" alt="pic" height="200px"/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="a.com" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>

    <div className="col-sm">
    <div class="card">
    <img src="https://picsum.photos/200" class="card-img-top" alt="pic" height="200px"/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="a.com" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    
    <div className="col-sm">
    <div class="card">
    <img src="https://picsum.photos/201" class="card-img-top" alt="pic" height="200px"/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="a.com" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
  </div>
</div>
        </React.Fragment>
    )
}
export default App
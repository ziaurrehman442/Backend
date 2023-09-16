import { Link } from "react-router-dom";

function Price(){
    return(
        <div className="container home pn">
        <h1 className="my-5" align='center'>Pricing</h1>
        <p align='center'>One price, all features and unlimited use.</p>
        <div className="my-3 container" align='center'>
        <div class="card cardprice">
  <div class="card-body">
    <span>
        <b>US$&nbsp;14.99</b>
    </span> / month 
    <button className="btn btn-large btn-primary mt-3 px-4">Try 14 days for US$ 1.99</button>
    <button className="btn btn-large btn-primary mt-2 mb-3 px-5">Get  Full Package</button>
    <div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Create professional CVs</li>
    <li class="list-group-item">Create Unlimited CVs</li>
    <li class="list-group-item">Organize applications</li>
  </ul>
</div>
  </div>
</div>
        </div>
    </div>
    );
}
export default Price;
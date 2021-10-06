import React from 'react';
import './Error.css'
import { withRouter } from "react-router-dom";
function Error() {
    return ((
        <div className="Erdiv" >
         <section class="Error_page">
          <div class="container">
            <div class="row"> 
             <div class="col-sm-12 ">
             <div class="col-sm-10 col-sm-offset-1  text-center">
             <div class="four_zero_four_bg">
               <h3 class="text-center ">Oops Something Went Wrong </h3>
             </div>
      
        <div class="contant_box_404">
        <h3 class="h2">Please Try Again Later</h3>
      <br/>
      
      <a href="/home" class="btn btn-success">Go back</a>
    </div>
      </div>
      </div>
      </div>
    </div>
  </section>
  
      </div>
        )
    )
}
export default withRouter(Error)

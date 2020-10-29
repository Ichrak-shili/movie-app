import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
const MovieCard=({movieData})=>{
  
  
  return(
    <>
    <div className="card mb-3" style={{maxWidth: "540px"}} >
  <div className="row no-gutters">
    <div className="col-md-4" style={{backgroundImage:`url(${movieData.poster})`}}>
    
    </div>
    <div className="col-md-8">
      <div className="card-body" >
        <h5 className="card-title">Movie Details</h5>
        <h1 className="card-title">{movieData.title}</h1>
  <p className="card-text"><small className="text-muted">Rating:{movieData.rate}/10</small></p>
        <p className="card-text">{movieData.description}</p>
        
      </div>
    </div>
  </div>
</div>
 
</>
   
  );


}
export default MovieCard;
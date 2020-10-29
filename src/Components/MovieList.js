import React ,{useState , useEffect} from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import $ from'jquery';
const MovieList=()=>{

    const [movieData,setState]=useState({title:'',
    description:'',
    rate:0,
    poster:''     });
    
     const [list,setList]=useState([{id:0,info:{title:'Frozen',
     description:'Animation',
     rate:8,
 poster:'https://i.ebayimg.com/images/g/MVoAAOSwHTlbu3ks/s-l640.jpg'     }}])
     const[Term,setTerm]=useState({searchrate:0,searchtitle:''});
     
     const update=(e)=>{
       setState({...movieData,[e.target.name]:e.target.value});
       setTerm({...Term,[e.target.name]:e.target.value});
       
  
     }
     const reset=(e)=>{
       e.preventDefault();
       $('#search').hide();
      
       
     }
     
     useEffect(() => {
      const handleSubmit=(e)=>{
        e.preventDefault();
        setList([...list,{id:list.length,info:movieData}]);
        document.querySelector('.form-inline').reset();
      }

    const handleSearch=(e)=>{
      e.preventDefault();
      document.getElementById('f2').reset();
      $('#ST').hide();
      $('#SR').hide();
      $('#search').show();
      
    
   }    
        document.getElementById("but1").addEventListener('click',handleSubmit);
        document.getElementById("but2").addEventListener('click',handleSearch);
    
       return () => {
        document.getElementById("but1").removeEventListener('click',handleSubmit);
        document.getElementById("but2").removeEventListener('click',handleSearch);
    
       }
     },[list,movieData]);
        
      return(
        <div>  
      <form className="form-inline">
          <fieldset >
            <legend>Add a new movie </legend>
        
         <input type="text" className="form-control col-2 mr-sm-2" name="title" placeholder="Title" onChange={update}/>
         <input type="text" className="form-control col-2 mr-sm-2" name="url"placeholder="PosterURL" onChange={update}/>
         <input type="text" className="form-control col-2 mr-sm-2"name="rate" placeholder="Rating" onChange={update}/>
         <input type="text" maxLength="350" className="form-control col-2 mr-sm-2"name="description" placeholder="Description" onChange={update}/>
         
         
      <button type="submit" className="btn btn-primary col-sm-2" id="but1">Submit</button>
      
      </fieldset> 
      </form>
      <form id="f2">
      <fieldset>
    <legend>Search a Movie by :</legend>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="title"  onClick={()=> $('#ST').toggle()}/>
  <label className="form-check-label" htmlFor="title">
    Title
  </label>&nbsp;
  <input className="form-control col-sm-2" type="search" name="searchtitle" id="ST" style={{display:'none'}} onChange={update} />
   </div>
   <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="Rate" onClick={()=> $('#SR').toggle()} />
  
  <label className="form-check-label" htmlFor="Rate">
    Rate   
  </label> &nbsp;
  <input className="form-control col-sm-2" type="search"  id="SR" onChange={update} name="searchrate" style={{display:'none'}}/>
   </div>

   <br/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="but2" >Search <i className="fa fa-search"></i></button>
    </fieldset>
    </form>
    <div id="list" style={{position:'absolute',top:0,right:50,width:"300px"}}>
    <h2>List of Movies :</h2>
    
    {list.length>0? list.map((item,i)=><MovieCard key={i} movieData={item.info}/> ).reverse() :<p>Couldn't find any movie.</p> }
    </div>
     <div id="search" style={{display:'none'}}>
        <h2>Searched Movies </h2>
        <Filter title={Term.searchtitle} rate={Term.searchrate} list={list}/>
        <button className="btn btn-primary" onClick={reset} >Reset</button>
     </div>

    </div>);
      

}
export default MovieList;
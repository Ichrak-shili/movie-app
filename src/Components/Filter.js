import React from 'react';

import MovieCard from './MovieCard';


const Filter=({title,rate,list})=>{

   let r=+rate;
   let L=[];
    
  if (list.length===0){
      return <p>Couldn't find any movie</p>
  }
  else {
      if (title==='' && r===0)
      {L=[]}
      else if (title!=='' && r>0)
      {L=list.filter(item=>item.info.title===title && +item.info.rate===r).map((item,i)=><MovieCard key={i} movieData={item.info}/> ) }
      else if (title==='' && r>0)
      { L=list.filter(item=> +item.info.rate===r).map((item,i)=><MovieCard key={i} movieData={item.info}/> )}
      else{
        L=list.filter(item=>item.info.title===title).map((item,i)=><MovieCard key={i} movieData={item.info}/> )
      }
   return (L.length>0?L:<p>Please search again using
      another search criteria.</p>)
      
  }
      
  


}
export default Filter ;
import React from "react";
import "./Jumbotron.css"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/">Blake's Google Book Search</a></span></h1>
        <div className='pwrdBy'>
          <a className="white" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by Google Books
          </a>
        </div>
      
    </div>
  );
}



export default Jumbotron;

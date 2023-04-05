import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const SingleCard = ({card, handleWatchTime, handleBookMark}) => {

    return (
        <div className="img-card card">
       <div className="img-poster ">
           <img className='w-100'  src={card.blogCoverImage} alt=""  />
       </div>

       <div className="img-release-time-rating d-flex justify-content-around mt-3">
        
        <div className="img-author-rating d-flex  col-md-9">
           <div className="author-image col-md-4 ">
            <img className='rounded-circle w-25' src={card.authorImage} alt=""  />
            
           
           </div>

           <div className="author-name-publish col-md-4 pt-2 pb-2">
           <p>{card.authorName}</p>
          
           <p>{card.publishDate}</p>
           </div>  
           
        </div>
 
     
      <div className="reading-time col-md-3">
       <p>{card.readTime} min read   <FontAwesomeIcon onClick={()=> handleBookMark( card.id, card.blogTitle)} icon={faBookmark} />
       
        </p>
        {/* <span onClick={()=> handleBookMark( card.id, card.blogTitle)}><FontAwesomeIcon icon={faBookmark} /></span> */}
      </div>

      
    </div>
    <h4>{card.blogTitle}</h4>
    <button  className='w-50 '> <p className='text-primary '> <a className='text-decoration-underline' onClick={()=> handleWatchTime(card.readTime)}>Mark As Read</a> </p> </button>
   
       </div>  
    );
};

export default SingleCard;
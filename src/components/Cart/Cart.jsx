import React, { useEffect, useState } from 'react';

const Cart = ({watchTime, bookmarkTitle}) => {
    const [time, setTime] =useState(watchTime)
    
    useEffect( ()=> {
        const getWatchTime= localStorage.getItem("watchTime");
       // console.log(getWatchTime);
       setTime(getWatchTime)

    },[watchTime])

    const [titleofBookMark, setTitleOfBookMark] =useState(bookmarkTitle)
    
    useEffect( ()=> {
        const getBookMarkTitle= JSON.parse(localStorage.getItem("bookmark"));
       // console.log(getWatchTime);
       setTitleOfBookMark(getBookMarkTitle)

    },[bookmarkTitle])


    return (
        <div className='show-time '>
            <h4>Spent Time on Read : {time||0}  Min</h4>
           
            <div className='boomarks-blog card'>

            <h6>Bookedmarked Blogs: {titleofBookMark?.length||0} 
            </h6>

              {
                titleofBookMark?.map(bookmark=> <h3>{bookmark?.title}</h3>)
              }

            </div>

        </div>
    );
};

export default Cart;
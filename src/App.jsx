import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Blog from './components/Blog/Blog';

function App() {
 // const [count, setCount] = useState(0)
 const [watchTime, setWatchTime] = useState(0);
 const handleWatchTime = (time) =>{
  //console.log(time);

  const previousWatchTime=JSON.parse(localStorage.getItem("watchTime"));
  //console.log(previousWatchTime);

  if(previousWatchTime){
    const sum = previousWatchTime + time;
    //console.log(sum)
    localStorage.setItem("watchTime", sum);
    setWatchTime(sum)
  }
  else{
    localStorage.setItem('watchTime', time);
    setWatchTime(time)
  }

 };

 const [bookmarkTitle, setBookMarkTitle] = useState([])

const handleBookMark= (id,title) => {
  const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
  let bookmarkData = [];
  const bookMarkTitle = {  id, title };

  if (previousBookmark) {
    const isThisProductMarked = previousBookmark.find((pd) => pd.id == id);
    if (isThisProductMarked) {
     // console.log('data pawa gese')
     bookmarkData.push(...previousBookmark, bookMarkTitle);
      localStorage.setItem("bookmark", JSON.stringify(bookmarkData));
      setBookMarkTitle(bookmarkData)
     
      swal({
        icon: "error",
        title: "Oops...",
        text: "You Have Already Bookmarked This Blog",
       
      });

    } else {
      bookmarkData.push(...previousBookmark, bookMarkTitle);
      localStorage.setItem("bookmark", JSON.stringify(bookmarkData));
      setBookMarkTitle(bookmarkData)
      //console.log(bookmark);
    }
  } else {
    bookmarkData.push(bookMarkTitle);
    localStorage.setItem("bookmark", JSON.stringify(bookmarkData));
    setBookMarkTitle(bookmarkData)
  }
}



  return (
    <div className="App">
      <div className="header  m-auto mb-3 ">
     <Header></Header>
      </div>

      <div className="main row">
   
   <div className="home-container col-md-8">
      <Home handleWatchTime={handleWatchTime} handleBookMark={handleBookMark}> </Home>
   </div>

   <div className="side-cart col-md-4">
      <Cart watchTime={watchTime} bookmarkTitle={bookmarkTitle}></Cart>
   </div>

      </div>
    <Blog></Blog>
    </div>
  )
}

export default App

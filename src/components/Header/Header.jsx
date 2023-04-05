import React from 'react';

const Header = () => {
    return (
        <div className='d-flex justify-content-between'>
             
        <a className="navbar-brand col-md-6"><h4>Knowledge Cafe</h4></a>
       
        <div>
        <img className='rounded-circle rounded-circle w-25 ' src="https://images.unsplash.com/profile-fb-1486114246-c89351f2ad99.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
        </div>
       
         
        </div>
    );
};

export default Header;
import React from 'react';

const Blog = () => {
    return (
        <div className='blogs-part'>
            <h1>Question Part</h1>
      <h4>What is the Difference between Props vs State?</h4>
      <p>State: Through this, the state of the JavaScript component can be changed, basically state is used to change the state, it is not updated automatically.</p>

      <p>Props: This is a very important part of JavaScript, it allows you to pass values ​to JavaScript components and use those values ​​in that component. This cannot be changed</p>

      <h4>2. How does useState work?</h4>
   <p>  useState is a hook in React. It creates a state variable that can be accessed from any function. To use useState we need to keep two things - first the state variable and second the set value is used to update.</p>

   <h3>3. What is the Purpose of useEffect other than fetching data?</h3>
  
    <p>UseEffect is a React Hook used to execute an additional operation or a side effect when the code runs. However, UseEffect can also perform certain operations as a side effect.For example, in a component we can see the user scrolling. In this case, we can perform some operation on the scroll using useeffect, like loading some data or performing some action</p>
   
    <h5>4.How Does React work</h5>
    <p>React's core processes are the Virtual DOM and the React renderer. Virtual DOM is a copy of the real DOM, which is used when rendering React components. After rendering the React component, the Virtual DOM is created and then compared to the current real DOM to see which one needs to be updated. Then just update by changing that one component.</p>
        </div>
    );
};

export default Blog;
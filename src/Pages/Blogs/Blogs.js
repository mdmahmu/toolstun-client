import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            Question : How will you improve the performance of a React Application?
            <br />
            <br />
            There are several techniques to improve the performance of a React Application.
            Technique 1 :  Using Immutable Data Structures
            Data immutability, which comes from the functional programming world, can be applied to the design of front-end apps. It can have many benefits like zero side-effects; immutable data objects are simpler to create, test, and use; helps prevent temporal coupling; easier to track changes.
            Technique 2 :  Memoization
            Memoization is a technique for executing a function once, usually a pure function, and then saving the result in memory. When a function is rendered using this technique, it saves the result in memory, and the next time the function with the same arguments is called it returns the saved result without executing the function again, saving you bandwidth.
            Technique 3 :  Avoid anonymous functions
            Because anonymous functions aren’t assigned an identifier (via const/let/var), they aren’t persistent whenever a component inevitably gets rendered again. This causes JavaScript to allocate new memory each time this component is re-rendered, instead of allocating a single piece of memory only once, like when named functions are being used.
            Technique 4 :  Lazy Loading Components
            Lazy loading is a great technique for optimizing and speeding up the render time of your app. The idea of lazy loading is to load a component only when it is needed. React comes bundled with the React.lazy API so that you can render a dynamic import as a regular component.
            <br />
            <br />
        </div>
    );
};

export default Blogs;
import React from 'react';

const Home = (props) => {
    console.log('home-props', props)
    return (
        <div>
            <h1>Home Component</h1>
            <button onClick={()=>props.addToCart({product:'phone', price:20000})}>Add</button>
            <button onClick={()=>props.removeToCart()}>Remove</button>
        </div>
    );
}

export default Home;

import React from 'react';

const Home = (props) => {
    console.log('header-props', props.data)
    return (
        <div>
           Header <span>{props.data.length}</span>
        </div>
    );
}

export default Home;
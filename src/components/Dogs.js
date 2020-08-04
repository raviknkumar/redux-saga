import React, {useEffect, useState} from 'react';

import actions from '../redux/dogs/Actions';
import {connect} from "react-redux"; // import action and use it to bind it inside mapDispatchToProps
import './Dogs.css'; // add this for connect
const {handleDemoAction, handleFetchDogsRequest} = actions;

const Dogs = props => {

  // destructure props
  const {
    fetching, dogs, error,
    onRequestDog, demoRequest} = props;

  useEffect(() => {
    // Update the document title using the browser API
    console.log("Inside Use Effect");

    /*demoRequest({
      numbers: [1,2,3,4]
    });*/

    onRequestDog();

  }, []);

  const  loadMore = () => {
    console.log("Loading More Images");
    onRequestDog();
  };

  return (
    <div className="content">
      Dogs

      {error && <div>
        Error Fetching images {error}
      </div>}
      <section className="grid">
        {dogs.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(
              image.height / image.width,
            )}`}
          >
            <img src={image}/>
          </div>
        ))}
      </section>
      {fetching ?
        (<button disabled>Fetching...</button>) :
        (<button onClick={loadMore}>Load More</button>)
      }
    </div>
  );

};

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    dogs: state.dogs,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch(handleFetchDogsRequest({})),
    demoRequest: () => dispatch(handleDemoAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
{/*{fetching} the dogs
      {fetching ?
        <h1>Loading...</h1> :
        <img src={dog} style={{width:400, height: 400}}/>
      }
      */}

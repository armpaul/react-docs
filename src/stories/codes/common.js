import React from 'react';

const common = code =>
  `import React from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = props => {
  const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
  const MAP = {
    name: 'my-map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
  };
  
  return ${code}
}

export default Mapper;`;

export const clearButtonTemplate = `import React, { Fragment, useRef } from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = props => {
  const myRef = useRef(null);

  const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
  const MAP = {
    name: 'my-map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
  };
  
  const handleClear = () => {
    myRef.current.clearHighlightedArea();
  };
  
  return (
    <Fragment>
      <ImageMapper
          containerRef={myRef} 
          src={URL} 
          map={MAP}
          stayMultiHighlighted
       />
       <button onClick={handleClear}>Clear</button>
    </Fragment>
  )
}

export default Mapper;`;

export const TopComponent = (title, Content) => (
  <div className="top_container">
    <h1 className="title">{title}</h1>
    <div className="top_content">{Content}</div>
  </div>
);

export default common;

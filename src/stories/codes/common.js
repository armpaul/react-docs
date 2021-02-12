const common = code =>
`import React from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = props => {
  const URL = 'https://raw.githubusercontent.com/NishargShah/react-img-mapper/master/src/assets/example.jpg';
  const MAP = {
    name: 'my-map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: 'https://raw.githubusercontent.com/NishargShah/react-img-mapper/master/src/assets/example.json',
  };
  
  return ${code}
}

export default Mapper;`;

export default common;

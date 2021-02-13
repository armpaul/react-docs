import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImageMapper from 'react-img-mapper';
import URL from '../../assets/example.jpg';
import areasJSON from '../../assets/example.json';

const DynamicMapper = props => {
  const MAP = {
    name: 'my-map',
    areas: areasJSON.map(cur => {
      const temp = { ...cur };
      if (['Front Wall', 'Window'].includes(cur.title)) {
        delete temp.fillColor;
        delete temp.strokeColor;
        return temp;
      }
      return temp;
    }),
  };

  return (
    <Fragment>
      <div className="top_container">
        <h1 className="title">Dynamic All Properties Example</h1>
        <div className="top_content">
          <p>
            In this example, all fields available in storybook
            <span className="tag">controls tab</span>, you can change it and see the{' '}
            <span className="tag">live</span> results in image mapper
          </p>
        </div>
      </div>
      <ImageMapper src={URL} map={MAP} {...props} />
    </Fragment>
  );
};

DynamicMapper.defaultProps = {
  width: 640,
  height: 480,
  lineWidth: 1,
  active: true,
  fillColor: 'rgba(255, 255, 255, 0.5)',
  strokeColor: 'rgba(0, 0, 0, 0.5)',
  natural: false,
  imgWidth: 0,
  stayHighlighted: false,
  stayMultiHighlighted: false,
  toggleHighlighted: false,
  parentWidth: 640,
  responsive: false,
};

DynamicMapper.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  lineWidth: PropTypes.number,
  active: PropTypes.bool,
  fillColor: PropTypes.string,
  imgWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  natural: PropTypes.bool,
  stayHighlighted: PropTypes.bool,
  stayMultiHighlighted: PropTypes.bool,
  toggleHighlighted: PropTypes.bool,
  parentWidth: PropTypes.number,
  responsive: PropTypes.bool,
};

export default DynamicMapper;

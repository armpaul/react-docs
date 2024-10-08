import React, { Fragment } from 'react';
import ImageMapper from 'react-img-mapper';
import URL from '../../assets/zooZone1_resized.jpg';
import areasJSON from '../../assets/zooZone1_resized.json';

const Mapper = props => {
  const { customJSON, customType, TopComponent, BottomComponent } = props;

  // const getJSON = () => {
  //   if (customJSON === 0) {
  //     return areasJSON.map(cur => {
  //       const temp = { ...cur };
  //       if (customType === 'fill') {
  //         delete temp.fillColor;
  //       }
  //       if (customType === 'stroke') {
  //         delete temp.fillColor;
  //         delete temp.strokeColor;
  //       }
  //       return temp;
  //     });
  //   }
  //   if (customJSON === 1) {
  //     return areasJSON.map(cur => {
  //       const temp = { ...cur };
  //       if (['Front Wall', 'Window'].includes(cur.title)) {
  //         if (customType === 'fill') {
  //           delete temp.fillColor;
  //         }
  //         if (customType === 'stroke') {
  //           delete temp.strokeColor;
  //         }
  //         return temp;
  //       }
  //       return temp;
  //     });
  //   }
  //   if (customJSON === 2) {
  //     return areasJSON.map(cur => {
  //       const temp = { ...cur };
  //       if (['Refrigerator', 'Window'].includes(cur.title)) {
  //         if (customType === 'active') {
  //           temp.active = false;
  //         }
  //         if (customType === 'disabled') {
  //           temp.disabled = true;
  //         }
  //         return temp;
  //       }
  //       return temp;
  //     });
  //   }
  //   return areasJSON;
  // };

  const MAP = {
    name: 'my-map',
    // areas: getJSON(),
    areas: areasJSON
  };

  return (
    <Fragment>
      {/* {TopComponent && <TopComponent />} */}
      {/* <ImageMapper src={URL} map={MAP} {...props}  />
       */
      <ImageMapper src={URL} map={MAP} onClick={area => this.clicked(area)} />}
      {/* {BottomComponent && <BottomComponent />} */}
    </Fragment>
  );
};

export default Mapper;

import common from './common';

export const fillColor = common(`<ImageMapper src={URL} map={MAP} />;`);

export const inArrayFillColor = common(`<ImageMapper src={URL} map={MAP} />;`);

export const dynamicFillColor = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      // dynamic fill color
      fillColor={props.fillColor}
   />
  )`);

export const dynamicMixArrayFillColor = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      // dynamic fill color
      fillColor={props.fillColor}
   />
  )`);

export const strokeColor = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      lineWidth={2}
   />
  )`);

export const inArrayStrokeColor = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      lineWidth={2}
   />
  )`);

export const dynamicStrokeColor = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      // dynamic stroke color
      strokeColor={props.strokeColor}
      // dynamic stroke line width
      lineWidth={props.lineWidth}
   />
  )`);

export const dynamicMixArrayStrokeColor = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      // dynamic stroke color
      strokeColor={props.strokeColor}
      // dynamic stroke line width
      lineWidth={props.lineWidth}
   />
  )`);

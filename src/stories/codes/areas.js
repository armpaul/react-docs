import common, { clearButtonTemplate } from './common';

export const showHighlightedArea = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      // dynamic active
      active={props.active}
   />
  )`);

export const staySelectedHighlightedArea = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      // dynamic stayHighlighted
      stayHighlighted={props.stayHighlighted}
   />
  )`);

export const stayMultipleSelectedHighlightedArea = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      // dynamic stayHighlighted
      stayMultiHighlighted={props.stayMultiHighlighted}
   />
  )`);

export const clearSelectedHighlightedArea = clearButtonTemplate;

export const toggleStayHighlightedArea = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      // dynamic stayHighlighted
      stayHighlighted={props.stayHighlighted}
      // dynamic stayMultiHighlighted
      stayMultiHighlighted={props.stayMultiHighlighted}
      // dynamic toggleHighlighted
      toggleHighlighted={props.toggleHighlighted}
   />
  )`);

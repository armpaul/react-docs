import React, { useRef } from 'react';
import Mapper from './components/Mapper';
import { TopComponent } from './codes/common';
import {
  showHighlightedArea,
  staySelectedHighlightedArea,
  stayMultipleSelectedHighlightedArea,
  clearSelectedHighlightedArea,
  toggleStayHighlightedArea,
} from './codes/areas';

const Area = {
  title: 'Examples/Area',
  component: Mapper,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// 1 => ShowHighlightedArea
export const ShowHighlightedArea = args => (
  <Mapper
    active={args.active}
    TopComponent={() =>
      TopComponent(
        'Show Highlighted Area Example',
        <p>
          <span className="tag">active</span> field will help to hide/unhide{' '}
          <span className="tag">highlighting</span> feature in the image mapper
          <br />
          <br />
          In this example, <span className="tag">active</span> field is available in storybook
          <span className="tag">controls tab</span>, you can change it and see the{' '}
          <span className="tag">live</span> results in image mapper
        </p>
      )
    }
  />
);

ShowHighlightedArea.parameters = {
  code: showHighlightedArea,
};

ShowHighlightedArea.args = {
  active: true,
};

ShowHighlightedArea.argTypes = {
  active: { control: 'boolean' },
};

// 2 => StaySelectedHighlightedArea
export const StaySelectedHighlightedArea = args => (
  <Mapper
    stayHighlighted={args.stayHighlighted}
    TopComponent={() =>
      TopComponent(
        'Stay Selected Highlighted Area Example',
        <p>
          <span className="tag">stayHighlighted</span> field will help{' '}
          <span className="tag">selected area</span> to stay
          <span className="tag">highlighted</span> in the image mapper
          <br />
          <br />
          In this example, <span className="tag">stayHighlighted</span> field is available in
          storybook
          <span className="tag">controls tab</span>, you can change it and see the{' '}
          <span className="tag">live</span> results in image mapper
        </p>
      )
    }
  />
);

StaySelectedHighlightedArea.parameters = {
  code: staySelectedHighlightedArea,
};

StaySelectedHighlightedArea.args = {
  stayHighlighted: true,
};

StaySelectedHighlightedArea.argTypes = {
  stayHighlighted: { control: 'boolean' },
};

// 3 => StayMultipleSelectedHighlightedArea
export const StayMultipleSelectedHighlightedArea = args => (
  <Mapper
    stayMultiHighlighted={args.stayMultiHighlighted}
    TopComponent={() =>
      TopComponent(
        'Stay Multiple Selected Highlighted Area Example',
        <p>
          <span className="tag">stayMultiHighlighted</span> is same as{' '}
          <span className="tag">stayHighlighted</span> but with multiple highlighting
          <br />
          <br />
          In this example, <span className="tag">stayMultiHighlighted</span> field is available in
          storybook
          <span className="tag">controls tab</span>, you can change it and see the{' '}
          <span className="tag">live</span> results in image mapper
        </p>
      )
    }
  />
);

StayMultipleSelectedHighlightedArea.parameters = {
  code: stayMultipleSelectedHighlightedArea,
};

StayMultipleSelectedHighlightedArea.args = {
  stayMultiHighlighted: true,
};

StayMultipleSelectedHighlightedArea.argTypes = {
  stayMultiHighlighted: { control: 'boolean' },
};

// 4 => ClearMultipleSelectedHighlightedArea
export const ClearSelectedHighlightedArea = args => {
  const myRef = useRef(null);

  const callingMe = () => {
    myRef.current.clearHighlightedArea();
  };

  return (
    <Mapper
      containerRef={myRef}
      stayMultiHighlighted
      TopComponent={() =>
        TopComponent(
          'Stay Selected Highlighted Area Example',
          <p>
            You can clear the single/multiple selected highlighted area field by calling{' '}
            <span className="tag">myRef.current.clearHighlightedArea()</span>, you can press the
            below button to see the <span className="tag">live</span> results in image mapper
            <br />
            <br />
            <button type="button" onClick={callingMe}>
              Clear
            </button>
          </p>
        )
      }
    />
  );
};

ClearSelectedHighlightedArea.parameters = {
  code: clearSelectedHighlightedArea,
};

// 5 => ToggleStayHighlightedArea
export const ToggleStayHighlightedArea = args => (
  <Mapper
    stayHighlighted={args.stayHighlighted}
    stayMultiHighlighted={args.stayMultiHighlighted}
    toggleHighlighted={args.toggleHighlighted}
    TopComponent={() =>
      TopComponent(
        'Toggle Stay Highlighted Area Example',
        <p>
          <span className="tag">toggleHighlighted</span> field will help to toggle{' '}
          <span className="tag">highlighting</span> feature in the image mapper
          <br />
          <br />
          In this example, <span className="tag">stayHighlighted</span>,{' '}
          <span className="tag">stayMultiHighlighted</span> and{' '}
          <span className="tag">and toggleHighlighted</span>field is available in storybook
          <span className="tag">controls tab</span>, you can change it and see the{' '}
          <span className="tag">live</span> results in image mapper
        </p>
      )
    }
  />
);

ToggleStayHighlightedArea.parameters = {
  code: toggleStayHighlightedArea,
};

ToggleStayHighlightedArea.args = {
  stayHighlighted: true,
  stayMultiHighlighted: false,
  toggleHighlighted: true,
};

ToggleStayHighlightedArea.argTypes = {
  stayHighlighted: { control: 'boolean' },
  stayMultiHighlighted: { control: 'boolean' },
  toggleHighlighted: { control: 'boolean' },
};

export default Area;

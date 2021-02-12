import React from 'react';
import Mapper from './components/Mapper';
import {
  fillColor,
  inArrayFillColor,
  dynamicFillColor,
  dynamicMixArrayFillColor,
  strokeColor,
  inArrayStrokeColor,
  dynamicStrokeColor,
  dynamicMixArrayStrokeColor,
} from './codes/colors';

const Colors = {
  title: 'Examples/Colors',
  component: Mapper,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// Component
const TopComponent = (title, Content) => (
  <div className="top_container">
    <h1 className="title">{title}</h1>
    <div className="top_content">{Content}</div>
  </div>
);

// 1 => FillColor
export const FillColor = () => (
  <Mapper
    customType="fill"
    customJSON={0}
    TopComponent={() =>
      TopComponent(
        'Default Fill Color Example',
        <p>
          In this example, <span className="tag">fillColor</span> field is not available in{' '}
          <span className="tag">areas</span> JSON, that's why its giving the default behaviour of
          mapper by applying default <span className="tag">fillColor</span>
        </p>
      )
    }
  />
);

FillColor.parameters = {
  code: fillColor,
};

// 2 => InArrayFillColor
export const InArrayFillColor = () => (
  <Mapper
    customType="fill"
    TopComponent={() =>
      TopComponent(
        'Fill Color based on Area JSON Example',
        <p>
          In this example, <span className="tag">fillColor</span> field is available in{' '}
          <span className="tag">areas</span> JSON, that's why its applying{' '}
          <span className="tag">fillColor</span> from JSON
        </p>
      )
    }
  />
);

InArrayFillColor.parameters = {
  code: inArrayFillColor,
};

// 3 => DynamicFillColor
export const DynamicFillColor = args => (
  <Mapper
    customType="fill"
    customJSON={0}
    fillColor={args.fillColor}
    TopComponent={() =>
      TopComponent(
        'Dynamic Fill Color Example',
        <p>
          In this example, <span className="tag">fillColor</span> field is available in storybook
          <span className="tag">controls tab</span>, you can change it and see the{' '}
          <span className="tag">live</span> results in image mapper
        </p>
      )
    }
  />
);

DynamicFillColor.parameters = {
  code: dynamicFillColor,
};

DynamicFillColor.args = {
  fillColor: 'rgba(255, 255, 255, 0.5)',
};

DynamicFillColor.argTypes = {
  fillColor: { control: 'color' },
};

// 4 => DynamicMixArrayFillColor
export const DynamicMixArrayFillColor = args => (
  <Mapper
    customType="fill"
    customJSON={1}
    fillColor={args.fillColor}
    TopComponent={() =>
      TopComponent(
        'Dynamic Mix Array Fill Color Example',
        <p>
          In this example, <span className="tag">fillColor</span> field is available in{' '}
          <span className="tag">areas</span> JSON except window wall{' '}
          <span className="tag">areas</span>, so except front wall, its applying the{' '}
          <span className="tag">areas</span> <span className="tag">fillColor</span> in the mapper
          and in front wall it apply the dynamic <span className="tag">fillColor</span> given by the
          storybook <span className="tag">controls tab</span>, you can change it and see the{' '}
          <span className="tag">live</span> results in image mapper
        </p>
      )
    }
  />
);

DynamicMixArrayFillColor.parameters = {
  code: dynamicMixArrayFillColor,
};

DynamicMixArrayFillColor.args = {
  fillColor: 'rgba(255, 255, 255, 0.5)',
};

DynamicMixArrayFillColor.argTypes = {
  fillColor: { control: 'color' },
};

// 5 => StrokeColor
export const StrokeColor = () => (
  <Mapper
    customType="stroke"
    customJSON={0}
    lineWidth={2}
    TopComponent={() =>
      TopComponent(
        'Default Stroke Color Example',
        <p>
          In this example, <span className="tag">strokeColor</span> field is not available in{' '}
          <span className="tag">areas</span> JSON, that's why its giving the default behaviour of
          mapper by applying default <span className="tag">strokeColor</span>
        </p>
      )
    }
  />
);

StrokeColor.parameters = {
  code: strokeColor,
};

// 6 => InArrayStrokeColor
export const InArrayStrokeColor = () => (
  <Mapper
    customType="stroke"
    lineWidth={2}
    TopComponent={() =>
      TopComponent(
        'Stroke Color based on Area JSON Example',
        <p>
          In this example, <span className="tag">strokeColor</span> field is available in{' '}
          <span className="tag">areas</span> JSON, that's why its applying{' '}
          <span className="tag">strokeColor</span> from JSON
        </p>
      )
    }
  />
);

InArrayStrokeColor.parameters = {
  code: inArrayStrokeColor,
};

// 7 => DynamicStrokeColor
export const DynamicStrokeColor = args => (
  <Mapper
    customType="stroke"
    customJSON={0}
    lineWidth={args.lineWidth}
    strokeColor={args.strokeColor}
    TopComponent={() =>
      TopComponent(
        'Dynamic Stroke Color Example',
        <p>
          In this example, <span className="tag">strokeColor</span> field and{' '}
          <span className="tag">lineWidth</span> field is available in storybook
          <span className="tag">controls tab</span>, you can change it and see the{' '}
          <span className="tag">live</span> results in image mapper
        </p>
      )
    }
  />
);

DynamicStrokeColor.parameters = {
  code: dynamicStrokeColor,
};

DynamicStrokeColor.args = {
  strokeColor: 'rgba(0, 0, 0, 0.5)',
  lineWidth: 1,
};

DynamicStrokeColor.argTypes = {
  strokeColor: { control: 'color' },
  lineWidth: { control: 'number' },
};

// 8 => DynamicMixArrayStrokeColor
export const DynamicMixArrayStrokeColor = args => (
  <Mapper
    customType="stroke"
    customJSON={1}
    lineWidth={args.lineWidth}
    strokeColor={args.strokeColor}
    TopComponent={() =>
      TopComponent(
        'Dynamic Mix Array Stroke Color Example',
        <p>
          In this example, <span className="tag">strokeColor</span> field is available in{' '}
          <span className="tag">areas</span> JSON except window wall{' '}
          <span className="tag">areas</span>, so except front wall, its applying the{' '}
          <span className="tag">areas</span> <span className="tag">strokeColor</span> in the mapper
          and in front wall it apply the dynamic <span className="tag">strokeColor</span> given by
          the storybook <span className="tag">controls tab</span> and{' '}
          <span className="tag">lineWidth</span> will apply in all{' '}
          <span className="tag">areas</span>, you can change it and see the{' '}
          <span className="tag">live</span> results in image mapper
        </p>
      )
    }
  />
);

DynamicMixArrayStrokeColor.parameters = {
  code: dynamicMixArrayStrokeColor,
};

DynamicMixArrayStrokeColor.args = {
  strokeColor: 'rgba(0, 0, 0, 0.5)',
  lineWidth: 1,
};

DynamicMixArrayStrokeColor.argTypes = {
  strokeColor: { control: 'color' },
  lineWidth: { control: 'number' },
};

export default Colors;

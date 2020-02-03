import React from 'react';
import styled from 'styled-components';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';


export default {
  title: 'Components | Button',
  decorators: [withKnobs]
};

const Button = styled.button`
  appearance: none;
  outline: 0;
  cursor: pointer;
  padding: 10px 8px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  font-size: ${ props => props.fontSize ? props.fontSize + 'px' : '16px' };
  color: ${ props => props.fontColor ? props.fontColor : '#666666' };
  font-weight: ${ props => props.fontWeight ? 'bold' : 'initial' };
`;

export const normalButton = () => {
  const fontColor = text('文字顏色', '#666666');
  const fontSize = text('文字尺寸', '16');
  const fontText = text('文字內容', 'Normal Button');
  const fontWeight = boolean('文字粗體', false);

  return <Button
             fontColor={ fontColor }
             fontSize={ fontSize }
             fontWeight={ fontWeight }
         >
             { fontText }
         </Button>
}
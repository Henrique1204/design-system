import React, { InputHTMLAttributes } from 'react';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const TextField: Component<TextFieldProps> = (props) => {
  return (
    <div>
      <span>{props.label}</span>
      <input {...props} />
    </div>
  );
};

export default TextField;

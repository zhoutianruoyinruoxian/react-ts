import React, { useState, useEffect, FC } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import './style.less';

export interface Rule {
  required?: boolean;
  pattern?: RegExp;
  message?: string;
}

interface InputValidateProps extends InputProps {
  rules?: Rule[];
  onChange?: any;
}

const InputValidate: FC<InputValidateProps> = ({
  value,
  rules = [],
  className,
  onChange: propsOnChange,
  disabled,
  ...args
}, ref) => {
  const [error, setError] = useState('');

  const validate = (value) => {
    // disabled状态不做校验
    if (disabled) {
      setError('');
      return true;
    }
    let ifError = false;
    for (let i = 0; i < rules.length; i++) {
      const { required, message, pattern } = rules[i];
      if (required && !value) {
        setError(message);
        ifError = true;
        break;
      }
      if (pattern && !pattern.test(value)) {
        setError(message);
        ifError = true;
        break;
      }
      setError('');
      ifError = false;
    }
    return ifError;
  }

  const onChange: InputProps['onChange'] = (e) => {
    const value = e.target.value;
    let ifError = validate(value);
    propsOnChange && propsOnChange(e, ifError);
  }

  useEffect(() => {
    validate(value);
  }, [value, disabled])

  return (
    <div className={`input-validate ${className || ''}`}>
      <Input
        {...args}
        value={value}
        disabled={disabled}
        ref={ref}
        onChange={onChange}
      />
      {error &&
        <p className="input-validate-error">{error}</p>
      }
    </div>
  )
}

const InputValidateRef = React.forwardRef(InputValidate);

export default InputValidateRef;
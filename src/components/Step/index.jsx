/**
 * @desc 箭头步骤条
 * @param { Array } data 步骤的名称（例：['步骤1','步骤2']）
 * @param { String | Number } step 当前步骤index，0为第一个
 */
import React from 'react';
import './style.scss';
export default (props) => {
  const { className, data, step = '0' } = props;
  const num = data.length;
  return (
    <div className={`step-component ${className || ''}`}>
      <div className="step-section">
        {data.map((item, index) => (
          <div
            key={index}
            className={`step-group ${step == index ? 'active' : ''}`}
            style={{
              width: `${100 / num}%`,
              zIndex: num - index,
            }}
          >
            <div className="step-content">
              {item}
              <div className="step-arrow"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

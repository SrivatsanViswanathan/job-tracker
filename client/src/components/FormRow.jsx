import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <div className='relative'>
        <input
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          id={name}
          name={name}
          className='form-input'
          defaultValue={defaultValue || ''}
          onChange={onChange}
          required
        />
        {type === 'password' ? (
          <button
            type='button'
            className='password-btn'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaRegEye className='eye'></FaRegEye>
            ) : (
              <FaRegEyeSlash className='eye'></FaRegEyeSlash>
            )}
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default FormRow;

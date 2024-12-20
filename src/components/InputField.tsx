import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  width?: string;
  height?: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, width = 'w-full', height = 'h-10' }) => {
  return (
      <div className='relative'>
          <span className="absolute inset-y-0 left-10 flex items-center pl-1">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </span>
          <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className={`pl-10 border rounded py-2 pr-10 ${width} ${height} focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-200`}
              placeholder="What are you searching for..."
          />
      </div>
  );
};

export default InputField;
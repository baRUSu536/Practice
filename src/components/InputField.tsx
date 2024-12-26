import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange}) => {
  return (
    <div className='relative w-[300px] md:w-[575px] flex items-center'>
      <MagnifyingGlassIcon className='absolute h-1/2 pl-2 text-blue-500'/>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`pl-10 border border-blue-500 rounded p-3 pr-3 w-[300px] md:w-[575px] focus:ring-2 focus:ring-blue-500 hover:border-blue- transition duration-200 font-mono focus:`}
        placeholder="What are you searching for..."
      />
    </div>
  );
};

export default InputField;
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

type InputFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

const InputField = ({ value, onChange }: InputFieldProps) => {
  return (
    <div className="relative w-[300px] md:w-[575px] flex items-center">
      <MagnifyingGlassIcon className="absolute h-1/2 pl-2 text-blue-500" />
      <input
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="pl-12 p-3 pr-3 border border-solid border-blue-100 rounded-2xl w-[300px] md:w-[575px] hover:border-blue-500 transition duration-300 focus:border-blue-500 text-blue-900 outline-none"
        placeholder="What are you searching for..."
      />
    </div>
  );
};

export default InputField;

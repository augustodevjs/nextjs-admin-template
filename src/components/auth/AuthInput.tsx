interface AuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  onRender?: boolean;  
  type?: 'text' | 'email' | 'password';
  valueChanged: (newValue: any) => void;
}

export function AuthInput({ label, value, valueChanged, type, required }: AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input 
        type={type ?? 'text'} 
        value={value}
        onChange={(event) => valueChanged?.(event.target.value)}
        required={required} 
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none`}
      />
    </div>
  )
}
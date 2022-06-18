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
    <div className="flex flex-col">
      <label>{label}</label>
      <input 
        type={type ?? 'text'} 
        value={value}
        onChange={(event) => valueChanged?.(event.target.value)}
        required={required} 
      />
    </div>
  )
}
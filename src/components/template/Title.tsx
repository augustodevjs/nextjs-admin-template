interface TitleProps {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-900">{title}</h1>
      <h2 className="font-light text-sm text-gray-600">{subtitle}</h2>
    </div>
  )
}
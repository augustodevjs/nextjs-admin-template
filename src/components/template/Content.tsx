interface ContentProps {
  children?: JSX.Element;
}

export function Content({ children }: ContentProps) {
  return (
    <div className="flex flex-col mt-7">
      {children}
    </div>
  )
}
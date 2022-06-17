import Link from 'next/link';

interface MenuItemProps {
  icon: any;
  url?: string;
  text: string;
  className?: string;
  onClick?: (event: any) => void;
}

export function MenuItem({ url, text, icon, onClick, className }: MenuItemProps) {
  return (
    <li onClick={onClick} className="hover:bg-slate-100 cursor-pointer">
      {url ? (
        <Link href={url}>
          <a className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 ${className}`} >
            {icon}
            < span className="text-xs font-ligh" >
              {text}
            </span >
          </a >
        </Link>
      ) : (
        <a className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 ${className}`} >
          {icon}
          < span className="text-xs font-light ${className}" >
            {text}
          </span >
        </a >
      )}
    </li>
  )
}
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
    <li onClick={onClick} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
      {url ? (
        <Link href={url}>
          <a className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 ${className} dark:text-gray-200`} >
            {icon}
            <span className="text-xs font-light " >
              {text}
            </span >
          </a >
        </Link>
      ) : (
        <a className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 ${className} dark:text-gray-200`} >
          {icon}
          <span className={`text-xs font-light`} >
            {text}
          </span >
        </a >
      )}
    </li>
  )
}
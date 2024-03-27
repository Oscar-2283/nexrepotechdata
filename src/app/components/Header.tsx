'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {

  const pathname = usePathname()

  return (
    <header>
      <ul className='flex justify-center gap-5 py-5'>
        <li><Link href="/" className={`link ${pathname === '/' ? 'text-blue-500 font-bold' : ''}`}> Home </Link></li>
        <li><Link href="/debounce_page" className={`link ${pathname === '/debounce_page' ? 'text-blue-500 font-bold' : ''}`}> Debounce </Link></li>
        <li><Link href="/usersMixOrders_page" className={`link ${pathname === '/usersMixOrders_page' ? 'text-blue-500 font-bold' : ''}`}> usersMixOrders </Link></li>
      </ul>
    </header>
  );
};

export default Header;
import { navLists } from '@/utils/navs';
import Link from 'next/link';
import React from 'react';

export const NavLists = () => {
  return (
    <>
      {navLists.map((nav) => (
        <Link
          key={nav.label}
          href={nav.route}
          className="flex items-center space-x-2 text-base font-medium transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <span>{nav.label}</span>
        </Link>
      ))}
    </>
  );
};

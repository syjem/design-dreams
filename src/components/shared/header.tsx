import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from '../icons/menu-icon';
import { LogoIcon } from '../icons/logo-icon';
import { NavLists } from './nav-lists';
import AuthButtons from './auth-buttons';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="w-full py-4 md:py-6">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link className="flex items-center space-x-1 font-medium" href="/">
          <LogoIcon className="h-8 w-8" />
          <Image src="/logo.svg" width={170} height={150} alt="Logo" />
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <NavLists />
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <AuthButtons />
        </div>
        <div className="flex md:hidden">
          <Button variant="outline" size="icon">
            <span className="sr-only">Toggle menu</span>
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

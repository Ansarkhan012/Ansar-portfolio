'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface NavLinkProps {
  href?: string;
  label: string;
  isActive?: boolean;
}


const NavLink: React.FC<NavLinkProps> = ({
  href = '#',
  label,
  isActive = false,
}) => {
  const [displayText, setDisplayText] = useState(label);
  const [isHover, setIsHover] = useState(false);

  const showBrackets = isHover || isActive;

  useEffect(() => {
    if (!isHover && !isActive) {
      setDisplayText(label);
      return;
    }

    let i = 0;
    setDisplayText('');

    const timer = setInterval(() => {
      setDisplayText(label.slice(0, i + 1));
      i++;
      if (i === label.length) clearInterval(timer);
    }, 70);

    return () => clearInterval(timer);
  }, [isHover, isActive, label]);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`
        flex items-center font-mono text-sm px-4 py-2 transition-colors
        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
      `}
    >
  
      <span
        className={`text-green-400 transition-opacity duration-200 ${
          showBrackets ? 'opacity-100' : 'opacity-0'
        }`}
      >
        [
      </span>

      <span className="mx-1 min-w-12 text-[11px] text-center">
        {displayText}
      </span>

    
      <span
        className={`text-green-400 transition-opacity duration-200 ${
          showBrackets ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ]
      </span>
    </a>
  );
};



const Navbar: React.FC = () => {
   const pathname = usePathname();
  const navLinks: NavLinkProps[] = [
    { href: '/', label: 'WORK'},
    { href: '/info', label: 'INFO' },
    { href: '/archive', label: 'ARCHIVE' },
  ];

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          
          <Link href={"/"}>
          <h1 className="text-white font-mono text-sm tracking-wide">
            ANSAR KHAN
          </h1>
          <p className='text-[10px] md:hidden text-gray-400'>Web Developer</p>
          </Link>

          
          <nav className="hidden  md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </nav>
        </div>

        <div className="md:hidden">
  <nav
    className="
      fixed bottom-0 left-0 right-0 z-50
      flex justify-around items-center
      border-t-2 border-gray-600
      
      h-14
    "
  >
    {navLinks.map((link, index) => (
      <NavLink
        key={index}
        href={link.href}
        label={link.label}
        isActive={pathname === link.href}
      />
    ))}
  </nav>
</div>

      </div>
    </header>
  );
};

export default Navbar;

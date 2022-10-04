import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useScrollDirection from '../utils/helpers/UseScrollDirection';
import Icon from './UI/Icon';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const router = useRouter();

  return (
    <header
      className={clsx(
        'flex items-center sticky h-24 transition-all duration-500 z-50',
        scrollDirection === 'down' ? '-top-24' : 'top-0 bg-slate-100',
        router.pathname === '/' && 'bg-grey-200',
        router.pathname === '/about-us' && 'bg-primary text-white',
        router.pathname !== '/' && router.pathname !== '/about-us' && 'bg-transparent'
      )}
    >
      <div className="wrapper flex-row justify-between items-center w-full my-0 mx-auto px-4 lg:px-0">
        <nav className="w-full flex justify-between items-center">
          <Link href="/">
            <a className="md:text-lg font-bold p-2">QuackStore</a>
          </Link>
          <ul className="flex flex-row gap-4 font-semibold">
            <li>
              <Link href="/">
                <a className={clsx('p-2', router.pathname === '/' && 'text-magenta')}>
                  Footware
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a
                  className={clsx(
                    'p-2',
                    router.pathname === '/about-us' && 'text-magenta'
                  )}
                >
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a
                  className={clsx(
                    'p-2',
                    router.pathname === '/products' && 'text-magenta'
                  )}
                >
                  Products
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sale">
                <a className={clsx('p-2', router.pathname === '/sale' && 'text-magenta')}>
                  Sale
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row gap-4">
            <li>
              <button aria-label="search">
                <Icon name="search" />
              </button>
            </li>
            <li>
              <button aria-label="profile">
                <Icon name="search" />
              </button>
            </li>
            <li>
              <button aria-label="basket">
                <Icon name="search" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

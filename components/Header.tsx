import Link from 'next/link';
import useScrollDirection from '../utils/helpers/UseScrollDirection';
import Icon from './UI/Icon';

const Header = () => {
  const scrollDirection = useScrollDirection();
  return (
    <header
      className={`flex items-center sticky h-24 transition-all duration-500 z-50 ${
        scrollDirection === 'down' ? '-top-24' : 'top-0 bg-slate-100 shadow-md'
      }`}
    >
      <div className="wrapper flex-row justify-between items-center w-full my-0 mx-auto px-4 lg:px-0">
        <nav className="w-full flex justify-between">
          <Link href="/">
            <p className="md:text-lg font-bold">QuackStore</p>
          </Link>
          <ul>
            <li>
              <Link href={'#'}>Footware</Link>
            </li>
            <li>
              <Link href={'#'}>About us</Link>
            </li>
            <li>
              <Link href={'#'}>Products</Link>
            </li>
            <li>
              <Link href={'#'}>Sale</Link>
            </li>
          </ul>
          <ul>
            <li>
              <button>
                <Icon name="search" />
              </button>
            </li>
            <li>
              <button>
                <Icon name="search" />
              </button>
            </li>
            <li>
              <button>
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

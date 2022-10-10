import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useScrollDirection from '../utils/helpers/UseScrollDirection';
import Icon from './UI/Icon';
import Popover from './UI/Popover';
import SmallCard from './ProductsView/SmallCard';

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
        router.pathname !== '/' && router.pathname !== '/about-us' && 'bg-transparent',
        router.pathname === '/men' && 'bg-orange text-white'
      )}
    >
      <div className="wrapper flex-row justify-between items-center w-full my-0 mx-auto px-4 lg:px-0">
        <nav className="w-full flex justify-between items-center">
          <Link href="/" passHref>
            <a href="replace" className="md:text-lg font-bold p-2">
              QuackStore
            </a>
          </Link>
          <ul className="flex flex-row gap-4 font-semibold transition-all duration-75">
            <li>
              <Link href="/men" passHref>
                <a
                  href="replace"
                  className={clsx('p-2', router.pathname === '/men' && 'text-primary')}
                >
                  Men
                </a>
              </Link>
            </li>
            <li>
              <Link href="/women" passHref>
                <a
                  href="replace"
                  className={clsx('p-2', router.pathname === '/women' && 'text-primary')}
                >
                  Women
                </a>
              </Link>
            </li>
            <li>
              <Link href="/kids" passHref>
                <a
                  href="replace"
                  className={clsx('p-2', router.pathname === '/kids' && 'text-primary')}
                >
                  Kids
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products" passHref>
                <a
                  href="replace"
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
              <Link href="/sale" passHref>
                <a
                  href="replace"
                  className={clsx('p-2', router.pathname === '/sale' && 'text-magenta')}
                >
                  Sale
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                <a
                  href="replace"
                  aria-label="about us"
                  className={clsx(
                    'p-2',
                    router.pathname === '/about-us' && 'text-magenta'
                  )}
                >
                  About us
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row gap-6">
            <li>
              <Link href="/search" passHref>
                <a href="replace" aria-label="search">
                  <Icon name="search" />
                </a>
              </Link>
            </li>
            <li>
              <Popover
                buttonTitle={<Icon name="user" />}
                className="rounded-md font-light w-32 border p-2 bg-white"
              >
                <div className="flex flex-col">
                  <Link href="/">
                    <a
                      href="replace"
                      className="rounded-md hover:bg-grey-100 px-4 py-2 flex gap-2"
                    >
                      <Icon name="user" /> Sign in
                    </a>
                  </Link>
                </div>
              </Popover>
            </li>
            <li>
              <Popover
                buttonTitle={<Icon name="shopping-bag" />}
                className="rounded-md font-light w-[400px] border p-2 right-0 flex flex-col gap-1 bg-white"
              >
                <ul>
                  {basket.map((item, index) => {
                    return [
                      <li className="flex flex-col gap-2" key={`basketItem${index}`}>
                        <SmallCard
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          price={item.price}
                          quantity={item.quantity}
                        />
                      </li>,
                    ];
                  })}
                  <li>
                    <button
                      type="button"
                      className="px-4 py-2 bg-ultra-marine-blue text-white rounded-md w-full mt-4"
                    >
                      View basket
                    </button>
                  </li>
                </ul>
              </Popover>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

const basket = [
  {
    image: '/assets/shoes.jpeg',
    title: 'Men Running',
    description: 'Nike Competition Shoes',
    price: '300',
    quantity: '5',
  },
  {
    image: '/assets/shoes.jpeg',
    title: 'Men Running',
    description: 'Nike Competition Shoes',
    price: '300',
    quantity: '5',
  },
  {
    image: '/assets/shoes.jpeg',
    title: 'Men Running',
    description: 'Nike Competition Shoes',
    price: '300',
    quantity: '5',
  },
];

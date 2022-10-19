import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import useScrollDirection from '../utils/helpers/UseScrollDirection';
import Icon from './UI/Icon';
import Popover from './UI/Popover';
import SmallCard from './ProductsView/SmallCard';
import useBasket from '../store/basket';
import { auth } from '../utils/firebase';
import Login from './Login/Login';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const router = useRouter();

  const { basketProducts } = useBasket();

  //TODO - add load states
  const [user, loading] = useAuthState(auth);

  return (
    <header
      className={clsx(
        'flex items-center sticky h-24 transition-all duration-500 z-50',
        scrollDirection === 'down' ? '-top-24' : 'top-0 bg-slate-100',
        router.pathname === '/' && 'bg-grey-200',
        router.pathname === '/about-us' && 'bg-primary text-white',
        router.pathname !== '/' && router.pathname !== '/about-us' && 'bg-transparent',
        router.pathname === '/men' && 'bg-orange text-white',
        router.pathname === '/women' && 'bg-magenta text-white',
        router.pathname === '/kids' && 'bg-forest-green text-white'
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
                className="rounded-md font-light w-auto border p-2 bg-white text-primary right-0"
              >
                <div className="flex flex-col">
                  <div className="rounded-md">
                    {user ? (
                      <button
                        onClick={() => auth.signOut()}
                        className="w-24 hover:bg-grey-100"
                      >
                        {user.photoURL ? (
                          <div className="flex flex-col gap-2">
                            <figure>
                              <Image
                                src={user.photoURL}
                                alt="avatar"
                                className="rounded-full"
                                width={42}
                                height={42}
                                objectFit="cover"
                              />
                            </figure>
                            <p>Sign out</p>
                          </div>
                        ) : (
                          <h3>{user.displayName}</h3>
                        )}
                      </button>
                    ) : (
                      <Login />
                    )}
                  </div>
                </div>
              </Popover>
            </li>
            <li>
              <Popover
                buttonTitle={<Icon name="shopping-bag" />}
                className="rounded-md font-light w-[400px] border p-2 right-0 flex flex-col gap-1 bg-white"
              >
                {basketProducts.length > 0 ? (
                  <ul>
                    {basketProducts.map((item, index) => {
                      return [
                        <li className="flex flex-col gap-2" key={`basketItem${index}`}>
                          <Link
                            href={`/${item.department ? item.department : 'products'}${
                              item.slug
                            }`}
                            passHref
                          >
                            <a href="replace">
                              <SmallCard
                                image={item.imagesCollection.items[0].url}
                                title={item.name}
                                description={item.style}
                                price={item.sku.price}
                                quantity={item.quantity}
                              />
                            </a>
                          </Link>
                        </li>,
                      ];
                    })}
                    <li className=" bg-ultra-marine-blue text-white rounded-md w-full mt-4">
                      <Link href="/basket" passHref>
                        <a
                          href="replace"
                          className="px-4 py-2 flex justify-center items-center w-full"
                        >
                          View basket
                        </a>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <div>
                    <figure className="opacity-40">
                      <Image
                        src="/assets/images/empty-cart.png"
                        alt="empty cart"
                        width="400"
                        height="300"
                      />
                    </figure>
                    <div className=" bg-ultra-marine-blue text-white rounded-md w-full mt-4">
                      <Link href="/basket" passHref>
                        <a
                          href="replace"
                          className="px-4 py-2 flex justify-center items-center w-full"
                        >
                          View basket
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </Popover>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

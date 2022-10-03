import useScrollDirection from '../utils/helpers/UseScrollDirection';

const Header = () => {
  const scrollDirection = useScrollDirection();
  return (
    <header
      className={`flex items-center sticky h-24 transition-all duration-500 z-50 ${
        scrollDirection === 'down' ? '-top-24' : 'top-0 bg-slate-100 shadow-md'
      }`}
    >
      <div className="flex flex-row justify-between items-center w-full max-w-[1200px] my-0 mx-auto px-4 lg:px-0">
        <p className="md:text-lg">QuackStore</p>
        <button
          className="md:text-lg border-2 border-black rounded-3xl px-4 shadow-md hover:shadow-lg hover:brightness-125 transition-all duration-200"
          onClick={() => {
            document.querySelector('#form')!.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;

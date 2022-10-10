import clsx from 'clsx';
import { forwardRef } from 'react';

import Loader from './Loader';

type Props = {
  children: React.ReactNode;
  type?:
    | 'primary'
    | 'secondary'
    | 'cancel'
    | 'outline'
    | 'green'
    | 'text'
    | 'remove'
    | 'transparent';
  size?: 'normal' | 'small' | 'full';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      type = 'primary',
      size = 'normal',
      disabled = false,
      onClick,
      loading = false,
      className,
      ...rest
    }: Props,
    ref
  ) => {
    const click = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
    };

    return (
      <button
        type="button"
        disabled={disabled || loading}
        onClick={click}
        className={clsx(
          'rounded-md hover:shadow-md ',
          size === 'full' && 'w-full h-[52px]',
          size === 'normal' && 'w-[200px] h-[52px]',
          size === 'small' && 'w-[90px] h-[40px]',

          type === 'primary' && 'bg-ultra-marine-blue hover:brightness-[95%] text-white',
          type === 'secondary' &&
            'bg-magenta hover:brightness-[95%] font-semibold text-white',
          type === 'cancel' &&
            'bg-orange text-error border-errorText border-2 hover:brightness-[95%] text-white',
          type === 'green' &&
            'bg-forest-green text-error border-errorText border-2 hover:brightness-[95%] text-white',
          type === 'outline' &&
            'bg-white text-primary rounded-none border-primary border font-semibold',
          type === 'remove' && 'text-primary font-semibold hover:shadow-none',
          type === 'transparent' &&
            'text-primary bg-none rounded-md hover:bg-grey-100 hover:shadow-none px-6 py-3 text-left',
          (disabled || loading) &&
            'text-primary opacity-25 hover:brightness-100 hover:shadow-none',
          className
        )}
        data-testid="button"
        ref={ref}
        {...rest}
      >
        {loading ? <Loader /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

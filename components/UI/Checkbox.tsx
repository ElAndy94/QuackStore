import clsx from 'clsx';
import React from 'react';
import Icon, { IconNames } from './Icon';

export type CheckboxProps = {
  id: string;
  name: string;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  type: IconNames;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const Checkbox = ({
  id,
  name,
  checked,
  label,
  disabled,
  type,
  className,
  onChange,
  onBlur,
}: CheckboxProps) => {
  return (
    <label
      htmlFor={id}
      className={clsx('flex items-center font-semibold cursor-pointer', {
        'opacity-40': disabled,
      })}
    >
      <div className="flex relative">
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          className={clsx(
            'w-6 h-6 bg-transparent checked:bg-ultra-marine-blue rounded-[4px] border-2 transition-colors duration-200 appearance-none cursor-pointer border-selector-border-1',
            className
          )}
          disabled={disabled}
          data-testid="checkbox"
          aria-label={name}
        />
        <Icon
          className={clsx(
            'absolute top-1/2 left-1/2 z-10 transition-opacity -translate-x-1/2 -translate-y-1/2 pointer-events-none text-selector-active',
            { 'opacity-100': checked },
            { 'opacity-0': !checked }
          )}
          name={type}
        />
      </div>
      <span className="ml-3 leading-5 text-main-content-1">{label}</span>
    </label>
  );
};

export default Checkbox;

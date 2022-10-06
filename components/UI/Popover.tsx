import React from 'react';
import { Popover as HeadlessPopover, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import clsx from 'clsx';

type PopoverProps = {
  buttonTitle: JSX.Element;
  children: ReactNode;
  className?: string;
};

const Popover = ({ buttonTitle, children, className }: PopoverProps) => {
  return (
    <HeadlessPopover className="relative">
      <HeadlessPopover.Button
        className="group outline-none w-full text-left"
        aria-label="popover-button"
      >
        {buttonTitle}
      </HeadlessPopover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <HeadlessPopover.Panel className={clsx('absolute z-10 ', className)}>
          {children}
        </HeadlessPopover.Panel>
      </Transition>
    </HeadlessPopover>
  );
};

export default Popover;

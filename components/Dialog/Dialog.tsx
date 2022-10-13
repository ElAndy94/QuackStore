import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import Icon from '../UI/Icon';

type DialogModalProps = {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

const Dialog = ({ title, children, open, onClose }: DialogModalProps) => {
  return (
    <Transition appear show={open || false} as={Fragment}>
      <HeadlessDialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="overflow-y-auto fixed inset-0">
          <div className="flex justify-center items-center p-6 min-h-full text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlessDialog.Panel className="relative p-6 w-full max-w-tablet-container align-middle bg-white rounded-lg transition-all sm:p-8 lg:max-w-desktop-container">
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <button type="button" onClick={onClose} aria-label="Close dialog">
                    <Icon name="cross" height="44px" width="20px" />
                  </button>
                </div>

                <HeadlessDialog.Title className="text-lg leading-7 text-center">
                  {title}
                </HeadlessDialog.Title>
                <div className="text-center">{children}</div>
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

export default Dialog;

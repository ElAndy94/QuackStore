import { Listbox as HeadlessListbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';
import Button from './Buttons';
import Icon from './Icon';

export type ListboxOption = {
  id: string;
  title: string;
  value: string;
  disabled?: boolean;
};

export type ListboxProps = {
  name: string;
  options: ListboxOption[];
  value: ListboxOption | undefined;
  onChange: (option: ListboxOption) => void;
  onBlur?: () => void;
  disabled?: boolean;
  buttonClassName?: string;
};

const Listbox = ({
  name,
  options,
  value,
  onChange,
  onBlur,
  disabled,
  buttonClassName,
}: ListboxProps) => {
  return (
    <HeadlessListbox name={name} value={value} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <div className="relative w-full">
          <HeadlessListbox.Button as={Fragment}>
            <button
              className={clsx(
                'w-full px-4 py-4 rounded-md flex justify-between',
                buttonClassName
              )}
              aria-label="listbox-button"
            >
              <>
                {value ? value.title : name}
                <Icon
                  name="bottom-chevron"
                  width="24px"
                  className={clsx(open && 'rotate-180')}
                />
              </>
            </button>
          </HeadlessListbox.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition-opacity ease-in duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <HeadlessListbox.Options
              className="max-h-96 overflow-x-auto rounded-md font-light w-full border p-2 bg-white absolute z-10 flex flex-col gap-2 items-center"
              onBlur={onBlur}
            >
              {options.map(option => (
                <HeadlessListbox.Option as={Fragment} key={option.id} value={option}>
                  <Button type="transparent">{option.title}</Button>
                </HeadlessListbox.Option>
              ))}
            </HeadlessListbox.Options>
          </Transition>
        </div>
      )}
    </HeadlessListbox>
  );
};

export default Listbox;

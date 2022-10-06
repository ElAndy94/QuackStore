import { Listbox as HeadlessListbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useRef, useState } from 'react';
import Button from './Buttons';
import Icon from './Icon';

// TODO: This component should have a loading state for when results are being fetched.
// We do not currently have a design for this.

export type ListboxOption = {
  /** ID of the option */
  id: string;
  /** Display name */
  title: string;
  /** Disabled */
  value: string;
  disabled?: boolean;
};

export type ListboxProps = {
  /** ID of the input field. Used to match with label */
  id: string;
  /** Name of the field. Used to track within formik  */
  name: string;
  /** The options available in the listbox */
  options: ListboxOption[];
  /** The current value. Must match one of the options. Can be undefined */
  value: ListboxOption | undefined;
  /** The event which will trigger when an option is selected */
  onChange: (option: ListboxOption) => void;

  /** The event which will trigger when the listbox is blurred */
  onBlur?: () => void;
  /** Disabled state */
  disabled?: boolean;

  buttonClassName?: string;
};

const Listbox = ({
  id,
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
              data-testid={id}
              type="button"
              className={clsx(
                ' w-full px-4 py-4 rounded-md flex justify-between',
                buttonClassName
              )}
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
              data-testid={`${id}-options`}
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

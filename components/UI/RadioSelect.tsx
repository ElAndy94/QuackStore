import { RadioGroup as HeadlessRadioSelect } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { Sku } from '../../utils/helpers/types/product';

export type RadioSelectProps = {
  id: string;
  name: string;
  options: Sku[];
  value: Sku | undefined;
  onChange: (option: Sku) => void;
  onBlur?: () => void;
  disabled?: boolean;
};

const RadioSelect = ({
  id,
  name,
  options,
  value,
  onChange,
  onBlur,
  disabled,
}: RadioSelectProps) => {
  const [sizes] = useState<string[]>(options.map(option => option.size));

  return (
    <div className="w-full">
      <HeadlessRadioSelect
        name={name}
        value={options.find(item => item.size === value?.size)}
        onChange={onChange}
        onBlur={onBlur}
      >
        <div className="grid grid-flow-row grid-cols-4 gap-2">
          {['3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(size => {
            if (!sizes.includes(size)) {
              disabled = true;
            }
            return (
              <HeadlessRadioSelect.Option
                key={size}
                value={size}
                disabled={disabled}
                className={clsx(
                  'border transition-colors selector-base h-12 flex justify-center items-center',
                  { 'opacity-40': disabled },
                  { 'cursor-pointer': !disabled },
                  { 'bg-primary text-white': value?.size === size && !disabled }
                )}
              >
                <HeadlessRadioSelect.Label as="p" className={clsx('font-light truncate')}>
                  {size}
                </HeadlessRadioSelect.Label>
              </HeadlessRadioSelect.Option>
            );
          })}
        </div>
      </HeadlessRadioSelect>
    </div>
  );
};

export default RadioSelect;

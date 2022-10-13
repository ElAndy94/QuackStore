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
  range: string[];
  type: 'colour' | 'size';
};

const RadioSelect = ({
  name,
  options,
  value,
  onChange,
  onBlur,
  disabled,
  range,
  type,
}: RadioSelectProps) => {
  const [option] = useState<string[]>(() => {
    if (type === 'size') {
      return options.map(option => option.size);
    }
    return options.map(option => option.colour);
  });

  return (
    <div className="w-full">
      <HeadlessRadioSelect
        name={name}
        value={() => {
          if (type === 'size') {
            return options.find(item => item.size === value?.size);
          }
          return options.find(item => item.colour === value?.colour);
        }}
        // @ts-ignore
        onChange={onChange}
        onBlur={onBlur}
      >
        <div className="grid grid-flow-row grid-cols-4 gap-2">
          {range.map(item => {
            if (!option.includes(item)) {
              disabled = true;
            }
            if (type === 'size') {
              return (
                <HeadlessRadioSelect.Option
                  key={item}
                  value={item}
                  disabled={disabled}
                  className={clsx(
                    'border transition-colors selector-base h-12 flex justify-center items-center',
                    { 'opacity-40': disabled },
                    { 'cursor-pointer': !disabled },
                    { 'bg-primary text-white': value?.size === item && !disabled }
                  )}
                >
                  <HeadlessRadioSelect.Label
                    as="p"
                    className={clsx('font-light truncate')}
                  >
                    {item}
                  </HeadlessRadioSelect.Label>
                </HeadlessRadioSelect.Option>
              );
            } else {
              return (
                <HeadlessRadioSelect.Option key={item} value={item} disabled={disabled}>
                  gg
                </HeadlessRadioSelect.Option>
              );
            }
          })}
        </div>
      </HeadlessRadioSelect>
    </div>
  );
};

export default RadioSelect;

import { RadioGroup as HeadlessRadioSelect } from '@headlessui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Sku } from '../../types/product';

export type RadioSelectProps = {
  id: string;
  name: string;
  options: Sku[];
  filteredOptions: Sku[];
  value: Sku | undefined;
  type: 'colour' | 'size';
  onChange: (option: Sku) => void;
  onBlur?: () => void;
};

const RadioSelect = ({
  name,
  options,
  filteredOptions,
  value,
  type,
  onChange,
  onBlur,
}: RadioSelectProps) => {
  const [setOfOptions, setSetOfOptions] = useState<string[]>(() => {
    if (type === 'size') {
      return options.map(option => option.size);
    } else {
      return options.map(option => option.colour);
    }
  });
  const [range] = useState<string[]>(() => {
    if (type === 'size') {
      return [
        '3',
        '3.5',
        '4.5',
        '4',
        '5',
        '5.5',
        '6',
        '6.5',
        '7',
        '7.5',
        '8',
        '8.5',
        '9',
        '9.5',
        '10',
      ];
    }
    return ['Black', 'White', 'Blue', 'Green', 'Orange', 'Purple', 'Pink', 'Red'];
  });
  const cssColours = [
    'bg-[#242424]',
    'bg-[##FFFDF3]',
    'bg-[#2980B9]',
    'bg-[#45B39D]',
    'bg-[#F39C12]',
    'bg-[#A569BD]',
    'bg-[#F1948A]',
    'bg-[#E74C3C]',
  ];

  useEffect(() => {
    if (type === 'size') {
      setSetOfOptions(filteredOptions.map(option => option.size));
    } else {
      setSetOfOptions(options.map(option => option.colour));
    }
  }, [filteredOptions, options, type]);

  return (
    <div className="w-full">
      <HeadlessRadioSelect name={name} value={value} onChange={onChange} onBlur={onBlur}>
        <div
          className={clsx(
            { 'grid grid-flow-row grid-cols-4 gap-2': type === 'size' },
            { 'flex gap-4': type === 'colour' }
          )}
        >
          {range.map((item, index) => {
            let itemDisabled = true;
            if (type === 'size' && setOfOptions.indexOf(item) !== -1) {
              itemDisabled = false;
            } else if (type === 'colour' && setOfOptions.indexOf(item) !== -1) {
              itemDisabled = false;
            }

            if (type === 'size') {
              return (
                <HeadlessRadioSelect.Option
                  key={`${item}${index}`}
                  value={options.find(product => product.size === item)}
                  disabled={itemDisabled}
                  className={clsx(
                    'border-[2px] transition-colors h-12 flex justify-center items-center',
                    { 'opacity-30': itemDisabled },
                    { 'cursor-pointer': !itemDisabled },
                    {
                      'bg-primary text-white': value?.size === item && !itemDisabled,
                    }
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
                <HeadlessRadioSelect.Option
                  key={`${item}${index}`}
                  value={options.find(product => product.colour === item)}
                  disabled={itemDisabled}
                >
                  {({ checked }) => (
                    <div
                      className={clsx(
                        'rounded-full h-5 w-5 border-[2px] ',
                        `${cssColours[index]}`,
                        { 'cursor-pointer': !itemDisabled },
                        { 'opacity-40': itemDisabled },
                        {
                          'outline outline-ultra-marine-blue border-white':
                            checked && !itemDisabled,
                        }
                      )}
                      aria-label={`Product colour ${item}`}
                    />
                  )}
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

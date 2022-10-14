import { RadioGroup as HeadlessRadioSelect } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { Sku } from '../../utils/helpers/types/product';

export type RadioSelectProps = {
  id: string;
  name: string;
  options: Sku[];
  value: Sku | undefined;
  type: 'colour' | 'size';
  onChange: (option: Sku) => void;
  onBlur?: () => void;
};

const RadioSelect = ({
  name,
  options,
  value,
  type,
  onChange,
  onBlur,
}: RadioSelectProps) => {
  const [selectedType, setSelectedType] = useState<'colour' | 'size'>();
  const [setOfOptions] = useState<string[]>(() => {
    if (type === 'size') {
      return options.map(option => option.size);
    }
    return Array.from(new Set(options.map(option => option.colour)));
  });
  const [selectedValue, setSelectValue] = useState<string>();
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
    'bg-black',
    'bg-white',
    'bg-blue',
    'bg-green',
    'bg-orange',
    'bg-purple',
    'bg-pink',
    'bg-red',
  ];
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

            if (selectedType === 'colour') {
              options.map(option => {
                if (option.colour === item) {
                  // Brain dead.
                }
              });
            }
            // else {
            //   options.map(option => {

            //   });
            // }

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
                  onClick={() => {
                    setSelectedType('size');
                    setSelectValue(item);
                  }}
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
                  onClick={() => {
                    setSelectedType('colour');
                    setSelectValue(item);
                  }}
                >
                  {({ checked }) => (
                    <div
                      className={clsx(
                        'rounded-full h-5 w-5 border-[2px] ',
                        `${cssColours[index]}`,
                        { 'cursor-pointer': !itemDisabled },
                        { 'opacity-20': itemDisabled },
                        {
                          'outline outline-ultra-marine-blue': checked && !itemDisabled,
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

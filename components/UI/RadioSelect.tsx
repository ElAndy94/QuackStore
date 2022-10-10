import { RadioGroup as HeadlessRadioSelect } from '@headlessui/react';
import clsx from 'clsx';

export type RadioSelectProps = {
  id: string;
  name: string;
  options: string[];
  value: string | undefined;
  onChange: (option: string) => void;
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
  return (
    <div className="w-full">
      <HeadlessRadioSelect
        data-testid={id}
        name={name}
        value={options.find(o => o === value)}
        onChange={onChange}
        onBlur={onBlur}
      >
        <div className="grid grid-flow-row grid-cols-4 gap-2">
          {['3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(option => {
            if (!options.includes(option)) {
              disabled = true;
            }
            return (
              <HeadlessRadioSelect.Option
                key={option}
                value={option}
                disabled={disabled}
                className={clsx(
                  'border transition-colors selector-base h-12 flex justify-center items-center',
                  { 'opacity-40': disabled },
                  { 'cursor-pointer': !disabled },
                  { 'bg-primary text-white': value === option && !disabled }
                )}
              >
                <HeadlessRadioSelect.Label as="p" className={clsx('font-light truncate')}>
                  {option}
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

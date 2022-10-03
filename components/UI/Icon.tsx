import clsx from 'clsx';
import { ReactSVG } from 'react-svg';
import * as icons from '/assets/icons';

const ICONS = {
  tick: icons.checkboxTick,
  cross: icons.CrossIcon,
  search: icons.SearchIcon,
  chevron: icons.ChevronIcon,
  brand: icons.BrandIcon,
  ad: icons.AdsIcon,
  upload: icons.UploadIcon,
  offers: icons.OffersIcon,
  copy: icons.CopyIcon,
  rocket: icons.RocketIcon,
  time: icons.TimeIcon,
  date: icons.DateIcon,
  'open-eye': icons.OpenEyeIcon,
  'closed-eye': icons.ClosedEyeIcon,
  'back-arrow': icons.BackArrowIcon,
  'error-exclamation': icons.ErrorExclamationIcon,
  'default-image': icons.DefaultImageIcon,
  'image-error': icons.ImageErrorIcon,
  'bottom-chevron': icons.BottomChevronIcon,
  'no-offers': icons.NoOffersIcon,
  radio: icons.RadioIcon,
};

export type IconNames = keyof typeof ICONS;

type IconProps = {
  name: IconNames;
  color?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Icon = ({
  name,
  color,
  width = '1rem',
  height,
  className,
}: IconProps): JSX.Element => (
  <ReactSVG
    data-testid="icon"
    className={clsx('flex', className)}
    style={{ color, width, height }}
    beforeInjection={(svg: { setAttribute: (arg0: string, arg1: string) => void }) => {
      if (width) {
        svg.setAttribute('width', width);
      }
      if (height) {
        svg.setAttribute('height', height);
      }
    }}
    src={ICONS[name]}
  />
);

export default Icon;

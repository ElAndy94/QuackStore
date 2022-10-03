import clsx from 'clsx';
import { ReactSVG } from 'react-svg';
import BackArrowIcon from '/assets/icons/back-arrow.svg';
import BottomChevronIcon from '/assets/icons/bottom-chevron.svg';
import BrandIcon from '/assets/icons/brand.svg';
import ChevronIcon from '/assets/icons/chevron.svg';
import ClosedEyeIcon from '/assets/icons/closed-eye.svg';
import CopyIcon from '/assets/icons/copy.svg';
import CrossIcon from '/assets/icons/cross.svg';
import DateIcon from '/assets/icons/date.svg';
import DefaultImageIcon from '/assets/icons/default-image.svg';
import ErrorExclamationIcon from '/assets/icons/error-exclamation.svg';
import ImageErrorIcon from '/assets/icons/image-error.svg';
import NoOffersIcon from '/assets/icons/no-offers.svg';
import OffersIcon from '/assets/icons/offers.svg';
import OpenEyeIcon from '/assets/icons/open-eye.svg';
import RadioIcon from '/assets/icons/radio-button.svg';
import RocketIcon from '/assets/icons/rocket.svg';
import SearchIcon from '/assets/icons/search.svg';
import checkboxTick from '/assets/icons/tick.svg';
import TimeIcon from '/assets/icons/time.svg';
import UploadIcon from '/assets/icons/upload.svg';

const ICONS = {
  tick: checkboxTick,
  cross: CrossIcon,
  search: SearchIcon,
  chevron: ChevronIcon,
  brand: BrandIcon,
  upload: UploadIcon,
  offers: OffersIcon,
  copy: CopyIcon,
  rocket: RocketIcon,
  time: TimeIcon,
  date: DateIcon,
  'open-eye': OpenEyeIcon,
  'closed-eye': ClosedEyeIcon,
  'back-arrow': BackArrowIcon,
  'error-exclamation': ErrorExclamationIcon,
  'default-image': DefaultImageIcon,
  'image-error': ImageErrorIcon,
  'bottom-chevron': BottomChevronIcon,
  'no-offers': NoOffersIcon,
  radio: RadioIcon,
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

import clsx from 'clsx';
import { ReactSVG } from 'react-svg';

const ICONS = {
  user: '/assets/icons/user.svg',
  tick: '/assets/icons/tick.svg',
  cross: '/assets/icons/cross.svg',
  search: '/assets/icons/search.svg',
  chevron: '/assets/icons/chevron.svg',
  upload: '/assets/icons/upload.svg',
  copy: '/assets/icons/copy.svg',
  rocket: '/assets/icons/rocket.svg',
  time: '/assets/icons/time.svg',
  date: '/assets/icons/date.svg',
  radio: '/assets/icons/radio-button.svg',
  menu: '/assets/icons/menu.svg',
  'star-filled': '/assets/icons/star-filled.svg',
  'star-empty': '/assets/icons/star-empty.svg',
  'chevron-magenta': '/assets/icons/chevron-magenta.svg',
  'shopping-bag': '/assets/icons/shopping-bag.svg',
  'open-eye': '/assets/icons/open-eye.svg',
  'closed-eye': '/assets/icons/closed-eye.svg',
  'back-arrow': '/assets/icons/back-arrow.svg',
  'error-exclamation': '/assets/icons/error-exclamation.svg',
  'default-image': '/assets/icons/default-image.svg',
  'image-error': '/assets/icons/image-error.svg',
  'bottom-chevron': '/assets/icons/bottom-chevron.svg',
  'green-tick': '/assets/icons/green-tick.svg',
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

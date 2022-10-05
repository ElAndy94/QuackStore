import React, { FC } from 'react';
import Icon from './Icon';

type Props = {
  rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
  return (
    <div className="flex gap-2">
      {[0, 1, 2, 3, 4].map(star => {
        if (rating > star) {
          return <Icon name="star-filled" key={`filledstar${star}${Math.random()}`} />;
        } else {
          return <Icon name="star-empty" key={`emptystar${star}${Math.random()}`} />;
        }
      })}
    </div>
  );
};

export default Rating;

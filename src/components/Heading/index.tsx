import React from 'react';

import s from './Heading.module.scss';

interface HeadingProps {
	hType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph';
};

const Heading: React.FC<HeadingProps> = ({ children, hType }) => (
  <div className={s[hType]}>{children}</div>
);

export default Heading;
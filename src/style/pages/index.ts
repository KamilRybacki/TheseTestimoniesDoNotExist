import stw from 'solid-tw-components';

import MovingHeroTitle from '@components/MovingHeroTitle';

export const HeroSection = stw('header')`
  flex
  flex-col

  relative
  items-center
  h-[60vh]
  w-screen
`;

export const HeroTitleVideo = stw('video')`
  inline-block

  top-0
  left-0

  opacity-90
  w-full
  h-full

  object-cover
  -z-10
`;

export const StyledMovingHeroTitle = stw(MovingHeroTitle)`
  fixed
  top-20
  font-bold
  text-9xl
  text-colors-secondary-50
`;

export const ContentWrapper = stw('main')`
  flex
  flex-col

  w-screen
  p-10
`;

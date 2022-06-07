import stw from 'solid-tw-components';

export const HeroSectionWrapper = stw('header')`
  flex
  flex-col

  relative
  items-center
  w-screen
`;

export const HeroTitle = stw('h1')`
  absolute
  top-32
  font-heading
  font-bold
  text-[15vw]
  text-colors-secondary-50
`;

export const HeroTitleVideo = stw('video')`
  inline-block
  top-0
  left-0
  w-full
  h-screen
  object-cover
  -z-10
`;

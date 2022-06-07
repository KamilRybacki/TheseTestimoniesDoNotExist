import stw from 'solid-tw-components';

import {RealPerson} from '@components/Person';


export const RealPeopleSectionWrapper = stw('section')`
  flex
  flex-col
  justify-center
  items-center
  w-full
  px-10
  bg-colors-secondary-50
`;

export const IntroParagraph = stw('p')`
  w-full
  font-body
  text-3xl
  text-left
  mb-32
`;

export const RealPersonAvatar = stw(RealPerson)`
  w-[125px]
  h-[125px]
  overflow-hidden
  border-[1px]
  border-colors-accent-500
  shadow-lg
  shadow-colors-primary-700
`;

export const RealPersonInfoBox = stw('p')`
  absolute
  text-center
  w-[125px]
  h-fit
  font-subheading
  font-black
  text-colors-secondary-50
  text-2xl
  underline
  decoration-dotted
  decoration-colors-primary-900
  bg-colors-accent-800
  p-2
`;

export const TheyExist = stw('span')`
  mt-40
  font-heading
  font-bold
  text-9xl
  drop-shadow-lg
  text-colors-primary-900
`;

export const TheyExistParagraph = stw('p')`
  opacity-0
  text-justify
  font-body
  text-3xl
  text-colors-primary-900
  mb-1
`;

export const TheyWarnParagraph = stw(TheyExistParagraph)`
  mt-4
  font-body
  text-5xl
`;

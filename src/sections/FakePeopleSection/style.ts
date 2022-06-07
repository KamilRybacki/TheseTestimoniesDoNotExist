import stw from 'solid-tw-components';

import {FakePerson} from '@components/Person';

export const FakePeopleSectionWrapper = stw('section')`
  flex
  flex-col
  items-center
  w-full
  py-20
  px-10

  bg-colors-primary-50
`;

export const FakePersonAvatar = stw(FakePerson)`
  border-2
  border-colors-secondary-500
  shadow-lg
  shadow-colors-primary-700
  w-[125px]
  h-[125px]
  overflow-hidden
`;

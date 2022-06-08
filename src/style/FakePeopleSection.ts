import stw from 'solid-tw-components';

import {FakePersonAvatar} from '@components/PersonAvatar';

export const FakePeopleSectionWrapper = stw('section')`
  flex
  flex-col
  items-center
  w-full
  py-20
  px-10

  bg-colors-primary-50
`;

export const FakePersonPresentation = stw('article')`
  w-1/2
  flex
  justify-between
  items-center
`;

export const StyledFakePersonAvatar = stw(FakePersonAvatar)`
  border-2
  border-colors-secondary-500
  shadow-lg
  shadow-colors-primary-700
  w-[400px]
  h-[400px]
  overflow-hidden
  -rotate-3
`;

export const FakePersonInfoWrapper = stw('div')`
  text-colors-secondary-50
  font-body
  w-1/2
  rotate-2
`;

export const FakePersonInfo = stw('p')`
  flex
  flex-col
  text-colors-secondary-50
  p-5
  my-10
  font-body
  bg-colors-primary-500
`;

export const FakePersonInfoTitle = stw('span')`
  text-5xl
  text-center
`;

export const FakePersonInfoEntry = stw('span')`
  text-xl
`;

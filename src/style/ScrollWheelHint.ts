import stw from "solid-tw-components";

export const ScrollWheelHintWrapper = stw('span')`
  absolute
  opacity-0
  bottom-28
  flex
  flex-col
  justify-center
  items-center
  h-[20vh]
  w-full
`;

export const Mouse = stw('div')`
  w-px
  h-[10vh]
  py-5
  border-[2px]
  border-colors-accent-900
  border-opacity-25
`;

export const ScrollWheel = stw('div')`
  relative
  -left-[0.625rem]
  opacity-0
  w-5
  h-5
  mx-auto
  bg-colors-secondary-50
  rounded-full
`;

export const Alert = stw('span')`
  mt-4
  font-subheading
  text-xl
  text-colors-secondary-50
  font-semibold
  opacity-75
  drop-shadow-xl
  uppercase
  tracking-wider
`;

import * as Solid from 'solid-js';

import {gsap} from 'gsap';

import {ScrollWheelHintWrapper, Mouse, ScrollWheel, Alert} from './style';

const ScrollWheelHint = () => {
  let wheelElement: HTMLDivElement;
  let wrapperElement: HTMLDivElement;
  const hintAnimationTimeline = gsap.timeline(
      {
        repeat: -1,
        defaults: {
          duration: 2,
        },
        repeatDelay: 0,
      },
  );

  Solid.createEffect(()=>{
    const wrapperFadeIn = {
      opacity: 1,
      duration: 3,
      delay: 3,
      ease: 'power1.in',
    };
    const wheelFadeIn = {
      y: 20,
      opacity: 1,
      ease: 'power3.in',
    };
    const wheelFadeOut = {
      y: 40,
      opacity: 0,
      ease: 'power3.out',
    };
    gsap.to(wrapperElement, wrapperFadeIn);
    hintAnimationTimeline
        .to(wheelElement, wheelFadeIn)
        .to(wheelElement, wheelFadeOut);
  });

  return (
    <ScrollWheelHintWrapper ref={wrapperElement}>
      <Mouse><ScrollWheel ref={wheelElement}/></Mouse>
      <Alert>Scroll</Alert>
    </ScrollWheelHintWrapper>
  );
};

export default ScrollWheelHint;

import * as Solid from 'solid-js';

import {gsap} from 'gsap';

import * as Style from '@style/ScrollWheelHint';
import * as Animations from '../../animations/ScrollWheelHint';

const ScrollWheelHint = () => {
  let wheelElement: HTMLDivElement;
  let wrapperElement: HTMLDivElement;

  Solid.createEffect(()=>{
    const hintAnimationTimeline = gsap.timeline(
        {
          repeat: -1,
          defaults: {
            duration: 2,
          },
          repeatDelay: 0,
        },
    );
    gsap.to(wrapperElement, Animations.wrapperFadeIn);
    hintAnimationTimeline
        .to(wheelElement, Animations.wheelFadeIn)
        .to(wheelElement, Animations.wheelFadeOut);
  });

  return (
    <Style.ScrollWheelHintWrapper ref={wrapperElement}>
      <Style.Mouse><Style.ScrollWheel ref={wheelElement}/></Style.Mouse>
      <Style.Alert>Scroll</Style.Alert>
    </Style.ScrollWheelHintWrapper>
  );
};

export default ScrollWheelHint;

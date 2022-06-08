import * as Solid from 'solid-js';

import {gsap} from 'gsap';

import ScrollWheelHint from '@components/ScrollWheelHint';

import {HeroSectionWrapper, HeroTitle, HeroTitleVideo} from '@style/HeroSection';

import HeroVideoSource from '@media/video/hero_section.mp4';

const HeroSection = () => {
  let videoElement: HTMLHeaderElement;
  const heroSectionAnimationTimeline = gsap.timeline(
      {
        defaults: {
          duration: 3,
          delay: 0.5,
          ease: 'power1.in',
        },
        repeatDelay: 0,
      },
  );

  Solid.createEffect(() => {
    const initialState = {
      opacity: 0,
    };
    const finalState = {
      opacity: 1.0,
    };
    heroSectionAnimationTimeline.fromTo(videoElement, initialState, finalState);
  });

  return (
    <HeroSectionWrapper>
      <HeroTitle >People exist</HeroTitle>
      <HeroTitleVideo autoplay playsinline loop muted src={HeroVideoSource} type='video/mp4' ref={videoElement}/>
      <ScrollWheelHint/>
    </HeroSectionWrapper>
  );
};

export default HeroSection;

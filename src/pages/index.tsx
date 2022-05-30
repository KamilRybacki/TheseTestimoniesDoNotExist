/* @refresh reload */
import {render} from 'solid-js/web';

import HeroVideoSource from '@media/video/hero_section.mp4';

const HeroSection = stw('header')`
  flex
  flex-col

  absolute
  items-center
  h-[60vh]
  w-screen
`;

const HeroTitleVideo = stw('video')`
  inline-block

  absolute
  top-0
  left-0

  opacity-90
  w-full
  h-full

  object-cover
  -z-10
`;

const ContentWrapper = stw('main')`
  flex
  flex-col

  absolute
  top-[60vh]
  left-0
  
  w-screen
  h-[100vh]

  p-10
`;

render(() => {
  return (
    <>
      <HeroSection>
        <HeroTitle onScroll={()=>{moveTitleOnScroll()}}>People exist</HeroTitle>
        <HeroTitleVideo autoplay playsinline loop muted src={HeroVideoSource} type='video/mp4'/ >
      </HeroSection>
      <ContentWrapper>
        <div>s</div>
      </ContentWrapper>
    </>
  );
},
  document.getElementById('root') as HTMLElement,
);

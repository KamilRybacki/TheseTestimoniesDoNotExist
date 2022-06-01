/* @refresh reload */
import {render} from 'solid-js/web';

import HeroVideoSource from '@media/video/hero_section.mp4';

import {HeroSection, HeroTitleVideo,
  StyledMovingHeroTitle, ContentWrapper} from '@style/pages/index';

render(() => {
  return (
    <>
      <HeroSection>
        <StyledMovingHeroTitle
          endX={0.05}
          endY={0.1}
          throttle={0.05}
        >
          People exist
        </StyledMovingHeroTitle>
        <HeroTitleVideo autoplay playsinline loop muted src={HeroVideoSource} type='video/mp4'/ >
      </HeroSection>
      <ContentWrapper>
      </ContentWrapper>
    </>
  );
},
  document.getElementById('root') as HTMLElement,
);

import * as Solid from 'solid-js';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger.js';

import {AvatarRow} from '@style/common';
import * as Style from './style';
import * as Animations from './animations';

gsap.registerPlugin(ScrollTrigger);

const realPersonInfo = [
  'He\'s a legend',
  'Thanks',
  'She raided tombs',
  'Lost control',
  'Figuratively God',
  'Known taxi driver',
  'Got that big rocket launcher',
  'Literally USA president',
  'She dumps Your a**',
  'Real human bean',
];

const RealPeopleSection = () => {
  let wrapperElement: HTMLElement;
  let introElement: HTMLParagraphElement;
  let rowElement: HTMLDivElement;
  let theyExistElement: HTMLSpanElement;

  const prepareAvatarRow = () => {
    [...Array(10)].forEach((_, index: number) => {
      const infoTransform = Animations.putInfoNearAvatar(index);
      gsap.set(`#rp_info_${index}`, {
        x: infoTransform.x,
        y: infoTransform.y,
        transformOrigin: '50% 50%',
        opacity: 0,
        rotate: infoTransform.rotation,
      });
    });
    gsap.set(rowElement, {x: (_, element) => {
      return Animations.startOffscreenOnX(element, 'left');
    }});
  };

  const showIntro = (timeline) => {
    timeline
        .fromTo(introElement,
            Animations.introFadeIn[0],
            Animations.introFadeIn[1],
        );
  };

  const showAvatarRow = (timeline) => {
    timeline
        .to(rowElement, Animations.rowSlideIn)
        .fromTo(theyExistElement,
            Animations.theyExistFadeIn[0],
            Animations.theyExistFadeIn[1],
        );
    [...Array(10)].forEach((_, index: number) => {
      timeline
          .to(`#rp_info_${index}`, Animations.infoTagFadeIn);
    });
  };

  const showParagraphs = (timeline) => {
    timeline
        .to(theyExistElement, Animations.theyExistFadeOut);
    [...Array(4)].forEach((_, index: number) => {
      timeline
          .fromTo(`#rp_paragraph_${index+1}`,
              Animations.paragraphFadeIn[0],
              Animations.paragraphFadeIn[1],
          );
    });
  };

  Solid.createEffect(()=> {
    const realPeopleSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperElement,
        start: 'center 50%',
        end: '=+3000px',
        toggleActions: 'play none none',
        markers: true,
        scrub: 1,
        pin: true,
      },
    });
    prepareAvatarRow();
    showIntro(realPeopleSectionTimeline);
    showAvatarRow(realPeopleSectionTimeline);
    showParagraphs(realPeopleSectionTimeline);
  });

  return (
    <Style.RealPeopleSectionWrapper ref={wrapperElement}>
      <Style.IntroParagraph ref={introElement}>
            Everyday, <b class='text-colors-accent-500'>You </b>
            are surrounded by interesting people, who in general,
            have one <b>crucial</b> thing in common ...
      </Style.IntroParagraph>
      <AvatarRow ref={rowElement}>
        <Solid.For each={[...Array(10).keys()]}>
          {(index: number) => {
            const imageSourceUrl = `./assets/images/real_people/${index+1}.jpeg`;
            return (
              <div key={`rp_${index}`} class='py-10'>
                <Style.RealPersonInfoBox id={`rp_info_${index}`}>{realPersonInfo[index]}</Style.RealPersonInfoBox>
                <Style.RealPersonAvatar id={`rp_avatar_${index}`} src={imageSourceUrl}/>
              </div>
            );
          }}
        </Solid.For>
      </AvatarRow>
      <Style.TheyExist ref={theyExistElement}>They exist</Style.TheyExist>
      <Style.TheyExistParagraph id='rp_paragraph_1'>
        They share <b>stories</b> and <b>opinions</b>
      </Style.TheyExistParagraph>
      <Style.TheyExistParagraph id='rp_paragraph_2'>
        They can do <b>neat things</b> and create <b>cool memories</b> for eachother.
      </Style.TheyExistParagraph>
      <Style.TheyExistParagraph id='rp_paragraph_3'>
        They <b>get annoyed</b>, <b>become satisfied</b> or <b>feel noticed</b>.
      </Style.TheyExistParagraph>
      <Style.TheyWarnParagraph id='rp_paragraph_4' class='text-5xl'>
        They can <b class='text-colors-accent-500'>warn others</b>.
      </Style.TheyWarnParagraph>
    </Style.RealPeopleSectionWrapper>
  );
};

export default RealPeopleSection;

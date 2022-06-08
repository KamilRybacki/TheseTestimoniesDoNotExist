
export const introFadeIn = [{opacity: 0}, {
  opacity: 1,
  ease: 'power2.in',
  duration: 0.5,
  delay: 0.25,
}];

export const rowSlideIn = {
  x: 0,
  duration: 1,
  ease: 'steps.in',
};

export const theyExistFadeIn = [{opacity: 0, y: 20}, {
  opacity: 1,
  y: 0,
  delay: 0.25,
  duration: 0.5,
  ease: 'power2.in',
}];

export const normalTextFadeOut = {
  opacity: 0,
  duration: 0.25,
  ease: 'power1.out',
};

export const infoTagFadeIn = {
  opacity: 1,
  duration: 0.5,
  ease: 'power1.in',
};

export const paragraphFadeIn = [{opacity: 0, y: 0}, {
  opacity: 1,
  y: -150,
  delay: 0.25,
  duration: 0.5,
  ease: 'power2.in',
}];

export const startOffscreenOnX = (element: HTMLElement, direction: string) => {
  const rect = element.getBoundingClientRect();
  const directionalMultiplier = direction === 'left' ? -1 : 1;
  return screen.width - directionalMultiplier * rect.left + element.offsetWidth/2;
};

export const putInfoNearAvatar = (index: number) => {
  const isNotEven = (index + 1) % 2 !== 0;
  const avatarElement: HTMLImageElement = document.getElementById(`rp_avatar_${index}`);
  const infoElement: HTMLParagraphElement = document.getElementById(`rp_info_${index}`);
  const avatarRect = avatarElement.getBoundingClientRect();
  const infoElementRect = infoElement.getBoundingClientRect();

  return {
    x: 0,
    y: isNotEven ?
      1.25 * avatarRect.height:
      -0.25 * avatarRect.height - infoElementRect.height,
    rotation: Math.floor(Math.random() * 30) -15,
  };
};

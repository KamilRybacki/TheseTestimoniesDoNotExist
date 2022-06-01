import * as Solid from 'solid-js';

type MovingHeroTitleProps = {
  children: Element | Element[]
  style: CSSStyleDeclaration
  endX: number
  endY: number
  throttle: number
}

type CartesianPixelMeasures = {
  'x': number,
  'y': number
}

const MovingHeroTitle: Solid.Component<MovingHeroTitleProps> = (props) => {
  let titleElement: HTMLHeadingElement;
  const [mainProps, rest] = Solid.splitProps(props, ['children', 'endX', 'endY', 'throttle']);

  const [initialPosition, setInitialPosition] = Solid.createSignal<CartesianPixelMeasures>();
  const [distanceToCover, setDistanceToCover] = Solid.createSignal<CartesianPixelMeasures>();

  Solid.onMount(() => {
    const absoluteEndX = window.innerWidth * mainProps.endX;
    const absoluteEndY = window.innerHeight * mainProps.endY;

    setInitialPosition({
      x: titleElement.offsetLeft,
      y: titleElement.offsetTop,
    });

    setDistanceToCover({
      x: absoluteEndX - titleElement.offsetLeft,
      y: absoluteEndY - titleElement.offsetTop,
    });

    titleElement.style.position = 'fixed';
    titleElement.style.transitionDuration = '500ms';
    titleElement.style.transitionTimingFunction = 'easeInOut';

    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = (event: Event) => {
    if (titleElement) {
      const windowY = window.scrollY;

      const animationStage = Math.min(mainProps.throttle * windowY / distanceToCover().y, 1.0);

      const horizontalShift = initialPosition().x + distanceToCover().x * animationStage;
      const verticalShift = initialPosition().y + distanceToCover().y * animationStage;

      titleElement.style.left = `${horizontalShift}px`;
      titleElement.style.top = `${verticalShift}px`;
    }
  };

  return (
    <h1
      onScroll={handleScroll}
      ref={titleElement}
      {...rest}
    >
      {props.children}
    </h1>
  );
};

export default MovingHeroTitle;

import * as Solid from 'solid-js';

type MovingHeroTitleProps = {
  children: Element | Element[]
  dx: string | number
  dy: string | number
}

type Position = {
  'x': number
  'y': number
}

const MovingHeroTitle: Solid.Component<MovingHeroTitleProps> = (props) => {
  const thisTitleId = Solid.createUniqueId();
  const [translationParameters, rest] = Solid.splitProps(props, [
    'children',
    'dx',
    'dy',
  ]);

  const [titleElement, setTitleElementPointer] = Solid.createSignal<Element | HTMLElement | null>(null);
  const [position, setPosition] = Solid.createSignal<Position>({
    'x': 0,
    'y': 0,
  });

  Solid.createEffect(()=>{
    setTitleElementPointer(document.getElementById(thisTitleId));
    console.info(titleElement);
    setPosition({
      'x': titleElement().clientLeft,
      'y': titleElement().clientTop,
    });
  });

  const handleScroll = () => {
    const currentPosition = position();
    setPosition({
      'x': currentPosition.x + dx,
      'y': currentPosition.y + dy,
    });
  };

  return (
    <h1
      onScroll={handleScroll}
      id={thisTitleId}
    >
      {props.children}
    </h1>
  );
};

export default MovingHeroTitle;

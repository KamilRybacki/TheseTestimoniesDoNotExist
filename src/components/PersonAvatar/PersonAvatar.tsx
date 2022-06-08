import * as Solid from 'solid-js';

import corsEverywhereFetch from '@functions/corsfetch';

import * as Style from '@style/PersonAvatar';

const FAKE_PERSON_URL = 'https://thispersondoesnotexist.com/image';

export const FakePersonAvatar: Element | Solid.Component | HTMLDivElement = (props) => {
  let personImage: HTMLImageElement;
  const [{style, order, className}, restProps] = Solid.splitProps(props, ['style', 'order', 'className']);

  const fetchFakePersonImage = async () => {
    await corsEverywhereFetch(FAKE_PERSON_URL)
        .then(async (response) => {
          await response.blob().then(
              (imageData) => {
                const imageURL = URL.createObjectURL(imageData);
                personImage.src = imageURL;
              },
          );
        });
  };

  Solid.createEffect(() => {
    setTimeout(() => fetchFakePersonImage(), order ? order * 2000 : 0);
  });

  return (
    // eslint-disable-next-line solid/no-react-specific-props
    <Style.PersonWrapper className={className} style={style ?? {}} {...restProps}>
      <Style.PersonSource ref={personImage}/>
    </Style.PersonWrapper>
  );
};

export const RealPersonAvatar: Element | Solid.Component | HTMLDivElement = (props) => {
  const [{style, className, src}, restProps] = Solid.splitProps(props, ['style', 'className', 'src']);
  return (
    // eslint-disable-next-line solid/no-react-specific-props
    <Style.PersonWrapper className={className} style={style} {...restProps}>
      <Style.PersonSource src={src}/>
    </Style.PersonWrapper>
  );
};

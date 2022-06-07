import * as Solid from 'solid-js';

import {PersonSource, PersonWrapper} from './style';

const FAKE_PERSON_URL = 'https://thispersondoesnotexist.com/image';
const CORS_PROXY_URL = 'https://dry-forest-06322.herokuapp.com';

export const FakePerson: Element | Solid.Component | HTMLDivElement = (props) => {
  let personImage: HTMLImageElement;
  const [{style, order, className}, restProps] = Solid.splitProps(props, ['style', 'order', 'className']);

  const fetchFakePersonImage = async () => {
    await fetch(`${CORS_PROXY_URL}/${FAKE_PERSON_URL}`)
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
    <PersonWrapper className={className} style={style ?? {}} {...restProps}>
      <PersonSource ref={personImage}/>
    </PersonWrapper>
  );
};

export const RealPerson: Element | Solid.Component | HTMLDivElement = (props) => {
  const [{style, className, src}, restProps] = Solid.splitProps(props, ['style', 'className', 'src']);
  return (
    // eslint-disable-next-line solid/no-react-specific-props
    <PersonWrapper className={className} style={style} {...restProps}>
      <PersonSource src={src}/>
    </PersonWrapper>
  );
};

import * as Solid from 'solid-js';

import {FakePeopleSectionWrapper, FakePersonAvatar} from './style';
import {BodyParagraph, AvatarRow} from '@style/common';

const FakePeopleSection = () => {
  return (
    <FakePeopleSectionWrapper>
      <AvatarRow>
        <Solid.For each={[...Array(10).keys()]}>
          {(index) => <FakePersonAvatar key={`fp_${index}`} order={index+1}/>}
        </Solid.For>
      </AvatarRow>
    </FakePeopleSectionWrapper>
  );
};

export default FakePeopleSection;

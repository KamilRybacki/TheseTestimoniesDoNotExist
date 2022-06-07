import HeroSection from '@sections/HeroSection';
import RealPeopleSection from '@sections/RealPeopleSection';
import FakePeopleSection from '@sections/FakePeopleSection';

import {SpacerSection} from './style';

const IndexPage = () => {
  return (
    <>
      <HeroSection/>
      <RealPeopleSection/>
      <SpacerSection/>
      <FakePeopleSection/>
    </>
  );
};

export default IndexPage;

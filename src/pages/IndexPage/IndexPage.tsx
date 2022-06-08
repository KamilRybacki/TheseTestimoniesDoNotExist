import HeroSection from '@sections/HeroSection';
import RealPeopleSection from '@sections/RealPeopleSection';
import FakePeopleSection from '@sections/FakePeopleSection';

import {SpacerSection} from '@style/IndexPage';

const IndexPage = () => {
  return (
    <>
      <HeroSection/>
      {/* <RealPeopleSection/> */}
      <FakePeopleSection/>
    </>
  );
};

export default IndexPage;

import * as Solid from 'solid-js';

import {getAllFakePeopleData} from '@functions/fakedata';
import {randomRotation} from '@functions/styleutils';

import {FakePeopleData, FakePersonData} from '@types/fakedata';
import * as Style from '@style/FakePeopleSection';

const FakePeopleSection = () => {
  const [fakePeople, setFakePeople] = Solid.createSignal<FakePersonData[]>([]);

  const amountOfPeople = 5;
  Solid.createEffect(async () => {
    await getAllFakePeopleData(amountOfPeople)
        .catch((e: PromiseRejectedResult) => {
          console.error(`Failed to fetch fake data: \n ${e}`);
        })
        .then((generatedFakePeopleData: FakePeopleData) => {
          const data = [...Array(amountOfPeople)].map((_, index: number) => {
            return {
              name: generatedFakePeopleData.names[index],
              location: generatedFakePeopleData.locations[index],
              likes: generatedFakePeopleData.preferences.likes.splice(0, 5),
              dislikes: generatedFakePeopleData.preferences.dislikes.splice(0, 5),
            };
          });
          setFakePeople(data);
        });
  });

  return (
    <Style.FakePeopleSectionWrapper id='fake-people-section'>
      <Solid.Show when={fakePeople().length > 0}>
        <Solid.For each={fakePeople()} fallback={<></>}>
          {((personData: FakePersonData, index: Solid.Accessor<number>) => {
            return (
              <Style.FakePersonPresentation>
                <Style.StyledFakePersonAvatar key={`fp_${index() + 1}`} order={index() + 1}/>
                <Style.FakePersonInfoWrapper>
                  <Style.FakePersonInfo>
                    <Style.FakePersonInfoTitle>
                      <b class='font-black'>{personData?.name}</b>
                    </Style.FakePersonInfoTitle>
                  </Style.FakePersonInfo>
                  <Style.FakePersonInfo>
                    <Style.FakePersonInfoEntry >
                      <b>Location</b>: {personData?.location}
                    </Style.FakePersonInfoEntry>
                    <Style.FakePersonInfoEntry>
                      <b>Likes</b>:
                      <Solid.For each={personData?.likes}>
                        {(noun: string) => ' ' + noun}
                      </Solid.For>
                    </Style.FakePersonInfoEntry>
                    <Style.FakePersonInfoEntry>
                      <b>Dislikes</b>:
                      <Solid.For each={personData?.dislikes}>
                        {(noun: string) => ' ' + noun}
                      </Solid.For>
                    </Style.FakePersonInfoEntry>
                  </Style.FakePersonInfo>
                </Style.FakePersonInfoWrapper>
              </Style.FakePersonPresentation>
            );
          })}
        </Solid.For>
      </Solid.Show>
    </Style.FakePeopleSectionWrapper>
  );
};
export default FakePeopleSection;

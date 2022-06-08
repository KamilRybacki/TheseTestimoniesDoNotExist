import * as Types from '@types/fakedata';

import cetch from './corsfetch';

const DEFAULT_QUANTITY = 5;

export const getFakePeopleNames = async (quantity: number) => {
  return await cetch(`https://www.random-name-generators.com/api/get/random/${quantity}/category/4`)
      .then((response: Response) => response.json())
      .then((rawNamesJSON: Types.randomNames) => {
        const namesList = rawNamesJSON.rows;
        return namesList.reduce((acc: string[], data: {name: string}) => {
          acc.push(data.name);
          return acc;
        }, []);
      });
};

export const getFakePeopleLocations = async (quantity: number) => {
  return await cetch('https://www.randomlists.com/data/us-cities.json')
      .then((response: Response) => response.json())
      .then((citiesJson: Types.usCitiesJSON) => {
        const citiesList = citiesJson.RandL.items;
        return [...Array(quantity)].reduce((acc: Types.usCity[]) => {
          const randomCityIndex = Math.floor(Math.random() * citiesList.length);
          const randomCity = citiesList[randomCityIndex];
          citiesList.slice(randomCityIndex);
          acc.push(`${randomCity.name}, ${randomCity.detail}`);
          return acc;
        }, []);
      })
      .then((fetchedRandomCities: Types.usCity[]) => {
        return fetchedRandomCities;
      });
};

export const getFakePeoplePreferences = async (quantity: number) => {
  return await cetch('https://www.randomlists.com/data/topics.json')
      .then((response: Response) => response.json())
      .then((allTopics: Types.Topics) => {
        const topicsList = allTopics.data;
        const getRandomTopics = () => {
          return [...Array(quantity)].reduce((acc: string[]) => {
            const randomTopicIndex = Math.floor(Math.random() * topicsList.length);
            const randomTopic = topicsList[randomTopicIndex];
            topicsList.slice(randomTopicIndex);
            acc.push(randomTopic);
            return acc;
          }, []);
        };
        return {
          likes: getRandomTopics(),
          dislikes: getRandomTopics(),
        };
      });
};

export const getAllFakePeopleData = async (quantity: number) => {
  return await getFakePeopleNames(quantity || DEFAULT_QUANTITY)
      .then(async (names: string[]) => {
        const cities = await getFakePeopleLocations(quantity || DEFAULT_QUANTITY);
        const preferences = await getFakePeoplePreferences(5 * (quantity || DEFAULT_QUANTITY));
        return {
          names: names || [],
          locations: cities || [],
          preferences: preferences || {
            likes: [],
            dislikes: [],
          },
        };
      });
};

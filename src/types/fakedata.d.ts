
export type USCity = {
  name: string
  detail: string
  img: string
};

export type USCitiesJSON = {
  RandL: {
    items: USCity[]
    meta: {
      img: {
        local: string
        prefix: string
        suffix: string
      }
    }
  }
};

export type RandomNames = {
  rows: {
    name: string
  }[]
};

export type Topics = {
  data: string[]
};

export type Preferences = {
    likes: string[],
    dislikes: string[],
}

export type AllFakePeopleData = {
    names: string[],
    locations: string[],
    preferences: Preferences,
};

export type FakePersonData = {
  name: string,
  location: string,
  likes: string[],
  dislikes: string[],
};

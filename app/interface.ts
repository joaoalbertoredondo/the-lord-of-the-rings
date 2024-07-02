export interface SimplifiedCharacter {
  _id: string;
  imageUrl: string;
  name: string;
  race: string;
  description: string;
  slug: string;
}

export interface CharacterFullProfile {
  _id: string;
  name: string;
  race: string;
  description: string;
  slug: string;
  weapons: string;
  imageUrl: string;
}

export interface RacesPage {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
}

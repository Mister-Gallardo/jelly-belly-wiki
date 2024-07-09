export interface IBean {
  beanId: number;
  backgroundColor: string;
  flavorName: string;
  description: string;
  imageUrl: string;
}

export interface IFact {
  factId: number;
  title: string;
  description: string;
}

export interface IRecipe {
  recipeId: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface ICombination {
  combinationId: number;
  name: string;
  tag: string[];
}

export interface IHistory {
  mileStoneId: number;
  year: number;
  description: string;
}

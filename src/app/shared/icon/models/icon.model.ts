export interface IconDefinition {
  iconName: string;
  icon: string;
}

export interface IconRegistry {
  [category: string]: {
    [prefix: string]: {
      [name: string]: IconDefinition;
    };
  };
}

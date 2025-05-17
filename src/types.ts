export type Language = 'english' | 'sinhala' | 'tamil';

export type WithdrawalOption = 'card' | 'cardless';

export interface Step {
  id: number;
  title: {
    english: string;
    sinhala: string;
    tamil: string;
  };
  description: {
    english: string;
    sinhala: string;
    tamil: string;
  };
  image: string;
}

export interface StepsData {
  card: Step[];
  cardless: Step[];
}
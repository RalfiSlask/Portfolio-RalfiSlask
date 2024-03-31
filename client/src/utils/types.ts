export interface IFormInfo {
  name: string;
  email: string;
  message: string;
}

export type Message = {
  role: 'user' | 'system';
  content: string;
};

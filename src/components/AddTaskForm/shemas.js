import { string, object } from 'yup';
import { messageValidate } from './messageValitade';

export const taskShemas = object({
   text_task: string()
      .required(messageValidate.required)
      .min(3, messageValidate.minSymbols(3)),
 });
import { type SchemaTypeDefinition } from 'sanity';
import { product } from './product';
import loginForm from './login-form';
import order from './order';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,loginForm, order],
};

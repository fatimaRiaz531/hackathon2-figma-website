import { defineType, defineField } from '@sanity/types';

export default defineType({
  name: 'loginForm',
  title: 'Login Form',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email().error('A valid email address is required'),
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) => Rule.required().email().error('use a strong password with speacial characters ,alphabets and numbers'),
    }),
  ],
});
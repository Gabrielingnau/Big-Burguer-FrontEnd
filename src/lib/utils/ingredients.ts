import { z } from "zod"

export const ingredientsProps = z.object({
  value: z.string(),
  label: z.string(),
});

type IngredientsProps = z.infer<typeof ingredientsProps>;

export const ingredients: IngredientsProps[] = [
  { value: 'cheese', label: 'Cheese' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'onion', label: 'Onion' },
  { value: 'bacon', label: 'Bacon' },
  { value: 'lettuce', label: 'Lettuce' },
  { value: 'pickles', label: 'Pickles' },
  { value: 'olives', label: 'Olives' },
  { value: 'garlic', label: 'Garlic' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'peppers', label: 'Peppers' },
  { value: 'sausage', label: 'Sausage' },
  { value: 'pepperoni', label: 'Pepperoni' },
  { value: 'chicken', label: 'Chicken' },
];
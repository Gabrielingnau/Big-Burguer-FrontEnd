import { useState } from "react";

const STORAGE_KEY = '@bigburguer:ingredients';

export type IngredientsProps = string

export function getStorageIngredients(): IngredientsProps[] {
  const storage = localStorage.getItem(STORAGE_KEY)

  const response = storage ? JSON.parse(storage) : ['']

  if(response) {
    return response;
  }else {
    return []
  }
}

export  function saveStorageIngredients(ingredient: IngredientsProps) {
  const storage = getStorageIngredients();

  storage.push(ingredient);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}

export async function removeStorageIngredient(ingredientRemoved: IngredientsProps) {
  const storage = localStorage.getItem(STORAGE_KEY);

  const response = storage ? JSON.parse(storage) : [];

  const listIngredients = response.filter((ingredient: IngredientsProps) => ingredient !== ingredientRemoved);

  console.log(response);
 
  localStorage.removeItem(STORAGE_KEY);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(listIngredients));
  getStorageIngredients()
}  
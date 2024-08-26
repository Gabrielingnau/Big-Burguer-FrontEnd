import {
  getStorageIngredients,
  IngredientsProps,
  removeStorageIngredient,
  saveStorageIngredients,
} from '@/lib/utils/asyncStorage/ingredientsStorage';
import { Check, ChevronsUpDown, Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export function SelectIngredients() {
  const [open, setOpen] = useState(false);
  const [selectIngredient, setSelectIngredient] = useState<string>();
  const [createIngredient, setCreateIngredient] = useState<string>();
  const [arrayIngredients, setArrayIngredients] = useState<string[]>([]);
  const [upadatedCommand, setUpadatedCommand] = useState(false);

  useEffect(() => {
    ingredients = getStorageIngredients();
  }, [upadatedCommand]);

  let ingredients = getStorageIngredients();

  async function handleIngredients() {
    if (createIngredient) {
      const existsIngredien = arrayIngredients.find((ingredient) => ingredient === createIngredient);
      console.log(existsIngredien);
      if (existsIngredien) {
        return;
      }
      saveStorageIngredients(createIngredient);
      setArrayIngredients([...arrayIngredients, createIngredient]);
      setCreateIngredient('');
    }

    if (selectIngredient) {
      const existsIngredien = arrayIngredients.find((ingredient) => ingredient === selectIngredient);
      if (existsIngredien) {
        return;
      }
      setArrayIngredients([...arrayIngredients, selectIngredient]);
      setSelectIngredient('');
    }
  }

  function handleRemoveIngredient(ingredientName: string) {
    const ingredientsFix = arrayIngredients.filter((ingredient) => ingredient !== ingredientName);
    setArrayIngredients(ingredientsFix);
  }

  function removeIngredientLocalStorage(ingredientRemoved: IngredientsProps) {
    if (ingredientRemoved === selectIngredient) {
      setSelectIngredient(undefined);
    }
    removeStorageIngredient(ingredientRemoved);
    setUpadatedCommand(!upadatedCommand);
  }

  return (
    <button type="button" className="flex cursor-default flex-col space-y-3">
      <form onSubmit={handleIngredients} className="flex items-center space-x-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="w-[200px] justify-between" asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
              {selectIngredient
                ? ingredients.find((ingredients) => ingredients === selectIngredient)
                : 'Select ingredients...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Command>
              <CommandInput placeholder="Search ingredients..." />
              <CommandList>
                <CommandEmpty>No ingredients found.</CommandEmpty>
                <CommandGroup>
                  {ingredients &&
                    ingredients.map((ingredient) => (
                      <CommandItem key={ingredient} className="mb-2 flex w-full items-center rounded-[6px]">
                        <CommandItem
                          onSelect={(currentValue) => {
                            setSelectIngredient(currentValue === selectIngredient ? '' : currentValue);
                            setOpen(false);
                          }}
                          className="flex-1 rounded-r-none"
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              selectIngredient === ingredient ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {ingredient}
                        </CommandItem>
                        <Button
                          className="h-8 w-[15%] rounded-l-none p-0"
                          onClick={() => removeIngredientLocalStorage(ingredient)}
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          type="text"
          placeholder="ingrediente"
          onChange={(e) => setCreateIngredient(e.target.value)}
          value={createIngredient}
        />

        <Button onClick={handleIngredients} type="button">
          <Plus />
        </Button>
      </form>
      {arrayIngredients && (
        <div className="flex flex-wrap gap-2">
          {arrayIngredients.map((ingredient) => {
            return (
              <div key={ingredient} className="flex items-center justify-between gap-1 rounded-[0.375rem] bg-muted p-1">
                <p>{ingredient}</p>{' '}
                <Button
                  onClick={() => handleRemoveIngredient(ingredient)}
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-3 w-3 hover:bg-muted-foreground"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </button>
  );
}

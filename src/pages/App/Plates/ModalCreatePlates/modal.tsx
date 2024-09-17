import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { errorColor } from '@/lib/utils/error-color';
import { zodResolver } from '@hookform/resolvers/zod';

import { PreviewImage, filesError } from './preview-image';
import { SelectIngredients } from './select-ingredients';

const formSchema = z.object({
  name: z.string().min(1, 'Informe o nome do prato'),
  description: z.string().min(1, 'Informe uma descrição para o prato'),
  select: z.enum(['hamburguers', 'dog`s', 'porções', 'refrigerantes', 'bebidas', 'sucos'], {
    required_error: 'Selecione uma categoria',
  }),
  value: z.string().min(1, 'Informe um valor para o prato'),
});

type FormSchema = z.infer<typeof formSchema>;

let errorImageColor: string = 'muted-foreground';

export function ModalCreatePlates() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      select: 'hamburguers',
    },
  });

  async function handleCreatePlates(data: FormSchema) {
    try {
      if (!filesError) {
        errorImageColor = errorColor;
        return;
      }
      Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value === '' ? undefined : value]));

      toast.success('Prato criado com sucesso');
      setValue('name', '');
    } catch (error) {
      toast.error('Erro ao criar o prato');
    }
  }

  return (
    <DialogContent className="w-[30rem] p-6">
      <DialogHeader>
        <DialogTitle>Crie seu prato</DialogTitle>
        <DialogDescription>Preencha os campos obrigatórios para criar o prato.</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleCreatePlates)} className="flex w-[26.938rem] flex-col gap-5">
        <div className="h-[7.5rem] w-[7.5rem]">
          <PreviewImage errorImageColor={errorImageColor} title="Imagem do produto" borderSize="border-[0.1rem]" />
        </div>

        <div className="space-y-1">
          <Label className={`${errors.name?.message && `text-${errorColor}`}`} htmlFor="name">
            Nome do prato
          </Label>
          <Input placeholder='Ex: Big Bacon' id="name" type="text" {...register('name')} />
          {errors.name?.message && <p className={`text-sm text-${errorColor}`}>{errors.name?.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={`${errors.description?.message && `text-${errorColor}`}`} htmlFor="description">
            Descrição
          </Label>
          <Input placeholder='Descrava seu prato' id="description" type="text" {...register('description')} />
          {errors.description?.message && <p className={`text-sm text-${errorColor}`}>{errors.description?.message}</p>}
        </div>

        <Label className="flex flex-col gap-2">
          Ingredientes
          <SelectIngredients />
        </Label>

        <div className="space-y-1">
          <Label className={`${errors.value?.message && `text-${errorColor}`}`} htmlFor="value">
            Valor
          </Label>
          <Input placeholder='Ex: R$33,00' id="value" type="number" {...register('value')} />
          {errors.value?.message && <p className={`text-sm text-${errorColor}`}>{errors.value?.message}</p>}
        </div>

        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <div className="space-y-1">
              <Label className={`${errors.select?.message && `text-ring`}`} htmlFor="description">
                Categoria
              </Label>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="h-8 w-[11.25rem]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hamburguers">Hamburguers</SelectItem>
                  <SelectItem value="dog`s">Dog`s</SelectItem>
                  <SelectItem value="porções">Porções</SelectItem>
                  <SelectItem value="refrigerantes">Refrigerantes</SelectItem>
                  <SelectItem value="bebidas">Bebidas</SelectItem>
                  <SelectItem value="sucos">Sucos</SelectItem>
                </SelectContent>
              </Select>
              {errors.select?.message && <p className="text-sm text-ring">{errors.select?.message}</p>}
            </div>
          )}
        />

        <Button disabled={isSubmitting} className="mt-4 w-full" type="submit">
          Finalizar criação
        </Button>
      </form>
    </DialogContent>
  );
}

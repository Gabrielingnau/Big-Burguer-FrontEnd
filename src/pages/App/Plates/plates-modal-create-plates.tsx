import { Download, X } from 'lucide-react';
import { useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { errorColor } from '@/lib/utils/plates-error-color';
import { zodResolver } from '@hookform/resolvers/zod';

import { SelectIngredients } from './plates-select-ingredients';

const formSchema = z.object({
  name: z.string().min(1, 'informe o nome do prato'),
  description: z.string().min(1, 'informe uma descrição para o prato'),
  select: z.enum(['hamburguers', 'dog`s', 'porções', 'refrigerantes', 'bebidas', 'sucos'], {
    required_error: 'Selecione uma categoria',
  }),
  value: z.string().min(1, 'informe um valor para o prato'),
});

type FormSchema = z.infer<typeof formSchema>;

let filesError: File[] | null | undefined = null;
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
      toast.error('Erro ao cadastrar restaurante');
    }
  }

  return (
    <DialogContent className="sm:max-w-[26.563rem]">
      <DialogHeader>
        <DialogTitle>Crie seu prato</DialogTitle>
        <DialogDescription>Preencha os campos obrigatórios para criar o prato.</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleCreatePlates)} className="flex flex-col gap-5">
        <PreviewImage />

        <div className="space-y-1">
          <Label className={`${errors.name?.message && `text-${errorColor}`}`} htmlFor="name">
            Nome do prato
          </Label>
          <Input id="name" type="text" {...register('name')} />
          {errors.name?.message && <p className={`text-sm text-${errorColor}`}>{errors.name?.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={`${errors.description?.message && `text-${errorColor}`}`} htmlFor="description">
            Descrição
          </Label>
          <Input id="description" type="text" {...register('description')} />
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
          <Input id="value" type="number" {...register('value')} />
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
          Finalizar cadastro
        </Button>
      </form>
    </DialogContent>
  );
}

interface File extends FileWithPath {
  preview: string;
}

const PreviewImage = () => {
  const [files, setFiles] = useState<File[] | null>();

  filesError = files;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  return (
    <div {...getRootProps()} className="w-[7.5rem] items-center gap-4">
      <Label
        htmlFor="image"
        tabIndex={0}
        className={`flex h-[7.5rem] w-[7.5rem] cursor-pointer items-center justify-center rounded-[6px] bg-muted transition-all hover:opacity-70 ${!files && `border-2 border-dashed p-2 ${isDragActive ? `border-ring` : `border-${errorImageColor}`}`}`}
      >
        {files ? (
          files?.map((file) => {
            return (
              <div key={file.name} className="relative">
                <img
                  key={file.path}
                  src={file.preview}
                  alt="Imagem do prato"
                  className="h-[7.5rem] w-[7.5rem] rounded-[6px] object-cover"
                />
                <Button
                  className="absolute right-0 top-0 z-10 h-6 w-6 rounded-[50%] p-0"
                  size="xs"
                  variant="outline"
                  onClick={() => setFiles(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            );
          })
        ) : (
          <p
            className={`flex flex-col items-center justify-center gap-2 text-center ${errorImageColor === 'ring' && `text-${errorImageColor}`} text-xs ${isDragActive && `text-ring`}`}
          >
            <Download className={`mb-1 ${isDragActive && `color-ring`} h-5 w-5`} /> Imagem do produto
            <p className={`${isDragActive ? `text-ring` : `text-${errorImageColor}`}`} opacity-70>
              Arraste ou click
            </p>
          </p>
        )}
      </Label>
      <Input className="hidden" {...getInputProps()} />
    </div>
  );
};

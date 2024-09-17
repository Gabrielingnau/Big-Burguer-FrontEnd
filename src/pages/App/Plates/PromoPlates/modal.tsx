import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { errorColor } from '@/lib/utils/error-color';
import { zodResolver } from '@hookform/resolvers/zod';

import { PreviewImage, filesError } from '../ModalCreatePlates/preview-image';

const formSchema = z.object({
  name: z.string().min(1, 'Informe o nome da promoção'),
  description: z.string().min(1, 'Informe uma descrição para a promoção'),
});

type FormSchema = z.infer<typeof formSchema>;

let errorImageColor: string = 'muted-foreground';

export function ModalPromo() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  async function handleCreateModal(data: FormSchema) {
    try {
      if (!filesError) {
        errorImageColor = errorColor;
        return;
      }
      Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value === '' ? undefined : value]));

      toast.success('Promoção criada com sucesso');
      setValue('name', '');
    } catch (error) {
      toast.error('Erro ao criar a promoção');
    }
  }

  return (
    <DialogContent className="w-[30rem] p-6">
      <DialogHeader>
        <DialogTitle>Crie sua promoção</DialogTitle>
        <DialogDescription>Preencha os campos obrigatórios para criar a promoção.</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleCreateModal)} className="flex w-[26.938rem] flex-col gap-5">
        <div className="h-[9rem] w-full">
          <PreviewImage errorImageColor={errorImageColor} title="Imagem da promoção" borderSize="border-[0.2rem]" />
        </div>

        <div className="space-y-1">
          <Label className={`${errors.name?.message && `text-${errorColor}`}`} htmlFor="name">
            Nome da promoção
          </Label>
          <Input placeholder='Essa nome vai aparecer na notificação do client' id="name" type="text" {...register('name')} />
          {errors.name?.message && <p className={`text-sm text-${errorColor}`}>{errors.name?.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={`${errors.description?.message && `text-${errorColor}`}`} htmlFor="description">
            Descrição da promoção
          </Label>
          <Input placeholder='Essa descrição vai aparecer na notificação do client' id="description" type="text" {...register('description')} />
          {errors.description?.message && <p className={`text-sm text-${errorColor}`}>{errors.description?.message}</p>}
        </div>

        <Button disabled={isSubmitting} className="mt-4 w-full" type="submit">
          Criar promoção
        </Button>
      </form>
    </DialogContent>
  );
}

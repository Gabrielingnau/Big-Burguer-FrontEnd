import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { errorColor } from '@/lib/utils/error-color';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(1, 'Informe o nome do funcionário'),
  email: z.string().min(1, 'Informe o email do funcionário').email('E-mail invalido'),
  password: z.string().min(6, 'Inform'),
  select: z.enum(['cashier', 'deliveryman'], {
    required_error: 'Selecione uma função',
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export function Modal() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  async function handleHireEmployee(data: FormSchema) {
    try {
      Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value === '' ? undefined : value]));

      toast.success('Funcionário cadastrado com secesso', {
        description: 'Agora o Gabriel faz parte da sua empresa',
      });
      setValue('name', '');
      setValue('email', '');
      setValue('password', '');
    } catch (error) {
      toast.error('Erro ao contratar o funcionário');
    }
  }

  return (
    <DialogContent className="w-[30rem] p-6">
      <DialogHeader>
        <DialogTitle>Quem você gostaria de contratar?</DialogTitle>
        <DialogDescription>
          Preencha os campos com um "Nome", "E-mail" e "Senha" de um usuario que já esta cadastrado no aplicativo do
          restaurante, e escolha para qual função você gostaria de contratalo.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleHireEmployee)} className="flex w-[26.938rem] flex-col gap-5">
        <div className="space-y-1">
          <Label className={`${errors.name?.message && `text-${errorColor}`}`} htmlFor="name">
            Nome do funcionário
          </Label>
          <Input placeholder="Ex: Gabriel Lingnau" id="name" type="text" {...register('name')} />
          {errors.name?.message && <p className={`text-sm text-${errorColor}`}>{errors.name?.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={`${errors.email?.message && `text-${errorColor}`}`} htmlFor="email">
            E-mail do funcionário
          </Label>
          <Input placeholder="Ex: gabriel@gmail.com" id="email" type="text" {...register('email')} />
          {errors.email?.message && <p className={`text-sm text-${errorColor}`}>{errors.email?.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={`${errors.password?.message && `text-${errorColor}`}`} htmlFor="password">
            Senha do funcionário
          </Label>
          <Input placeholder="Ex: Gabriel123456" id="password" type="text" {...register('password')} />
          {errors.password?.message && <p className={`text-sm text-${errorColor}`}>{errors.password?.message}</p>}
        </div>

        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <div>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="h-8 w-[11.25rem] space-x-2">
                  {!field.value && <p className="text-sm">Função</p>}
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cashier">Caixa</SelectItem>
                  <SelectItem value="deliveryman">Entregador</SelectItem>
                </SelectContent>
              </Select>
              {errors.select?.message && <p className={`text-sm text-${errorColor}`}>{errors.select?.message}</p>}
            </div>
          )}
        />

        <Button disabled={isSubmitting} className="mt-4 w-full" type="submit">
          Contratar
        </Button>
      </form>
    </DialogContent>
  );
}

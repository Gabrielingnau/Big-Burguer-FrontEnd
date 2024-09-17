import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { ModalPromo } from './modal';

export function PromoPLates() {
  return (
    <Card className="flex h-[20rem]">
      {/* <div className="flex h-[20rem] w-[14rem] flex-col items-center justify-between space-y-4 p-5">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-center text-lg font-medium">Big Triplo X</h1>
          <p className="text-sm text-center text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipidfd dfdfdfdf dfdfdfdf fgvbtdh bhgfk ghjmc.
          </p>
        </div>
        <div className="flex flex-col w-full items-center space-y-2">
          <Button className="w-full">Editar Promoção</Button>
          <Button variant="destructive" className="w-full">
            Excluir Promoção
          </Button>
        </div>
      </div>

      <Separator orientation="vertical" className="h-[20rem]" /> */}

      <div className="h-[20rem] w-full">
        <Dialog>
          <DialogTrigger className='h-full w-full'>
            <Button variant="ghost" className="h-full w-full flex-col space-y-3">
              <h1 className="text-center text-lg font-medium">Clique aqui para adicionar uma promoção</h1>
              <p className="max-w-[50%] whitespace-pre-wrap text-center text-muted-foreground">
                Ao clicar você poderá adicionar uma foto com os detalhes da promoção que será exibida no aplicativo do
                restaurante. Além de poder colocar um titulo e uma descrição para, á notificação da promoção.
              </p>
            </Button>
          </DialogTrigger>
          <ModalPromo />
        </Dialog>
        {/* <PreviewImage size={7} textSize="1rem" title="Imagem da Promoção" /> */}
      </div>
    </Card>
  );
}

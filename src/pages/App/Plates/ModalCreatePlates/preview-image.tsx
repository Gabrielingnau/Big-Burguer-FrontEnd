import { X, Download } from 'lucide-react';
import { useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { errorColor } from '@/lib/utils/error-color';

interface File extends FileWithPath {
  preview: string;
}

interface PreviewImageProps {
  title: string;
  size?: number;
  textSize?: string;
  borderSize?: string;
  errorImageColor: string;
}

export let filesError: File[] | null | undefined = null;

export function PreviewImage({ title, size, textSize, borderSize, errorImageColor }: PreviewImageProps) {
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
    <div
      {...getRootProps()}
      className={`relative h-full w-full items-center gap-4 rounded-[6px] ${!files && `${borderSize} border-dashed border-${errorImageColor} ${isDragActive && `border-ring`}`}`}
    >
      <label
        htmlFor="image"
        tabIndex={0}
        className={`flex h-full w-full cursor-pointer items-center justify-center rounded-[6px] bg-muted transition-all ${!files && `hover:opacity-70`}`}
      >
        {files ? (
          files?.map((file) => {
            return (
              <div key={file.name} className="h-full w-full">
                <img
                  key={file.path}
                  src={file.preview}
                  alt="Imagem do prato"
                  className={`h-full w-full rounded-[6px] object-cover`}
                />
                <Button
                  className="absolute right-0 top-0 z-50 m-1 h-6 w-6 rounded-[50%] p-0"
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
            className={`flex flex-col items-center justify-center gap-2 p-2 text-center ${textSize ? `text-[${textSize}]` : `text-xs`} ${errorImageColor === errorColor && `text-${errorImageColor}`} ${isDragActive && `text-ring`}`}
          >
            <Download className={`mb-1 ${isDragActive && `color-ring`} ${size ? `h-${size} w-${size}` : `h-5 w-5`}`} />{' '}
            {title}
            <p className={`${isDragActive ? `text-ring` : `text-${errorImageColor}`}`} opacity-70>
              Arraste ou clique
            </p>
          </p>
        )}
      </label>
      <Input className="hidden" {...getInputProps()} />
    </div>
  );
}

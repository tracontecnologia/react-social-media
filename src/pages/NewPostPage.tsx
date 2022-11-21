import { Button, FileInput, Navbar, Textarea } from '../components';

export function NewPostPage() {
  return (
    <>
      <Navbar
        links={[
          { label: 'Início', href: '/' },
          { label: 'Explorar', href: '/explorar' },
        ]}
      />
      <div className="w-full max-w-5xl m-auto py-12 flex flex-col gap-2">
        <FileInput label="Fotos" name="photo" id="photo" />
        <Textarea
          label="Descrição"
          name="description"
          id="description"
          placeholder="Descreva sua foto aqui"
        />
        <div>
          <Button>Salvar</Button>
        </div>
      </div>
    </>
  );
}

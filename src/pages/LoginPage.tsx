import { Navbar, Logo, NavbarLinks, Button, Input } from 'components';

export function LoginPage() {
  return (
    <>
      <Navbar>
        <Logo />

        <div className="flex items-center justify-center gap-4">
          <NavbarLinks
            items={[
              { label: 'Início', href: '/' },
              { label: 'Explorar', href: '/explorar' },
              { label: 'Entrar', href: '/entrar' },
            ]}
          />
          <Button>Criar nova conta</Button>
        </div>
      </Navbar>

      <div className="w-full max-w-lg m-auto h-[calc(100vh-80px)] flex flex-col items-start justify-center gap-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-lg mb-4">
          Acesse sua conta e compartilhe seu mundo!
        </p>
        <Input type="email" name="email" id="email" placeholder="E-mail" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
        <Button className="w-full">Conectar</Button>
        <p className="text-lg w-full text-center mt-4">
          Ainda não tem conta?{' '}
          <a href="/cadastrar" className="text-brandPrimary/500 font-bold">
            Criar nova conta
          </a>
          .
        </p>
      </div>
    </>
  );
}

import { Typography } from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';

interface LoginLinksProps {
  mode: 'tienda' | 'cliente';
}

export const LoginLinks: FC<LoginLinksProps> = ({ mode }) => {
  return mode === 'cliente' ? (
    <>
      <Typography variant="body1">
        ¿No tienes cuenta?{' '}
        <span
          style={{
            color: 'red',
          }}
        >
          <NextLink href={`/auth/${mode}/register`}>
            <a
              style={{
                color: '#666CFF',
              }}
            >
              Regístrate
            </a>
          </NextLink>
        </span>
      </Typography>
      <Typography variant="body1">
        ¿Tienes una tienda?{' '}
        <span
          style={{
            color: 'red',
          }}
        >
          <NextLink href={`/auth/tienda/login`}>
            <a
              style={{
                color: '#666CFF',
              }}
            >
              Inicia sesión
            </a>
          </NextLink>
        </span>
      </Typography>
    </>
  ) : (
    <>
      <Typography variant="body1">
        ¿No tienes cuenta?{' '}
        <span
          style={{
            color: 'red',
          }}
        >
          <NextLink href={`/auth/${mode}/register`}>
            <a
              style={{
                color: '#666CFF',
              }}
            >
              Regístrate
            </a>
          </NextLink>
        </span>
      </Typography>
      <Typography variant="body1">
        ¿Eres cliente?{' '}
        <span
          style={{
            color: 'red',
          }}
        >
          <NextLink href={`/auth/cliente/login`}>
            <a
              style={{
                color: '#666CFF',
              }}
            >
              Inicia sesión
            </a>
          </NextLink>
        </span>
      </Typography>
    </>
  );
};

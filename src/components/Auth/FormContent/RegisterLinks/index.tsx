import { Typography } from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';

interface RegisterLinksProps {
  mode: 'tienda' | 'cliente';
}

export const RegisterLinks: FC<RegisterLinksProps> = ({ mode }) => {
  return mode === 'cliente' ? (
    <>
      <Typography variant="body1">
        ¿Ya tienes cuenta?{' '}
        <span
          style={{
            color: 'red',
          }}
        >
          <NextLink href={`/auth/${mode}/login`}>
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
      <Typography variant="body1">
        ¿Tienes una tienda?{' '}
        <NextLink href="/auth/tienda/register">
          <a
            style={{
              color: '#666CFF',
            }}
          >
            Regístrala
          </a>
        </NextLink>
      </Typography>
    </>
  ) : (
    <>
      <Typography variant="body1">
        ¿Ya tienes cuenta?{' '}
        <span
          style={{
            color: 'red',
          }}
        >
          <NextLink href={`/auth/${mode}/login`}>
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
      <Typography variant="body1">
        ¿Eres cliente?{' '}
        <NextLink href="/auth/cliente/register">
          <a
            style={{
              color: '#666CFF',
            }}
          >
            Regístrate
          </a>
        </NextLink>
      </Typography>
    </>
  );
};

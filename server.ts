import express from 'express';
import { APP_BASE_HREF } from '@angular/common';
import { join } from 'path';
import bootstrap from './src/main.server'; // Importa el bootstrap predeterminado

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/red-social-universitaria/browser');
  const indexHtml = 'index.html';

  // Sirve archivos estáticos desde la carpeta del cliente
  server.use(express.static(distFolder));

  // Ruta de renderizado SSR
  server.get('*', async (req, res) => {
    try {
      // Ejecuta la función bootstrap para renderizar la aplicación
      const html = await bootstrap();
      res.send(html);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });

  return server;
}

// Arranca el servidor
function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();

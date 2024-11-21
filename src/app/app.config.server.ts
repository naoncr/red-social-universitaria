import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';


export const config = {
  providers: [
    ...appConfig.providers,
    provideServerRendering(),
  ],
};

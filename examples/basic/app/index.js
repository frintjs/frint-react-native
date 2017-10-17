import { createApp } from 'frint';

import Root from '../components/Root';

export default createApp({
  name: 'ReactNativeProject',
  providers: [
    {
      name: 'component',
      useValue: Root,
    }
  ],
});

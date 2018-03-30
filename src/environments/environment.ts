// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
        apiKey: 'AIzaSyBru0h0_vsZT8C-VdqZrzoCHP1A3g17p_M',
        authDomain: 'fireapp-4693f.firebaseapp.com',
        databaseURL: 'https://fireapp-4693f.firebaseio.com',
        projectId: 'fireapp-4693f',
        storageBucket: 'fireapp-4693f.appspot.com',
        messagingSenderId: '1077640845523'
  }
};

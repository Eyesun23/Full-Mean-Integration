## Dependencies

* cd Application
* npm install *** server dependencies ***
* cd public
* npm install *** angular dependencies ***

## Starting Server
* npm run start (from Application directory)
Open a different terminal
* ng build -w (from public directory)

## PROJECT FOLDER OVERVIEW
**Note: In the output below, I use <> to let you know it's a directory.**

# Application Root Directory
```terminal
Application
├── <config>             // THIS IS WHERE WE CODE
│     ├── db.js          // db connect & configuration
│     └── routes.js      // We specify routes, import controllers
├── <controllers>        // THIS IS WHERE WE CODE
│     └── users.js       // Example controller, import model
├── <models>             // THIS IS WHERE WE CODE
│     └── user.js        // Example model file, define schema
├── <node_modules>       // Angular configurations
├── <public>             // Root Angular (look below for full breakdown)
├── package.json         // Dependency Configurations
└── server.js            // Main Server File
```
## Root Angular Directory

```terminal
public
├── <e2e>              // End To End testing
├── <node_modules>
├── <src>              // THIS IS WHERE WE CODE
├── .angular-cli.json  // Angular configurations
├── .editorconfig      // Editor Configurations
├── .gitignore         // Git Configurations
├── Karma.conf.js      // Testing Configurations
├── package.json       // Dependency Configurations
├── protractor.conf.js // Testing Configurations
├── README.md          // Documentation
├── tsconfig.json      // TypeScript Configurations
└── tslint.json        // Code Style Configurations
```

Taking a look at the list above, you can see that most of the files at the root of your project deal with development environment configurations. For the most part, you will not have to modify these files, as Angular has done a really good job of creating default configurations for your app.

## src
The configuration files in the root of your project are for your development environment, this folder contains a lot of files dealing with the configuration of your actual project. This is also where the app folder is located, that folder will contain all of the application logic.

```terminal
src
├── <app>              // THIS IS WHERE WE CODE
├── <assets>           // App images or CSS libraries
├── <environments>     // Environment Configurations
├── favicon.ico        // Browser Tab Icon
├── index.html         // Main HTML FILE
├── main.ts            // Main TS FILE
├── polyfills.ts       // Browser Compatibility
├── styles.css         // Main CSS FILE
├── test.ts            // Testing Configurations
├── tsconfig.app.json  // TypeScript Configuration (app)
├── tsconfig.spec.json // TypeScript Configurations (test)
└── typings.d.ts       // TypeScript Configurations (types)
```

We have a lot of files generated in this folder but they're only a couple we should be worried about at the moment.

#### index.html
This is the template HTML file where all of your Angular Component will eventually be loaded into. If you take a look inside, for the most part, it's a pretty basic HTML file.

This is where the root of our Components will be added, so anything we add to this file will appear on every page of our Application.

```html
<app-root>Loading...</app-root>
```

The `<app-root>` component is defined in __src/app/ap.component.ts__ and the "Loading..." is a placeholder that shows while the app is being loaded to the DOM.

#### styles.css
This is the first css file that is loaded into your application, making it a good place to define css that will scope your entire app, like a theme for example.

#### main.ts
You will not be modifying this file often but it's good that you know about it. This is the file that is in charge of importing your `app` component and rendering it to the browser.

## app
Finally, we make it to the app folder, this is where all of your different components will be stored. Angular creates the app component and app module automatically.

```terminal
app
├── app.component.css      // App Component CSS
├── app.component.html     // App Component HTML
├── app.component.spec.ts  // App Component Test
├── app.component.ts       // App Component TS
└── app.module.ts          // The Root Module
```

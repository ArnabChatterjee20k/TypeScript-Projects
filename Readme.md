# Setting Up TS project

## With vite

Just create a new vanilla ts project

## Manually

### Generating TypeScript Config files

`tsc --init`

or

`npx tsc --init`

### Change the output of TS to specific folder

- Find the outdir in the ts config and change it to "./dest" to compile the ts to js scripts and save their

- Otherwise the .js equivalent will be generated in the same folder as that of .ts

### Running tsc

`tsc`

### Running tsc in watch mode

It will autmatically converts the .ts to .js
`tsc --watch`

### Changing module system to es6

Change module to "ES6" in tsconfig

# Types for libraries

Some of the libraries like uuid dont provide types by default. Either download it or write your own
You can download them by hovering around the import

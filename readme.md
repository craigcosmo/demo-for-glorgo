## Stack

React, Redux, Rxjs, CSS-Modules, SASS and Webpack

## Installation

Install `npm` and `nodejs` if you haven't.

Then run the follwoing command

```sh
npm i
```

```sh
npm run build
```

## Usage

```sh
npm run dev
```

## Test

```sh
npm run test
```

## To release for production

```sh
npm run release
```

Built files are stor in `dist/production`

## What happen when build

Build/Release command will generates files like bundle.js, bundle.css, index.html and assets. Those are store in `dist` folder ready to be shipped.

CSS tag and JS tag are auto inserted into final index.html


## Folder structure 


`app` contains components and logic

`dist` contains the code that is ready to ship

`node_modules` open source libraries/dependcies that we need to use in the app

`spec` this we where we put our test code in.

## Golbal CSS Rules

Ex:
```scss
<!-- multiline -->
:global { 
	.box{
		color:red;
		font-size:15px;
	}
	.wrapper{color:blue}
}
```

```scss
<!-- single line -->
:global .box{
	color:red;
	font-size:15px
}
```

CSS file will name will have `.scss` extension

## How to create a component?

Let's say you want to create a register form component, here is how you do it

`Register.js`

```
import React from 'react'
import './register.scss'
export default class Register extends React.Component {
	render() {
		return (
			<div className="register">
				<input type="text" name="username"  />
			</div>
		)
  }
}
```


## Naming

Component file names will start with capitalized letter and then fowllow with cammel case rule. Component file extension is `.js`

Ex: `Register.js`

Component class name start with capitalized letter and then fowllow with cammel case rule

Ex: `class Register extends React.Component{}`

CSS file names are lowercased and follow cammel case rule, file extension will be `.scss` whether the content is sass or just css

Ex: `register.scss`

CSS class selectors are lowercased connected with hyphen 

Ex: `.box-wrapper{ color: blue}`

Folder names follow cammel case rule

Ex: `homeFolder`

Asset like images and fonts follow cammel case rule

Ex: `yellowBackground.png`


## How add image asset to project?

Paste your images into `app/image` folder

## How to import a file or module into your code?

This file system basically allow to import files or modules by just doing like so

`import React from 'react'`
`import Header from 'Header'`

As you can see there's is no path, just file name. 

To use this system your file name should be uniqe.

There is case you have two file in your app with the same name, you can import them like this

`import Header from 'userAccountFolder/Header'`

`import Header from 'adminfolder/Header'`

Just add the parent folder name before your file 

If you have mistakenly imported two files with the same name. Webpack build system will notify you in the console.

## Support

If you have problem running this app, let me know via my email  craigcosmo@gmail.com

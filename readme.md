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

## Test Component

```sh
npm run test
```

## Unit Test

```sh
npm run utest
```

## To release for production

```sh
npm run release
```

Built files are stored in `dist/production`

## What happen when build?

Build/Release command will generates files like bundle.js, bundle.css, index.html and assets. Those are store in `dist` folder.

## Folder structure 


`app` contains components, helpers and logics

`dist` contains the code that is ready to ship

`node_modules` open source libraries/dependcies that we need to use in the app

`spec` this is where we put our component test code

`test` this is where we put our unit test code

## To use CSS module

Css files should have `.scss` extension

**LoginComponet.js**
```
import React from 'react'
import './loginComponent.scss'

export default class loginComponent extends React.Component {
	render() {
		return (
			<div styleName="register">
				<div styleName="button"></div>
			</div>
		)
	}
}
```

**loginComponent.scss**

```scss
.register{

}
.button{

}
```

## How to make some rules global?

**ContainerComponent.js**

```
import React from 'react'
import './global.scss'

export default class loginComponent extends React.Component {
	render() {
		return (
			<div className="register">
				<div className="button"></div>
			</div>
		)
	}
}
```

Notice the `className` instead of `styleName`?

**global.scss**

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

For more detail about how to use this kind of CSS module please visit this [https://github.com/gajus/babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)

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

## How to import a file or module into your code?

This file system basically allow to import files or modules by just doing like so

`import React from 'react'`
`import Header from 'Header'`

There's is no path, just file name. 

To use this system your file name should be uniqe.

There is case you have two files in your app with the same name, you can import them like this

**Register.js**

```js
import Header from 'userAccountFolder/Header'
```

**Acount.js**

```js
import Header from 'adminfolder/Header'
```

Just add the parent folder name before your file 

If you have mistakenly imported two files with the same name some where in the project. Webpack's build system will notify you in the console.

However this pattern doesn't stop you from importing module the normal way. Can always do like this

```js
import Header from '../../../../../userAccountFolder/Header'
```

or like this

```js
import Header from 'app/component/smallCompoent/sub/shared/userAccountFolder/Header'
```


## Support

If you have problem running this app, let me know via my email  craigcosmo@gmail.com

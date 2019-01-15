# vueapp01-quickstart

> A Vue.js quickstart project based on the following medium blog article https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2

## Tutorial
To start a new project, start it with the vue-cli!

``` bash
npm install -g vue-cli
vue init webpack vueapp01-quickstart

```
> There are lots of different options available like
linting and unit tests/e2e tests. Typically just click through these but think
they are useful in the future

Then can navigate into the code and start the dev server with:
``` bash
npm run dev
```

The code for this project is going to cover three pieces of functionality:
- Loops in Vue.js
- Binding data
- Inputs
- Button classes and HTML formatting

The first piece is a loop, this requires the `v-for` directive and new html
div, ul, li and a change to the data element of the vue component.

I just added a new div element below the main hello world text which
looked like this:

```
<div>
  <ul>
    <div v-for="user in users" :key="user.id">
      <li>{{ user.firstName }}</li>
    </div>
  </ul>
</div>
```

I then added the following to the vue component:

```
 data () {
   ...
   users: [
    {id: 1, firstName: 'Dan'},
    {id: 2, firstName: 'Anan'}
   ],
   ...
 }
```

Next was the `v-model` and `v-text` to do a two way data binding for the
frontend data changes. To do this I created another div element and another
change to the vue data component:

```
...
<div>
  <input type="text" v-model="input_val">
<div>
<div>
  Input value: <span v-text="input_val"></span>
</div>
...
data () {
  ...
  input_val: '',
  ...
}

```

The last piece is the button clicking! This is done via a `v-on:click` a
`button` html element and another attribute of the vue data component:
```
<button class="btn btn-primary" v-on:click="counter++">You've clicked this
  button {{ counter }} times!
</button>
...
data () {
  return {
    msg: 'Welcome to Your Vue.js App',
    users: [
      {id: 1, firstName: 'Dan', lastName: 'L'},
      {id: 2, firstName: 'Anan', lastName: 'L'}
    ],
    input_val: '',
    counter: 0
  }
}

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# ninja-vue3-firebabase

This is a repo for the course [Build Websites with Vue 3 and Firebase](https://netninja.dev/p/build-websites-with-vue-3-firebase)

## Author sources

[Course Github](https://github.com/iamshaunjp/vue-3-firebase)

[All Author courses](https://netninja.dev/)

[Youtube channel](https://www.youtube.com/@NetNinja)

## Vue Docs
http://v3.vuejs.org/guide/introduction.html

## Misc

### Attributes in Vue
`data-v-app` - an attribute that is assinged by Vue for root element of an application

`v-on` - for events, e.g. `v-on:click="callback"`. Syn. `@:click`

`v-if` - conditional rendering, e.g. `v-if="isVisible"`

`v-else` - conditianal rendering, can be used after `v-if`

`v-for` - iteration, e.g. `v-for="item in array"`

`v-show` - shows/hides the element by `display` style

`v-bind:href` - bind the href attribute. Syn. `:href=""`

`v-bind:class` - bind the class, e.g. `v-bind:class="{ someClass: condition }"`

### Events, misc
To pass additional arguments to event handler we use `$event`, e.g. `v-on:mouseover="handleEvent($event, 'test')"`

### Mouse events in Vue
- @:mouseover
- @:mouseleave
- @:dblclick
- @:mousemove

### Related Abbriviations
`CLI` - Command Line Interface

# Style Guide

## Linter Overview

We use StandardJS wholesale. For a quick overview of the style guide rules, see this: [https://standardjs.com/rules.html](https://standardjs.com/rules.html)

We do not deviate from their rule set: [(https://standardjs.com/index.html#i-disagree-with-rule-x-can-you-change-it)](https://standardjs.com/index.html#i-disagree-with-rule-x-can-you-change-it)

Whenever possible, the the linter will error (and break the build) if you have a linter violation.

Additionally we adopt a few additional linter rules:

 - [you-dont-need-lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore): Warns when there is an ES5/6 equivalent to the lodash method you're using
 - we allow [labelled loops](https://eslint.org/docs/rules/no-labels) *deprecated*
 - we disallow [yoda conditionals](https://eslint.org/docs/rules/yoda)
 - we disallow [lonely ifs](https://eslint.org/docs/rules/no-lonely-if)

## Naming and using components

### Naming Files:
Use Pascal case.

Good:
``` js
MyComponent.vue
Sentry.js
```

Bad:
``` js
myComponent.vue
sentry.js
```

If the component is a system wide, reusable component (like snDataTable), append lowercase sn to the component name.

Good:
``` js
snReusableComponent.vue
```

Bad:
``` js
ReusableComponent.vue
```

### Importing Files
Import using the same name as the file name.

Good:
``` js
import MyComponent from '~/components/MyComponent'
import snDataTable from '~/components/snDataTable'
```

Bad:
``` js
import AGreatComponent from '~/components/MyComponent'
import SnDataTable from '~/components/snDataTable'
```

Do not include the file extension when importing.

Good:
``` js
import MyComponent from '~/components/MyComponent'
import ArbitraryFilename from '~/util/ArbitraryFileName'
```

Bad:
``` js
import MyComponent from '~/components/MyComponent.vue'
import ArbitraryFilename from '~/util/ArbitraryFileName.js'
```

### Naming Components
Components must be named. The name should be the same thing as the file name (without the extension)

Good:
```js
/* MyComponent.vue */
export default {
  name: 'MyComponent'
  ...
}
```

Bad:
```js
/* MyComponent.vue */
export default {
  name: 'my-component'
  ...
}
```

### Registering Components
Do not give components a custom name when registering them.

Good:
``` js
components: {
  snDataTable,
  LoanMilestones
}
```

Bad:
``` js
components: {
  'sn-data-table': snDataTable,
  'myLoanMilestones': LoanMilestones
}
```

### Using components in templates
Use Pascal case for tag name.

Good:
``` html
<MyComponent/>
```

Bad:
``` html
<my-component/>
```

If the component is a system-wide, reusable component (like snDataTable), or comes from an external library (like Vuetify), use kabab-case.

Good:
``` html
<sn-data-table/>
<v-autocomplete/>
```

Bad:
``` html
<SnDataTable/>
<VAutocomplete/>
```

## Naming and using mixins

### Naming Mixins
Mixins must have "Mixin" in the name.

Good:
```
MyTestMixin.js
```

Bad:
```
MyTest.js
```

### Scoping
All methods and data in a mixin should have a prefix of `$_$MIXIN_NAME$_`. (see https://vuejs.org/v2/style-guide/#Private-property-names-essential)

Good:
``` js
/* MyTestMixin.js */
var MyTestMixin = {
  // ...
  methods: {
    $_MyTestMixin_update () {
      // ...
    }
  }
}
```

Bad:
``` js
/* MyTestMixin.js */
var MyTestMixin = {
  // ...
  methods: {
    update () {
      // ...
    }
  }
}
```

``` js
/* MyTestMixin.js */
var MyTestMixin = {
  // ...
  methods: {
    _update () {
      // ...
    }
  }
}
```

``` js
/* MyTestMixin.js */
var MyTestMixin = {
  // ...
  methods: {
    $update () {
      // ...
    }
  }
}
```

``` js
/* MyTestMixin.js */
var MyTestMixin = {
  // ...
  methods: {
    $_update () {
      // ...
    }
  }
}
```

## Folder structure
All Vue related files are located in `/app/javascript/..`
```
-- app/javascript/
-- -- assets/
-- -- components/
-- -- packs/
-- -- plugins/
-- -- services/
-- -- store/
-- -- tests/
-- -- util/
```

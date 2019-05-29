# Icons

Our custom icon set is a subset of [Linearicons](https://linearicons.com/) with a few custom icons that serve specific needs in our application. We use [IcoMoon](https://icomoon.io/) to package the icons into a font, which is then exported and built into the application.

## Icon library

<Icons-Demo/>

## Using custom icons

Vuetify by default uses the official [Google Material Icons](https://material.io/tools/icons/?style=baseline), but it also has the ability to use a custom icon library, or for you to [define your own icon set](https://vuetifyjs.com/en/framework/icons#using-custom-icons). When Vuetify is attached the main Vue instance, we pass in an object of icon names which allows us to use `v-icon` with our custom fonts.

Using `v-icon` with a custom icon is incredibly simple. For example, if you wanted to use the `sn-star` icon, here's the markup you'd need:

```html
<v-icon>
  {{ $vuetify.icons['sn-icon-star'] }}
</v-icon>
```

To use a custom icon, you must pass the value in with `v-html` or `v-text`. Simply passing the value in as a slot like `v-icon` normally works will not work.

## Updating the icon set

Because Vuetify needs to know about the custom icon set when the Vue instance is instanciated, we have to do a little bit of scripting to make things work dynamically. This process is somewhat involved, but shouldn't need to be done very often.

UX will export a .zip file from IcoMoon that contains all the files we need. The zip folder will be structured like this:

```
SimpleNexusIcons/
-- selection.json
-- demo.html
-- style.css
-- Read Me.txt
-- demo-files/
-- fonts/
-- -- SimpleNexusIcons.svg
-- -- SimpleNexusIcons.eot
-- -- SimpleNexusIcons.woff
-- -- SimpleNexusIcons.ttf
```

All we need from this is the `selection.json`, `style.css`, and the four files in the `fonts/` directory.

- Rename `style.css` to `snIcons.css`.
- In `snIcons.css` in the `src` declarations at the top add `../` to the `url('...')` attributes so that the pathing will be correct.
- Manually replace the following files in the app with these new files:

```
-- app/javascript/
-- -- assets/
-- -- -- css/
-- -- -- -- snIcons.css
-- -- -- fonts/
-- -- -- -- SimpleNexusIcons.svg
-- -- -- -- SimpleNexusIcons.eot
-- -- -- -- SimpleNexusIcons.woff
-- -- -- -- SimpleNexusIcons.ttf
-- -- util/
-- -- -- icons/
-- -- -- -- selection.json
```

- You may have to run `rm -rf node_modules/.cache/hard-source/` from the root of the Rails project if things don't work the first time.

Once those files are in place, you can restart the server and the new icons will be ready to be used!
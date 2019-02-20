(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{290:function(e,t,s){"use strict";s.r(t);var n=s(37),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"icons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icons","aria-hidden":"true"}},[e._v("#")]),e._v(" Icons")]),e._v(" "),s("p",[e._v("Our custom icon set is a subset of "),s("a",{attrs:{href:"https://linearicons.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linearicons"),s("OutboundLink")],1),e._v(" with a few custom icons that serve specific needs in our application. We use "),s("a",{attrs:{href:"https://icomoon.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IcoMoon"),s("OutboundLink")],1),e._v(" to package the icons into a font, which is then exported and built into the application.")]),e._v(" "),s("h2",{attrs:{id:"icon-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icon-library","aria-hidden":"true"}},[e._v("#")]),e._v(" Icon library")]),e._v(" "),s("Icons-Demo"),e._v(" "),s("h2",{attrs:{id:"using-custom-icons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-custom-icons","aria-hidden":"true"}},[e._v("#")]),e._v(" Using custom icons")]),e._v(" "),s("p",[e._v("Vuetify by default uses the official "),s("a",{attrs:{href:"https://material.io/tools/icons/?style=baseline",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Material Icons"),s("OutboundLink")],1),e._v(", but it also has the ability to use a custom icon library, or for you to "),s("a",{attrs:{href:"https://vuetifyjs.com/en/framework/icons#using-custom-icons",target:"_blank",rel:"noopener noreferrer"}},[e._v("define your own icon set"),s("OutboundLink")],1),e._v(". When Vuetify is attached the main Vue instance, we pass in an object of icon names which allows us to use "),s("code",[e._v("v-icon")]),e._v(" with our custom fonts.")]),e._v(" "),s("p",[e._v("Using "),s("code",[e._v("v-icon")]),e._v(" with a custom icon is incredibly simple. For example, if you wanted to use the "),s("code",[e._v("sn-star")]),e._v(" icon, here's the markup you'd need:")]),e._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("v-icon")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("v-html")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")]),e._v("$vuetify.icons.sn-star"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),s("p",[e._v("To use a custom icon, you must pass the value in with "),s("code",[e._v("v-html")]),e._v(" or "),s("code",[e._v("v-text")]),e._v(". Simply passing the value in as a slot like "),s("code",[e._v("v-icon")]),e._v(" normally works will not work.")]),e._v(" "),s("h2",{attrs:{id:"updating-the-icon-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-icon-set","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating the icon set")]),e._v(" "),s("p",[e._v("Because Vuetify needs to know about the custom icon set when the Vue instance is instanciated, we have to do a little bit of scripting to make things work dynamically. This process is somewhat involved, but shouldn't need to be done very often.")]),e._v(" "),s("p",[e._v("UX will export a .zip file from IcoMoon that contains all the files we need. The zip folder will be structured like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SimpleNexusIcons/\n-- selection.json\n-- demo.html\n-- style.css\n-- Read Me.txt\n-- demo-files/\n-- fonts/\n-- -- SimpleNexusIcons.svg\n-- -- SimpleNexusIcons.eot\n-- -- SimpleNexusIcons.woff\n-- -- SimpleNexusIcons.ttf\n")])])]),s("p",[e._v("All we need from this is the "),s("code",[e._v("selection.json")]),e._v(", "),s("code",[e._v("style.css")]),e._v(", and the four font files. Rename "),s("code",[e._v("style.css")]),e._v(" to "),s("code",[e._v("snIcons.css")]),e._v(", and then manually replace the following files in the app with these new files:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("-- app/javascript/\n-- -- assets/\n-- -- -- css/\n-- -- -- -- snIcons.css\n-- -- -- fonts/\n-- -- -- -- SimpleNexusIcons.svg\n-- -- -- -- SimpleNexusIcons.eot\n-- -- -- -- SimpleNexusIcons.woff\n-- -- -- -- SimpleNexusIcons.ttf\n-- -- util/\n-- -- -- icons/\n-- -- -- -- selection.json\n")])])]),s("p",[e._v("Once those files are in place, you can restart the server and the new icons will be ready to be used!")])],1)},[],!1,null,null,null);t.default=a.exports}}]);
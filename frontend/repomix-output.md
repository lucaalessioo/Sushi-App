This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
public/
  favicon.svg
  icons.svg
src/
  assets/
    hero.png
    react.svg
    vite.svg
  component/
    admin/
      AdminApp.jsx
      AdminLayout.jsx
      auth.js
      CodaOrdini.jsx
      DettaglioOrdineTavolo.jsx
      GestioneMenu.jsx
      LoginStaff.jsx
      PianoSala.jsx
    cucina/
      Cucina.jsx
      Cucinaapp.jsx
    Card.jsx
    Carrello.jsx
    HomePage.jsx
    LoginTablet.jsx
    MenuAll.jsx
    MenuCarta.jsx
    Recensione.jsx
  data/
    MockMenu.jsx
  hooks/
    usePiatti.js
  services/
    ordiniApi.js
    piattiApi.js
    websocket.js
  App.css
  App.jsx
  index.css
  main.jsx
.gitignore
eslint.config.js
index.html
package.json
README.md
repomix-output.xml
vite.config.js
```

# Files

## File: public/favicon.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
```

## File: public/icons.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
```

## File: src/assets/react.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

## File: src/assets/vite.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
```

## File: src/component/admin/AdminApp.jsx
```javascript
import { useState } from "react";
import LoginStaff from "./LoginStaff";
import AdminLayout from "./AdminLayout";
import PianoSala from "./PianoSala";
import CodaOrdini from "./CodaOrdini";
import GestioneMenu from "./GestioneMenu";
import DettaglioOrdineTavolo from "./DettaglioOrdineTavolo";
import { getUtente, clearSession } from "./auth";

export default function AdminApp()
{
  // Ripristina la sessione dopo un ricarico (se il token non è scaduto)
  const [utente, setUtente] = useState(() => getUtente());
  const [pagina, setPagina] = useState("piano-sala");

  if (!utente)
  {
    return <LoginStaff onLogin={(u) => setUtente(u)} />;
  }

  const logout = () =>
  {
    clearSession();
    setUtente(null);
  };

  const renderPagina = () =>
  {
    switch (pagina)
    {
      case "coda-ordini":
        return <CodaOrdini />;
      case "gestione-menu":
        return <GestioneMenu />;
      case "conto-tavolo":
        return <DettaglioOrdineTavolo />;
      case "piano-sala":
      default:
        return <PianoSala ruolo={utente.ruolo} />;
    }
  };

  return (
    <AdminLayout
      pagina={pagina}
      onNavigate={setPagina}
      onLogout={logout}
      utente={utente}
    >
      {renderPagina()}
    </AdminLayout>
  );
}
```

## File: src/component/admin/AdminLayout.jsx
```javascript
import { LayoutGrid, ChefHat, Soup, Receipt, LogOut } from "lucide-react";

const NAV_ITEMS = [
  { id: "piano-sala", label: "Piano sala", icon: LayoutGrid },
  { id: "coda-ordini", label: "Coda ordini", icon: ChefHat },
  { id: "gestione-menu", label: "Gestione menu", icon: Soup },
  { id: "conto-tavolo", label: "Conto tavolo", icon: Receipt },
];

export default function AdminLayout({ pagina, onNavigate, onLogout, utente, children })
{
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-60 shrink-0 bg-neutral-900 border-r border-neutral-800 flex flex-col py-6 px-3">
        <div className="flex items-center gap-3 px-2 mb-8">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
          </svg>
          <span className="hidden lg:block font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
          </span>
        </div>

        <nav className="flex-1 space-y-1.5">
          {NAV_ITEMS.map((item) =>
          {
            const Icon = item.icon;
            const isActive = pagina === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                title={item.label}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-sm font-semibold transition-colors cursor-pointer ${isActive
                    ? "bg-amber-400 text-neutral-950"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
                  }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="hidden lg:block">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-neutral-800 pt-4 px-1">
          {utente?.nome && (
            <p className="hidden lg:block text-xs text-neutral-500 mb-2 truncate">
              {utente.nome}
            </p>
          )}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-semibold text-neutral-400 hover:bg-neutral-800 hover:text-red-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="hidden lg:block">Esci</span>
          </button>
        </div>
      </aside>

      {/* Contenuto */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
```

## File: src/component/admin/auth.js
```javascript
// Gestione centralizzata di token JWT e utente loggato.
// Il token sta in localStorage, così sopravvive al ricarico della pagina.

const TOKEN_KEY = "token";
const USER_KEY = "utente";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export function salvaSessione(token, utente)
{
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(utente));
}

export function clearSession()
{
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// Legge la scadenza ("exp") dal payload del JWT, senza verificare la firma (lo fa il backend)
function tokenScaduto(token)
{
  try
  {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    return payload.exp ? payload.exp * 1000 < Date.now() : false;
  } catch
  {
    return true;
  }
}

// Ripristina la sessione al ricarico; se il token è scaduto la elimina
export function getUtente()
{
  const token = getToken();
  if (!token || tokenScaduto(token))
  {
    clearSession();
    return null;
  }
  try
  {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch
  {
    return null;
  }
}
```

## File: src/component/admin/CodaOrdini.jsx
```javascript
import { useState, useEffect, useCallback } from "react";
import { ChefHat, Clock, ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "admin:ordini";

const COLONNE = [
  { stato: "IN_INVIATO", label: "Nuovi ordini", accent: "border-amber-400/60", badge: "bg-amber-400/10 text-amber-400 border-amber-400/30" },
  { stato: "IN_PREPARAZIONE", label: "In preparazione", accent: "border-blue-500/50", badge: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  { stato: "SERVITO", label: "Serviti", accent: "border-green-500/50", badge: "bg-green-500/10 text-green-400 border-green-500/30" },
];

const PROSSIMO_STATO = { IN_INVIATO: "IN_PREPARAZIONE", IN_PREPARAZIONE: "SERVITO" };
const AZIONE_LABEL = { IN_INVIATO: "Inizia preparazione", IN_PREPARAZIONE: "Segna come servito" };

function minutiFa(dataOra, now)
{
  const diff = Math.max(0, Math.floor((now - new Date(dataOra).getTime()) / 60000));
  if (diff < 1) return "adesso";
  return `${diff} min fa`;
}

export default function CodaOrdini()
{
  const [ordini, setOrdini] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());

  useEffect(() =>
  {
    const tick = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() =>
  {
    let mounted = true;
    (async () =>
    {
      try
      {
        const res = await window.storage.get(STORAGE_KEY, true);
        if (mounted) setOrdini(res && res.value ? JSON.parse(res.value) : []);
      } catch (e)
      {
        if (mounted) setOrdini([]);
      } finally
      {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const persist = useCallback(async (next) =>
  {
    try
    {
      await window.storage.set(STORAGE_KEY, JSON.stringify(next), true);
    } catch (e)
    {
      console.error("Errore salvataggio ordini", e);
    }
  }, []);

  const avanzaStato = (id) =>
  {
    setOrdini((prev) =>
    {
      const next = prev.map((o) => o.id === id ? { ...o, stato: PROSSIMO_STATO[o.stato] || o.stato } : o);
      persist(next);
      return next;
    });
  };

  const generaOrdineDiProva = () =>
  {
    const numeroTavolo = Math.floor(Math.random() * 20) + 1;
    const esempi = [
      [{ nome: "Nigiri Salmone", quantita: 4 }, { nome: "Uramaki Ebi Tempura", quantita: 2 }],
      [{ nome: "Sashimi Misto", quantita: 1 }, { nome: "Gyoza", quantita: 3 }],
      [{ nome: "Ramen Miso", quantita: 1 }],
    ];
    const nuovo = {
      id: Date.now() + Math.random(),
      tavoloNumero: numeroTavolo,
      stato: "IN_INVIATO",
      dataOra: new Date().toISOString(),
      dettagli: esempi[Math.floor(Math.random() * esempi.length)],
    };
    setOrdini((prev) => { const next = [...prev, nuovo]; persist(next); return next; });
  };

  const attivi = ordini.filter((o) => o.stato !== "PAGATO");
  const nessunOrdine = !loading && attivi.length === 0;

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Coda ordini</h1>
            <p className="text-sm text-neutral-400 m-0">Vista cucina — aggiorna lo stato man mano che prepari</p>
          </div>
        </div>
        {attivi.length > 0 && (
          <span className="text-xs font-mono text-neutral-500">{attivi.length} ordini attivi</span>
        )}
      </div>

      {loading && (
        <p className="text-sm text-neutral-500 text-center py-16">Caricamento ordini...</p>
      )}

      {nessunOrdine && (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-20">
          <Sparkles className="w-8 h-8 text-neutral-700" />
          <p className="text-neutral-400 text-sm">Nessun ordine in coda al momento.</p>
          <button
            onClick={generaOrdineDiProva}
            className="text-xs font-semibold text-amber-400 border border-amber-400/30 bg-amber-400/10 px-4 py-2 rounded-full hover:bg-amber-400/20 transition-colors cursor-pointer"
          >
            Genera ordine di prova
          </button>
        </div>
      )}

      {!nessunOrdine && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COLONNE.map((col) =>
          {
            const ordiniColonna = attivi
              .filter((o) => o.stato === col.stato)
              .sort((a, b) => new Date(a.dataOra) - new Date(b.dataOra));

            return (
              <div key={col.stato} className="bg-neutral-950/50 border border-neutral-800 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-neutral-200">{col.label}</h2>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${col.badge}`}>
                    {ordiniColonna.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {ordiniColonna.length === 0 && (
                    <p className="text-xs text-neutral-600 text-center py-6">Nessun ordine qui</p>
                  )}

                  {ordiniColonna.map((o) => (
                    <div key={o.id} className={`bg-neutral-900 border-l-4 ${col.accent} border border-neutral-800 rounded-2xl p-4`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-neutral-100">Tavolo {o.tavoloNumero}</span>
                        <span className="flex items-center gap-1 text-[11px] text-neutral-500 font-mono">
                          <Clock className="w-3 h-3" /> {minutiFa(o.dataOra, now)}
                        </span>
                      </div>

                      <ul className="space-y-1 mb-3">
                        {o.dettagli.map((d, i) => (
                          <li key={i} className="text-xs text-neutral-300 flex justify-between">
                            <span>{d.nome}</span>
                            <span className="font-mono font-bold text-amber-400">x{d.quantita}</span>
                          </li>
                        ))}
                      </ul>

                      {PROSSIMO_STATO[o.stato] && (
                        <button
                          onClick={() => avanzaStato(o.id)}
                          className="w-full flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-amber-400 hover:text-neutral-950 text-neutral-200 text-xs font-bold py-2 rounded-xl transition-colors cursor-pointer"
                        >
                          {AZIONE_LABEL[o.stato]} <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
```

## File: src/component/admin/DettaglioOrdineTavolo.jsx
```javascript
import { useState, useEffect, useCallback } from "react";
import { Receipt, Wallet, CheckCircle2 } from "lucide-react";

const ORDINI_KEY = "admin:ordini";
const TAVOLI_KEY = "floor-plan:tables";

export default function DettaglioOrdineTavolo()
{
  const [ordini, setOrdini] = useState([]);
  const [tavoli, setTavoli] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tavoloSel, setTavoloSel] = useState(null);
  const [confermato, setConfermato] = useState(false);

  useEffect(() =>
  {
    let mounted = true;
    (async () =>
    {
      try
      {
        const [rOrdini, rTavoli] = await Promise.all([
          window.storage.get(ORDINI_KEY, true).catch(() => null),
          window.storage.get(TAVOLI_KEY, true).catch(() => null),
        ]);
        if (!mounted) return;
        setOrdini(rOrdini && rOrdini.value ? JSON.parse(rOrdini.value) : []);
        setTavoli(rTavoli && rTavoli.value ? JSON.parse(rTavoli.value) : []);
      } finally
      {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const persistOrdini = useCallback(async (next) =>
  {
    try { await window.storage.set(ORDINI_KEY, JSON.stringify(next), true); }
    catch (e) { console.error("Errore salvataggio ordini", e); }
  }, []);

  const persistTavoli = useCallback(async (next) =>
  {
    try { await window.storage.set(TAVOLI_KEY, JSON.stringify(next), true); }
    catch (e) { console.error("Errore salvataggio tavoli", e); }
  }, []);

  // Numeri tavolo che hanno almeno un ordine non pagato
  const numeriConOrdini = [...new Set(
    ordini.filter((o) => o.stato !== "PAGATO").map((o) => o.tavoloNumero)
  )].sort((a, b) => a - b);

  const ordiniTavolo = tavoloSel
    ? ordini.filter((o) => o.tavoloNumero === tavoloSel && o.stato !== "PAGATO")
    : [];

  const totaleTavolo = ordiniTavolo.reduce((sum, o) =>
    sum + o.dettagli.reduce((s, d) => s + (Number(d.prezzoUnitario) || 0) * d.quantita, 0), 0);

  const segnaComePagato = () =>
  {
    const next = ordini.map((o) => o.tavoloNumero === tavoloSel && o.stato !== "PAGATO" ? { ...o, stato: "PAGATO" } : o);
    setOrdini(next);
    persistOrdini(next);

    const nextTavoli = tavoli.map((t) => t.numero === tavoloSel ? { ...t, stato: "LIBERO" } : t);
    setTavoli(nextTavoli);
    persistTavoli(nextTavoli);

    setConfermato(true);
    setTimeout(() => { setConfermato(false); setTavoloSel(null); }, 1800);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
          <Receipt className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight m-0">Conto per tavolo</h1>
          <p className="text-sm text-neutral-400 m-0">Consulta gli ordini e chiudi il conto</p>
        </div>
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento...</p>}

      {!loading && numeriConOrdini.length === 0 && (
        <p className="text-sm text-neutral-500 text-center py-20">
          Nessun tavolo ha ordini in sospeso al momento.
        </p>
      )}

      {!loading && numeriConOrdini.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
          {/* Selezione tavolo */}
          <div className="flex md:flex-col gap-2 flex-wrap">
            {numeriConOrdini.map((n) => (
              <button
                key={n}
                onClick={() => setTavoloSel(n)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-colors cursor-pointer text-left ${tavoloSel === n
                  ? "bg-amber-400 text-neutral-950 border-amber-400"
                  : "bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                  }`}
              >
                Tavolo {n}
              </button>
            ))}
          </div>

          {/* Dettaglio */}
          <div className="bg-neutral-950/50 border border-neutral-800 rounded-2xl p-5 min-h-[300px]">
            {!tavoloSel && (
              <p className="text-sm text-neutral-500 text-center py-16">Seleziona un tavolo per vedere il conto.</p>
            )}

            {tavoloSel && confermato && (
              <div className="flex flex-col items-center justify-center text-center gap-3 py-16">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
                <p className="text-sm font-bold text-neutral-100">Tavolo {tavoloSel} saldato</p>
              </div>
            )}

            {tavoloSel && !confermato && (
              <>
                <h2 className="text-sm font-bold text-neutral-200 mb-4">Ordini — Tavolo {tavoloSel}</h2>
                <div className="space-y-4 mb-5">
                  {ordiniTavolo.map((o) => (
                    <div key={o.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-neutral-500">
                          {new Date(o.dataOra).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400">
                          {o.stato.replaceAll("_", " ")}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {o.dettagli.map((d, i) => (
                          <li key={i} className="text-xs text-neutral-300 flex justify-between">
                            <span>{d.quantita}x {d.nome}</span>
                            {d.prezzoUnitario != null && (
                              <span className="font-mono text-neutral-400">
                                €{((Number(d.prezzoUnitario) || 0) * d.quantita).toFixed(2)}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-sm text-neutral-400">Totale conto</span>
                  <span className="text-xl font-mono font-bold text-amber-400">€{totaleTavolo.toFixed(2)}</span>
                </div>

                <button
                  onClick={segnaComePagato}
                  className="w-full mt-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Wallet className="w-4 h-4" /> Segna come pagato
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
```

## File: src/component/admin/GestioneMenu.jsx
```javascript
import { useState, useEffect, useRef, useMemo } from "react";
import
  {
    Soup, Plus, Pencil, Trash2, X, Check, Search, EyeOff, Eye,
    Camera, Image as ImageIcon, Loader2,
  } from "lucide-react";

// Con Vite: crea .env con VITE_API_URL=http://localhost:8080
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";
const API = `${API_BASE}/api/piatti`;

const CATEGORIE = ["Nigiri", "Maki", "Uramaki", "Sashimi", "Fritti", "Zuppe", "Dessert", "Bevande"];

/* ---------- helper API ---------- */

// ADATTA: qui va letto il JWT salvato al login (es. localStorage.getItem("token"))
const getToken = () => localStorage.getItem("token");

async function api(path = "", options = {})
{
  const isForm = options.body instanceof FormData;
  const token = getToken();
  const headers = {
    // con FormData il Content-Type lo imposta il browser (serve il boundary)
    ...(isForm ? {} : { "Content-Type": "application/json" }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const res = await fetch(API + path, { ...options, headers });

  if (!res.ok)
  {
    if (res.status === 401 || res.status === 403)
    {
      throw new Error("Sessione scaduta o permessi insufficienti. Esegui di nuovo l'accesso.");
    }
    let msg = res.statusText;
    try
    {
      const data = await res.json();
      msg = data.message || data.error || msg;
    } catch { /* risposta non JSON */ }
    throw new Error(msg || `Errore ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json().catch(() => null);
}

// Le immagini caricate hanno URL relativo (/uploads/...): vanno prefissate col dominio del backend.
// Gli URL esterni (https://...) restano invariati.
const imgSrc = (url) => (url && url.startsWith("/") ? API_BASE + url : url);

// Ridimensiona la foto prima dell'upload (le foto dei telefoni pesano diversi MB)
async function comprimiImmagine(file, maxSide = 1200, quality = 0.8)
{
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Compressione fallita"))), "image/jpeg", quality)
  );
}

/* ---------- componente principale ---------- */

export default function GestioneMenu()
{
  const [piatti, setPiatti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [search, setSearch] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("tutte");
  const [modal, setModal] = useState(null); // { type: 'add' | 'edit', piatto? }

  const carica = () =>
  {
    setLoading(true);
    setLoadError("");
    // /admin restituisce anche i piatti non disponibili
    api("/admin")
      .then(setPiatti)
      .catch((e) => setLoadError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(carica, []);

  const toggleDisponibile = async (id) =>
  {
    const p = piatti.find((x) => x.id === id);
    const nuovo = !p.disponibile;
    setPiatti((prev) => prev.map((x) => (x.id === id ? { ...x, disponibile: nuovo } : x)));
    try
    {
      await api(`/${id}/disponibilita?disponibile=${nuovo}`, { method: "PATCH" });
    } catch (e)
    {
      setPiatti((prev) => prev.map((x) => (x.id === id ? { ...x, disponibile: p.disponibile } : x)));
      alert("Impossibile aggiornare la disponibilità: " + e.message);
    }
  };

  // Lancia un errore se qualcosa va storto: il modal lo mostra senza chiudersi
  const salvaPiatto = async (form, id, fotoBlob) =>
  {
    let immagineUrl = form.immagineUrl.trim() || null;

    // 1) se c'è una nuova foto, la carico e ottengo l'URL
    if (fotoBlob)
    {
      const fd = new FormData();
      fd.append("file", fotoBlob, "piatto.jpg");
      const { url } = await api("/immagine", { method: "POST", body: fd });
      immagineUrl = url;
    }

    // 2) salvo il piatto con l'URL dell'immagine
    const body = JSON.stringify({
      codicePiatto: form.codicePiatto.trim() || null, // "" violerebbe il vincolo unique
      nome: form.nome.trim(),
      descrizione: form.descrizione.trim() || null,
      prezzo: parseFloat(form.prezzo),
      immagineUrl,
      disponibile: id ? piatti.find((p) => p.id === id).disponibile : true,
      isAllYouCanEat: form.isAllYouCanEat,
      categoria: form.categoria,
    });

    if (id)
    {
      const updated = await api(`/${id}`, { method: "PUT", body });
      setPiatti((prev) => prev.map((p) => (p.id === id ? updated : p)));
    } else
    {
      const created = await api("", { method: "POST", body });
      setPiatti((prev) => [...prev, created]);
    }
    setModal(null);
  };

  const eliminaPiatto = async (id) =>
  {
    const p = piatti.find((x) => x.id === id);
    if (!window.confirm(`Eliminare "${p?.nome}"?`)) return;
    try
    {
      await api(`/${id}`, { method: "DELETE" });
      setPiatti((prev) => prev.filter((x) => x.id !== id));
      setModal(null);
    } catch (e)
    {
      alert("Impossibile eliminare il piatto: " + e.message);
    }
  };

  const filtrati = piatti.filter((p) =>
  {
    const matchCategoria = categoriaFiltro === "tutte" || p.categoria === categoriaFiltro;
    const matchSearch = p.nome.toLowerCase().includes(search.toLowerCase());
    return matchCategoria && matchSearch;
  });

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <Soup className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Gestione menu</h1>
            <p className="text-sm text-neutral-400 m-0">{piatti.length} piatti nel menu</p>
          </div>
        </div>
        <button
          onClick={() => setModal({ type: "add" })}
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold px-4 py-2.5 rounded-2xl text-sm transition-colors cursor-pointer"
        >
          <Plus size={16} /> Nuovo piatto
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Cerca piatto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-full pl-10 pr-4 py-2.5 text-sm placeholder-neutral-600 outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>
        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="bg-neutral-950 border border-neutral-800 rounded-full px-4 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
        >
          <option value="tutte">Tutte le categorie</option>
          {CATEGORIE.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento menu...</p>}

      {!loading && loadError && (
        <div className="text-center py-16 text-sm">
          <p className="text-red-400 mb-3">Impossibile caricare il menu: {loadError}</p>
          <button
            onClick={carica}
            className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2 text-sm cursor-pointer hover:bg-neutral-700 transition-colors"
          >
            Riprova
          </button>
        </div>
      )}

      {!loading && !loadError && filtrati.length === 0 && (
        <div className="text-center py-20 text-neutral-500 text-sm">
          {piatti.length === 0
            ? 'Nessun piatto configurato. Premi "Nuovo piatto" per iniziare.'
            : "Nessun piatto corrisponde alla ricerca."}
        </div>
      )}

      {filtrati.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtrati.map((p) => (
            <div
              key={p.id}
              className={`bg-neutral-950/50 border rounded-2xl overflow-hidden flex flex-col ${p.disponibile ? "border-neutral-800" : "border-neutral-800 opacity-50"}`}
            >
              <div className="h-32 w-full bg-neutral-900 overflow-hidden relative">
                {p.immagineUrl ? (
                  <img src={imgSrc(p.immagineUrl)} alt={p.nome} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-700">
                    <Soup className="w-8 h-8" />
                  </div>
                )}
                <span className="absolute top-2 left-2 bg-neutral-950/80 backdrop-blur text-amber-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                  {p.categoria}
                </span>
                {p.codicePiatto && (
                  <span className="absolute top-2 right-2 bg-neutral-950/80 backdrop-blur text-neutral-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-neutral-700">
                    {p.codicePiatto}
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-neutral-100 leading-tight">{p.nome}</h3>
                  <span className="text-sm font-mono font-bold text-amber-400 shrink-0">
                    €{Number(p.prezzo).toFixed(2)}
                  </span>
                </div>
                {p.descrizione && (
                  <p className="text-xs text-neutral-500 mt-1.5 line-clamp-2">{p.descrizione}</p>
                )}

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-800">
                  <button
                    onClick={() => toggleDisponibile(p.id)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-colors cursor-pointer ${p.disponibile
                      ? "text-green-400 border-green-500/30 bg-green-500/10"
                      : "text-neutral-500 border-neutral-700 bg-neutral-900"
                      }`}
                  >
                    {p.disponibile ? <Eye size={13} /> : <EyeOff size={13} />}
                    {p.disponibile ? "Disponibile" : "Non disponibile"}
                  </button>
                  <button
                    onClick={() => setModal({ type: "edit", piatto: p })}
                    className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 hover:border-amber-400/30 transition-colors cursor-pointer"
                    aria-label={`Modifica ${p.nome}`}
                  >
                    <Pencil size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <PiattoModal
          modal={modal}
          onCancel={() => setModal(null)}
          onSave={salvaPiatto}
          onDelete={eliminaPiatto}
        />
      )}
    </div>
  );
}

/* ---------- modal ---------- */

function PiattoModal({ modal, onCancel, onSave, onDelete })
{
  const isEdit = modal.type === "edit";
  const p = modal.piatto;

  const [form, setForm] = useState({
    codicePiatto: isEdit ? (p.codicePiatto || "") : "",
    nome: isEdit ? p.nome : "",
    descrizione: isEdit ? (p.descrizione || "") : "",
    prezzo: isEdit ? p.prezzo : "",
    categoria: isEdit ? p.categoria : CATEGORIE[0],
    immagineUrl: isEdit ? (p.immagineUrl || "") : "",
    isAllYouCanEat: isEdit ? (p.isAllYouCanEat ?? true) : true,
  });

  // La foto scattata resta in locale e viene caricata solo al "Salva":
  // se l'admin annulla, sul server non resta nessun file orfano.
  const [fotoBlob, setFotoBlob] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const cameraRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => () => { if (fotoPreview) URL.revokeObjectURL(fotoPreview); }, [fotoPreview]);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // Se il piatto ha una categoria non presente nell'elenco, la mostro comunque
  const categorie = useMemo(
    () => (form.categoria && !CATEGORIE.includes(form.categoria) ? [form.categoria, ...CATEGORIE] : CATEGORIE),
    [form.categoria]
  );

  const onFotoScelta = async (e) =>
  {
    const file = e.target.files?.[0];
    e.target.value = ""; // permette di scegliere di nuovo lo stesso file
    if (!file) return;
    setError("");
    try
    {
      const blob = await comprimiImmagine(file);
      setFotoBlob(blob);
      setFotoPreview(URL.createObjectURL(blob));
    } catch
    {
      setError("Non riesco a leggere questa foto. Prova con un'altra.");
    }
  };

  const rimuoviFoto = () =>
  {
    setFotoBlob(null);
    setFotoPreview(null);
    setForm((f) => ({ ...f, immagineUrl: "" }));
  };

  const anteprima = fotoPreview || imgSrc(form.immagineUrl);

  const salva = async () =>
  {
    if (!form.nome.trim()) return setError("Inserisci il nome del piatto");
    if (form.prezzo === "" || Number(form.prezzo) < 0) return setError("Inserisci un prezzo valido");
    setSaving(true);
    setError("");
    try
    {
      await onSave(form, isEdit ? p.id : null, fotoBlob);
    } catch (e)
    {
      setError(e.message);
      setSaving(false);
    }
  };

  const inputCls = "w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors";

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget && !saving) onCancel(); }}
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-md shadow-2xl my-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold m-0">{isEdit ? `Modifica ${p.nome}` : "Nuovo piatto"}</h2>
          <button
            onClick={onCancel}
            disabled={saving}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Chiudi"
          >
            <X size={18} />
          </button>
        </div>

        {/* Foto */}
        <div className="mb-4">
          <label className="block text-xs text-neutral-400 mb-1.5">Foto del piatto</label>
          <div className="relative h-36 w-full rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden flex items-center justify-center">
            {anteprima ? (
              <img src={anteprima} alt="Anteprima" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-neutral-600">Nessuna foto</span>
            )}

            {anteprima && !saving && (
              <button
                type="button"
                onClick={rimuoviFoto}
                className="absolute bottom-2 left-2 p-2 rounded-full bg-neutral-900/80 text-red-400 border border-neutral-700 cursor-pointer"
                aria-label="Rimuovi foto"
              >
                <Trash2 size={15} />
              </button>
            )}

            <div className="absolute bottom-2 right-2 flex gap-2">
              <button
                type="button"
                onClick={() => galleryRef.current?.click()}
                disabled={saving}
                className="p-2.5 rounded-full bg-neutral-900/80 text-neutral-200 border border-neutral-700 hover:bg-neutral-800 disabled:opacity-50 cursor-pointer"
                aria-label="Scegli dalla galleria"
              >
                <ImageIcon size={18} />
              </button>
              <button
                type="button"
                onClick={() => cameraRef.current?.click()}
                disabled={saving}
                className="p-2.5 rounded-full bg-amber-400 text-neutral-950 shadow-lg hover:bg-amber-300 disabled:opacity-50 cursor-pointer"
                aria-label="Scatta foto"
              >
                <Camera size={18} />
              </button>
            </div>
          </div>

          {/* capture="environment" apre la fotocamera posteriore su telefono/tablet */}
          <input ref={cameraRef} type="file" accept="image/*" capture="environment" onChange={onFotoScelta} className="hidden" />
          <input ref={galleryRef} type="file" accept="image/*" onChange={onFotoScelta} className="hidden" />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="col-span-1">
            <label className="block text-xs text-neutral-400 mb-1.5">Codice</label>
            <input
              type="text" maxLength={10} placeholder="Es. S01"
              value={form.codicePiatto} onChange={set("codicePiatto")}
              className={inputCls}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs text-neutral-400 mb-1.5">Nome piatto</label>
            <input type="text" maxLength={100} value={form.nome} onChange={set("nome")} className={inputCls} />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Descrizione</label>
          <textarea rows="2" value={form.descrizione} onChange={set("descrizione")} className={`${inputCls} resize-none`} />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs text-neutral-400 mb-1.5">Prezzo (€)</label>
            <input type="number" step="0.01" min="0" value={form.prezzo} onChange={set("prezzo")} className={inputCls} />
          </div>
          <div>
            <label className="block text-xs text-neutral-400 mb-1.5">Categoria</label>
            <select value={form.categoria} onChange={set("categoria")} className={inputCls}>
              {categorie.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <label className="flex items-center gap-2 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={form.isAllYouCanEat}
            onChange={(e) => setForm((f) => ({ ...f, isAllYouCanEat: e.target.checked }))}
            className="w-4 h-4 accent-amber-400"
          />
          <span className="text-xs text-neutral-300">Incluso nel menu All You Can Eat</span>
        </label>

        {error && (
          <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2 mb-3">
            {error}
          </p>
        )}

        <div className="flex gap-2">
          <button
            onClick={onCancel}
            disabled={saving}
            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl py-2.5 text-sm font-medium cursor-pointer hover:bg-neutral-700 transition-colors disabled:opacity-50"
          >
            Annulla
          </button>
          <button
            onClick={salva}
            disabled={saving}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl py-2.5 text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors disabled:opacity-60"
          >
            {saving ? (
              <><Loader2 size={15} className="animate-spin" /> Salvataggio...</>
            ) : isEdit ? (
              <><Check size={15} /> Salva</>
            ) : (
              <><Plus size={15} /> Aggiungi</>
            )}
          </button>
        </div>

        {isEdit && (
          <button
            onClick={() => onDelete(p.id)}
            disabled={saving}
            className="w-full mt-2 border border-red-500/60 text-red-400 rounded-xl py-2 text-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-500/10 transition-colors disabled:opacity-50"
          >
            <Trash2 size={14} /> Elimina piatto
          </button>
        )}
      </div>
    </div>
  );
}
```

## File: src/component/admin/LoginStaff.jsx
```javascript
import { useState } from "react";
import { Lock, User, KeyRound, LogIn } from "lucide-react";

export default function LoginStaff({ onLogin })
{
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [errore, setErrore] = useState("");

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    if (!nome.trim() || !password)
    {
      setErrore("Inserisci nome utente e password");
      return;
    }
    setErrore("");

    try
    {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: nome, // Modifica in "nome" se il DTO Spring si aspetta 'nome'
          password: password,
        }),
      });

      if (!response.ok)
      {
        throw new Error("Credenziali non valide");
      }

      const data = await response.json();
      // Supponendo che il backend risponda con { token: "eyJhbG..." } oppure { jwt: "..." }
      const token = data.token || data.jwt || data.accessToken;

      if (token)
      {
        localStorage.setItem("token", token); // Salva il token con la chiave "token"
      }

      onLogin(data);
    } catch (err)
    {
      console.error("Errore login:", err);
      setErrore("Nome utente o password errati");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg mb-4">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
          </h1>
          <p className="text-xs text-neutral-500 mt-1">Area riservata al personale</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 space-y-4">
          <div>
            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
              <User size={13} /> Nome utente
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
              <KeyRound size={13} /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
              autoComplete="current-password"
            />
          </div>

          {errore && <p className="text-xs text-red-400">{errore}</p>}

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <LogIn size={16} /> Accedi
          </button>
        </form>

        <p className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-600 mt-5">
          <Lock size={11} /> Accesso protetto — solo personale autorizzato
        </p>
      </div>
    </div>
  );
}
```

## File: src/component/admin/PianoSala.jsx
```javascript
import { useState, useEffect, useRef } from "react";
import { Pencil, Check, Plus, Trash2, X, Lock, LayoutGrid } from "lucide-react";

const API_URL = "http://localhost:8080/api/tavoli";

const STATO_LABEL = {
  LIBERO: "Libero",
  OCCUPATO: "Occupato",
  IN_PAGAMENTO: "In pagamento",
  PRENOTATO: "Prenotato",
};

const STATO_BORDER = {
  LIBERO: "border-green-500",
  OCCUPATO: "border-red-500",
  IN_PAGAMENTO: "border-amber-500",
  PRENOTATO: "border-blue-500",
};

const STATO_DOT = {
  LIBERO: "bg-green-500",
  OCCUPATO: "bg-red-500",
  IN_PAGAMENTO: "bg-amber-500",
  PRENOTATO: "bg-blue-500",
};

const CICLO_TAP = ["LIBERO", "OCCUPATO", "IN_PAGAMENTO"];

// Helper per costruire gli header con il token JWT
const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // Assicurati che la chiave combaci con dove salvi il JWT al login
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

// Se la risposta non è ok, legge il body del backend per avere un messaggio utile
const throwIfNotOk = async (res, fallbackMessage) => {
  if (res.ok) return;
  let dettaglio = "";
  try {
    dettaglio = await res.text();
  } catch {
    /* ignora */
  }
  throw new Error(`${fallbackMessage} (${res.status}) ${dettaglio}`);
};

export default function PianoSala({ ruolo = "ROLE_ADMIN" }) {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [modal, setModal] = useState(null);
  const floorRef = useRef(null);
  const dragInfo = useRef(null);

  // 1. Caricamento iniziale tavoli
  useEffect(() => {
    let isMounted = true;
    async function loadTavoli() {
      try {
        const response = await fetch(API_URL, { headers: getAuthHeaders() });
        await throwIfNotOk(response, "Errore nel recupero tavoli");
        const data = await response.json();
        if (isMounted) setTables(data);
      } catch (err) {
        console.error("Errore di caricamento:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadTavoli();
    return () => {
      isMounted = false;
    };
  }, []);

  // Calcolo dei contatori per stato
  const counts = tables.reduce((acc, t) => {
    acc[t.stato] = (acc[t.stato] || 0) + 1;
    return acc;
  }, {});

  const nextNumero = () => {
    const usati = tables.map((t) => t.numero).sort((a, b) => a - b);
    let n = 1;
    for (const u of usati) {
      if (u === n) n++;
      else break;
    }
    return n;
  };

  // 2. Cambio stato al tap
  const cicloStato = async (id) => {
    const tavoloCorrente = tables.find((t) => t.id === id);
    if (!tavoloCorrente) return;

    const idx = CICLO_TAP.indexOf(tavoloCorrente.stato);
    const nuovoStato = CICLO_TAP[(idx + 1) % CICLO_TAP.length];

    try {
      const res = await fetch(`${API_URL}/${id}/stato`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ stato: nuovoStato }),
      });
      await throwIfNotOk(res, "Errore durante l'aggiornamento dello stato");
      const tavoloAggiornato = await res.json();

      setTables((prev) => prev.map((t) => (t.id === id ? tavoloAggiornato : t)));
    } catch (err) {
      console.error("Errore modifica stato:", err);
      alert("Impossibile aggiornare lo stato del tavolo");
    }
  };

  const handleFloorPointerDown = (e) => {
    if (!editMode || e.target !== floorRef.current) return;
    const rect = floorRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;
    x = Math.max(6, Math.min(94, x));
    y = Math.max(8, Math.min(92, y));
    setModal({ type: "add", x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
  };

  // FIX: dragInfo va impostato SEMPRE (anche fuori da editMode),
  // altrimenti nel pointerUp il tap per cambiare stato non parte mai.
  const handleTablePointerDown = (e, table) => {
    e.stopPropagation();
    dragInfo.current = {
      id: table.id,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
      x: table.x,
      y: table.y,
    };
    if (editMode) e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleTablePointerMove = (e, table) => {
    const info = dragInfo.current;
    if (!editMode || !info || info.id !== table.id) return;
    const dx = e.clientX - info.startX;
    const dy = e.clientY - info.startY;
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
      info.moved = true;
      const rect = floorRef.current.getBoundingClientRect();
      let x = ((e.clientX - rect.left) / rect.width) * 100;
      let y = ((e.clientY - rect.top) / rect.height) * 100;
      x = Math.round(Math.max(6, Math.min(94, x)) * 10) / 10;
      y = Math.round(Math.max(8, Math.min(92, y)) * 10) / 10;
      // Salvo l'ultima posizione nel ref: è quella da mandare al backend
      info.x = x;
      info.y = y;
      setTables((prev) => prev.map((t) => (t.id === table.id ? { ...t, x, y } : t)));
    }
  };

  // 3. Salvataggio nuova posizione dopo Drag & Drop
  const handleTablePointerUp = async (e, table) => {
    const info = dragInfo.current;
    dragInfo.current = null;
    if (!info || info.id !== table.id) return;

    if (info.moved) {
      try {
        const res = await fetch(`${API_URL}/${table.id}/posizione`, {
          method: "PATCH",
          headers: getAuthHeaders(),
          body: JSON.stringify({ x: info.x, y: info.y }),
        });
        await throwIfNotOk(res, "Errore salvataggio posizione");
      } catch (err) {
        console.error("Errore salvataggio posizione:", err);
        alert("Impossibile salvare la nuova posizione del tavolo");
      }
    } else if (editMode) {
      setModal({ type: "edit", table });
    } else {
      cicloStato(table.id);
    }
  };

  // 4. Creazione nuovo tavolo
  const saveNewTable = async (form) => {
    const numero = parseInt(form.numero, 10);
    if (!numero) return;

    if (tables.some((t) => t.numero === numero)) {
      alert("Esiste già un tavolo con questo numero");
      return;
    }

    const nuovoTavoloDTO = {
      numero,
      sala: form.sala.trim(),
      posti: parseInt(form.posti, 10) || null,
      x: modal.x,
      y: modal.y,
      stato: "LIBERO",
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(nuovoTavoloDTO),
      });
      await throwIfNotOk(res, "Errore salvataggio tavolo");
      const salvato = await res.json();

      setTables((prev) => [...prev, salvato]);
      setModal(null);
    } catch (err) {
      console.error("Errore durante la creazione del tavolo:", err);
      alert("Impossibile creare il tavolo");
    }
  };

  // 5. Modifica dati tavolo esistente
  const saveEditTable = async (id, form) => {
    const numero = parseInt(form.numero, 10);
    if (!numero) return;
    if (tables.some((t) => t.numero === numero && t.id !== id)) {
      alert("Esiste già un tavolo con questo numero");
      return;
    }

    // Uso `tables` (non modal.table) perché contiene le coordinate più recenti dopo un drag
    const tavoloCorrente = tables.find((t) => t.id === id);
    if (!tavoloCorrente) return;

    // FIX: x e y sono @NotNull nel DTO backend, quindi vanno sempre inviate
    const tavoloModificatoDTO = {
      numero,
      sala: form.sala.trim(),
      posti: parseInt(form.posti, 10) || null,
      stato: form.stato,
      x: tavoloCorrente.x,
      y: tavoloCorrente.y,
    };

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(tavoloModificatoDTO),
      });
      await throwIfNotOk(res, "Errore aggiornamento tavolo");
      const salvato = await res.json();

      setTables((prev) => prev.map((t) => (t.id === id ? salvato : t)));
      setModal(null);
    } catch (err) {
      console.error("Errore durante la modifica del tavolo:", err);
      alert("Impossibile modificare il tavolo");
    }
  };

  // 6. Cancellazione tavolo
  const deleteTable = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      await throwIfNotOk(res, "Errore eliminazione tavolo");

      setTables((prev) => prev.filter((t) => t.id !== id));
      setModal(null);
    } catch (err) {
      console.error("Errore eliminazione:", err);
      alert("Impossibile eliminare il tavolo");
    }
  };

  // FIX: il controllo sul ruolo sta DOPO tutti gli hook (regole degli hook di React)
  if (ruolo !== "ROLE_ADMIN") {
    return (
      <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-8 min-h-[300px] flex flex-col items-center justify-center text-center gap-2">
        <Lock size={28} className="text-neutral-600 mb-1" />
        <p className="font-bold m-0">Sezione riservata al personale</p>
        <p className="text-sm text-neutral-400 m-0">
          Il piano sala è visibile solo dal lato ristorante, non dai tablet dei tavoli.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Piano sala</h1>
            <p className="text-sm text-neutral-400 m-0">
              {editMode
                ? "Tocca la pianta per aggiungere un tavolo, trascina per spostarlo"
                : "Tocca un tavolo per cambiarne lo stato"}
            </p>
          </div>
        </div>
        <button
          onClick={() => setEditMode((v) => !v)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold border transition-colors cursor-pointer ${
            editMode
              ? "bg-amber-400 text-neutral-950 border-amber-400"
              : "bg-neutral-800 text-neutral-100 border-neutral-700 hover:bg-neutral-700"
          }`}
        >
          {editMode ? <Check size={16} /> : <Pencil size={16} />}
          {editMode ? "Fine modifica" : "Modifica pianta"}
        </button>
      </div>

      <div className="flex gap-4 flex-wrap text-xs text-neutral-400 mb-3">
        {Object.entries(STATO_LABEL).map(([key, label]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full inline-block ${STATO_DOT[key]}`} />
            {label}
          </span>
        ))}
      </div>

      {tables.length > 0 && (
        <div className="text-xs text-neutral-500 font-mono mb-3">
          {CICLO_TAP.concat("PRENOTATO").map((k, i) => (
            <span key={k}>
              {i > 0 && " · "}
              {counts[k] || 0} {STATO_LABEL[k].toLowerCase()}
            </span>
          ))}
        </div>
      )}

      <div
        ref={floorRef}
        onPointerDown={handleFloorPointerDown}
        className={`relative w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 overflow-hidden ${
          editMode ? "cursor-crosshair" : ""
        }`}
        style={{
          height: "62vh",
          minHeight: 420,
          backgroundImage: "radial-gradient(#292929 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          touchAction: "none",
        }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm">
            Caricamento pianta...
          </div>
        )}

        {!loading && tables.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-center text-neutral-500 text-sm px-6 pointer-events-none">
            {editMode
              ? "Nessun tavolo configurato. Tocca un punto della pianta per aggiungere il primo tavolo."
              : 'Nessun tavolo configurato. Attiva "Modifica pianta" per iniziare.'}
          </div>
        )}

        {tables.map((t) => (
          <div
            key={t.id}
            onPointerDown={(e) => handleTablePointerDown(e, t)}
            onPointerMove={(e) => handleTablePointerMove(e, t)}
            onPointerUp={(e) => handleTablePointerUp(e, t)}
            className={`absolute flex flex-col items-center justify-center rounded-xl bg-neutral-900 border-4 shadow-lg cursor-pointer select-none ${STATO_BORDER[t.stato]}`}
            style={{
              left: `${t.x}%`,
              top: `${t.y}%`,
              width: "clamp(76px, 10vw, 104px)",
              height: "clamp(56px, 7.5vw, 76px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-lg font-bold leading-none text-neutral-50">{t.numero}</span>
            <span className="text-[10px] text-neutral-500 mt-1">{t.posti || "-"} posti</span>
          </div>
        ))}
      </div>

      {modal && (
        <TableModal
          modal={modal}
          nextNumero={nextNumero}
          onCancel={() => setModal(null)}
          onSaveNew={saveNewTable}
          onSaveEdit={saveEditTable}
          onDelete={deleteTable}
        />
      )}
    </div>
  );
}

function TableModal({ modal, nextNumero, onCancel, onSaveNew, onSaveEdit, onDelete }) {
  const isEdit = modal.type === "edit";
  const table = modal.table;
  const [form, setForm] = useState({
    numero: isEdit ? table.numero : nextNumero(),
    sala: isEdit ? table.sala || "" : "",
    posti: isEdit ? table.posti || "" : 4,
    stato: isEdit ? table.stato : "LIBERO",
  });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-xs shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold m-0">
            {isEdit ? `Modifica tavolo ${table.numero}` : "Nuovo tavolo"}
          </h2>
          <button
            onClick={onCancel}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Numero tavolo</label>
          <input
            type="number"
            min="1"
            value={form.numero}
            onChange={set("numero")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Sala (opzionale)</label>
          <input
            type="text"
            placeholder="Es. Terrazza"
            value={form.sala}
            onChange={set("sala")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Posti a sedere</label>
          <input
            type="number"
            min="1"
            value={form.posti}
            onChange={set("posti")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        {isEdit && (
          <div className="mb-4">
            <label className="block text-xs text-neutral-400 mb-1.5">Stato</label>
            <select
              value={form.stato}
              onChange={set("stato")}
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
            >
              {Object.entries(STATO_LABEL).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex gap-2 mt-2">
          <button
            onClick={onCancel}
            className="flex-1 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl py-2.5 text-sm font-medium cursor-pointer hover:bg-neutral-700 transition-colors"
          >
            Annulla
          </button>
          <button
            onClick={() => (isEdit ? onSaveEdit(table.id, form) : onSaveNew(form))}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl py-2.5 text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            {isEdit ? (
              <>
                <Check size={15} /> Salva
              </>
            ) : (
              <>
                <Plus size={15} /> Aggiungi
              </>
            )}
          </button>
        </div>

        {isEdit && (
          <button
            onClick={() => onDelete(table.id)}
            className="w-full mt-2 border border-red-500/60 text-red-400 rounded-xl py-2 text-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-500/10 transition-colors"
          >
            <Trash2 size={14} /> Elimina tavolo
          </button>
        )}
      </div>
    </div>
  );
}
```

## File: src/component/cucina/Cucina.jsx
```javascript
import { useState, useEffect, useCallback, useMemo } from "react";
import { ChefHat, Clock, Sparkles, Send, Flame, CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import { connettiWebSocket } from "../../services/websocket";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

const SOGLIA_GIALLO = 10;
const SOGLIA_ROSSO = 15;

const STATI = {
  INVIATO: { label: "Inviato", icon: Send, active: "bg-amber-400 text-neutral-950 border-amber-400", badge: "bg-amber-400/10 text-amber-400 border-amber-400/30" },
  IN_PREPARAZIONE: { label: "In preparazione", icon: Flame, active: "bg-blue-500 text-white border-blue-500", badge: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  SERVITO: { label: "Servito", icon: CheckCircle2, active: "bg-green-500 text-neutral-950 border-green-500", badge: "bg-green-500/10 text-green-400 border-green-500/30" },
  PAGATO: { label: "Pagato", icon: XCircle, active: "bg-red-500 text-white border-red-500", badge: "bg-red-500/10 text-red-400 border-red-500/30" },
};

const ORDINE_BOTTONI = ["INVIATO", "IN_PREPARAZIONE", "SERVITO"];
const STATI_CHIUSI = ["SERVITO", "PAGATO"];

const FILTRI = [
  { id: "attivi", label: "Attivi", match: (o) => o.stato === "INVIATO" || o.stato === "IN_PREPARAZIONE" },
  { id: "serviti", label: "Serviti", match: (o) => o.stato === "SERVITO" || o.stato === "PAGATO" },
  { id: "tutti", label: "Tutti", match: () => true },
];

const URGENZA = {
  nuovo: { card: "border-t-blue-500", timer: "bg-blue-500/15 text-blue-300 border-blue-500/40", label: "Appena arrivato" },
  medio: { card: "border-t-yellow-400", timer: "bg-yellow-400/15 text-yellow-300 border-yellow-400/40", label: "In attesa" },
  urgente: { card: "border-t-red-500", timer: "bg-red-500/20 text-red-300 border-red-500/50 animate-pulse", label: "Fermo da troppo" },
  chiuso: { card: "border-t-neutral-700", timer: "bg-neutral-800 text-neutral-400 border-neutral-700", label: "Chiuso" },
};

function livelloUrgenza(ordine, now) {
  if (STATI_CHIUSI.includes(ordine.stato)) return "chiuso";
  const minuti = (now - new Date(ordine.dataOra).getTime()) / 60000;
  if (minuti < SOGLIA_GIALLO) return "nuovo";
  if (minuti < SOGLIA_ROSSO) return "medio";
  return "urgente";
}

function formattaTimer(ordine, now) {
  const fine = STATI_CHIUSI.includes(ordine.stato) ? new Date(ordine.dataOra).getTime() : now;
  const sec = Math.max(0, Math.floor((now - new Date(ordine.dataOra).getTime()) / 1000));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function Cucina() {
  const [ordini, setOrdini] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());
  const [filtro, setFiltro] = useState("attivi");

  // Timer per aggiornamento UI ogni secondo
  useEffect(() => {
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, []);

  // 1. Caricamento iniziale ordini da Backend REST
  const caricaOrdiniIniziali = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE}/api/v1/ordini/stato/INVIATO`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (res.ok) {
        const datiInviati = await res.json();
        const resPrep = await fetch(`${API_BASE}/api/v1/ordini/stato/IN_PREPARAZIONE`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const datiPrep = resPrep.ok ? await resPrep.json() : [];
        setOrdini([...datiInviati, ...datiPrep]);
      }
    } catch (e) {
      console.error("Errore caricamento ordini iniziali", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    caricaOrdiniIniziali();

    // 2. Connessione WEBSOCKET in tempo reale!
    const disconnetti = connettiWebSocket((nuovoOAggiornatoOrdine) => {
      setOrdini((prev) => {
        const esiste = prev.some((o) => o.id === nuovoOAggiornatoOrdine.id);
        if (esiste) {
          return prev.map((o) => (o.id === nuovoOAggiornatoOrdine.id ? nuovoOAggiornatoOrdine : o));
        } else {
          return [nuovoOAggiornatoOrdine, ...prev]; // Nuovo ordine in cima
        }
      });
    });

    return () => disconnetti();
  }, [caricaOrdiniIniziali]);

  // Aggiorna lo stato dell'ordine al backend (che a sua volta re-invia via WS)
  const cambiaStato = async (ordine, nuovoStato) => {
    if (ordine.stato === nuovoStato) return;

    try {
      const token = localStorage.getItem("token");
      await fetch(`${API_BASE}/api/v1/ordini/${ordine.id}/stato`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ stato: nuovoStato }),
      });
    } catch (e) {
      console.error("Errore aggiornamento stato ordine", e);
    }
  };

  const conteggi = useMemo(
    () => Object.fromEntries(FILTRI.map((f) => [f.id, ordini.filter(f.match).length])),
    [ordini]
  );

  const visibili = useMemo(() => {
    const f = FILTRI.find((x) => x.id === filtro);
    return ordini
      .filter(f.match)
      .sort((a, b) => new Date(b.dataOra) - new Date(a.dataOra));
  }, [ordini, filtro]);

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Cucina (Live WebSocket)</h1>
            <p className="text-sm text-neutral-400 m-0">Comande in tempo reale dai tablet</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> WebSocket attivo
          </span>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-5">
        {FILTRI.map((f) => (
          <button
            key={f.id}
            onClick={() => setFiltro(f.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
              filtro === f.id
                ? "bg-amber-400 text-neutral-950 border-amber-400"
                : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700"
            }`}
          >
            {f.label} <span className="font-mono opacity-70">({conteggi[f.id]})</span>
          </button>
        ))}
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento ordini...</p>}

      {!loading && visibili.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-20">
          <Sparkles className="w-8 h-8 text-neutral-700" />
          <p className="text-neutral-400 text-sm">Nessun ordine in questa vista. In attesa dai tablet...</p>
        </div>
      )}

      {!loading && visibili.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {visibili.map((o) => {
            const urg = URGENZA[livelloUrgenza(o, now)];
            const statoInfo = STATI[o.stato];
            const chiuso = STATI_CHIUSI.includes(o.stato);

            return (
              <div
                key={o.id}
                className={`bg-neutral-950/60 border border-neutral-800 border-t-4 ${urg.card} rounded-2xl p-4 flex flex-col ${chiuso ? "opacity-70" : ""}`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-lg font-bold leading-tight m-0">Tavolo {o.numeroTavolo || o.tavoloId}</h3>
                    <p className="text-[11px] text-neutral-500 font-mono m-0 mt-0.5">
                      Ricevuto alle {new Date(o.dataOra).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  <span className={`flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-1.5 rounded-full border ${urg.timer}`}>
                    <Clock className="w-3.5 h-3.5" /> {formattaTimer(o, now)}
                  </span>
                </div>

                {statoInfo && (
                  <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mt-2 ${statoInfo.badge}`}>
                    {statoInfo.label}
                  </span>
                )}

                <ul className="space-y-1.5 my-4 flex-1">
                  {o.dettagli?.map((d, i) => (
                    <li key={i} className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-sm">
                      <span className="text-neutral-200">{d.piatto?.nome || `Piatto #${d.piattoId}`}</span>
                      <span className="font-mono font-bold text-amber-400">x{d.quantita}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-2">
                  {ORDINE_BOTTONI.map((s) => {
                    const info = STATI[s];
                    const Icon = info.icon;
                    const attivo = o.stato === s;
                    return (
                      <button
                        key={s}
                        onClick={() => cambiaStato(o, s)}
                        className={`flex items-center justify-center gap-1 text-[11px] font-bold py-2 rounded-xl border transition-colors cursor-pointer ${
                          attivo
                            ? info.active
                            : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600"
                        }`}
                      >
                        <Icon className="w-3 h-3" /> {info.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
```

## File: src/component/cucina/Cucinaapp.jsx
```javascript
import { useState } from "react";
import { LogOut } from "lucide-react";
import LoginStaff from "../admin/LoginStaff";
import { getUtente, clearSession } from "../admin/auth";
import Cucina from "./Cucina";

// App dedicata alla cucina, raggiungibile da /cucina.
// Ha login e schermata propri, senza la sidebar dell'area admin
// (cassa, gestione menu, piano sala).
export default function CucinaApp()
{
  const [utente, setUtente] = useState(() => getUtente());

  if (!utente)
  {
    return <LoginStaff onLogin={(u) => setUtente(u)} />;
  }

  const logout = () =>
  {
    clearSession();
    setUtente(null);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Barra superiore */}
      <header className="shrink-0 bg-neutral-900 border-b border-neutral-800 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
          </svg>
          <span className="font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
            <span className="ml-2 text-xs font-semibold text-neutral-500 tracking-normal">Cucina</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {utente?.nome && <span className="hidden sm:block text-xs text-neutral-500">{utente.nome}</span>}
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-2 rounded-2xl text-sm font-semibold text-neutral-400 hover:bg-neutral-800 hover:text-red-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Esci
          </button>
        </div>
      </header>

      {/* Contenuto a tutta larghezza */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-screen-2xl mx-auto">
          <Cucina />
        </div>
      </main>
    </div>
  );
}
```

## File: src/component/Card.jsx
```javascript
import React from 'react';
import { Plus, Minus } from 'lucide-react';

/**
 * Card di un singolo piatto del menu.
 *
 * Props:
 * - dish: { id, name, description, price, image, isNew }
 * - qty: quantità attualmente nel carrello per questo piatto
 * - onIncrement: () => void  -> chiamato per aggiungere 1 unità
 * - onDecrement: () => void  -> chiamato per togliere 1 unità
 * - orderType: 'all-you-can-eat' | 'alla-carta' -> con 'alla-carta' mostra il
 *   prezzo reale del piatto, altrimenti "Prezzo Extra: €0.00"
 */
const DishCard = ({ dish, qty = 0, onIncrement, onDecrement, orderType = 'all-you-can-eat' }) =>
{
    const isAlLaCarta = orderType === 'alla-carta';

    return (
        <div
            className={`relative group bg-neutral-900/80 border rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300
        ${qty > 0 ? 'border-amber-400/80 shadow-lg shadow-amber-950/20' : 'border-neutral-800 hover:border-neutral-700'}`}
        >
            <div>
                <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                    <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                    <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-400 border border-amber-400/30 text-xs font-mono font-bold px-2.5 py-1 rounded-full">
                        {dish.id}
                    </span>

                    {dish.isNew && (
                        <span className="absolute top-3 right-3 bg-amber-400 text-neutral-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                            Nuovo
                        </span>
                    )}
                </div>

                <div className="p-5">
                    <h3 className="text-lg font-bold text-neutral-50 tracking-tight">{dish.name}</h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                        {dish.description}
                    </p>
                </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between border-t border-neutral-800/60 mt-4">
                {isAlLaCarta ? (
                    <span className="text-lg text-amber-400 font-mono font-bold">
                        €{Number(dish.price).toFixed(2)}
                    </span>
                ) : (
                    <span className="text-xs text-neutral-500 font-medium">Prezzo Extra: €0.00</span>
                )}

                <div className="flex items-center gap-3">
                    {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-neutral-950 border border-amber-400/40 rounded-full p-1">
                            <button
                                onClick={onDecrement}
                                className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                            >
                                <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono font-bold text-amber-400 text-sm px-1">{qty}</span>
                            <button
                                onClick={onIncrement}
                                className="p-1.5 rounded-full bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors cursor-pointer"
                            >
                                <Plus className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={onIncrement}
                            className="flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
                        >
                            <Plus className="w-4 h-4 text-amber-400" /> Aggiungi
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DishCard;
```

## File: src/component/Carrello.jsx
```javascript
import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, CheckCircle2, Receipt, Wallet, Users, ChevronLeft, ClipboardList, ChevronRight } from 'lucide-react';

/**
 * Pannello/Modale del carrello.
 *
 * Props:
 * - isOpen: boolean -> se true, il carrello è visibile
 * - onClose: () => void -> chiamato per chiudere il carrello
 * - cart: { [dishId]: quantità }
 * - dishes: array di tutti i piatti (per recuperare nome/prezzo dal dishId)
 * - onIncrement: (dishId) => void
 * - onDecrement: (dishId) => void
 * - onConfirmOrder: (type: 'conto' | 'cassa') => void -> chiamato quando l'utente
 *   conferma la richiesta ("conto" oppure "cassa")
 * - onSendToKitchen: () => void -> chiamato quando l'utente preme "Invia Ordine" nel carrello
 * - orderType: 'all-you-can-eat' | 'alla-carta' -> determina come viene calcolato/mostrato il prezzo
 * - fixedPrice: number -> prezzo fisso totale del tavolo, usato solo se orderType === 'all-you-can-eat'
 * - peopleCount: number -> numero di persone al tavolo, usato solo se orderType === 'all-you-can-eat'
 * - orderHistory: Array<{ id, sentAt, items: [{ id, name, image, price, qty }] }> -> storico degli
 *   ordini già inviati in cucina in questa sessione al tavolo
 */
const Carrello = ({
    isOpen,
    onClose,
    cart,
    dishes,
    onIncrement,
    onDecrement,
    onConfirmOrder,
    onSendToKitchen,
    orderType = 'alla-carta',
    fixedPrice = 0,
    peopleCount,
    orderHistory = [],
}) =>
{
    const [requestType, setRequestType] = useState(null); // null | 'conto' | 'cassa'
    const [activeTab, setActiveTab] = useState('current'); // 'current' | 'history'
    const [selectedOrderId, setSelectedOrderId] = useState(null); // id dell'ordine aperto nel dettaglio
    const [isFinishedPopupOpen, setIsFinishedPopupOpen] = useState(false); // popup "hai finito di mangiare?"

    if (!isOpen) return null;

    const isAllYouCanEat = orderType === 'all-you-can-eat';
    const hasHistory = orderHistory.length > 0;

    // Ricostruisco la lista dei piatti nel carrello con i dettagli completi
    const cartEntries = Object.entries(cart)
        .map(([dishId, qty]) =>
        {
            const dish = dishes.find((d) => d.id === dishId);
            return dish ? { ...dish, qty } : null;
        })
        .filter(Boolean);

    const totalItemsCount = cartEntries.reduce((sum, item) => sum + item.qty, 0);

    // Numero i vari invii (Ordine 1, Ordine 2, ...) e li ordino dal più recente al più vecchio
    const numberedHistory = orderHistory.map((order, i) => ({ ...order, orderNumber: i + 1 }));
    const reversedHistory = [...numberedHistory].reverse();
    const selectedOrder = numberedHistory.find((o) => o.id === selectedOrderId) || null;

    // Totali dello storico ordini già inviati in cucina
    const historyItemsCount = orderHistory.reduce(
        (sum, order) => sum + order.items.reduce((s, item) => s + item.qty, 0),
        0
    );
    const historyPrice = orderHistory.reduce(
        (sum, order) => sum + order.items.reduce((s, item) => s + (Number(item.price) || 0) * item.qty, 0),
        0
    );

    // Prezzo: fisso per il tavolo (All You Can Eat) oppure somma di tutto ciò che
    // è stato ordinato finora, storico incluso (Alla Carta)
    const draftPrice = cartEntries.reduce((sum, item) => sum + (Number(item.price) || 0) * item.qty, 0);
    const totalPrice = isAllYouCanEat ? (Number(fixedPrice) || 0) : historyPrice + draftPrice;

    const handleRequest = (type) =>
    {
        setRequestType(type);
        if (onConfirmOrder) onConfirmOrder(type);
    };

    const handleSendOrder = () =>
    {
        if (cartEntries.length === 0) return;
        if (onSendToKitchen) onSendToKitchen();
    };

    const handleClose = () =>
    {
        setRequestType(null);
        setSelectedOrderId(null);
        setActiveTab('current');
        setIsFinishedPopupOpen(false);
        onClose();
    };

    const handleSelectTab = (tab) =>
    {
        setActiveTab(tab);
        setSelectedOrderId(null);
    };

    const confirmationMessages = {
        conto: 'Un cameriere verrà presto al suo tavolo.',
        cassa: 'Perfetto! Può recarsi in cassa quando vuole per completare il pagamento.',
    };

    // Il footer con prezzo e bottoni di pagamento va mostrato se c'è qualcosa da
    // pagare: bozza corrente, storico ordini già inviati, oppure prezzo fisso (AYCE)
    const showFooter = isAllYouCanEat || cartEntries.length > 0 || hasHistory;

    return (
        <>
            {/* Overlay di sfondo, cliccabile per chiudere */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                onClick={handleClose}
            />

            {/* Pannello carrello */}
            <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-neutral-950 border-l border-neutral-800 z-[70] flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-amber-400" />
                        <h2 className="text-lg font-bold text-neutral-100">Il tuo carrello</h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Banner informativo per il menu All You Can Eat */}
                {isAllYouCanEat && (
                    <div className="mx-6 mt-4 flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium px-4 py-2.5 rounded-2xl">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        <span>
                            Prezzo fisso per {peopleCount} {peopleCount === 1 ? 'persona' : 'persone'} — ordina
                            quanto vuoi, il totale non cambia.
                        </span>
                    </div>
                )}

                {/* Tab switcher: Stai ordinando / Ordini inviati (solo se esiste già uno storico) */}
                {hasHistory && (
                    <div className="mx-6 mt-4 grid grid-cols-2 gap-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-1">
                        <button
                            onClick={() => handleSelectTab('current')}
                            className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${activeTab === 'current'
                                ? 'bg-amber-400 text-neutral-950'
                                : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Stai ordinando {totalItemsCount > 0 ? `(${totalItemsCount})` : ''}
                        </button>
                        <button
                            onClick={() => handleSelectTab('history')}
                            className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${activeTab === 'history'
                                ? 'bg-amber-400 text-neutral-950'
                                : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Ordini inviati ({historyItemsCount})
                        </button>
                    </div>
                )}

                {/* ===================== TAB: STAI ORDINANDO (bozza corrente, editabile) ===================== */}
                {(!hasHistory || activeTab === 'current') && (
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                        {cartEntries.length === 0 ? (
                            <p className="text-sm text-neutral-500 text-center mt-10">
                                {hasHistory
                                    ? 'Nessun nuovo piatto in ordine. Aggiungine altri dal menu!'
                                    : 'Il carrello è vuoto. Aggiungi qualche piatto dal menu!'}
                            </p>
                        ) : (
                            cartEntries.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-3 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-3"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-neutral-100 truncate">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-neutral-500 font-mono">
                                            {isAllYouCanEat ? item.id : `${item.id} · €${(Number(item.price) || 0).toFixed(2)}`}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-neutral-950 border border-amber-400/40 rounded-full p-1 shrink-0">
                                        <button
                                            onClick={() => onDecrement(item.id)}
                                            className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                                        >
                                            <Minus className="w-3.5 h-3.5" />
                                        </button>
                                        <span className="font-mono font-bold text-amber-400 text-sm px-1">
                                            {item.qty}
                                        </span>
                                        <button
                                            onClick={() => onIncrement(item.id)}
                                            className="p-1.5 rounded-full bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors cursor-pointer"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* ===================== TAB: ORDINI INVIATI (storico, sola lettura) ===================== */}
                {hasHistory && activeTab === 'history' && (
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        {!selectedOrder ? (
                            /* Elenco degli invii, dal più recente al più vecchio */
                            <div className="space-y-3">
                                {reversedHistory.map((order) =>
                                {
                                    const orderItemsCount = order.items.reduce((s, item) => s + item.qty, 0);
                                    return (
                                        <button
                                            key={order.id}
                                            onClick={() => setSelectedOrderId(order.id)}
                                            className="w-full flex items-center justify-between gap-3 bg-neutral-900/60 border border-amber-400/40 rounded-2xl p-4 text-left hover:bg-neutral-900 hover:border-amber-400 transition-colors cursor-pointer"
                                        >
                                            <div>
                                                <p className="text-sm font-bold text-amber-400">
                                                    Ordine {order.orderNumber}
                                                </p>
                                                <p className="text-xs text-neutral-500 mt-0.5">
                                                    {orderItemsCount} {orderItemsCount === 1 ? 'piatto' : 'piatti'}
                                                    {order.sentAt instanceof Date && (
                                                        <>
                                                            {' · '}
                                                            {order.sentAt.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-neutral-500 shrink-0" />
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            /* Dettaglio del singolo ordine selezionato */
                            <div className="space-y-4">
                                <button
                                    onClick={() => setSelectedOrderId(null)}
                                    className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-4 h-4" /> Tutti gli ordini
                                </button>

                                <div className="flex items-center gap-2">
                                    <ClipboardList className="w-4 h-4 text-amber-400" />
                                    <h3 className="text-base font-bold text-neutral-100">
                                        Ordine {selectedOrder.orderNumber}
                                    </h3>
                                    {selectedOrder.sentAt instanceof Date && (
                                        <span className="text-xs text-neutral-500 font-mono ml-auto">
                                            {selectedOrder.sentAt.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    {selectedOrder.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-3"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-14 h-14 rounded-xl object-cover shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-neutral-100 truncate">
                                                    {item.name}
                                                </p>
                                                {!isAllYouCanEat && (
                                                    <p className="text-xs text-neutral-500 font-mono">
                                                        €{(Number(item.price) || 0).toFixed(2)} cad.
                                                    </p>
                                                )}
                                            </div>
                                            <span className="font-mono font-bold text-amber-400 text-sm bg-neutral-950 border border-amber-400/40 rounded-full px-3 py-1 shrink-0">
                                                x{item.qty}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Footer con totale e azioni */}
                {showFooter && (
                    <div className="px-6 py-5 border-t border-neutral-800 space-y-4">
                        {cartEntries.length > 0 && (
                            <div className="flex items-center justify-between text-sm text-neutral-400">
                                <span>Piatti da inviare</span>
                                <span className="font-mono font-bold text-neutral-100">{totalItemsCount}</span>
                            </div>
                        )}

                        {hasHistory && (
                            <div className="flex items-center justify-between text-sm text-neutral-400">
                                <span>Piatti totali ordinati</span>
                                <span className="font-mono font-bold text-neutral-100">
                                    {historyItemsCount + totalItemsCount}
                                </span>
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-400">
                                {isAllYouCanEat ? 'Prezzo fisso tavolo' : 'Prezzo'}
                            </span>
                            <span className="font-mono font-bold text-amber-400 text-lg">
                                {totalPrice.toFixed(2)} €
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setIsFinishedPopupOpen(true)}
                                className="w-full bg-neutral-900 border border-amber-400/40 hover:bg-neutral-800 text-neutral-100 font-bold py-3 rounded-2xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Finito di mangiare
                            </button>
                            <button
                                onClick={handleSendOrder}
                                disabled={cartEntries.length === 0}
                                className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed text-neutral-950 font-bold py-3 rounded-2xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20 disabled:shadow-none"
                            >
                                <ShoppingCart className="w-4 h-4" /> Invia Ordine
                            </button>
                        </div>
                    </div>
                )}

                {/* Popup centrale: "Hai finito di mangiare?" -> Richiedi il conto / Paga in Cassa */}
                {isFinishedPopupOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] flex items-center justify-center p-6"
                            onClick={() => !requestType && setIsFinishedPopupOpen(false)}
                        >
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-sm shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {requestType ? (
                                    /* Messaggio di conferma dopo la richiesta */
                                    <div className="flex flex-col items-center text-center gap-3 py-2">
                                        <CheckCircle2 className="w-10 h-10 text-amber-400" />
                                        <p className="text-sm text-neutral-100 font-medium">
                                            {confirmationMessages[requestType]}
                                        </p>
                                        <button
                                            onClick={() => { setRequestType(null); setIsFinishedPopupOpen(false); }}
                                            className="mt-2 text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                                        >
                                            Chiudi
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-neutral-100">Hai finito di mangiare?</h3>
                                            <p className="text-xs text-neutral-400 mt-1">Scegli come vuoi concludere il tuo ordine</p>
                                        </div>

                                        <div className="grid grid-cols-1 gap-3">
                                            <button
                                                onClick={() => handleRequest('conto')}
                                                className="w-full bg-neutral-950 border border-amber-400/40 hover:bg-neutral-800 text-neutral-100 font-bold py-3 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                            >
                                                <Receipt className="w-4 h-4 text-amber-400" /> Richiedi il conto
                                            </button>
                                            <button
                                                onClick={() => handleRequest('cassa')}
                                                className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                                            >
                                                <Wallet className="w-4 h-4" /> Paga in Cassa
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => setIsFinishedPopupOpen(false)}
                                            className="w-full text-center text-xs font-semibold text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                                        >
                                            Annulla, sto ancora mangiando
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Carrello;
```

## File: src/component/HomePage.jsx
```javascript
import React, { useState } from 'react';
import { Infinity, HandCoins, ArrowRight, Users, Sun, Moon, CheckCircle2, X } from 'lucide-react';

const MenuOptionCard = ({ title, description, icon: Icon, price, onSelect, primary = false }) =>
{
  return (
    <button
      onClick={onSelect}
      className={`relative group overflow-hidden rounded-3xl border backdrop-blur-md transition-all duration-300
                 ${primary
          ? 'border-amber-400/80 bg-neutral-950/80 hover:border-amber-300 hover:bg-neutral-900/90'
          : 'border-neutral-700/60 bg-neutral-950/70 hover:border-neutral-500 hover:bg-neutral-900/85'} 
                 p-8 text-left hover:shadow-2xl hover:shadow-amber-950/40
                 w-full flex flex-col justify-between cursor-pointer`}
    >
      {/* Sfondo sfumato sferico al passaggio del mouse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.12),transparent_70%)] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>

      <div>
        <div className="flex items-center gap-5 mb-8">
          <div className={`p-4 rounded-full ${primary ? 'bg-amber-400/15' : 'bg-neutral-800/80'}`}>
            <Icon className={`w-10 h-10 ${primary ? 'text-amber-400' : 'text-neutral-300'}`} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-neutral-50">{title}</h3>
            {price && <p className="text-sm font-medium text-amber-300 mt-1">{price}</p>}
          </div>
        </div>

        <p className="text-xl text-neutral-300 leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      <div className={`mt-12 flex items-center justify-between border-t pt-6 ${primary ? 'border-amber-400/30' : 'border-neutral-800'}`}>
        <span className={`font-semibold tracking-wide ${primary ? 'text-amber-400' : 'text-neutral-100'}`}>
          SELEZIONA MENU
        </span>
        <div className={`p-3 rounded-full ${primary ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-800 text-neutral-200'} 
                        group-hover:translate-x-1 transition-transform`}>
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
    </button>
  );
};

const HomePage = ({ onSelection }) =>
{
  const bgImageUrl = "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Prezzi standard
  const PRICE_PRANZO = 21.90;
  const PRICE_CENA = 28.90;

  // Stato della modale di configurazione All You Can Eat
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [peopleCount, setPeopleCount] = useState(0);
  const [mealType, setMealType] = useState('pranzo');

  const currentPricePerPerson = mealType === 'pranzo' ? PRICE_PRANZO : PRICE_CENA;
  const tableTotal = (currentPricePerPerson * peopleCount).toFixed(2);

  const handleConfirmAllYouCanEat = () =>
  {
    onSelection('all-you-can-eat', {
      peopleCount,
      mealType,
      pricePerPerson: currentPricePerPerson,
      tableTotal: parseFloat(tableTotal)
    });
  };

  return (
    <div
      className="relative min-h-screen text-neutral-100 p-6 md:p-12 font-sans bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >

      {/* Contenuto Principale */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Intestazione */}
        <header className="flex justify-between items-center mb-12 md:mb-16">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-700/60 shadow-lg">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter drop-shadow-xl text-white">
              Sushi <span className="text-amber-400">Zen</span>
            </h1>
          </div>
          <div className="text-sm font-mono p-3 px-5 bg-neutral-900/80 backdrop-blur-md rounded-full border border-neutral-700/60 shadow-lg">
            Tavolo <span className="text-amber-400 font-bold">40</span>
          </div>
        </header>

        {/* Sezione Centrale */}
        <main className="flex flex-col items-center">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-5xl md:text-5xl font-extrabold tracking-tighter leading-tight max-w-3xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] text-white">
              Benvenuto a Sushi Zen. Come desideri <span className="text-amber-400">ordinare</span>?
            </h2>
          </div>

          {/* Griglia Scelte */}
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <MenuOptionCard
              title="Menu All You Can Eat"
              description="Ordina tutti i piatti che desideri, pagando un prezzo fisso per persona. Esplora il nostro intero menu senza limiti. (Bevande escluse)"
              icon={Infinity}
              price={`A Pranzo €${PRICE_PRANZO.toFixed(2)} | A Cena €${PRICE_CENA.toFixed(2)}`}
              onSelect={() => setIsModalOpen(true)}
              primary={true}
            />
            <MenuOptionCard
              title="Menu Alla Carta"
              description="Ordina i tuoi piatti preferiti singolarmente, pagando solo quello che consumi. Perfetto per un pranzo rapido o una scelta specifica."
              icon={HandCoins}
              onSelect={() => onSelection('alla-carta')}
            />
          </div>
        </main>
      </div>

      {/* MODALE DI CONFIGURAZIONE ALL YOU CAN EAT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-neutral-100">

            {/* Tasto Chiudi */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-400/10 rounded-2xl text-amber-400 border border-amber-400/20">
                <Infinity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Configura Tavolo</h3>
                <p className="text-xs text-neutral-400">All You Can Eat</p>
              </div>
            </div>

            {/* SELEZIONE N. PERSONE */}
            <div className="mb-6 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
              <label className="text-sm font-semibold text-neutral-300 flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-amber-400" />
                Quante persone ci sono al tavolo?
              </label>
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() => setPeopleCount((prev) => Math.max(1, prev - 1))}
                  className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 text-2xl font-bold hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="text-3xl font-extrabold text-amber-400 font-mono">
                  {peopleCount} {peopleCount === 1 ? 'Persona' : 'Persone'}
                </span>
                <button
                  onClick={() => setPeopleCount((prev) => prev + 1)}
                  className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 text-2xl font-bold hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* SELEZIONE FASCIA ORARIA */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-neutral-300 block mb-3">
                Seleziona il Menu:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setMealType('pranzo')}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${mealType === 'pranzo'
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400 font-bold'
                      : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:bg-neutral-800/50'
                    }`}
                >
                  <Sun className="w-6 h-6" />
                  <span className="text-sm">Pranzo</span>
                  <span className="text-xs font-mono font-bold">€{PRICE_PRANZO.toFixed(2)} / pers.</span>
                </button>

                <button
                  onClick={() => setMealType('cena')}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${mealType === 'cena'
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400 font-bold'
                      : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:bg-neutral-800/50'
                    }`}
                >
                  <Moon className="w-6 h-6" />
                  <span className="text-sm">Cena</span>
                  <span className="text-xs font-mono font-bold">€{PRICE_CENA.toFixed(2)} / pers.</span>
                </button>
              </div>
            </div>

            {/* RIEPILOGO PREZZO TAVOLO */}
            <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 mb-6 flex justify-between items-center">
              <div>
                <p className="text-xs text-neutral-400">Totale Fisso Tavolo</p>
                <p className="text-xs text-neutral-500">
                  {peopleCount} x €{currentPricePerPerson.toFixed(2)} (Bevande escluse)
                </p>
              </div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono">
                €{tableTotal}
              </div>
            </div>

            {/* TASTO CONFERMA */}
            <button
              onClick={handleConfirmAllYouCanEat}
              className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-4 rounded-2xl text-base transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Conferma e Apri Menu</span>
            </button>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-16 text-center text-neutral-200 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        <p>Utilizzando questa app, accetti le Condizioni di Servizio e l'Informativa sulla Privacy di Sushi Zen SRL.</p>
        <p className="mt-1 font-medium">© 2026 Sushi Zen. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default HomePage;
```

## File: src/component/LoginTablet.jsx
```javascript
import React, { useState } from "react";
import { LockKeyhole, ArrowRight, Infinity, AlertCircle } from "lucide-react";

const LoginTablet = ({ onLoginSuccess }) =>
{

    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const bgImageUrl =
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200";

    const handleLogin = async () =>
    {

        setError("");

        if (!nome || !password)
        {
            setError("Inserisci nome tablet e password");
            return;
        }

        try
        {

            setLoading(true);

            const response = await fetch(
                "http://localhost:8080/api/v1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: nome,
                        password
                    })
                }
            );


            if (!response.ok)
            {
                throw new Error("Credenziali non valide");
            }


            const data = await response.json();


            localStorage.setItem(
                "token",
                data.token
            );


            localStorage.setItem(
                "utente",
                JSON.stringify(data.utente)
            );


            onLoginSuccess({
                token: data.token,
                tavolo: data.utente.tavolo.numero
            });


        } catch (err)
        {

            setError(err.message);

        } finally
        {

            setLoading(false);

        }
    };


    return (

        <div
            className="
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      p-6
      text-neutral-100
      font-sans
      "
            style={{
                backgroundImage: `url(${bgImageUrl})`
            }}
        >

            <div
                className="
        absolute
        inset-0
        bg-black/70
        backdrop-blur-sm
        "
            />


            <div
                className="
        relative
        z-10
        w-full
        max-w-md
        "
            >


                {/* Logo */}

                <div className="flex justify-center mb-8">

                    <div
                        className="
            p-5
            rounded-3xl
            bg-neutral-950/80
            border
            border-neutral-700
            shadow-xl
            "
                    >

                        <Infinity
                            className="
              w-14
              h-14
              text-amber-400
              "
                            strokeWidth={1.5}
                        />

                    </div>

                </div>



                <div
                    className="
          bg-neutral-950/85
          backdrop-blur-md
          border
          border-neutral-800
          rounded-3xl
          p-8
          shadow-2xl
          "
                >


                    <h1
                        className="
            text-4xl
            font-extrabold
            text-center
            tracking-tight
            "
                    >

                        Sushi
                        <span className="text-amber-400">
                            Zen
                        </span>

                    </h1>


                    <p
                        className="
            text-center
            text-neutral-400
            mt-2
            mb-8
            "
                    >

                        Accesso Tablet Tavolo

                    </p>



                    {error && (

                        <div
                            className="
              mb-5
              flex
              gap-3
              items-center
              bg-red-950/40
              border
              border-red-700/50
              text-red-300
              p-4
              rounded-2xl
              text-sm
              "
                        >

                            <AlertCircle
                                className="w-5 h-5"
                            />

                            {error}

                        </div>

                    )}



                    <div className="space-y-5">


                        <div>

                            <label
                                className="
                text-sm
                text-neutral-300
                "
                            >
                                Nome Tablet
                            </label>

                            <input

                                value={nome}

                                onChange={(e) =>
                                    setNome(e.target.value)
                                }

                                placeholder="Tablet Tavolo "

                                className="
                mt-2
                w-full
                bg-neutral-900
                border
                border-neutral-700
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-amber-400
                transition
                "

                            />

                        </div>



                        <div>

                            <label
                                className="
                text-sm
                text-neutral-300
                "
                            >
                                Password
                            </label>


                            <div
                                className="
                relative
                "
                            >

                                <LockKeyhole
                                    className="
                  absolute
                  left-4
                  top-4
                  w-5
                  h-5
                  text-neutral-500
                  "
                                />

                                <input

                                    type="password"

                                    value={password}

                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }

                                    placeholder="Password"

                                    className="
                  mt-2
                  w-full
                  bg-neutral-900
                  border
                  border-neutral-700
                  rounded-2xl
                  pl-12
                  pr-5
                  py-4
                  outline-none
                  focus:border-amber-400
                  transition
                  "

                                />

                            </div>

                        </div>



                        <button

                            onClick={handleLogin}

                            disabled={loading}

                            className="
              w-full
              mt-5
              bg-amber-400
              hover:bg-amber-300
              text-neutral-950
              font-bold
              py-4
              rounded-2xl
              flex
              justify-center
              items-center
              gap-3
              transition
              disabled:opacity-50
              "

                        >

                            {loading
                                ? "Accesso..."
                                :
                                <>
                                    Entra nel Menu
                                    <ArrowRight
                                        className="w-5 h-5"
                                    />
                                </>
                            }


                        </button>


                    </div>


                </div>



                <p
                    className="
          text-center
          text-neutral-400
          text-sm
          mt-8
          "
                >
                    Sushi Zen SRL © 2026
                </p>


            </div>


        </div>

    );

};


export default LoginTablet;
```

## File: src/component/MenuAll.jsx
```javascript
import React, { useState, useEffect } from "react";
import HeaderTablet from "../components/HeaderTablet";
import CategoryFilter from "../components/CategoryFilter";
import DishCardAll from "../components/DishCardAll";
import CartModal from "../components/CartModal";
import SentOrdersDrawer from "../components/SentOrdersDrawer";
import CallWaiterModal from "../components/CallWaiterModal";
import { fetchPiatti, CATEGORIE } from "../services/piattiApi";
import { inviaOrdineBackend } from "../services/ordiniApi";

const MenuAll = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState({});
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [sentOrders, setSentOrders] = useState([]);
  const [isSentOrdersOpen, setIsSentOrdersOpen] = useState(false);

  const [isCallWaiterOpen, setIsCallWaiterOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadDishes = async () => {
      try {
        setLoading(true);
        const data = await fetchPiatti();
        setDishes(data);
      } catch (err) {
        setError("Impossibile caricare il menu. Riprova più tardi.");
        console.error("Errore fetch piatti:", err);
      } finally {
        setLoading(false);
      }
    };
    loadDishes();
  }, []);

  const handleUpdateCart = (dishId, delta) => {
    setCart((prev) => {
      const currentQty = prev[dishId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [dishId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishId]: newQty };
    });
  };

  const handleSendToKitchen = async () => {
    if (totalItemsCount === 0 || isSubmitting) return;

    // Mappa gli elementi presenti nel carrello con i relativi dati del piatto
    const itemsSent = Object.entries(cart)
      .map(([dishId, qty]) => {
        const dish = dishes.find((d) => String(d.id) === String(dishId));
        return dish ? { ...dish, qty } : null;
      })
      .filter(Boolean);

    try {
      setIsSubmitting(true);

      // Recupera le info del tavolo/utente salvate in localStorage
      const utenteSalvato = JSON.parse(localStorage.getItem("utente") || "{}");
      const tavoloId = utenteSalvato.id || utenteSalvato.tavoloId;

      if (!tavoloId) {
        alert("Sessione tablet non valida. Per favore effettua nuovamente il login.");
        return;
      }

      // 1. Invio effettivo dell'ordine al backend
      const nuovoOrdine = await inviaOrdineBackend(tavoloId, itemsSent);

      // 2. Aggiornamento dello storico ordini locale
      setSentOrders((prev) => [
        ...prev,
        {
          id: nuovoOrdine.id,
          sentAt: new Date(),
          items: itemsSent,
        },
      ]);

      // 3. Reset carrello e chiusura modale
      setCart({});
      setIsCartModalOpen(false);
      alert("Ordine inviato in cucina con successo!");
    } catch (err) {
      alert("Errore durante l'invio dell'ordine: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredDishes =
    activeCategory === "all"
      ? dishes
      : dishes.filter((d) => d.category === activeCategory);

  const totalItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col font-sans pb-24">
      <HeaderTablet
        cartCount={totalItemsCount}
        sentOrdersCount={sentOrders.length}
        onOpenCart={() => setIsCartModalOpen(true)}
        onOpenSentOrders={() => setIsSentOrdersOpen(true)}
        onCallWaiter={() => setIsCallWaiterOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <div className="mb-6">
          <CategoryFilter
            categories={CATEGORIE}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {loading && (
          <div className="text-center py-12 text-stone-400">
            Caricamento menu in corso...
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-400">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDishes.map((dish) => (
              <DishCardAll
                key={dish.id}
                dish={dish}
                quantity={cart[dish.id] || 0}
                onUpdateQuantity={(delta) => handleUpdateCart(dish.id, delta)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modale Carrello */}
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cart={cart}
        dishes={dishes}
        onUpdateQuantity={handleUpdateCart}
        onSendToKitchen={handleSendToKitchen}
        isSubmitting={isSubmitting}
      />

      {/* Drawer Ordini Inviati */}
      <SentOrdersDrawer
        isOpen={isSentOrdersOpen}
        onClose={() => setIsSentOrdersOpen(false)}
        sentOrders={sentOrders}
      />

      {/* Modale Chiamata Cameriere */}
      <CallWaiterModal
        isOpen={isCallWaiterOpen}
        onClose={() => setIsCallWaiterOpen(false)}
      />
    </div>
  );
};

export default MenuAll;
```

## File: src/component/MenuCarta.jsx
```javascript
import React, { useState, useEffect } from "react";
import HeaderTablet from "../components/HeaderTablet";
import CategoryFilter from "../components/CategoryFilter";
import DishCardCarta from "../components/DishCardCarta";
import CartModal from "../components/CartModal";
import SentOrdersDrawer from "../components/SentOrdersDrawer";
import CallWaiterModal from "../components/CallWaiterModal";
import { fetchPiatti, CATEGORIE } from "../services/piattiApi";
import { inviaOrdineBackend } from "../services/ordiniApi";

const MenuCarta = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState({});
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [sentOrders, setSentOrders] = useState([]);
  const [isSentOrdersOpen, setIsSentOrdersOpen] = useState(false);

  const [isCallWaiterOpen, setIsCallWaiterOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadDishes = async () => {
      try {
        setLoading(true);
        const data = await fetchPiatti();
        setDishes(data);
      } catch (err) {
        setError("Impossibile caricare il menu. Riprova più tardi.");
        console.error("Errore fetch piatti:", err);
      } finally {
        setLoading(false);
      }
    };
    loadDishes();
  }, []);

  const handleUpdateCart = (dishId, delta) => {
    setCart((prev) => {
      const currentQty = prev[dishId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [dishId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishId]: newQty };
    });
  };

  const handleSendToKitchen = async () => {
    if (totalItemsCount === 0 || isSubmitting) return;

    const itemsSent = Object.entries(cart)
      .map(([dishId, qty]) => {
        const dish = dishes.find((d) => String(d.id) === String(dishId));
        return dish ? { ...dish, qty } : null;
      })
      .filter(Boolean);

    try {
      setIsSubmitting(true);

      const utenteSalvato = JSON.parse(localStorage.getItem("utente") || "{}");
      const tavoloId = utenteSalvato.id || utenteSalvato.tavoloId;

      if (!tavoloId) {
        alert("Sessione tablet non valida. Per favore effettua nuovamente il login.");
        return;
      }

      const nuovoOrdine = await inviaOrdineBackend(tavoloId, itemsSent);

      setSentOrders((prev) => [
        ...prev,
        {
          id: nuovoOrdine.id,
          sentAt: new Date(),
          items: itemsSent,
        },
      ]);

      setCart({});
      setIsCartModalOpen(false);
      alert("Ordine inviato in cucina con successo!");
    } catch (err) {
      alert("Errore durante l'invio dell'ordine: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredDishes =
    activeCategory === "all"
      ? dishes
      : dishes.filter((d) => d.category === activeCategory);

  const totalItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col font-sans pb-24">
      <HeaderTablet
        cartCount={totalItemsCount}
        sentOrdersCount={sentOrders.length}
        onOpenCart={() => setIsCartModalOpen(true)}
        onOpenSentOrders={() => setIsSentOrdersOpen(true)}
        onCallWaiter={() => setIsCallWaiterOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <div className="mb-6">
          <CategoryFilter
            categories={CATEGORIE}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {loading && (
          <div className="text-center py-12 text-stone-400">
            Caricamento menu in corso...
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-400">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDishes.map((dish) => (
              <DishCardCarta
                key={dish.id}
                dish={dish}
                quantity={cart[dish.id] || 0}
                onUpdateQuantity={(delta) => handleUpdateCart(dish.id, delta)}
              />
            ))}
          </div>
        )}
      </main>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cart={cart}
        dishes={dishes}
        onUpdateQuantity={handleUpdateCart}
        onSendToKitchen={handleSendToKitchen}
        isSubmitting={isSubmitting}
      />

      <SentOrdersDrawer
        isOpen={isSentOrdersOpen}
        onClose={() => setIsSentOrdersOpen(false)}
        sentOrders={sentOrders}
      />

      <CallWaiterModal
        isOpen={isCallWaiterOpen}
        onClose={() => setIsCallWaiterOpen(false)}
      />
    </div>
  );
};

export default MenuCarta;
```

## File: src/component/Recensione.jsx
```javascript
import React, { useState } from 'react';
import { 
  Star, 
  X, 
  MessageSquarePlus, 
  ThumbsUp, 
  Send, 
  Check, 
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';

// Tag rapidi per feedback sintetico sul ristorante
const QUICK_TAGS = [
  "Cibo eccezionale",
  "Servizio veloce",
  "Atmosfera rilassante",
  "Pesce freschissimo",
  "Presentazione curata",
  "Ottimo rapporto qualità/prezzo"
];

// Lista di piatti ordinati di esempio da valutare singolarmente (in futuro la passerai come prop)
const DEFAULT_ORDERED_DISHES = [
  { id: 'N01', name: 'Nigiri Salmone', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=200' },
  { id: 'U04', name: 'Uramaki Ebi Tempura', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=200' },
  { id: 'S02', name: 'Sashimi Misto', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=200' }
];

const Recensioni = ({ isOpen = true, onClose, orderedDishes = DEFAULT_ORDERED_DISHES }) => {
  const [activeTab, setActiveTab] = useState('scrivi'); // 'scrivi' | 'leggi'
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [dishRatings, setDishRatings] = useState({});
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Toggle tag veloci, aggiunge o rimuove il tag selezionato
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Imposta valutazione per un singolo piatto
  const handleDishRating = (dishId, score) => {
    setDishRatings(prev => ({ ...prev, [dishId]: score }));
  };

  // Invio recensione (pronto per integrazione API Spring Boot)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reviewData = {
      overallRating: rating,
      tags: selectedTags,
      dishRatings: dishRatings,
      comment: comment,
      tableNumber: 40, // Numero tavolo dinamico
      timestamp: new Date().toISOString()
    };

    console.log("Dati Recensione da inviare al Backend Spring Boot:", reviewData);
    
    // In un'applicazione reale qui faresti una chiamata POST:
    // fetch('/api/v1/reviews', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(reviewData) })

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (onClose) onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Modale */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-100">Valuta Esperienza</h2>
              <p className="text-xs text-neutral-400">La tua opinione aiuta Sushi Zen a migliorare</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Navigazione Tab interni */}
            <div className="bg-neutral-950 p-1 rounded-full border border-neutral-800 flex gap-1">
              <button
                onClick={() => setActiveTab('scrivi')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'scrivi' 
                    ? 'bg-amber-400 text-neutral-950' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Valuta
              </button>
              <button
                onClick={() => setActiveTab('leggi')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'leggi' 
                    ? 'bg-amber-400 text-neutral-950' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Recensioni
              </button>
            </div>

            {/* Tasto Chiusura */}
            {onClose && (
              <button 
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Corpo Modale */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isSubmitted ? (
            /* Messaggio di Conferma Invio */
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-amber-400/20 text-amber-400 border border-amber-400/40 rounded-full flex items-center justify-center animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-100">Grazie per la tua recensione!</h3>
              <p className="text-neutral-400 max-w-md text-sm">
                Il tuo feedback è stato registrato ed è prezioso per tutto lo staff di Sushi Zen.
              </p>
            </div>
          ) : activeTab === 'scrivi' ? (
            /* Form Scrivi Recensione */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Valutazione con Stelle Principale */}
              <div className="text-center bg-neutral-950/60 p-6 rounded-2xl border border-neutral-800/80">
                <p className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                  Come valuti l'esperienza globale?
                </p>
                <div className="flex justify-center items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Star 
                        className={`w-9 h-9 ${
                          (hoverRating || rating) >= star 
                            ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]' 
                            : 'text-neutral-700'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs font-mono text-amber-400 h-4 mt-2 font-medium">
                  {rating === 5 && "Eccellente! 🍣"}
                  {rating === 4 && "Molto Buono! 👍"}
                  {rating === 3 && "Nella Media 😐"}
                  {rating === 2 && "Sotto le aspettative 🙁"}
                  {rating === 1 && "Pessimo 😞"}
                </p>
              </div>

              {/* Tag Rapidi */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Cosa ti è piaciuto in particolare?
                </label>
                <div className="flex flex-wrap gap-2">
                  {QUICK_TAGS.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`text-xs px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400/15 border-amber-400 text-amber-400 font-semibold'
                            : 'bg-neutral-950/40 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Valutazione Piatti Singoli (Se Ordinati) */}
              {orderedDishes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                      Valuta i piatti ordinati
                    </label>
                  </div>

                  <div className="space-y-3">
                    {orderedDishes.map((dish) => (
                      <div 
                        key={dish.id} 
                        className="flex items-center justify-between bg-neutral-950/40 border border-neutral-800 p-3 rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img src={dish.image} alt={dish.name} className="w-10 h-10 rounded-xl object-cover" />
                          <div>
                            <p className="text-sm font-bold text-neutral-200">{dish.name}</p>
                            <span className="text-[10px] font-mono text-neutral-500">{dish.id}</span>
                          </div>
                        </div>

                        {/* Stelle per piatto */}
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => handleDishRating(dish.id, s)}
                              className="p-1 text-neutral-700 hover:text-amber-400 transition-colors cursor-pointer"
                            >
                              <Star className={`w-4 h-4 ${ (dishRatings[dish.id] || 0) >= s ? 'fill-amber-400 text-amber-400' : '' }`} />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Commento Libero */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Commento (Opzionale)
                </label>
                <textarea
                  rows="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Scrivi qui i tuoi consigli o impressioni per lo chef..."
                  className="w-full bg-neutral-950/60 border border-neutral-800 rounded-2xl p-4 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400/60 transition-colors resize-none"
                />
              </div>

              {/* Pulsante Invio */}
              <button
                type="submit"
                disabled={rating === 0}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  rating > 0 
                    ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300 shadow-lg shadow-amber-400/10' 
                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" /> Invia Valutazione
              </button>
            </form>
          ) : (
            /* Tab: Recensioni degli altri Clienti (Vista Statistiche/Social) */
            <div className="space-y-6">
              
              {/* Media Generale */}
              <div className="bg-neutral-950/60 border border-neutral-800 p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-3xl font-extrabold text-neutral-100">4.8 <span className="text-sm font-normal text-neutral-400">/ 5</span></h4>
                  <p className="text-xs text-neutral-400 mt-1">Basato su oltre 340 valutazioni</p>
                </div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Esempi di Recensioni Esistenti */}
              <div className="space-y-4">
                {[
                  { name: "Marco R.", table: "Tavolo 12", rating: 5, date: "Oggi", text: "Sashimi di una freschezza unica. Il servizio è velocissimo nonostante il locale pieno!" },
                  { name: "Giulia M.", table: "Tavolo 08", rating: 5, date: "Ieri", text: "Uramaki fantastici! Il menu All You Can Eat ha una qualità paragonabile alla carta." }
                ].map((rev, idx) => (
                  <div key={idx} className="bg-neutral-950/40 border border-neutral-800/80 p-4 rounded-2xl space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-200">{rev.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">{rev.table}</span>
                      </div>
                      <span className="text-xs text-neutral-500">{rev.date}</span>
                    </div>
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">{rev.text}</p>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Recensioni;
```

## File: src/data/MockMenu.jsx
```javascript
import { Utensils, Wine, Sparkles, Flame } from 'lucide-react';

export const CATEGORIES = [
  { id: 'nuovi', label: 'Nuovi Piatti', icon: Sparkles },
  { id: 'antipasti', label: 'Antipasti', icon: Utensils },
  { id: 'nigiri', label: 'Nigiri & Onigiri', icon: Utensils },
  { id: 'tartare', label: 'Tartare & Carpacci', icon: Flame },
  { id: 'bevande', label: 'Bollicine & Vini', icon: Wine },
];

export const DISHES = [
  {
    id: 'NB6',
    name: 'Dayamondo Tartare',
    category: 'tartare',
    description: 'Tartare di spigola e avocado con salsa leggermente piccante e ponzu',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 'NB5',
    name: 'Iro Puding',
    category: 'antipasti',
    description: 'Puding a base purè di patate, polpa di granchio, avocado e maionese giapponese',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NB4',
    name: 'Rubiniku',
    category: 'tartare',
    description: 'Limone, wakame, tartare di tonno, salsa leggermente piccante e pepe rosa',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NB2',
    name: 'Black Onigiri Sake',
    category: 'nigiri',
    description: 'Riso nero, salmone fritto e salsa yogurt',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=600&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 'NB1',
    name: 'Black Onigiri Ebiten',
    category: 'nigiri',
    description: 'Riso nero, gambero in tempura e salsa yogurt',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NP1',
    name: 'Sumoku Mango',
    category: 'tartare',
    description: 'Salmone affumicato con fette di mango e salsa al mango',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
];
```

## File: src/hooks/usePiatti.js
```javascript
import { useCallback, useEffect, useState } from 'react';
import { fetchPiatti } from '../services/piattiApi';

/**
 * Carica i piatti dal backend in base al tipo di menu.
 * Restituisce { dishes, loading, error, reload }.
 */
const usePiatti = (orderType) =>
{
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() =>
    {
        const controller = new AbortController();
        setLoading(true);
        setError(null);

        fetchPiatti(orderType, controller.signal)
            .then(setDishes)
            .catch((err) =>
            {
                if (err.name !== 'AbortError')
                {
                    setError(err.message || 'Impossibile caricare i piatti');
                }
            })
            .finally(() =>
            {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, [orderType, reloadKey]);

    const reload = useCallback(() => setReloadKey((k) => k + 1), []);

    return { dishes, loading, error, reload };
};

export default usePiatti;
```

## File: src/services/ordiniApi.js
```javascript
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

/**
 * Invia l'ordine al backend Spring Boot.
 * @param {number} tavoloId - ID del tavolo/utente
 * @param {Array} carrelloItems - Lista di oggetti { dbId, qty, ... }
 */
export const inviaOrdineBackend = async (tavoloId, carrelloItems) => {
  const token = localStorage.getItem("token");

  // Costruisce il payload corrispondente a OrdineRequestDTO
  const payload = {
    tavoloId: tavoloId,
    dettagli: carrelloItems.map((item) => ({
      piattoId: item.dbId || item.id, // ID numerico primario del piatto
      quantita: item.qty,
    })),
  };

  const response = await fetch(`${API_URL}/api/v1/ordini`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Errore HTTP ${response.status}`);
  }

  return await response.json();
};
```

## File: src/services/piattiApi.js
```javascript
// Servizio per leggere i piatti dal backend Spring Boot.
// L'URL del backend si può cambiare creando un file .env con:
//   VITE_API_URL=http://localhost:8080
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

const ENDPOINTS = {
  'all-you-can-eat': '/api/piatti/all-you-can-eat',
  'alla-carta': '/api/piatti', // tutto il menu disponibile (bevande incluse)
};

// Immagine di riserva se il piatto non ha immagineUrl nel database
const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">' +
    '<rect width="100%" height="100%" fill="#171717"/>' +
    '<text x="50%" y="50%" fill="#737373" font-family="sans-serif" font-size="22" ' +
    'text-anchor="middle" dominant-baseline="middle">Immagine non disponibile</text>' +
    '</svg>'
  );

/**
 * Converte un Piatto del backend (campi in italiano) nel formato usato
 * dai componenti Card / Carrello / Menu (id, name, description, price, image, category).
 */
export const mapPiatto = (p) => ({
  id: p.codicePiatto && p.codicePiatto.trim() ? p.codicePiatto : String(p.id),
  dbId: p.id,
  name: p.nome,
  description: p.descrizione ?? '',
  price: Number(p.prezzo ?? 0),
  image: p.immagineUrl || FALLBACK_IMAGE,
  category: (p.categoria ?? '').trim().toLowerCase(),
  categoryLabel: (p.categoria ?? '').trim(), // testo originale, per la sidebar
  isNew: false, // non esiste ancora nel database
  isAllYouCanEat: p.isAllYouCanEat ?? p.allYouCanEat ?? null,
});

/**
 * @param {'all-you-can-eat' | 'alla-carta'} orderType
 * @param {AbortSignal} [signal]
 */
export const fetchPiatti = async (orderType, signal) =>
{
  const path = ENDPOINTS[orderType] ?? '/api/piatti';
  const response = await fetch(`${API_URL}${path}`, { signal });

  if (!response.ok)
  {
    throw new Error(`Errore del server (${response.status}) nel caricamento dei piatti`);
  }

  const data = await response.json();
  return data.map(mapPiatto);
};
```

## File: src/services/websocket.js
```javascript
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

export function connettiWebSocket(onOrdineRicevuto) {
  const client = new Client({
    // Invia automaticamente i Cookie HTTP-Only durante la stretta di mano WebSocket/SockJS
    webSocketFactory: () => new SockJS(`${API_BASE}/ws`, null, { withCredentials: true }),
    reconnectDelay: 5000, // Riconnessione automatica in caso di disconnessione
    debug: (str) => {
      // console.log(str); // Scommenta per debug STOMP
    },
  });

  client.onConnect = () => {
    // Sottoscrizione al canale degli ordini
    client.subscribe('/topic/ordini', (message) => {
      if (message.body) {
        const ordine = JSON.parse(message.body);
        onOrdineRicevuto(ordine);
      }
    });
  };

  client.activate();

  // Funzione di pulizia per disconnettersi quando il componente si smonta
  return () => {
    if (client.active) {
      client.deactivate();
    }
  };
}
```

## File: src/App.css
```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

## File: src/App.jsx
```javascript
import { useState } from 'react';
import HomePage from './component/HomePage';
import MenuAll from './component/MenuAll';
import Recensione from './component/Recensione';
import AdminApp from './component/admin/AdminApp';
import MenuAlLaCarta from './component/MenuCarta';
import CucinaApp from './component/cucina/Cucinaapp';

function App()
{
  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [orderConfig, setOrderConfig] = useState(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Se l'URL inizia con /admin, mostriamo l'app dello staff (login + sidebar)
  // invece del flusso cliente. Il tablet al tavolo non ci arriva mai perché
  // non ha motivo di navigare a quell'indirizzo; tu invece lo apri/salvi
  // come preferito sul dispositivo che usi in sala.
  const path = window.location.pathname;
  const isAdminRoute = path === '/admin' || path.startsWith('/admin/');
  const isCucinaRoute = path === '/cucina' || path.startsWith('/cucina/');

  if (isAdminRoute)
  {
    return <AdminApp />;
  }

  // /cucina: app separata per la cucina, con login e schermata propri.
  // Qualsiasi altro URL (es. "/") mostra il flusso cliente (HomePage + menu).
  if (isCucinaRoute)
  {
    return <CucinaApp />;
  }

  // HomePage chiama onSelection('all-you-can-eat', config) oppure onSelection('alla-carta')
  const handleSelection = (type, config) =>
  {
    setSelectedMenuType(type);
    setOrderConfig(config || null);
  };

  const handleBack = () =>
  {
    setSelectedMenuType('');
    setOrderConfig(null);
  };

  return (
    <>
      {/* HomePage: Nessun tasto recensioni */}
      {selectedMenuType === '' && (
        <HomePage
          onSelection={handleSelection}
        />
      )}

      {/* Menu All You Can Eat: Tasto recensioni attivo */}
      {selectedMenuType === 'all-you-can-eat' && (
        <MenuAll
          onBack={handleBack}
          onOpenReviews={() => setIsReviewOpen(true)}
          orderType="all-you-can-eat"
          orderConfig={orderConfig}
        />
      )}

      {/* Menu Alla Carta: Tasto recensioni attivo */}
      {selectedMenuType === 'alla-carta' && (
        //const MenuAlLaCarta = ({ onBack, onOpenReviews, tableNumber = 40 }
        <MenuAlLaCarta
          onBack={handleBack}
          onOpenReviews={() => setIsReviewOpen(true)}
        />
      )}

      {/* Overlay Modale Recensioni */}
      <Recensione
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
      />
    </>
  );
}

export default App;
```

## File: src/index.css
```css
@import "tailwindcss";
```

## File: src/main.jsx
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
```

## File: index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## File: package.json
```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@stomp/stompjs": "^7.3.0",
    "lucide-react": "^1.27.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "sockjs-client": "^1.6.1"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@tailwindcss/vite": "^4.3.3",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "autoprefixer": "^10.5.4",
    "eslint": "^10.6.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.3",
    "globals": "^17.7.0",
    "postcss": "^8.5.23",
    "tailwindcss": "^4.3.3",
    "vite": "^8.1.1"
  }
}
```

## File: README.md
```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```

## File: repomix-output.xml
```xml
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
public/
  favicon.svg
  icons.svg
src/
  assets/
    hero.png
    react.svg
    vite.svg
  component/
    admin/
      AdminApp.jsx
      AdminLayout.jsx
      auth.js
      CodaOrdini.jsx
      DettaglioOrdineTavolo.jsx
      GestioneMenu.jsx
      LoginStaff.jsx
      PianoSala.jsx
    cucina/
      Cucina.jsx
      Cucinaapp.jsx
    Card.jsx
    Carrello.jsx
    HomePage.jsx
    LoginTablet.jsx
    MenuAll.jsx
    MenuCarta.jsx
    Recensione.jsx
  data/
    MockMenu.jsx
  hooks/
    usePiatti.js
  services/
    ordiniApi.js
    piattiApi.js
    websocket.js
  App.css
  App.jsx
  index.css
  main.jsx
.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="public/favicon.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
</file>

<file path="public/icons.svg">
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
</file>

<file path="src/assets/react.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
</file>

<file path="src/assets/vite.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
</file>

<file path="src/component/admin/AdminApp.jsx">
import { useState } from "react";
import LoginStaff from "./LoginStaff";
import AdminLayout from "./AdminLayout";
import PianoSala from "./PianoSala";
import CodaOrdini from "./CodaOrdini";
import GestioneMenu from "./GestioneMenu";
import DettaglioOrdineTavolo from "./DettaglioOrdineTavolo";
import { getUtente, clearSession } from "./auth";

export default function AdminApp()
{
  // Ripristina la sessione dopo un ricarico (se il token non è scaduto)
  const [utente, setUtente] = useState(() => getUtente());
  const [pagina, setPagina] = useState("piano-sala");

  if (!utente)
  {
    return <LoginStaff onLogin={(u) => setUtente(u)} />;
  }

  const logout = () =>
  {
    clearSession();
    setUtente(null);
  };

  const renderPagina = () =>
  {
    switch (pagina)
    {
      case "coda-ordini":
        return <CodaOrdini />;
      case "gestione-menu":
        return <GestioneMenu />;
      case "conto-tavolo":
        return <DettaglioOrdineTavolo />;
      case "piano-sala":
      default:
        return <PianoSala ruolo={utente.ruolo} />;
    }
  };

  return (
    <AdminLayout
      pagina={pagina}
      onNavigate={setPagina}
      onLogout={logout}
      utente={utente}
    >
      {renderPagina()}
    </AdminLayout>
  );
}
</file>

<file path="src/component/admin/AdminLayout.jsx">
import { LayoutGrid, ChefHat, Soup, Receipt, LogOut } from "lucide-react";

const NAV_ITEMS = [
  { id: "piano-sala", label: "Piano sala", icon: LayoutGrid },
  { id: "coda-ordini", label: "Coda ordini", icon: ChefHat },
  { id: "gestione-menu", label: "Gestione menu", icon: Soup },
  { id: "conto-tavolo", label: "Conto tavolo", icon: Receipt },
];

export default function AdminLayout({ pagina, onNavigate, onLogout, utente, children })
{
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-60 shrink-0 bg-neutral-900 border-r border-neutral-800 flex flex-col py-6 px-3">
        <div className="flex items-center gap-3 px-2 mb-8">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
          </svg>
          <span className="hidden lg:block font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
          </span>
        </div>

        <nav className="flex-1 space-y-1.5">
          {NAV_ITEMS.map((item) =>
          {
            const Icon = item.icon;
            const isActive = pagina === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                title={item.label}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-sm font-semibold transition-colors cursor-pointer ${isActive
                    ? "bg-amber-400 text-neutral-950"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
                  }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="hidden lg:block">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-neutral-800 pt-4 px-1">
          {utente?.nome && (
            <p className="hidden lg:block text-xs text-neutral-500 mb-2 truncate">
              {utente.nome}
            </p>
          )}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-semibold text-neutral-400 hover:bg-neutral-800 hover:text-red-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="hidden lg:block">Esci</span>
          </button>
        </div>
      </aside>

      {/* Contenuto */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
</file>

<file path="src/component/admin/auth.js">
// Gestione centralizzata di token JWT e utente loggato.
// Il token sta in localStorage, così sopravvive al ricarico della pagina.

const TOKEN_KEY = "token";
const USER_KEY = "utente";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export function salvaSessione(token, utente)
{
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(utente));
}

export function clearSession()
{
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// Legge la scadenza ("exp") dal payload del JWT, senza verificare la firma (lo fa il backend)
function tokenScaduto(token)
{
  try
  {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    return payload.exp ? payload.exp * 1000 < Date.now() : false;
  } catch
  {
    return true;
  }
}

// Ripristina la sessione al ricarico; se il token è scaduto la elimina
export function getUtente()
{
  const token = getToken();
  if (!token || tokenScaduto(token))
  {
    clearSession();
    return null;
  }
  try
  {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch
  {
    return null;
  }
}
</file>

<file path="src/component/admin/CodaOrdini.jsx">
import { useState, useEffect, useCallback } from "react";
import { ChefHat, Clock, ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "admin:ordini";

const COLONNE = [
  { stato: "IN_INVIATO", label: "Nuovi ordini", accent: "border-amber-400/60", badge: "bg-amber-400/10 text-amber-400 border-amber-400/30" },
  { stato: "IN_PREPARAZIONE", label: "In preparazione", accent: "border-blue-500/50", badge: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  { stato: "SERVITO", label: "Serviti", accent: "border-green-500/50", badge: "bg-green-500/10 text-green-400 border-green-500/30" },
];

const PROSSIMO_STATO = { IN_INVIATO: "IN_PREPARAZIONE", IN_PREPARAZIONE: "SERVITO" };
const AZIONE_LABEL = { IN_INVIATO: "Inizia preparazione", IN_PREPARAZIONE: "Segna come servito" };

function minutiFa(dataOra, now)
{
  const diff = Math.max(0, Math.floor((now - new Date(dataOra).getTime()) / 60000));
  if (diff < 1) return "adesso";
  return `${diff} min fa`;
}

export default function CodaOrdini()
{
  const [ordini, setOrdini] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());

  useEffect(() =>
  {
    const tick = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() =>
  {
    let mounted = true;
    (async () =>
    {
      try
      {
        const res = await window.storage.get(STORAGE_KEY, true);
        if (mounted) setOrdini(res && res.value ? JSON.parse(res.value) : []);
      } catch (e)
      {
        if (mounted) setOrdini([]);
      } finally
      {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const persist = useCallback(async (next) =>
  {
    try
    {
      await window.storage.set(STORAGE_KEY, JSON.stringify(next), true);
    } catch (e)
    {
      console.error("Errore salvataggio ordini", e);
    }
  }, []);

  const avanzaStato = (id) =>
  {
    setOrdini((prev) =>
    {
      const next = prev.map((o) => o.id === id ? { ...o, stato: PROSSIMO_STATO[o.stato] || o.stato } : o);
      persist(next);
      return next;
    });
  };

  const generaOrdineDiProva = () =>
  {
    const numeroTavolo = Math.floor(Math.random() * 20) + 1;
    const esempi = [
      [{ nome: "Nigiri Salmone", quantita: 4 }, { nome: "Uramaki Ebi Tempura", quantita: 2 }],
      [{ nome: "Sashimi Misto", quantita: 1 }, { nome: "Gyoza", quantita: 3 }],
      [{ nome: "Ramen Miso", quantita: 1 }],
    ];
    const nuovo = {
      id: Date.now() + Math.random(),
      tavoloNumero: numeroTavolo,
      stato: "IN_INVIATO",
      dataOra: new Date().toISOString(),
      dettagli: esempi[Math.floor(Math.random() * esempi.length)],
    };
    setOrdini((prev) => { const next = [...prev, nuovo]; persist(next); return next; });
  };

  const attivi = ordini.filter((o) => o.stato !== "PAGATO");
  const nessunOrdine = !loading && attivi.length === 0;

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Coda ordini</h1>
            <p className="text-sm text-neutral-400 m-0">Vista cucina — aggiorna lo stato man mano che prepari</p>
          </div>
        </div>
        {attivi.length > 0 && (
          <span className="text-xs font-mono text-neutral-500">{attivi.length} ordini attivi</span>
        )}
      </div>

      {loading && (
        <p className="text-sm text-neutral-500 text-center py-16">Caricamento ordini...</p>
      )}

      {nessunOrdine && (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-20">
          <Sparkles className="w-8 h-8 text-neutral-700" />
          <p className="text-neutral-400 text-sm">Nessun ordine in coda al momento.</p>
          <button
            onClick={generaOrdineDiProva}
            className="text-xs font-semibold text-amber-400 border border-amber-400/30 bg-amber-400/10 px-4 py-2 rounded-full hover:bg-amber-400/20 transition-colors cursor-pointer"
          >
            Genera ordine di prova
          </button>
        </div>
      )}

      {!nessunOrdine && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COLONNE.map((col) =>
          {
            const ordiniColonna = attivi
              .filter((o) => o.stato === col.stato)
              .sort((a, b) => new Date(a.dataOra) - new Date(b.dataOra));

            return (
              <div key={col.stato} className="bg-neutral-950/50 border border-neutral-800 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-neutral-200">{col.label}</h2>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${col.badge}`}>
                    {ordiniColonna.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {ordiniColonna.length === 0 && (
                    <p className="text-xs text-neutral-600 text-center py-6">Nessun ordine qui</p>
                  )}

                  {ordiniColonna.map((o) => (
                    <div key={o.id} className={`bg-neutral-900 border-l-4 ${col.accent} border border-neutral-800 rounded-2xl p-4`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-neutral-100">Tavolo {o.tavoloNumero}</span>
                        <span className="flex items-center gap-1 text-[11px] text-neutral-500 font-mono">
                          <Clock className="w-3 h-3" /> {minutiFa(o.dataOra, now)}
                        </span>
                      </div>

                      <ul className="space-y-1 mb-3">
                        {o.dettagli.map((d, i) => (
                          <li key={i} className="text-xs text-neutral-300 flex justify-between">
                            <span>{d.nome}</span>
                            <span className="font-mono font-bold text-amber-400">x{d.quantita}</span>
                          </li>
                        ))}
                      </ul>

                      {PROSSIMO_STATO[o.stato] && (
                        <button
                          onClick={() => avanzaStato(o.id)}
                          className="w-full flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-amber-400 hover:text-neutral-950 text-neutral-200 text-xs font-bold py-2 rounded-xl transition-colors cursor-pointer"
                        >
                          {AZIONE_LABEL[o.stato]} <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
</file>

<file path="src/component/admin/DettaglioOrdineTavolo.jsx">
import { useState, useEffect, useCallback } from "react";
import { Receipt, Wallet, CheckCircle2 } from "lucide-react";

const ORDINI_KEY = "admin:ordini";
const TAVOLI_KEY = "floor-plan:tables";

export default function DettaglioOrdineTavolo()
{
  const [ordini, setOrdini] = useState([]);
  const [tavoli, setTavoli] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tavoloSel, setTavoloSel] = useState(null);
  const [confermato, setConfermato] = useState(false);

  useEffect(() =>
  {
    let mounted = true;
    (async () =>
    {
      try
      {
        const [rOrdini, rTavoli] = await Promise.all([
          window.storage.get(ORDINI_KEY, true).catch(() => null),
          window.storage.get(TAVOLI_KEY, true).catch(() => null),
        ]);
        if (!mounted) return;
        setOrdini(rOrdini && rOrdini.value ? JSON.parse(rOrdini.value) : []);
        setTavoli(rTavoli && rTavoli.value ? JSON.parse(rTavoli.value) : []);
      } finally
      {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const persistOrdini = useCallback(async (next) =>
  {
    try { await window.storage.set(ORDINI_KEY, JSON.stringify(next), true); }
    catch (e) { console.error("Errore salvataggio ordini", e); }
  }, []);

  const persistTavoli = useCallback(async (next) =>
  {
    try { await window.storage.set(TAVOLI_KEY, JSON.stringify(next), true); }
    catch (e) { console.error("Errore salvataggio tavoli", e); }
  }, []);

  // Numeri tavolo che hanno almeno un ordine non pagato
  const numeriConOrdini = [...new Set(
    ordini.filter((o) => o.stato !== "PAGATO").map((o) => o.tavoloNumero)
  )].sort((a, b) => a - b);

  const ordiniTavolo = tavoloSel
    ? ordini.filter((o) => o.tavoloNumero === tavoloSel && o.stato !== "PAGATO")
    : [];

  const totaleTavolo = ordiniTavolo.reduce((sum, o) =>
    sum + o.dettagli.reduce((s, d) => s + (Number(d.prezzoUnitario) || 0) * d.quantita, 0), 0);

  const segnaComePagato = () =>
  {
    const next = ordini.map((o) => o.tavoloNumero === tavoloSel && o.stato !== "PAGATO" ? { ...o, stato: "PAGATO" } : o);
    setOrdini(next);
    persistOrdini(next);

    const nextTavoli = tavoli.map((t) => t.numero === tavoloSel ? { ...t, stato: "LIBERO" } : t);
    setTavoli(nextTavoli);
    persistTavoli(nextTavoli);

    setConfermato(true);
    setTimeout(() => { setConfermato(false); setTavoloSel(null); }, 1800);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
          <Receipt className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight m-0">Conto per tavolo</h1>
          <p className="text-sm text-neutral-400 m-0">Consulta gli ordini e chiudi il conto</p>
        </div>
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento...</p>}

      {!loading && numeriConOrdini.length === 0 && (
        <p className="text-sm text-neutral-500 text-center py-20">
          Nessun tavolo ha ordini in sospeso al momento.
        </p>
      )}

      {!loading && numeriConOrdini.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
          {/* Selezione tavolo */}
          <div className="flex md:flex-col gap-2 flex-wrap">
            {numeriConOrdini.map((n) => (
              <button
                key={n}
                onClick={() => setTavoloSel(n)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-colors cursor-pointer text-left ${tavoloSel === n
                  ? "bg-amber-400 text-neutral-950 border-amber-400"
                  : "bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                  }`}
              >
                Tavolo {n}
              </button>
            ))}
          </div>

          {/* Dettaglio */}
          <div className="bg-neutral-950/50 border border-neutral-800 rounded-2xl p-5 min-h-[300px]">
            {!tavoloSel && (
              <p className="text-sm text-neutral-500 text-center py-16">Seleziona un tavolo per vedere il conto.</p>
            )}

            {tavoloSel && confermato && (
              <div className="flex flex-col items-center justify-center text-center gap-3 py-16">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
                <p className="text-sm font-bold text-neutral-100">Tavolo {tavoloSel} saldato</p>
              </div>
            )}

            {tavoloSel && !confermato && (
              <>
                <h2 className="text-sm font-bold text-neutral-200 mb-4">Ordini — Tavolo {tavoloSel}</h2>
                <div className="space-y-4 mb-5">
                  {ordiniTavolo.map((o) => (
                    <div key={o.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-neutral-500">
                          {new Date(o.dataOra).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400">
                          {o.stato.replaceAll("_", " ")}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {o.dettagli.map((d, i) => (
                          <li key={i} className="text-xs text-neutral-300 flex justify-between">
                            <span>{d.quantita}x {d.nome}</span>
                            {d.prezzoUnitario != null && (
                              <span className="font-mono text-neutral-400">
                                €{((Number(d.prezzoUnitario) || 0) * d.quantita).toFixed(2)}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-sm text-neutral-400">Totale conto</span>
                  <span className="text-xl font-mono font-bold text-amber-400">€{totaleTavolo.toFixed(2)}</span>
                </div>

                <button
                  onClick={segnaComePagato}
                  className="w-full mt-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Wallet className="w-4 h-4" /> Segna come pagato
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
</file>

<file path="src/component/admin/GestioneMenu.jsx">
import { useState, useEffect, useRef, useMemo } from "react";
import
  {
    Soup, Plus, Pencil, Trash2, X, Check, Search, EyeOff, Eye,
    Camera, Image as ImageIcon, Loader2,
  } from "lucide-react";

// Con Vite: crea .env con VITE_API_URL=http://localhost:8080
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";
const API = `${API_BASE}/api/piatti`;

const CATEGORIE = ["Nigiri", "Maki", "Uramaki", "Sashimi", "Fritti", "Zuppe", "Dessert", "Bevande"];

/* ---------- helper API ---------- */

// ADATTA: qui va letto il JWT salvato al login (es. localStorage.getItem("token"))
const getToken = () => localStorage.getItem("token");

async function api(path = "", options = {})
{
  const isForm = options.body instanceof FormData;
  const token = getToken();
  const headers = {
    // con FormData il Content-Type lo imposta il browser (serve il boundary)
    ...(isForm ? {} : { "Content-Type": "application/json" }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const res = await fetch(API + path, { ...options, headers });

  if (!res.ok)
  {
    if (res.status === 401 || res.status === 403)
    {
      throw new Error("Sessione scaduta o permessi insufficienti. Esegui di nuovo l'accesso.");
    }
    let msg = res.statusText;
    try
    {
      const data = await res.json();
      msg = data.message || data.error || msg;
    } catch { /* risposta non JSON */ }
    throw new Error(msg || `Errore ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json().catch(() => null);
}

// Le immagini caricate hanno URL relativo (/uploads/...): vanno prefissate col dominio del backend.
// Gli URL esterni (https://...) restano invariati.
const imgSrc = (url) => (url && url.startsWith("/") ? API_BASE + url : url);

// Ridimensiona la foto prima dell'upload (le foto dei telefoni pesano diversi MB)
async function comprimiImmagine(file, maxSide = 1200, quality = 0.8)
{
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Compressione fallita"))), "image/jpeg", quality)
  );
}

/* ---------- componente principale ---------- */

export default function GestioneMenu()
{
  const [piatti, setPiatti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [search, setSearch] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("tutte");
  const [modal, setModal] = useState(null); // { type: 'add' | 'edit', piatto? }

  const carica = () =>
  {
    setLoading(true);
    setLoadError("");
    // /admin restituisce anche i piatti non disponibili
    api("/admin")
      .then(setPiatti)
      .catch((e) => setLoadError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(carica, []);

  const toggleDisponibile = async (id) =>
  {
    const p = piatti.find((x) => x.id === id);
    const nuovo = !p.disponibile;
    setPiatti((prev) => prev.map((x) => (x.id === id ? { ...x, disponibile: nuovo } : x)));
    try
    {
      await api(`/${id}/disponibilita?disponibile=${nuovo}`, { method: "PATCH" });
    } catch (e)
    {
      setPiatti((prev) => prev.map((x) => (x.id === id ? { ...x, disponibile: p.disponibile } : x)));
      alert("Impossibile aggiornare la disponibilità: " + e.message);
    }
  };

  // Lancia un errore se qualcosa va storto: il modal lo mostra senza chiudersi
  const salvaPiatto = async (form, id, fotoBlob) =>
  {
    let immagineUrl = form.immagineUrl.trim() || null;

    // 1) se c'è una nuova foto, la carico e ottengo l'URL
    if (fotoBlob)
    {
      const fd = new FormData();
      fd.append("file", fotoBlob, "piatto.jpg");
      const { url } = await api("/immagine", { method: "POST", body: fd });
      immagineUrl = url;
    }

    // 2) salvo il piatto con l'URL dell'immagine
    const body = JSON.stringify({
      codicePiatto: form.codicePiatto.trim() || null, // "" violerebbe il vincolo unique
      nome: form.nome.trim(),
      descrizione: form.descrizione.trim() || null,
      prezzo: parseFloat(form.prezzo),
      immagineUrl,
      disponibile: id ? piatti.find((p) => p.id === id).disponibile : true,
      isAllYouCanEat: form.isAllYouCanEat,
      categoria: form.categoria,
    });

    if (id)
    {
      const updated = await api(`/${id}`, { method: "PUT", body });
      setPiatti((prev) => prev.map((p) => (p.id === id ? updated : p)));
    } else
    {
      const created = await api("", { method: "POST", body });
      setPiatti((prev) => [...prev, created]);
    }
    setModal(null);
  };

  const eliminaPiatto = async (id) =>
  {
    const p = piatti.find((x) => x.id === id);
    if (!window.confirm(`Eliminare "${p?.nome}"?`)) return;
    try
    {
      await api(`/${id}`, { method: "DELETE" });
      setPiatti((prev) => prev.filter((x) => x.id !== id));
      setModal(null);
    } catch (e)
    {
      alert("Impossibile eliminare il piatto: " + e.message);
    }
  };

  const filtrati = piatti.filter((p) =>
  {
    const matchCategoria = categoriaFiltro === "tutte" || p.categoria === categoriaFiltro;
    const matchSearch = p.nome.toLowerCase().includes(search.toLowerCase());
    return matchCategoria && matchSearch;
  });

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <Soup className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Gestione menu</h1>
            <p className="text-sm text-neutral-400 m-0">{piatti.length} piatti nel menu</p>
          </div>
        </div>
        <button
          onClick={() => setModal({ type: "add" })}
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold px-4 py-2.5 rounded-2xl text-sm transition-colors cursor-pointer"
        >
          <Plus size={16} /> Nuovo piatto
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Cerca piatto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-full pl-10 pr-4 py-2.5 text-sm placeholder-neutral-600 outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>
        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="bg-neutral-950 border border-neutral-800 rounded-full px-4 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
        >
          <option value="tutte">Tutte le categorie</option>
          {CATEGORIE.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento menu...</p>}

      {!loading && loadError && (
        <div className="text-center py-16 text-sm">
          <p className="text-red-400 mb-3">Impossibile caricare il menu: {loadError}</p>
          <button
            onClick={carica}
            className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2 text-sm cursor-pointer hover:bg-neutral-700 transition-colors"
          >
            Riprova
          </button>
        </div>
      )}

      {!loading && !loadError && filtrati.length === 0 && (
        <div className="text-center py-20 text-neutral-500 text-sm">
          {piatti.length === 0
            ? 'Nessun piatto configurato. Premi "Nuovo piatto" per iniziare.'
            : "Nessun piatto corrisponde alla ricerca."}
        </div>
      )}

      {filtrati.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtrati.map((p) => (
            <div
              key={p.id}
              className={`bg-neutral-950/50 border rounded-2xl overflow-hidden flex flex-col ${p.disponibile ? "border-neutral-800" : "border-neutral-800 opacity-50"}`}
            >
              <div className="h-32 w-full bg-neutral-900 overflow-hidden relative">
                {p.immagineUrl ? (
                  <img src={imgSrc(p.immagineUrl)} alt={p.nome} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-700">
                    <Soup className="w-8 h-8" />
                  </div>
                )}
                <span className="absolute top-2 left-2 bg-neutral-950/80 backdrop-blur text-amber-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                  {p.categoria}
                </span>
                {p.codicePiatto && (
                  <span className="absolute top-2 right-2 bg-neutral-950/80 backdrop-blur text-neutral-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-neutral-700">
                    {p.codicePiatto}
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-neutral-100 leading-tight">{p.nome}</h3>
                  <span className="text-sm font-mono font-bold text-amber-400 shrink-0">
                    €{Number(p.prezzo).toFixed(2)}
                  </span>
                </div>
                {p.descrizione && (
                  <p className="text-xs text-neutral-500 mt-1.5 line-clamp-2">{p.descrizione}</p>
                )}

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-800">
                  <button
                    onClick={() => toggleDisponibile(p.id)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-colors cursor-pointer ${p.disponibile
                      ? "text-green-400 border-green-500/30 bg-green-500/10"
                      : "text-neutral-500 border-neutral-700 bg-neutral-900"
                      }`}
                  >
                    {p.disponibile ? <Eye size={13} /> : <EyeOff size={13} />}
                    {p.disponibile ? "Disponibile" : "Non disponibile"}
                  </button>
                  <button
                    onClick={() => setModal({ type: "edit", piatto: p })}
                    className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 hover:border-amber-400/30 transition-colors cursor-pointer"
                    aria-label={`Modifica ${p.nome}`}
                  >
                    <Pencil size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <PiattoModal
          modal={modal}
          onCancel={() => setModal(null)}
          onSave={salvaPiatto}
          onDelete={eliminaPiatto}
        />
      )}
    </div>
  );
}

/* ---------- modal ---------- */

function PiattoModal({ modal, onCancel, onSave, onDelete })
{
  const isEdit = modal.type === "edit";
  const p = modal.piatto;

  const [form, setForm] = useState({
    codicePiatto: isEdit ? (p.codicePiatto || "") : "",
    nome: isEdit ? p.nome : "",
    descrizione: isEdit ? (p.descrizione || "") : "",
    prezzo: isEdit ? p.prezzo : "",
    categoria: isEdit ? p.categoria : CATEGORIE[0],
    immagineUrl: isEdit ? (p.immagineUrl || "") : "",
    isAllYouCanEat: isEdit ? (p.isAllYouCanEat ?? true) : true,
  });

  // La foto scattata resta in locale e viene caricata solo al "Salva":
  // se l'admin annulla, sul server non resta nessun file orfano.
  const [fotoBlob, setFotoBlob] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const cameraRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => () => { if (fotoPreview) URL.revokeObjectURL(fotoPreview); }, [fotoPreview]);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // Se il piatto ha una categoria non presente nell'elenco, la mostro comunque
  const categorie = useMemo(
    () => (form.categoria && !CATEGORIE.includes(form.categoria) ? [form.categoria, ...CATEGORIE] : CATEGORIE),
    [form.categoria]
  );

  const onFotoScelta = async (e) =>
  {
    const file = e.target.files?.[0];
    e.target.value = ""; // permette di scegliere di nuovo lo stesso file
    if (!file) return;
    setError("");
    try
    {
      const blob = await comprimiImmagine(file);
      setFotoBlob(blob);
      setFotoPreview(URL.createObjectURL(blob));
    } catch
    {
      setError("Non riesco a leggere questa foto. Prova con un'altra.");
    }
  };

  const rimuoviFoto = () =>
  {
    setFotoBlob(null);
    setFotoPreview(null);
    setForm((f) => ({ ...f, immagineUrl: "" }));
  };

  const anteprima = fotoPreview || imgSrc(form.immagineUrl);

  const salva = async () =>
  {
    if (!form.nome.trim()) return setError("Inserisci il nome del piatto");
    if (form.prezzo === "" || Number(form.prezzo) < 0) return setError("Inserisci un prezzo valido");
    setSaving(true);
    setError("");
    try
    {
      await onSave(form, isEdit ? p.id : null, fotoBlob);
    } catch (e)
    {
      setError(e.message);
      setSaving(false);
    }
  };

  const inputCls = "w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors";

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget && !saving) onCancel(); }}
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-md shadow-2xl my-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold m-0">{isEdit ? `Modifica ${p.nome}` : "Nuovo piatto"}</h2>
          <button
            onClick={onCancel}
            disabled={saving}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Chiudi"
          >
            <X size={18} />
          </button>
        </div>

        {/* Foto */}
        <div className="mb-4">
          <label className="block text-xs text-neutral-400 mb-1.5">Foto del piatto</label>
          <div className="relative h-36 w-full rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden flex items-center justify-center">
            {anteprima ? (
              <img src={anteprima} alt="Anteprima" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-neutral-600">Nessuna foto</span>
            )}

            {anteprima && !saving && (
              <button
                type="button"
                onClick={rimuoviFoto}
                className="absolute bottom-2 left-2 p-2 rounded-full bg-neutral-900/80 text-red-400 border border-neutral-700 cursor-pointer"
                aria-label="Rimuovi foto"
              >
                <Trash2 size={15} />
              </button>
            )}

            <div className="absolute bottom-2 right-2 flex gap-2">
              <button
                type="button"
                onClick={() => galleryRef.current?.click()}
                disabled={saving}
                className="p-2.5 rounded-full bg-neutral-900/80 text-neutral-200 border border-neutral-700 hover:bg-neutral-800 disabled:opacity-50 cursor-pointer"
                aria-label="Scegli dalla galleria"
              >
                <ImageIcon size={18} />
              </button>
              <button
                type="button"
                onClick={() => cameraRef.current?.click()}
                disabled={saving}
                className="p-2.5 rounded-full bg-amber-400 text-neutral-950 shadow-lg hover:bg-amber-300 disabled:opacity-50 cursor-pointer"
                aria-label="Scatta foto"
              >
                <Camera size={18} />
              </button>
            </div>
          </div>

          {/* capture="environment" apre la fotocamera posteriore su telefono/tablet */}
          <input ref={cameraRef} type="file" accept="image/*" capture="environment" onChange={onFotoScelta} className="hidden" />
          <input ref={galleryRef} type="file" accept="image/*" onChange={onFotoScelta} className="hidden" />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="col-span-1">
            <label className="block text-xs text-neutral-400 mb-1.5">Codice</label>
            <input
              type="text" maxLength={10} placeholder="Es. S01"
              value={form.codicePiatto} onChange={set("codicePiatto")}
              className={inputCls}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs text-neutral-400 mb-1.5">Nome piatto</label>
            <input type="text" maxLength={100} value={form.nome} onChange={set("nome")} className={inputCls} />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Descrizione</label>
          <textarea rows="2" value={form.descrizione} onChange={set("descrizione")} className={`${inputCls} resize-none`} />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs text-neutral-400 mb-1.5">Prezzo (€)</label>
            <input type="number" step="0.01" min="0" value={form.prezzo} onChange={set("prezzo")} className={inputCls} />
          </div>
          <div>
            <label className="block text-xs text-neutral-400 mb-1.5">Categoria</label>
            <select value={form.categoria} onChange={set("categoria")} className={inputCls}>
              {categorie.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <label className="flex items-center gap-2 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={form.isAllYouCanEat}
            onChange={(e) => setForm((f) => ({ ...f, isAllYouCanEat: e.target.checked }))}
            className="w-4 h-4 accent-amber-400"
          />
          <span className="text-xs text-neutral-300">Incluso nel menu All You Can Eat</span>
        </label>

        {error && (
          <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2 mb-3">
            {error}
          </p>
        )}

        <div className="flex gap-2">
          <button
            onClick={onCancel}
            disabled={saving}
            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl py-2.5 text-sm font-medium cursor-pointer hover:bg-neutral-700 transition-colors disabled:opacity-50"
          >
            Annulla
          </button>
          <button
            onClick={salva}
            disabled={saving}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl py-2.5 text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors disabled:opacity-60"
          >
            {saving ? (
              <><Loader2 size={15} className="animate-spin" /> Salvataggio...</>
            ) : isEdit ? (
              <><Check size={15} /> Salva</>
            ) : (
              <><Plus size={15} /> Aggiungi</>
            )}
          </button>
        </div>

        {isEdit && (
          <button
            onClick={() => onDelete(p.id)}
            disabled={saving}
            className="w-full mt-2 border border-red-500/60 text-red-400 rounded-xl py-2 text-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-500/10 transition-colors disabled:opacity-50"
          >
            <Trash2 size={14} /> Elimina piatto
          </button>
        )}
      </div>
    </div>
  );
}
</file>

<file path="src/component/admin/LoginStaff.jsx">
import { useState } from "react";
import { Lock, User, KeyRound, LogIn } from "lucide-react";

export default function LoginStaff({ onLogin })
{
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [errore, setErrore] = useState("");

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    if (!nome.trim() || !password)
    {
      setErrore("Inserisci nome utente e password");
      return;
    }
    setErrore("");

    try
    {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: nome, // Modifica in "nome" se il DTO Spring si aspetta 'nome'
          password: password,
        }),
      });

      if (!response.ok)
      {
        throw new Error("Credenziali non valide");
      }

      const data = await response.json();
      // Supponendo che il backend risponda con { token: "eyJhbG..." } oppure { jwt: "..." }
      const token = data.token || data.jwt || data.accessToken;

      if (token)
      {
        localStorage.setItem("token", token); // Salva il token con la chiave "token"
      }

      onLogin(data);
    } catch (err)
    {
      console.error("Errore login:", err);
      setErrore("Nome utente o password errati");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg mb-4">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
          </h1>
          <p className="text-xs text-neutral-500 mt-1">Area riservata al personale</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 space-y-4">
          <div>
            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
              <User size={13} /> Nome utente
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
              <KeyRound size={13} /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
              autoComplete="current-password"
            />
          </div>

          {errore && <p className="text-xs text-red-400">{errore}</p>}

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <LogIn size={16} /> Accedi
          </button>
        </form>

        <p className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-600 mt-5">
          <Lock size={11} /> Accesso protetto — solo personale autorizzato
        </p>
      </div>
    </div>
  );
}
</file>

<file path="src/component/admin/PianoSala.jsx">
import { useState, useEffect, useRef } from "react";
import { Pencil, Check, Plus, Trash2, X, Lock, LayoutGrid } from "lucide-react";

const API_URL = "http://localhost:8080/api/tavoli";

const STATO_LABEL = {
  LIBERO: "Libero",
  OCCUPATO: "Occupato",
  IN_PAGAMENTO: "In pagamento",
  PRENOTATO: "Prenotato",
};

const STATO_BORDER = {
  LIBERO: "border-green-500",
  OCCUPATO: "border-red-500",
  IN_PAGAMENTO: "border-amber-500",
  PRENOTATO: "border-blue-500",
};

const STATO_DOT = {
  LIBERO: "bg-green-500",
  OCCUPATO: "bg-red-500",
  IN_PAGAMENTO: "bg-amber-500",
  PRENOTATO: "bg-blue-500",
};

const CICLO_TAP = ["LIBERO", "OCCUPATO", "IN_PAGAMENTO"];

// Helper per costruire gli header con il token JWT
const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // Assicurati che la chiave combaci con dove salvi il JWT al login
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

// Se la risposta non è ok, legge il body del backend per avere un messaggio utile
const throwIfNotOk = async (res, fallbackMessage) => {
  if (res.ok) return;
  let dettaglio = "";
  try {
    dettaglio = await res.text();
  } catch {
    /* ignora */
  }
  throw new Error(`${fallbackMessage} (${res.status}) ${dettaglio}`);
};

export default function PianoSala({ ruolo = "ROLE_ADMIN" }) {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [modal, setModal] = useState(null);
  const floorRef = useRef(null);
  const dragInfo = useRef(null);

  // 1. Caricamento iniziale tavoli
  useEffect(() => {
    let isMounted = true;
    async function loadTavoli() {
      try {
        const response = await fetch(API_URL, { headers: getAuthHeaders() });
        await throwIfNotOk(response, "Errore nel recupero tavoli");
        const data = await response.json();
        if (isMounted) setTables(data);
      } catch (err) {
        console.error("Errore di caricamento:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadTavoli();
    return () => {
      isMounted = false;
    };
  }, []);

  // Calcolo dei contatori per stato
  const counts = tables.reduce((acc, t) => {
    acc[t.stato] = (acc[t.stato] || 0) + 1;
    return acc;
  }, {});

  const nextNumero = () => {
    const usati = tables.map((t) => t.numero).sort((a, b) => a - b);
    let n = 1;
    for (const u of usati) {
      if (u === n) n++;
      else break;
    }
    return n;
  };

  // 2. Cambio stato al tap
  const cicloStato = async (id) => {
    const tavoloCorrente = tables.find((t) => t.id === id);
    if (!tavoloCorrente) return;

    const idx = CICLO_TAP.indexOf(tavoloCorrente.stato);
    const nuovoStato = CICLO_TAP[(idx + 1) % CICLO_TAP.length];

    try {
      const res = await fetch(`${API_URL}/${id}/stato`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ stato: nuovoStato }),
      });
      await throwIfNotOk(res, "Errore durante l'aggiornamento dello stato");
      const tavoloAggiornato = await res.json();

      setTables((prev) => prev.map((t) => (t.id === id ? tavoloAggiornato : t)));
    } catch (err) {
      console.error("Errore modifica stato:", err);
      alert("Impossibile aggiornare lo stato del tavolo");
    }
  };

  const handleFloorPointerDown = (e) => {
    if (!editMode || e.target !== floorRef.current) return;
    const rect = floorRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;
    x = Math.max(6, Math.min(94, x));
    y = Math.max(8, Math.min(92, y));
    setModal({ type: "add", x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
  };

  // FIX: dragInfo va impostato SEMPRE (anche fuori da editMode),
  // altrimenti nel pointerUp il tap per cambiare stato non parte mai.
  const handleTablePointerDown = (e, table) => {
    e.stopPropagation();
    dragInfo.current = {
      id: table.id,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
      x: table.x,
      y: table.y,
    };
    if (editMode) e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleTablePointerMove = (e, table) => {
    const info = dragInfo.current;
    if (!editMode || !info || info.id !== table.id) return;
    const dx = e.clientX - info.startX;
    const dy = e.clientY - info.startY;
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
      info.moved = true;
      const rect = floorRef.current.getBoundingClientRect();
      let x = ((e.clientX - rect.left) / rect.width) * 100;
      let y = ((e.clientY - rect.top) / rect.height) * 100;
      x = Math.round(Math.max(6, Math.min(94, x)) * 10) / 10;
      y = Math.round(Math.max(8, Math.min(92, y)) * 10) / 10;
      // Salvo l'ultima posizione nel ref: è quella da mandare al backend
      info.x = x;
      info.y = y;
      setTables((prev) => prev.map((t) => (t.id === table.id ? { ...t, x, y } : t)));
    }
  };

  // 3. Salvataggio nuova posizione dopo Drag & Drop
  const handleTablePointerUp = async (e, table) => {
    const info = dragInfo.current;
    dragInfo.current = null;
    if (!info || info.id !== table.id) return;

    if (info.moved) {
      try {
        const res = await fetch(`${API_URL}/${table.id}/posizione`, {
          method: "PATCH",
          headers: getAuthHeaders(),
          body: JSON.stringify({ x: info.x, y: info.y }),
        });
        await throwIfNotOk(res, "Errore salvataggio posizione");
      } catch (err) {
        console.error("Errore salvataggio posizione:", err);
        alert("Impossibile salvare la nuova posizione del tavolo");
      }
    } else if (editMode) {
      setModal({ type: "edit", table });
    } else {
      cicloStato(table.id);
    }
  };

  // 4. Creazione nuovo tavolo
  const saveNewTable = async (form) => {
    const numero = parseInt(form.numero, 10);
    if (!numero) return;

    if (tables.some((t) => t.numero === numero)) {
      alert("Esiste già un tavolo con questo numero");
      return;
    }

    const nuovoTavoloDTO = {
      numero,
      sala: form.sala.trim(),
      posti: parseInt(form.posti, 10) || null,
      x: modal.x,
      y: modal.y,
      stato: "LIBERO",
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(nuovoTavoloDTO),
      });
      await throwIfNotOk(res, "Errore salvataggio tavolo");
      const salvato = await res.json();

      setTables((prev) => [...prev, salvato]);
      setModal(null);
    } catch (err) {
      console.error("Errore durante la creazione del tavolo:", err);
      alert("Impossibile creare il tavolo");
    }
  };

  // 5. Modifica dati tavolo esistente
  const saveEditTable = async (id, form) => {
    const numero = parseInt(form.numero, 10);
    if (!numero) return;
    if (tables.some((t) => t.numero === numero && t.id !== id)) {
      alert("Esiste già un tavolo con questo numero");
      return;
    }

    // Uso `tables` (non modal.table) perché contiene le coordinate più recenti dopo un drag
    const tavoloCorrente = tables.find((t) => t.id === id);
    if (!tavoloCorrente) return;

    // FIX: x e y sono @NotNull nel DTO backend, quindi vanno sempre inviate
    const tavoloModificatoDTO = {
      numero,
      sala: form.sala.trim(),
      posti: parseInt(form.posti, 10) || null,
      stato: form.stato,
      x: tavoloCorrente.x,
      y: tavoloCorrente.y,
    };

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(tavoloModificatoDTO),
      });
      await throwIfNotOk(res, "Errore aggiornamento tavolo");
      const salvato = await res.json();

      setTables((prev) => prev.map((t) => (t.id === id ? salvato : t)));
      setModal(null);
    } catch (err) {
      console.error("Errore durante la modifica del tavolo:", err);
      alert("Impossibile modificare il tavolo");
    }
  };

  // 6. Cancellazione tavolo
  const deleteTable = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      await throwIfNotOk(res, "Errore eliminazione tavolo");

      setTables((prev) => prev.filter((t) => t.id !== id));
      setModal(null);
    } catch (err) {
      console.error("Errore eliminazione:", err);
      alert("Impossibile eliminare il tavolo");
    }
  };

  // FIX: il controllo sul ruolo sta DOPO tutti gli hook (regole degli hook di React)
  if (ruolo !== "ROLE_ADMIN") {
    return (
      <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-8 min-h-[300px] flex flex-col items-center justify-center text-center gap-2">
        <Lock size={28} className="text-neutral-600 mb-1" />
        <p className="font-bold m-0">Sezione riservata al personale</p>
        <p className="text-sm text-neutral-400 m-0">
          Il piano sala è visibile solo dal lato ristorante, non dai tablet dei tavoli.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Piano sala</h1>
            <p className="text-sm text-neutral-400 m-0">
              {editMode
                ? "Tocca la pianta per aggiungere un tavolo, trascina per spostarlo"
                : "Tocca un tavolo per cambiarne lo stato"}
            </p>
          </div>
        </div>
        <button
          onClick={() => setEditMode((v) => !v)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold border transition-colors cursor-pointer ${
            editMode
              ? "bg-amber-400 text-neutral-950 border-amber-400"
              : "bg-neutral-800 text-neutral-100 border-neutral-700 hover:bg-neutral-700"
          }`}
        >
          {editMode ? <Check size={16} /> : <Pencil size={16} />}
          {editMode ? "Fine modifica" : "Modifica pianta"}
        </button>
      </div>

      <div className="flex gap-4 flex-wrap text-xs text-neutral-400 mb-3">
        {Object.entries(STATO_LABEL).map(([key, label]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full inline-block ${STATO_DOT[key]}`} />
            {label}
          </span>
        ))}
      </div>

      {tables.length > 0 && (
        <div className="text-xs text-neutral-500 font-mono mb-3">
          {CICLO_TAP.concat("PRENOTATO").map((k, i) => (
            <span key={k}>
              {i > 0 && " · "}
              {counts[k] || 0} {STATO_LABEL[k].toLowerCase()}
            </span>
          ))}
        </div>
      )}

      <div
        ref={floorRef}
        onPointerDown={handleFloorPointerDown}
        className={`relative w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 overflow-hidden ${
          editMode ? "cursor-crosshair" : ""
        }`}
        style={{
          height: "62vh",
          minHeight: 420,
          backgroundImage: "radial-gradient(#292929 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          touchAction: "none",
        }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm">
            Caricamento pianta...
          </div>
        )}

        {!loading && tables.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-center text-neutral-500 text-sm px-6 pointer-events-none">
            {editMode
              ? "Nessun tavolo configurato. Tocca un punto della pianta per aggiungere il primo tavolo."
              : 'Nessun tavolo configurato. Attiva "Modifica pianta" per iniziare.'}
          </div>
        )}

        {tables.map((t) => (
          <div
            key={t.id}
            onPointerDown={(e) => handleTablePointerDown(e, t)}
            onPointerMove={(e) => handleTablePointerMove(e, t)}
            onPointerUp={(e) => handleTablePointerUp(e, t)}
            className={`absolute flex flex-col items-center justify-center rounded-xl bg-neutral-900 border-4 shadow-lg cursor-pointer select-none ${STATO_BORDER[t.stato]}`}
            style={{
              left: `${t.x}%`,
              top: `${t.y}%`,
              width: "clamp(76px, 10vw, 104px)",
              height: "clamp(56px, 7.5vw, 76px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-lg font-bold leading-none text-neutral-50">{t.numero}</span>
            <span className="text-[10px] text-neutral-500 mt-1">{t.posti || "-"} posti</span>
          </div>
        ))}
      </div>

      {modal && (
        <TableModal
          modal={modal}
          nextNumero={nextNumero}
          onCancel={() => setModal(null)}
          onSaveNew={saveNewTable}
          onSaveEdit={saveEditTable}
          onDelete={deleteTable}
        />
      )}
    </div>
  );
}

function TableModal({ modal, nextNumero, onCancel, onSaveNew, onSaveEdit, onDelete }) {
  const isEdit = modal.type === "edit";
  const table = modal.table;
  const [form, setForm] = useState({
    numero: isEdit ? table.numero : nextNumero(),
    sala: isEdit ? table.sala || "" : "",
    posti: isEdit ? table.posti || "" : 4,
    stato: isEdit ? table.stato : "LIBERO",
  });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-xs shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold m-0">
            {isEdit ? `Modifica tavolo ${table.numero}` : "Nuovo tavolo"}
          </h2>
          <button
            onClick={onCancel}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Numero tavolo</label>
          <input
            type="number"
            min="1"
            value={form.numero}
            onChange={set("numero")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Sala (opzionale)</label>
          <input
            type="text"
            placeholder="Es. Terrazza"
            value={form.sala}
            onChange={set("sala")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Posti a sedere</label>
          <input
            type="number"
            min="1"
            value={form.posti}
            onChange={set("posti")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        {isEdit && (
          <div className="mb-4">
            <label className="block text-xs text-neutral-400 mb-1.5">Stato</label>
            <select
              value={form.stato}
              onChange={set("stato")}
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
            >
              {Object.entries(STATO_LABEL).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex gap-2 mt-2">
          <button
            onClick={onCancel}
            className="flex-1 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl py-2.5 text-sm font-medium cursor-pointer hover:bg-neutral-700 transition-colors"
          >
            Annulla
          </button>
          <button
            onClick={() => (isEdit ? onSaveEdit(table.id, form) : onSaveNew(form))}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl py-2.5 text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            {isEdit ? (
              <>
                <Check size={15} /> Salva
              </>
            ) : (
              <>
                <Plus size={15} /> Aggiungi
              </>
            )}
          </button>
        </div>

        {isEdit && (
          <button
            onClick={() => onDelete(table.id)}
            className="w-full mt-2 border border-red-500/60 text-red-400 rounded-xl py-2 text-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-500/10 transition-colors"
          >
            <Trash2 size={14} /> Elimina tavolo
          </button>
        )}
      </div>
    </div>
  );
}
</file>

<file path="src/component/cucina/Cucina.jsx">
import { useState, useEffect, useCallback, useMemo } from "react";
import { ChefHat, Clock, Sparkles, Send, Flame, CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import { connettiWebSocket } from "../../services/websocket";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

const SOGLIA_GIALLO = 10;
const SOGLIA_ROSSO = 15;

const STATI = {
  INVIATO: { label: "Inviato", icon: Send, active: "bg-amber-400 text-neutral-950 border-amber-400", badge: "bg-amber-400/10 text-amber-400 border-amber-400/30" },
  IN_PREPARAZIONE: { label: "In preparazione", icon: Flame, active: "bg-blue-500 text-white border-blue-500", badge: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  SERVITO: { label: "Servito", icon: CheckCircle2, active: "bg-green-500 text-neutral-950 border-green-500", badge: "bg-green-500/10 text-green-400 border-green-500/30" },
  PAGATO: { label: "Pagato", icon: XCircle, active: "bg-red-500 text-white border-red-500", badge: "bg-red-500/10 text-red-400 border-red-500/30" },
};

const ORDINE_BOTTONI = ["INVIATO", "IN_PREPARAZIONE", "SERVITO"];
const STATI_CHIUSI = ["SERVITO", "PAGATO"];

const FILTRI = [
  { id: "attivi", label: "Attivi", match: (o) => o.stato === "INVIATO" || o.stato === "IN_PREPARAZIONE" },
  { id: "serviti", label: "Serviti", match: (o) => o.stato === "SERVITO" || o.stato === "PAGATO" },
  { id: "tutti", label: "Tutti", match: () => true },
];

const URGENZA = {
  nuovo: { card: "border-t-blue-500", timer: "bg-blue-500/15 text-blue-300 border-blue-500/40", label: "Appena arrivato" },
  medio: { card: "border-t-yellow-400", timer: "bg-yellow-400/15 text-yellow-300 border-yellow-400/40", label: "In attesa" },
  urgente: { card: "border-t-red-500", timer: "bg-red-500/20 text-red-300 border-red-500/50 animate-pulse", label: "Fermo da troppo" },
  chiuso: { card: "border-t-neutral-700", timer: "bg-neutral-800 text-neutral-400 border-neutral-700", label: "Chiuso" },
};

function livelloUrgenza(ordine, now) {
  if (STATI_CHIUSI.includes(ordine.stato)) return "chiuso";
  const minuti = (now - new Date(ordine.dataOra).getTime()) / 60000;
  if (minuti < SOGLIA_GIALLO) return "nuovo";
  if (minuti < SOGLIA_ROSSO) return "medio";
  return "urgente";
}

function formattaTimer(ordine, now) {
  const fine = STATI_CHIUSI.includes(ordine.stato) ? new Date(ordine.dataOra).getTime() : now;
  const sec = Math.max(0, Math.floor((now - new Date(ordine.dataOra).getTime()) / 1000));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function Cucina() {
  const [ordini, setOrdini] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());
  const [filtro, setFiltro] = useState("attivi");

  // Timer per aggiornamento UI ogni secondo
  useEffect(() => {
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, []);

  // 1. Caricamento iniziale ordini da Backend REST
  const caricaOrdiniIniziali = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE}/api/v1/ordini/stato/INVIATO`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (res.ok) {
        const datiInviati = await res.json();
        const resPrep = await fetch(`${API_BASE}/api/v1/ordini/stato/IN_PREPARAZIONE`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const datiPrep = resPrep.ok ? await resPrep.json() : [];
        setOrdini([...datiInviati, ...datiPrep]);
      }
    } catch (e) {
      console.error("Errore caricamento ordini iniziali", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    caricaOrdiniIniziali();

    // 2. Connessione WEBSOCKET in tempo reale!
    const disconnetti = connettiWebSocket((nuovoOAggiornatoOrdine) => {
      setOrdini((prev) => {
        const esiste = prev.some((o) => o.id === nuovoOAggiornatoOrdine.id);
        if (esiste) {
          return prev.map((o) => (o.id === nuovoOAggiornatoOrdine.id ? nuovoOAggiornatoOrdine : o));
        } else {
          return [nuovoOAggiornatoOrdine, ...prev]; // Nuovo ordine in cima
        }
      });
    });

    return () => disconnetti();
  }, [caricaOrdiniIniziali]);

  // Aggiorna lo stato dell'ordine al backend (che a sua volta re-invia via WS)
  const cambiaStato = async (ordine, nuovoStato) => {
    if (ordine.stato === nuovoStato) return;

    try {
      const token = localStorage.getItem("token");
      await fetch(`${API_BASE}/api/v1/ordini/${ordine.id}/stato`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ stato: nuovoStato }),
      });
    } catch (e) {
      console.error("Errore aggiornamento stato ordine", e);
    }
  };

  const conteggi = useMemo(
    () => Object.fromEntries(FILTRI.map((f) => [f.id, ordini.filter(f.match).length])),
    [ordini]
  );

  const visibili = useMemo(() => {
    const f = FILTRI.find((x) => x.id === filtro);
    return ordini
      .filter(f.match)
      .sort((a, b) => new Date(b.dataOra) - new Date(a.dataOra));
  }, [ordini, filtro]);

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Cucina (Live WebSocket)</h1>
            <p className="text-sm text-neutral-400 m-0">Comande in tempo reale dai tablet</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> WebSocket attivo
          </span>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-5">
        {FILTRI.map((f) => (
          <button
            key={f.id}
            onClick={() => setFiltro(f.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
              filtro === f.id
                ? "bg-amber-400 text-neutral-950 border-amber-400"
                : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700"
            }`}
          >
            {f.label} <span className="font-mono opacity-70">({conteggi[f.id]})</span>
          </button>
        ))}
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento ordini...</p>}

      {!loading && visibili.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-20">
          <Sparkles className="w-8 h-8 text-neutral-700" />
          <p className="text-neutral-400 text-sm">Nessun ordine in questa vista. In attesa dai tablet...</p>
        </div>
      )}

      {!loading && visibili.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {visibili.map((o) => {
            const urg = URGENZA[livelloUrgenza(o, now)];
            const statoInfo = STATI[o.stato];
            const chiuso = STATI_CHIUSI.includes(o.stato);

            return (
              <div
                key={o.id}
                className={`bg-neutral-950/60 border border-neutral-800 border-t-4 ${urg.card} rounded-2xl p-4 flex flex-col ${chiuso ? "opacity-70" : ""}`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-lg font-bold leading-tight m-0">Tavolo {o.numeroTavolo || o.tavoloId}</h3>
                    <p className="text-[11px] text-neutral-500 font-mono m-0 mt-0.5">
                      Ricevuto alle {new Date(o.dataOra).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  <span className={`flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-1.5 rounded-full border ${urg.timer}`}>
                    <Clock className="w-3.5 h-3.5" /> {formattaTimer(o, now)}
                  </span>
                </div>

                {statoInfo && (
                  <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mt-2 ${statoInfo.badge}`}>
                    {statoInfo.label}
                  </span>
                )}

                <ul className="space-y-1.5 my-4 flex-1">
                  {o.dettagli?.map((d, i) => (
                    <li key={i} className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-sm">
                      <span className="text-neutral-200">{d.piatto?.nome || `Piatto #${d.piattoId}`}</span>
                      <span className="font-mono font-bold text-amber-400">x{d.quantita}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-2">
                  {ORDINE_BOTTONI.map((s) => {
                    const info = STATI[s];
                    const Icon = info.icon;
                    const attivo = o.stato === s;
                    return (
                      <button
                        key={s}
                        onClick={() => cambiaStato(o, s)}
                        className={`flex items-center justify-center gap-1 text-[11px] font-bold py-2 rounded-xl border transition-colors cursor-pointer ${
                          attivo
                            ? info.active
                            : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600"
                        }`}
                      >
                        <Icon className="w-3 h-3" /> {info.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
</file>

<file path="src/component/cucina/Cucinaapp.jsx">
import { useState } from "react";
import { LogOut } from "lucide-react";
import LoginStaff from "../admin/LoginStaff";
import { getUtente, clearSession } from "../admin/auth";
import Cucina from "./Cucina";

// App dedicata alla cucina, raggiungibile da /cucina.
// Ha login e schermata propri, senza la sidebar dell'area admin
// (cassa, gestione menu, piano sala).
export default function CucinaApp()
{
  const [utente, setUtente] = useState(() => getUtente());

  if (!utente)
  {
    return <LoginStaff onLogin={(u) => setUtente(u)} />;
  }

  const logout = () =>
  {
    clearSession();
    setUtente(null);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Barra superiore */}
      <header className="shrink-0 bg-neutral-900 border-b border-neutral-800 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
          </svg>
          <span className="font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
            <span className="ml-2 text-xs font-semibold text-neutral-500 tracking-normal">Cucina</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {utente?.nome && <span className="hidden sm:block text-xs text-neutral-500">{utente.nome}</span>}
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-2 rounded-2xl text-sm font-semibold text-neutral-400 hover:bg-neutral-800 hover:text-red-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Esci
          </button>
        </div>
      </header>

      {/* Contenuto a tutta larghezza */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-screen-2xl mx-auto">
          <Cucina />
        </div>
      </main>
    </div>
  );
}
</file>

<file path="src/component/Card.jsx">
import React from 'react';
import { Plus, Minus } from 'lucide-react';

/**
 * Card di un singolo piatto del menu.
 *
 * Props:
 * - dish: { id, name, description, price, image, isNew }
 * - qty: quantità attualmente nel carrello per questo piatto
 * - onIncrement: () => void  -> chiamato per aggiungere 1 unità
 * - onDecrement: () => void  -> chiamato per togliere 1 unità
 * - orderType: 'all-you-can-eat' | 'alla-carta' -> con 'alla-carta' mostra il
 *   prezzo reale del piatto, altrimenti "Prezzo Extra: €0.00"
 */
const DishCard = ({ dish, qty = 0, onIncrement, onDecrement, orderType = 'all-you-can-eat' }) =>
{
    const isAlLaCarta = orderType === 'alla-carta';

    return (
        <div
            className={`relative group bg-neutral-900/80 border rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300
        ${qty > 0 ? 'border-amber-400/80 shadow-lg shadow-amber-950/20' : 'border-neutral-800 hover:border-neutral-700'}`}
        >
            <div>
                <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                    <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                    <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-400 border border-amber-400/30 text-xs font-mono font-bold px-2.5 py-1 rounded-full">
                        {dish.id}
                    </span>

                    {dish.isNew && (
                        <span className="absolute top-3 right-3 bg-amber-400 text-neutral-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                            Nuovo
                        </span>
                    )}
                </div>

                <div className="p-5">
                    <h3 className="text-lg font-bold text-neutral-50 tracking-tight">{dish.name}</h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                        {dish.description}
                    </p>
                </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between border-t border-neutral-800/60 mt-4">
                {isAlLaCarta ? (
                    <span className="text-lg text-amber-400 font-mono font-bold">
                        €{Number(dish.price).toFixed(2)}
                    </span>
                ) : (
                    <span className="text-xs text-neutral-500 font-medium">Prezzo Extra: €0.00</span>
                )}

                <div className="flex items-center gap-3">
                    {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-neutral-950 border border-amber-400/40 rounded-full p-1">
                            <button
                                onClick={onDecrement}
                                className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                            >
                                <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono font-bold text-amber-400 text-sm px-1">{qty}</span>
                            <button
                                onClick={onIncrement}
                                className="p-1.5 rounded-full bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors cursor-pointer"
                            >
                                <Plus className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={onIncrement}
                            className="flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
                        >
                            <Plus className="w-4 h-4 text-amber-400" /> Aggiungi
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DishCard;
</file>

<file path="src/component/Carrello.jsx">
import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, CheckCircle2, Receipt, Wallet, Users, ChevronLeft, ClipboardList, ChevronRight } from 'lucide-react';

/**
 * Pannello/Modale del carrello.
 *
 * Props:
 * - isOpen: boolean -> se true, il carrello è visibile
 * - onClose: () => void -> chiamato per chiudere il carrello
 * - cart: { [dishId]: quantità }
 * - dishes: array di tutti i piatti (per recuperare nome/prezzo dal dishId)
 * - onIncrement: (dishId) => void
 * - onDecrement: (dishId) => void
 * - onConfirmOrder: (type: 'conto' | 'cassa') => void -> chiamato quando l'utente
 *   conferma la richiesta ("conto" oppure "cassa")
 * - onSendToKitchen: () => void -> chiamato quando l'utente preme "Invia Ordine" nel carrello
 * - orderType: 'all-you-can-eat' | 'alla-carta' -> determina come viene calcolato/mostrato il prezzo
 * - fixedPrice: number -> prezzo fisso totale del tavolo, usato solo se orderType === 'all-you-can-eat'
 * - peopleCount: number -> numero di persone al tavolo, usato solo se orderType === 'all-you-can-eat'
 * - orderHistory: Array<{ id, sentAt, items: [{ id, name, image, price, qty }] }> -> storico degli
 *   ordini già inviati in cucina in questa sessione al tavolo
 */
const Carrello = ({
    isOpen,
    onClose,
    cart,
    dishes,
    onIncrement,
    onDecrement,
    onConfirmOrder,
    onSendToKitchen,
    orderType = 'alla-carta',
    fixedPrice = 0,
    peopleCount,
    orderHistory = [],
}) =>
{
    const [requestType, setRequestType] = useState(null); // null | 'conto' | 'cassa'
    const [activeTab, setActiveTab] = useState('current'); // 'current' | 'history'
    const [selectedOrderId, setSelectedOrderId] = useState(null); // id dell'ordine aperto nel dettaglio
    const [isFinishedPopupOpen, setIsFinishedPopupOpen] = useState(false); // popup "hai finito di mangiare?"

    if (!isOpen) return null;

    const isAllYouCanEat = orderType === 'all-you-can-eat';
    const hasHistory = orderHistory.length > 0;

    // Ricostruisco la lista dei piatti nel carrello con i dettagli completi
    const cartEntries = Object.entries(cart)
        .map(([dishId, qty]) =>
        {
            const dish = dishes.find((d) => d.id === dishId);
            return dish ? { ...dish, qty } : null;
        })
        .filter(Boolean);

    const totalItemsCount = cartEntries.reduce((sum, item) => sum + item.qty, 0);

    // Numero i vari invii (Ordine 1, Ordine 2, ...) e li ordino dal più recente al più vecchio
    const numberedHistory = orderHistory.map((order, i) => ({ ...order, orderNumber: i + 1 }));
    const reversedHistory = [...numberedHistory].reverse();
    const selectedOrder = numberedHistory.find((o) => o.id === selectedOrderId) || null;

    // Totali dello storico ordini già inviati in cucina
    const historyItemsCount = orderHistory.reduce(
        (sum, order) => sum + order.items.reduce((s, item) => s + item.qty, 0),
        0
    );
    const historyPrice = orderHistory.reduce(
        (sum, order) => sum + order.items.reduce((s, item) => s + (Number(item.price) || 0) * item.qty, 0),
        0
    );

    // Prezzo: fisso per il tavolo (All You Can Eat) oppure somma di tutto ciò che
    // è stato ordinato finora, storico incluso (Alla Carta)
    const draftPrice = cartEntries.reduce((sum, item) => sum + (Number(item.price) || 0) * item.qty, 0);
    const totalPrice = isAllYouCanEat ? (Number(fixedPrice) || 0) : historyPrice + draftPrice;

    const handleRequest = (type) =>
    {
        setRequestType(type);
        if (onConfirmOrder) onConfirmOrder(type);
    };

    const handleSendOrder = () =>
    {
        if (cartEntries.length === 0) return;
        if (onSendToKitchen) onSendToKitchen();
    };

    const handleClose = () =>
    {
        setRequestType(null);
        setSelectedOrderId(null);
        setActiveTab('current');
        setIsFinishedPopupOpen(false);
        onClose();
    };

    const handleSelectTab = (tab) =>
    {
        setActiveTab(tab);
        setSelectedOrderId(null);
    };

    const confirmationMessages = {
        conto: 'Un cameriere verrà presto al suo tavolo.',
        cassa: 'Perfetto! Può recarsi in cassa quando vuole per completare il pagamento.',
    };

    // Il footer con prezzo e bottoni di pagamento va mostrato se c'è qualcosa da
    // pagare: bozza corrente, storico ordini già inviati, oppure prezzo fisso (AYCE)
    const showFooter = isAllYouCanEat || cartEntries.length > 0 || hasHistory;

    return (
        <>
            {/* Overlay di sfondo, cliccabile per chiudere */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                onClick={handleClose}
            />

            {/* Pannello carrello */}
            <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-neutral-950 border-l border-neutral-800 z-[70] flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-amber-400" />
                        <h2 className="text-lg font-bold text-neutral-100">Il tuo carrello</h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Banner informativo per il menu All You Can Eat */}
                {isAllYouCanEat && (
                    <div className="mx-6 mt-4 flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium px-4 py-2.5 rounded-2xl">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        <span>
                            Prezzo fisso per {peopleCount} {peopleCount === 1 ? 'persona' : 'persone'} — ordina
                            quanto vuoi, il totale non cambia.
                        </span>
                    </div>
                )}

                {/* Tab switcher: Stai ordinando / Ordini inviati (solo se esiste già uno storico) */}
                {hasHistory && (
                    <div className="mx-6 mt-4 grid grid-cols-2 gap-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-1">
                        <button
                            onClick={() => handleSelectTab('current')}
                            className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${activeTab === 'current'
                                ? 'bg-amber-400 text-neutral-950'
                                : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Stai ordinando {totalItemsCount > 0 ? `(${totalItemsCount})` : ''}
                        </button>
                        <button
                            onClick={() => handleSelectTab('history')}
                            className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${activeTab === 'history'
                                ? 'bg-amber-400 text-neutral-950'
                                : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Ordini inviati ({historyItemsCount})
                        </button>
                    </div>
                )}

                {/* ===================== TAB: STAI ORDINANDO (bozza corrente, editabile) ===================== */}
                {(!hasHistory || activeTab === 'current') && (
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                        {cartEntries.length === 0 ? (
                            <p className="text-sm text-neutral-500 text-center mt-10">
                                {hasHistory
                                    ? 'Nessun nuovo piatto in ordine. Aggiungine altri dal menu!'
                                    : 'Il carrello è vuoto. Aggiungi qualche piatto dal menu!'}
                            </p>
                        ) : (
                            cartEntries.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-3 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-3"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-neutral-100 truncate">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-neutral-500 font-mono">
                                            {isAllYouCanEat ? item.id : `${item.id} · €${(Number(item.price) || 0).toFixed(2)}`}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-neutral-950 border border-amber-400/40 rounded-full p-1 shrink-0">
                                        <button
                                            onClick={() => onDecrement(item.id)}
                                            className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                                        >
                                            <Minus className="w-3.5 h-3.5" />
                                        </button>
                                        <span className="font-mono font-bold text-amber-400 text-sm px-1">
                                            {item.qty}
                                        </span>
                                        <button
                                            onClick={() => onIncrement(item.id)}
                                            className="p-1.5 rounded-full bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors cursor-pointer"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* ===================== TAB: ORDINI INVIATI (storico, sola lettura) ===================== */}
                {hasHistory && activeTab === 'history' && (
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        {!selectedOrder ? (
                            /* Elenco degli invii, dal più recente al più vecchio */
                            <div className="space-y-3">
                                {reversedHistory.map((order) =>
                                {
                                    const orderItemsCount = order.items.reduce((s, item) => s + item.qty, 0);
                                    return (
                                        <button
                                            key={order.id}
                                            onClick={() => setSelectedOrderId(order.id)}
                                            className="w-full flex items-center justify-between gap-3 bg-neutral-900/60 border border-amber-400/40 rounded-2xl p-4 text-left hover:bg-neutral-900 hover:border-amber-400 transition-colors cursor-pointer"
                                        >
                                            <div>
                                                <p className="text-sm font-bold text-amber-400">
                                                    Ordine {order.orderNumber}
                                                </p>
                                                <p className="text-xs text-neutral-500 mt-0.5">
                                                    {orderItemsCount} {orderItemsCount === 1 ? 'piatto' : 'piatti'}
                                                    {order.sentAt instanceof Date && (
                                                        <>
                                                            {' · '}
                                                            {order.sentAt.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-neutral-500 shrink-0" />
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            /* Dettaglio del singolo ordine selezionato */
                            <div className="space-y-4">
                                <button
                                    onClick={() => setSelectedOrderId(null)}
                                    className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-4 h-4" /> Tutti gli ordini
                                </button>

                                <div className="flex items-center gap-2">
                                    <ClipboardList className="w-4 h-4 text-amber-400" />
                                    <h3 className="text-base font-bold text-neutral-100">
                                        Ordine {selectedOrder.orderNumber}
                                    </h3>
                                    {selectedOrder.sentAt instanceof Date && (
                                        <span className="text-xs text-neutral-500 font-mono ml-auto">
                                            {selectedOrder.sentAt.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    {selectedOrder.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-3"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-14 h-14 rounded-xl object-cover shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-neutral-100 truncate">
                                                    {item.name}
                                                </p>
                                                {!isAllYouCanEat && (
                                                    <p className="text-xs text-neutral-500 font-mono">
                                                        €{(Number(item.price) || 0).toFixed(2)} cad.
                                                    </p>
                                                )}
                                            </div>
                                            <span className="font-mono font-bold text-amber-400 text-sm bg-neutral-950 border border-amber-400/40 rounded-full px-3 py-1 shrink-0">
                                                x{item.qty}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Footer con totale e azioni */}
                {showFooter && (
                    <div className="px-6 py-5 border-t border-neutral-800 space-y-4">
                        {cartEntries.length > 0 && (
                            <div className="flex items-center justify-between text-sm text-neutral-400">
                                <span>Piatti da inviare</span>
                                <span className="font-mono font-bold text-neutral-100">{totalItemsCount}</span>
                            </div>
                        )}

                        {hasHistory && (
                            <div className="flex items-center justify-between text-sm text-neutral-400">
                                <span>Piatti totali ordinati</span>
                                <span className="font-mono font-bold text-neutral-100">
                                    {historyItemsCount + totalItemsCount}
                                </span>
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-400">
                                {isAllYouCanEat ? 'Prezzo fisso tavolo' : 'Prezzo'}
                            </span>
                            <span className="font-mono font-bold text-amber-400 text-lg">
                                {totalPrice.toFixed(2)} €
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setIsFinishedPopupOpen(true)}
                                className="w-full bg-neutral-900 border border-amber-400/40 hover:bg-neutral-800 text-neutral-100 font-bold py-3 rounded-2xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Finito di mangiare
                            </button>
                            <button
                                onClick={handleSendOrder}
                                disabled={cartEntries.length === 0}
                                className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed text-neutral-950 font-bold py-3 rounded-2xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20 disabled:shadow-none"
                            >
                                <ShoppingCart className="w-4 h-4" /> Invia Ordine
                            </button>
                        </div>
                    </div>
                )}

                {/* Popup centrale: "Hai finito di mangiare?" -> Richiedi il conto / Paga in Cassa */}
                {isFinishedPopupOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] flex items-center justify-center p-6"
                            onClick={() => !requestType && setIsFinishedPopupOpen(false)}
                        >
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-sm shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {requestType ? (
                                    /* Messaggio di conferma dopo la richiesta */
                                    <div className="flex flex-col items-center text-center gap-3 py-2">
                                        <CheckCircle2 className="w-10 h-10 text-amber-400" />
                                        <p className="text-sm text-neutral-100 font-medium">
                                            {confirmationMessages[requestType]}
                                        </p>
                                        <button
                                            onClick={() => { setRequestType(null); setIsFinishedPopupOpen(false); }}
                                            className="mt-2 text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                                        >
                                            Chiudi
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-neutral-100">Hai finito di mangiare?</h3>
                                            <p className="text-xs text-neutral-400 mt-1">Scegli come vuoi concludere il tuo ordine</p>
                                        </div>

                                        <div className="grid grid-cols-1 gap-3">
                                            <button
                                                onClick={() => handleRequest('conto')}
                                                className="w-full bg-neutral-950 border border-amber-400/40 hover:bg-neutral-800 text-neutral-100 font-bold py-3 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                            >
                                                <Receipt className="w-4 h-4 text-amber-400" /> Richiedi il conto
                                            </button>
                                            <button
                                                onClick={() => handleRequest('cassa')}
                                                className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                                            >
                                                <Wallet className="w-4 h-4" /> Paga in Cassa
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => setIsFinishedPopupOpen(false)}
                                            className="w-full text-center text-xs font-semibold text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                                        >
                                            Annulla, sto ancora mangiando
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Carrello;
</file>

<file path="src/component/HomePage.jsx">
import React, { useState } from 'react';
import { Infinity, HandCoins, ArrowRight, Users, Sun, Moon, CheckCircle2, X } from 'lucide-react';

const MenuOptionCard = ({ title, description, icon: Icon, price, onSelect, primary = false }) =>
{
  return (
    <button
      onClick={onSelect}
      className={`relative group overflow-hidden rounded-3xl border backdrop-blur-md transition-all duration-300
                 ${primary
          ? 'border-amber-400/80 bg-neutral-950/80 hover:border-amber-300 hover:bg-neutral-900/90'
          : 'border-neutral-700/60 bg-neutral-950/70 hover:border-neutral-500 hover:bg-neutral-900/85'} 
                 p-8 text-left hover:shadow-2xl hover:shadow-amber-950/40
                 w-full flex flex-col justify-between cursor-pointer`}
    >
      {/* Sfondo sfumato sferico al passaggio del mouse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.12),transparent_70%)] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>

      <div>
        <div className="flex items-center gap-5 mb-8">
          <div className={`p-4 rounded-full ${primary ? 'bg-amber-400/15' : 'bg-neutral-800/80'}`}>
            <Icon className={`w-10 h-10 ${primary ? 'text-amber-400' : 'text-neutral-300'}`} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-neutral-50">{title}</h3>
            {price && <p className="text-sm font-medium text-amber-300 mt-1">{price}</p>}
          </div>
        </div>

        <p className="text-xl text-neutral-300 leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      <div className={`mt-12 flex items-center justify-between border-t pt-6 ${primary ? 'border-amber-400/30' : 'border-neutral-800'}`}>
        <span className={`font-semibold tracking-wide ${primary ? 'text-amber-400' : 'text-neutral-100'}`}>
          SELEZIONA MENU
        </span>
        <div className={`p-3 rounded-full ${primary ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-800 text-neutral-200'} 
                        group-hover:translate-x-1 transition-transform`}>
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
    </button>
  );
};

const HomePage = ({ onSelection }) =>
{
  const bgImageUrl = "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Prezzi standard
  const PRICE_PRANZO = 21.90;
  const PRICE_CENA = 28.90;

  // Stato della modale di configurazione All You Can Eat
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [peopleCount, setPeopleCount] = useState(0);
  const [mealType, setMealType] = useState('pranzo');

  const currentPricePerPerson = mealType === 'pranzo' ? PRICE_PRANZO : PRICE_CENA;
  const tableTotal = (currentPricePerPerson * peopleCount).toFixed(2);

  const handleConfirmAllYouCanEat = () =>
  {
    onSelection('all-you-can-eat', {
      peopleCount,
      mealType,
      pricePerPerson: currentPricePerPerson,
      tableTotal: parseFloat(tableTotal)
    });
  };

  return (
    <div
      className="relative min-h-screen text-neutral-100 p-6 md:p-12 font-sans bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >

      {/* Contenuto Principale */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Intestazione */}
        <header className="flex justify-between items-center mb-12 md:mb-16">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-700/60 shadow-lg">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter drop-shadow-xl text-white">
              Sushi <span className="text-amber-400">Zen</span>
            </h1>
          </div>
          <div className="text-sm font-mono p-3 px-5 bg-neutral-900/80 backdrop-blur-md rounded-full border border-neutral-700/60 shadow-lg">
            Tavolo <span className="text-amber-400 font-bold">40</span>
          </div>
        </header>

        {/* Sezione Centrale */}
        <main className="flex flex-col items-center">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-5xl md:text-5xl font-extrabold tracking-tighter leading-tight max-w-3xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] text-white">
              Benvenuto a Sushi Zen. Come desideri <span className="text-amber-400">ordinare</span>?
            </h2>
          </div>

          {/* Griglia Scelte */}
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <MenuOptionCard
              title="Menu All You Can Eat"
              description="Ordina tutti i piatti che desideri, pagando un prezzo fisso per persona. Esplora il nostro intero menu senza limiti. (Bevande escluse)"
              icon={Infinity}
              price={`A Pranzo €${PRICE_PRANZO.toFixed(2)} | A Cena €${PRICE_CENA.toFixed(2)}`}
              onSelect={() => setIsModalOpen(true)}
              primary={true}
            />
            <MenuOptionCard
              title="Menu Alla Carta"
              description="Ordina i tuoi piatti preferiti singolarmente, pagando solo quello che consumi. Perfetto per un pranzo rapido o una scelta specifica."
              icon={HandCoins}
              onSelect={() => onSelection('alla-carta')}
            />
          </div>
        </main>
      </div>

      {/* MODALE DI CONFIGURAZIONE ALL YOU CAN EAT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-neutral-100">

            {/* Tasto Chiudi */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-400/10 rounded-2xl text-amber-400 border border-amber-400/20">
                <Infinity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Configura Tavolo</h3>
                <p className="text-xs text-neutral-400">All You Can Eat</p>
              </div>
            </div>

            {/* SELEZIONE N. PERSONE */}
            <div className="mb-6 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
              <label className="text-sm font-semibold text-neutral-300 flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-amber-400" />
                Quante persone ci sono al tavolo?
              </label>
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() => setPeopleCount((prev) => Math.max(1, prev - 1))}
                  className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 text-2xl font-bold hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="text-3xl font-extrabold text-amber-400 font-mono">
                  {peopleCount} {peopleCount === 1 ? 'Persona' : 'Persone'}
                </span>
                <button
                  onClick={() => setPeopleCount((prev) => prev + 1)}
                  className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 text-2xl font-bold hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* SELEZIONE FASCIA ORARIA */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-neutral-300 block mb-3">
                Seleziona il Menu:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setMealType('pranzo')}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${mealType === 'pranzo'
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400 font-bold'
                      : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:bg-neutral-800/50'
                    }`}
                >
                  <Sun className="w-6 h-6" />
                  <span className="text-sm">Pranzo</span>
                  <span className="text-xs font-mono font-bold">€{PRICE_PRANZO.toFixed(2)} / pers.</span>
                </button>

                <button
                  onClick={() => setMealType('cena')}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${mealType === 'cena'
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400 font-bold'
                      : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:bg-neutral-800/50'
                    }`}
                >
                  <Moon className="w-6 h-6" />
                  <span className="text-sm">Cena</span>
                  <span className="text-xs font-mono font-bold">€{PRICE_CENA.toFixed(2)} / pers.</span>
                </button>
              </div>
            </div>

            {/* RIEPILOGO PREZZO TAVOLO */}
            <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 mb-6 flex justify-between items-center">
              <div>
                <p className="text-xs text-neutral-400">Totale Fisso Tavolo</p>
                <p className="text-xs text-neutral-500">
                  {peopleCount} x €{currentPricePerPerson.toFixed(2)} (Bevande escluse)
                </p>
              </div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono">
                €{tableTotal}
              </div>
            </div>

            {/* TASTO CONFERMA */}
            <button
              onClick={handleConfirmAllYouCanEat}
              className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-4 rounded-2xl text-base transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Conferma e Apri Menu</span>
            </button>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-16 text-center text-neutral-200 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        <p>Utilizzando questa app, accetti le Condizioni di Servizio e l'Informativa sulla Privacy di Sushi Zen SRL.</p>
        <p className="mt-1 font-medium">© 2026 Sushi Zen. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default HomePage;
</file>

<file path="src/component/LoginTablet.jsx">
import React, { useState } from "react";
import { LockKeyhole, ArrowRight, Infinity, AlertCircle } from "lucide-react";

const LoginTablet = ({ onLoginSuccess }) =>
{

    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const bgImageUrl =
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200";

    const handleLogin = async () =>
    {

        setError("");

        if (!nome || !password)
        {
            setError("Inserisci nome tablet e password");
            return;
        }

        try
        {

            setLoading(true);

            const response = await fetch(
                "http://localhost:8080/api/v1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: nome,
                        password
                    })
                }
            );


            if (!response.ok)
            {
                throw new Error("Credenziali non valide");
            }


            const data = await response.json();


            localStorage.setItem(
                "token",
                data.token
            );


            localStorage.setItem(
                "utente",
                JSON.stringify(data.utente)
            );


            onLoginSuccess({
                token: data.token,
                tavolo: data.utente.tavolo.numero
            });


        } catch (err)
        {

            setError(err.message);

        } finally
        {

            setLoading(false);

        }
    };


    return (

        <div
            className="
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      p-6
      text-neutral-100
      font-sans
      "
            style={{
                backgroundImage: `url(${bgImageUrl})`
            }}
        >

            <div
                className="
        absolute
        inset-0
        bg-black/70
        backdrop-blur-sm
        "
            />


            <div
                className="
        relative
        z-10
        w-full
        max-w-md
        "
            >


                {/* Logo */}

                <div className="flex justify-center mb-8">

                    <div
                        className="
            p-5
            rounded-3xl
            bg-neutral-950/80
            border
            border-neutral-700
            shadow-xl
            "
                    >

                        <Infinity
                            className="
              w-14
              h-14
              text-amber-400
              "
                            strokeWidth={1.5}
                        />

                    </div>

                </div>



                <div
                    className="
          bg-neutral-950/85
          backdrop-blur-md
          border
          border-neutral-800
          rounded-3xl
          p-8
          shadow-2xl
          "
                >


                    <h1
                        className="
            text-4xl
            font-extrabold
            text-center
            tracking-tight
            "
                    >

                        Sushi
                        <span className="text-amber-400">
                            Zen
                        </span>

                    </h1>


                    <p
                        className="
            text-center
            text-neutral-400
            mt-2
            mb-8
            "
                    >

                        Accesso Tablet Tavolo

                    </p>



                    {error && (

                        <div
                            className="
              mb-5
              flex
              gap-3
              items-center
              bg-red-950/40
              border
              border-red-700/50
              text-red-300
              p-4
              rounded-2xl
              text-sm
              "
                        >

                            <AlertCircle
                                className="w-5 h-5"
                            />

                            {error}

                        </div>

                    )}



                    <div className="space-y-5">


                        <div>

                            <label
                                className="
                text-sm
                text-neutral-300
                "
                            >
                                Nome Tablet
                            </label>

                            <input

                                value={nome}

                                onChange={(e) =>
                                    setNome(e.target.value)
                                }

                                placeholder="Tablet Tavolo "

                                className="
                mt-2
                w-full
                bg-neutral-900
                border
                border-neutral-700
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-amber-400
                transition
                "

                            />

                        </div>



                        <div>

                            <label
                                className="
                text-sm
                text-neutral-300
                "
                            >
                                Password
                            </label>


                            <div
                                className="
                relative
                "
                            >

                                <LockKeyhole
                                    className="
                  absolute
                  left-4
                  top-4
                  w-5
                  h-5
                  text-neutral-500
                  "
                                />

                                <input

                                    type="password"

                                    value={password}

                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }

                                    placeholder="Password"

                                    className="
                  mt-2
                  w-full
                  bg-neutral-900
                  border
                  border-neutral-700
                  rounded-2xl
                  pl-12
                  pr-5
                  py-4
                  outline-none
                  focus:border-amber-400
                  transition
                  "

                                />

                            </div>

                        </div>



                        <button

                            onClick={handleLogin}

                            disabled={loading}

                            className="
              w-full
              mt-5
              bg-amber-400
              hover:bg-amber-300
              text-neutral-950
              font-bold
              py-4
              rounded-2xl
              flex
              justify-center
              items-center
              gap-3
              transition
              disabled:opacity-50
              "

                        >

                            {loading
                                ? "Accesso..."
                                :
                                <>
                                    Entra nel Menu
                                    <ArrowRight
                                        className="w-5 h-5"
                                    />
                                </>
                            }


                        </button>


                    </div>


                </div>



                <p
                    className="
          text-center
          text-neutral-400
          text-sm
          mt-8
          "
                >
                    Sushi Zen SRL © 2026
                </p>


            </div>


        </div>

    );

};


export default LoginTablet;
</file>

<file path="src/component/MenuAll.jsx">
import React, { useState, useEffect } from "react";
import HeaderTablet from "../components/HeaderTablet";
import CategoryFilter from "../components/CategoryFilter";
import DishCardAll from "../components/DishCardAll";
import CartModal from "../components/CartModal";
import SentOrdersDrawer from "../components/SentOrdersDrawer";
import CallWaiterModal from "../components/CallWaiterModal";
import { fetchPiatti, CATEGORIE } from "../services/piattiApi";
import { inviaOrdineBackend } from "../services/ordiniApi";

const MenuAll = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState({});
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [sentOrders, setSentOrders] = useState([]);
  const [isSentOrdersOpen, setIsSentOrdersOpen] = useState(false);

  const [isCallWaiterOpen, setIsCallWaiterOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadDishes = async () => {
      try {
        setLoading(true);
        const data = await fetchPiatti();
        setDishes(data);
      } catch (err) {
        setError("Impossibile caricare il menu. Riprova più tardi.");
        console.error("Errore fetch piatti:", err);
      } finally {
        setLoading(false);
      }
    };
    loadDishes();
  }, []);

  const handleUpdateCart = (dishId, delta) => {
    setCart((prev) => {
      const currentQty = prev[dishId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [dishId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishId]: newQty };
    });
  };

  const handleSendToKitchen = async () => {
    if (totalItemsCount === 0 || isSubmitting) return;

    // Mappa gli elementi presenti nel carrello con i relativi dati del piatto
    const itemsSent = Object.entries(cart)
      .map(([dishId, qty]) => {
        const dish = dishes.find((d) => String(d.id) === String(dishId));
        return dish ? { ...dish, qty } : null;
      })
      .filter(Boolean);

    try {
      setIsSubmitting(true);

      // Recupera le info del tavolo/utente salvate in localStorage
      const utenteSalvato = JSON.parse(localStorage.getItem("utente") || "{}");
      const tavoloId = utenteSalvato.id || utenteSalvato.tavoloId;

      if (!tavoloId) {
        alert("Sessione tablet non valida. Per favore effettua nuovamente il login.");
        return;
      }

      // 1. Invio effettivo dell'ordine al backend
      const nuovoOrdine = await inviaOrdineBackend(tavoloId, itemsSent);

      // 2. Aggiornamento dello storico ordini locale
      setSentOrders((prev) => [
        ...prev,
        {
          id: nuovoOrdine.id,
          sentAt: new Date(),
          items: itemsSent,
        },
      ]);

      // 3. Reset carrello e chiusura modale
      setCart({});
      setIsCartModalOpen(false);
      alert("Ordine inviato in cucina con successo!");
    } catch (err) {
      alert("Errore durante l'invio dell'ordine: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredDishes =
    activeCategory === "all"
      ? dishes
      : dishes.filter((d) => d.category === activeCategory);

  const totalItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col font-sans pb-24">
      <HeaderTablet
        cartCount={totalItemsCount}
        sentOrdersCount={sentOrders.length}
        onOpenCart={() => setIsCartModalOpen(true)}
        onOpenSentOrders={() => setIsSentOrdersOpen(true)}
        onCallWaiter={() => setIsCallWaiterOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <div className="mb-6">
          <CategoryFilter
            categories={CATEGORIE}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {loading && (
          <div className="text-center py-12 text-stone-400">
            Caricamento menu in corso...
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-400">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDishes.map((dish) => (
              <DishCardAll
                key={dish.id}
                dish={dish}
                quantity={cart[dish.id] || 0}
                onUpdateQuantity={(delta) => handleUpdateCart(dish.id, delta)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modale Carrello */}
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cart={cart}
        dishes={dishes}
        onUpdateQuantity={handleUpdateCart}
        onSendToKitchen={handleSendToKitchen}
        isSubmitting={isSubmitting}
      />

      {/* Drawer Ordini Inviati */}
      <SentOrdersDrawer
        isOpen={isSentOrdersOpen}
        onClose={() => setIsSentOrdersOpen(false)}
        sentOrders={sentOrders}
      />

      {/* Modale Chiamata Cameriere */}
      <CallWaiterModal
        isOpen={isCallWaiterOpen}
        onClose={() => setIsCallWaiterOpen(false)}
      />
    </div>
  );
};

export default MenuAll;
</file>

<file path="src/component/MenuCarta.jsx">
import React, { useState, useEffect } from "react";
import HeaderTablet from "../components/HeaderTablet";
import CategoryFilter from "../components/CategoryFilter";
import DishCardCarta from "../components/DishCardCarta";
import CartModal from "../components/CartModal";
import SentOrdersDrawer from "../components/SentOrdersDrawer";
import CallWaiterModal from "../components/CallWaiterModal";
import { fetchPiatti, CATEGORIE } from "../services/piattiApi";
import { inviaOrdineBackend } from "../services/ordiniApi";

const MenuCarta = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState({});
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [sentOrders, setSentOrders] = useState([]);
  const [isSentOrdersOpen, setIsSentOrdersOpen] = useState(false);

  const [isCallWaiterOpen, setIsCallWaiterOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadDishes = async () => {
      try {
        setLoading(true);
        const data = await fetchPiatti();
        setDishes(data);
      } catch (err) {
        setError("Impossibile caricare il menu. Riprova più tardi.");
        console.error("Errore fetch piatti:", err);
      } finally {
        setLoading(false);
      }
    };
    loadDishes();
  }, []);

  const handleUpdateCart = (dishId, delta) => {
    setCart((prev) => {
      const currentQty = prev[dishId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [dishId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishId]: newQty };
    });
  };

  const handleSendToKitchen = async () => {
    if (totalItemsCount === 0 || isSubmitting) return;

    const itemsSent = Object.entries(cart)
      .map(([dishId, qty]) => {
        const dish = dishes.find((d) => String(d.id) === String(dishId));
        return dish ? { ...dish, qty } : null;
      })
      .filter(Boolean);

    try {
      setIsSubmitting(true);

      const utenteSalvato = JSON.parse(localStorage.getItem("utente") || "{}");
      const tavoloId = utenteSalvato.id || utenteSalvato.tavoloId;

      if (!tavoloId) {
        alert("Sessione tablet non valida. Per favore effettua nuovamente il login.");
        return;
      }

      const nuovoOrdine = await inviaOrdineBackend(tavoloId, itemsSent);

      setSentOrders((prev) => [
        ...prev,
        {
          id: nuovoOrdine.id,
          sentAt: new Date(),
          items: itemsSent,
        },
      ]);

      setCart({});
      setIsCartModalOpen(false);
      alert("Ordine inviato in cucina con successo!");
    } catch (err) {
      alert("Errore durante l'invio dell'ordine: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredDishes =
    activeCategory === "all"
      ? dishes
      : dishes.filter((d) => d.category === activeCategory);

  const totalItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col font-sans pb-24">
      <HeaderTablet
        cartCount={totalItemsCount}
        sentOrdersCount={sentOrders.length}
        onOpenCart={() => setIsCartModalOpen(true)}
        onOpenSentOrders={() => setIsSentOrdersOpen(true)}
        onCallWaiter={() => setIsCallWaiterOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <div className="mb-6">
          <CategoryFilter
            categories={CATEGORIE}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {loading && (
          <div className="text-center py-12 text-stone-400">
            Caricamento menu in corso...
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-400">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDishes.map((dish) => (
              <DishCardCarta
                key={dish.id}
                dish={dish}
                quantity={cart[dish.id] || 0}
                onUpdateQuantity={(delta) => handleUpdateCart(dish.id, delta)}
              />
            ))}
          </div>
        )}
      </main>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cart={cart}
        dishes={dishes}
        onUpdateQuantity={handleUpdateCart}
        onSendToKitchen={handleSendToKitchen}
        isSubmitting={isSubmitting}
      />

      <SentOrdersDrawer
        isOpen={isSentOrdersOpen}
        onClose={() => setIsSentOrdersOpen(false)}
        sentOrders={sentOrders}
      />

      <CallWaiterModal
        isOpen={isCallWaiterOpen}
        onClose={() => setIsCallWaiterOpen(false)}
      />
    </div>
  );
};

export default MenuCarta;
</file>

<file path="src/component/Recensione.jsx">
import React, { useState } from 'react';
import { 
  Star, 
  X, 
  MessageSquarePlus, 
  ThumbsUp, 
  Send, 
  Check, 
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';

// Tag rapidi per feedback sintetico sul ristorante
const QUICK_TAGS = [
  "Cibo eccezionale",
  "Servizio veloce",
  "Atmosfera rilassante",
  "Pesce freschissimo",
  "Presentazione curata",
  "Ottimo rapporto qualità/prezzo"
];

// Lista di piatti ordinati di esempio da valutare singolarmente (in futuro la passerai come prop)
const DEFAULT_ORDERED_DISHES = [
  { id: 'N01', name: 'Nigiri Salmone', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=200' },
  { id: 'U04', name: 'Uramaki Ebi Tempura', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=200' },
  { id: 'S02', name: 'Sashimi Misto', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=200' }
];

const Recensioni = ({ isOpen = true, onClose, orderedDishes = DEFAULT_ORDERED_DISHES }) => {
  const [activeTab, setActiveTab] = useState('scrivi'); // 'scrivi' | 'leggi'
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [dishRatings, setDishRatings] = useState({});
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Toggle tag veloci, aggiunge o rimuove il tag selezionato
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Imposta valutazione per un singolo piatto
  const handleDishRating = (dishId, score) => {
    setDishRatings(prev => ({ ...prev, [dishId]: score }));
  };

  // Invio recensione (pronto per integrazione API Spring Boot)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reviewData = {
      overallRating: rating,
      tags: selectedTags,
      dishRatings: dishRatings,
      comment: comment,
      tableNumber: 40, // Numero tavolo dinamico
      timestamp: new Date().toISOString()
    };

    console.log("Dati Recensione da inviare al Backend Spring Boot:", reviewData);
    
    // In un'applicazione reale qui faresti una chiamata POST:
    // fetch('/api/v1/reviews', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(reviewData) })

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (onClose) onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Modale */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-100">Valuta Esperienza</h2>
              <p className="text-xs text-neutral-400">La tua opinione aiuta Sushi Zen a migliorare</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Navigazione Tab interni */}
            <div className="bg-neutral-950 p-1 rounded-full border border-neutral-800 flex gap-1">
              <button
                onClick={() => setActiveTab('scrivi')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'scrivi' 
                    ? 'bg-amber-400 text-neutral-950' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Valuta
              </button>
              <button
                onClick={() => setActiveTab('leggi')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'leggi' 
                    ? 'bg-amber-400 text-neutral-950' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Recensioni
              </button>
            </div>

            {/* Tasto Chiusura */}
            {onClose && (
              <button 
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Corpo Modale */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isSubmitted ? (
            /* Messaggio di Conferma Invio */
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-amber-400/20 text-amber-400 border border-amber-400/40 rounded-full flex items-center justify-center animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-100">Grazie per la tua recensione!</h3>
              <p className="text-neutral-400 max-w-md text-sm">
                Il tuo feedback è stato registrato ed è prezioso per tutto lo staff di Sushi Zen.
              </p>
            </div>
          ) : activeTab === 'scrivi' ? (
            /* Form Scrivi Recensione */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Valutazione con Stelle Principale */}
              <div className="text-center bg-neutral-950/60 p-6 rounded-2xl border border-neutral-800/80">
                <p className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                  Come valuti l'esperienza globale?
                </p>
                <div className="flex justify-center items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Star 
                        className={`w-9 h-9 ${
                          (hoverRating || rating) >= star 
                            ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]' 
                            : 'text-neutral-700'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs font-mono text-amber-400 h-4 mt-2 font-medium">
                  {rating === 5 && "Eccellente! 🍣"}
                  {rating === 4 && "Molto Buono! 👍"}
                  {rating === 3 && "Nella Media 😐"}
                  {rating === 2 && "Sotto le aspettative 🙁"}
                  {rating === 1 && "Pessimo 😞"}
                </p>
              </div>

              {/* Tag Rapidi */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Cosa ti è piaciuto in particolare?
                </label>
                <div className="flex flex-wrap gap-2">
                  {QUICK_TAGS.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`text-xs px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400/15 border-amber-400 text-amber-400 font-semibold'
                            : 'bg-neutral-950/40 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Valutazione Piatti Singoli (Se Ordinati) */}
              {orderedDishes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                      Valuta i piatti ordinati
                    </label>
                  </div>

                  <div className="space-y-3">
                    {orderedDishes.map((dish) => (
                      <div 
                        key={dish.id} 
                        className="flex items-center justify-between bg-neutral-950/40 border border-neutral-800 p-3 rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img src={dish.image} alt={dish.name} className="w-10 h-10 rounded-xl object-cover" />
                          <div>
                            <p className="text-sm font-bold text-neutral-200">{dish.name}</p>
                            <span className="text-[10px] font-mono text-neutral-500">{dish.id}</span>
                          </div>
                        </div>

                        {/* Stelle per piatto */}
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => handleDishRating(dish.id, s)}
                              className="p-1 text-neutral-700 hover:text-amber-400 transition-colors cursor-pointer"
                            >
                              <Star className={`w-4 h-4 ${ (dishRatings[dish.id] || 0) >= s ? 'fill-amber-400 text-amber-400' : '' }`} />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Commento Libero */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Commento (Opzionale)
                </label>
                <textarea
                  rows="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Scrivi qui i tuoi consigli o impressioni per lo chef..."
                  className="w-full bg-neutral-950/60 border border-neutral-800 rounded-2xl p-4 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400/60 transition-colors resize-none"
                />
              </div>

              {/* Pulsante Invio */}
              <button
                type="submit"
                disabled={rating === 0}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  rating > 0 
                    ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300 shadow-lg shadow-amber-400/10' 
                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" /> Invia Valutazione
              </button>
            </form>
          ) : (
            /* Tab: Recensioni degli altri Clienti (Vista Statistiche/Social) */
            <div className="space-y-6">
              
              {/* Media Generale */}
              <div className="bg-neutral-950/60 border border-neutral-800 p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-3xl font-extrabold text-neutral-100">4.8 <span className="text-sm font-normal text-neutral-400">/ 5</span></h4>
                  <p className="text-xs text-neutral-400 mt-1">Basato su oltre 340 valutazioni</p>
                </div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Esempi di Recensioni Esistenti */}
              <div className="space-y-4">
                {[
                  { name: "Marco R.", table: "Tavolo 12", rating: 5, date: "Oggi", text: "Sashimi di una freschezza unica. Il servizio è velocissimo nonostante il locale pieno!" },
                  { name: "Giulia M.", table: "Tavolo 08", rating: 5, date: "Ieri", text: "Uramaki fantastici! Il menu All You Can Eat ha una qualità paragonabile alla carta." }
                ].map((rev, idx) => (
                  <div key={idx} className="bg-neutral-950/40 border border-neutral-800/80 p-4 rounded-2xl space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-200">{rev.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">{rev.table}</span>
                      </div>
                      <span className="text-xs text-neutral-500">{rev.date}</span>
                    </div>
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">{rev.text}</p>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Recensioni;
</file>

<file path="src/data/MockMenu.jsx">
import { Utensils, Wine, Sparkles, Flame } from 'lucide-react';

export const CATEGORIES = [
  { id: 'nuovi', label: 'Nuovi Piatti', icon: Sparkles },
  { id: 'antipasti', label: 'Antipasti', icon: Utensils },
  { id: 'nigiri', label: 'Nigiri & Onigiri', icon: Utensils },
  { id: 'tartare', label: 'Tartare & Carpacci', icon: Flame },
  { id: 'bevande', label: 'Bollicine & Vini', icon: Wine },
];

export const DISHES = [
  {
    id: 'NB6',
    name: 'Dayamondo Tartare',
    category: 'tartare',
    description: 'Tartare di spigola e avocado con salsa leggermente piccante e ponzu',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 'NB5',
    name: 'Iro Puding',
    category: 'antipasti',
    description: 'Puding a base purè di patate, polpa di granchio, avocado e maionese giapponese',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NB4',
    name: 'Rubiniku',
    category: 'tartare',
    description: 'Limone, wakame, tartare di tonno, salsa leggermente piccante e pepe rosa',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NB2',
    name: 'Black Onigiri Sake',
    category: 'nigiri',
    description: 'Riso nero, salmone fritto e salsa yogurt',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=600&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 'NB1',
    name: 'Black Onigiri Ebiten',
    category: 'nigiri',
    description: 'Riso nero, gambero in tempura e salsa yogurt',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NP1',
    name: 'Sumoku Mango',
    category: 'tartare',
    description: 'Salmone affumicato con fette di mango e salsa al mango',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
];
</file>

<file path="src/hooks/usePiatti.js">
import { useCallback, useEffect, useState } from 'react';
import { fetchPiatti } from '../services/piattiApi';

/**
 * Carica i piatti dal backend in base al tipo di menu.
 * Restituisce { dishes, loading, error, reload }.
 */
const usePiatti = (orderType) =>
{
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() =>
    {
        const controller = new AbortController();
        setLoading(true);
        setError(null);

        fetchPiatti(orderType, controller.signal)
            .then(setDishes)
            .catch((err) =>
            {
                if (err.name !== 'AbortError')
                {
                    setError(err.message || 'Impossibile caricare i piatti');
                }
            })
            .finally(() =>
            {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, [orderType, reloadKey]);

    const reload = useCallback(() => setReloadKey((k) => k + 1), []);

    return { dishes, loading, error, reload };
};

export default usePiatti;
</file>

<file path="src/services/ordiniApi.js">
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

/**
 * Invia l'ordine al backend Spring Boot.
 * @param {number} tavoloId - ID del tavolo/utente
 * @param {Array} carrelloItems - Lista di oggetti { dbId, qty, ... }
 */
export const inviaOrdineBackend = async (tavoloId, carrelloItems) => {
  const token = localStorage.getItem("token");

  // Costruisce il payload corrispondente a OrdineRequestDTO
  const payload = {
    tavoloId: tavoloId,
    dettagli: carrelloItems.map((item) => ({
      piattoId: item.dbId || item.id, // ID numerico primario del piatto
      quantita: item.qty,
    })),
  };

  const response = await fetch(`${API_URL}/api/v1/ordini`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Errore HTTP ${response.status}`);
  }

  return await response.json();
};
</file>

<file path="src/services/piattiApi.js">
// Servizio per leggere i piatti dal backend Spring Boot.
// L'URL del backend si può cambiare creando un file .env con:
//   VITE_API_URL=http://localhost:8080
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

const ENDPOINTS = {
  'all-you-can-eat': '/api/piatti/all-you-can-eat',
  'alla-carta': '/api/piatti', // tutto il menu disponibile (bevande incluse)
};

// Immagine di riserva se il piatto non ha immagineUrl nel database
const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">' +
    '<rect width="100%" height="100%" fill="#171717"/>' +
    '<text x="50%" y="50%" fill="#737373" font-family="sans-serif" font-size="22" ' +
    'text-anchor="middle" dominant-baseline="middle">Immagine non disponibile</text>' +
    '</svg>'
  );

/**
 * Converte un Piatto del backend (campi in italiano) nel formato usato
 * dai componenti Card / Carrello / Menu (id, name, description, price, image, category).
 */
export const mapPiatto = (p) => ({
  id: p.codicePiatto && p.codicePiatto.trim() ? p.codicePiatto : String(p.id),
  dbId: p.id,
  name: p.nome,
  description: p.descrizione ?? '',
  price: Number(p.prezzo ?? 0),
  image: p.immagineUrl || FALLBACK_IMAGE,
  category: (p.categoria ?? '').trim().toLowerCase(),
  categoryLabel: (p.categoria ?? '').trim(), // testo originale, per la sidebar
  isNew: false, // non esiste ancora nel database
  isAllYouCanEat: p.isAllYouCanEat ?? p.allYouCanEat ?? null,
});

/**
 * @param {'all-you-can-eat' | 'alla-carta'} orderType
 * @param {AbortSignal} [signal]
 */
export const fetchPiatti = async (orderType, signal) =>
{
  const path = ENDPOINTS[orderType] ?? '/api/piatti';
  const response = await fetch(`${API_URL}${path}`, { signal });

  if (!response.ok)
  {
    throw new Error(`Errore del server (${response.status}) nel caricamento dei piatti`);
  }

  const data = await response.json();
  return data.map(mapPiatto);
};
</file>

<file path="src/services/websocket.js">
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

export function connettiWebSocket(onOrdineRicevuto) {
  const client = new Client({
    // Invia automaticamente i Cookie HTTP-Only durante la stretta di mano WebSocket/SockJS
    webSocketFactory: () => new SockJS(`${API_BASE}/ws`, null, { withCredentials: true }),
    reconnectDelay: 5000, // Riconnessione automatica in caso di disconnessione
    debug: (str) => {
      // console.log(str); // Scommenta per debug STOMP
    },
  });

  client.onConnect = () => {
    // Sottoscrizione al canale degli ordini
    client.subscribe('/topic/ordini', (message) => {
      if (message.body) {
        const ordine = JSON.parse(message.body);
        onOrdineRicevuto(ordine);
      }
    });
  };

  client.activate();

  // Funzione di pulizia per disconnettersi quando il componente si smonta
  return () => {
    if (client.active) {
      client.deactivate();
    }
  };
}
</file>

<file path="src/App.css">
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
</file>

<file path="src/App.jsx">
import { useState } from 'react';
import HomePage from './component/HomePage';
import MenuAll from './component/MenuAll';
import Recensione from './component/Recensione';
import AdminApp from './component/admin/AdminApp';
import MenuAlLaCarta from './component/MenuCarta';
import CucinaApp from './component/cucina/Cucinaapp';

function App()
{
  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [orderConfig, setOrderConfig] = useState(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Se l'URL inizia con /admin, mostriamo l'app dello staff (login + sidebar)
  // invece del flusso cliente. Il tablet al tavolo non ci arriva mai perché
  // non ha motivo di navigare a quell'indirizzo; tu invece lo apri/salvi
  // come preferito sul dispositivo che usi in sala.
  const path = window.location.pathname;
  const isAdminRoute = path === '/admin' || path.startsWith('/admin/');
  const isCucinaRoute = path === '/cucina' || path.startsWith('/cucina/');

  if (isAdminRoute)
  {
    return <AdminApp />;
  }

  // /cucina: app separata per la cucina, con login e schermata propri.
  // Qualsiasi altro URL (es. "/") mostra il flusso cliente (HomePage + menu).
  if (isCucinaRoute)
  {
    return <CucinaApp />;
  }

  // HomePage chiama onSelection('all-you-can-eat', config) oppure onSelection('alla-carta')
  const handleSelection = (type, config) =>
  {
    setSelectedMenuType(type);
    setOrderConfig(config || null);
  };

  const handleBack = () =>
  {
    setSelectedMenuType('');
    setOrderConfig(null);
  };

  return (
    <>
      {/* HomePage: Nessun tasto recensioni */}
      {selectedMenuType === '' && (
        <HomePage
          onSelection={handleSelection}
        />
      )}

      {/* Menu All You Can Eat: Tasto recensioni attivo */}
      {selectedMenuType === 'all-you-can-eat' && (
        <MenuAll
          onBack={handleBack}
          onOpenReviews={() => setIsReviewOpen(true)}
          orderType="all-you-can-eat"
          orderConfig={orderConfig}
        />
      )}

      {/* Menu Alla Carta: Tasto recensioni attivo */}
      {selectedMenuType === 'alla-carta' && (
        //const MenuAlLaCarta = ({ onBack, onOpenReviews, tableNumber = 40 }
        <MenuAlLaCarta
          onBack={handleBack}
          onOpenReviews={() => setIsReviewOpen(true)}
        />
      )}

      {/* Overlay Modale Recensioni */}
      <Recensione
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
      />
    </>
  );
}

export default App;
</file>

<file path="src/index.css">
@import "tailwindcss";
</file>

<file path="src/main.jsx">
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
</file>

<file path=".gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</file>

<file path="eslint.config.js">
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
</file>

<file path="index.html">
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
</file>

<file path="package.json">
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@stomp/stompjs": "^7.3.0",
    "lucide-react": "^1.27.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "sockjs-client": "^1.6.1"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@tailwindcss/vite": "^4.3.3",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "autoprefixer": "^10.5.4",
    "eslint": "^10.6.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.3",
    "globals": "^17.7.0",
    "postcss": "^8.5.23",
    "tailwindcss": "^4.3.3",
    "vite": "^8.1.1"
  }
}
</file>

<file path="README.md">
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
</file>

<file path="vite.config.js">
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    // Mappa 'global' su 'window' per rendere compatibile SockJS con Vite
    global: 'window',
  },
})
</file>

</files>
```

## File: vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    // Mappa 'global' su 'window' per rendere compatibile SockJS con Vite
    global: 'window',
  },
})
```

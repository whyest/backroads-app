# Backroads App

#### Setup Components

- in src create components folder
- in the components create following files
  - Navbar.js
  - Hero.js
  - About.js
  - Services.js
  - Tours.js
  - Footer.js
- setup components with default export (snippet - rafce)
- carefully move the code from App.js into components (files)
  - hint - look for navbar, footer and section tags
- App.js should be empty
- import and render all components in App.js (try auto imports)
- result is going to be the same, it's just easier to manage the code
- again, it's just my preference to split up code in such way.
  You can split it up in any way that makes the most sense to you.

#### Navbar

- first let's fix the image (logo)
  - setup import from images and update source

```js
// import
import logo from '../images/logo.svg'

// JSX
;<img src={logo} className='nav-logo' alt='backroads' />
```

#### Smooth Scroll

- html/css feature

```html
<!-- link -->
<a href="#services"> services </a>
<!-- element -->
<section id="services"></section>
```

```css
html {
  scroll-behavior: smooth;
}
.section {
  /* navbar height */
  scroll-margin-top: 4rem;
}
```

#### Page Links

- refactor repeating code

```js
<li>
  <a href='#home' className='nav-link'>
    home
  </a>
</li>
```

- figure out which data is repeating hint (href, text )
- in src create data.js and setup a structure
  - (hint - [{property:value},{property:value}])
- export/import iterate over the list,return elements and inject data

```js
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]
```

```js
import { pageLinks } from '../data'

{
  pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className='nav-link'>
          {link.text}
        </a>
      </li>
    )
  })
}
```

#### Nav Icons (social-links)

- repeat the same steps (as with page links)
- add rel='noreferrer'

```js
{
  socialLinks.map((link) => {
    const { id, href, icon } = link
    return (
      <li key={id}>
        <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
          <i className={icon}></i>
        </a>
      </li>
    )
  })
}
```

#### Hero

- change title or text (optional)
- fix the image (path in css)

#### About

- fix the image (hint - just like with logo in the navbar)

#### Section Title

- in components create Title.js
- get the structure from one of the sections
- setup two props
- replace in About, Services, Tours

```js
const Title = ({ title, subTitle }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}
export default Title
```

About.js

```js
// import
import Title from './Title'

// display
;<Title title='about' subTitle='us' />
```

#### Services

- refactor repeating code (hint - just like with page and social links)
  - setup data, export/import, iterate

data.js

```js
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  // rest of the objects
]
```

Services.js

```js
import Title from './Title'
import { services } from '../data'
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
```

#### Tours

- refactor repeating code

#### Footer

- refactor repeating code
- re-use page and social links
- in the <span id="date">provide current year (hint - {})

#### Alternative Approach (optional)

- in components create PageLinks.js
- import pageLinks
- return the entire list and replace current setup in Navbar, Footer
- "gotcha"
  - the more "moving parts" you will have the harder it's going to be to manage
  - my personal preference, if possible just use data

#### Challenge (optional)

- create more components (essentially, split up the code more)
- find all map methods and move elements to separate components
- By the end of the video you should have four additional components
  - Tour.js
  - Service.js
  - SocialLink.js
  - PageLink.js

#### Continuous Deployment

- fix warnings (About Section)

- netlify account
- github account
- basic git commands :

  - remove existing git repo
    - Mac : rm -rf .git
    - Windows : rmdir -Force -Recurse .git
    - Windows : rd /s /q .git
      Windows commands were shared by students and I have not personally tested them.
  - setup new repo
    - git init
      create an empty git repository
    - git add
      adds new or changed files in your working directory
      to the Git staging area
    - git add .
      adds entire project
      apart from files/directories specified in .gitignore
    - git commit -m "first commit"
      A shortcut command that immediately creates a commit
      with a passed commit message.
    - push to github
      git remote add origin git@github.com:your-profile/repo-name.git
      git branch -M main
      git push -u origin main

#### Benefits

- don't need to keep project locally
- automatic builds

#### Warnings "Gotcha"

- Netlify treats warnings as errors

package.json

```json
"scripts": {
    "start": "react-scripts start",
    "build": "CI= react-scripts build",
    "local-build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

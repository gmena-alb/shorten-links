# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### What I did

- I built this site using mobile first approach. The layout works from +375px screens.
- It shortens URLs using [shrtcode API](https://app.shrtco.de/) and [axios](https://github.com/axios/axios).
- It shows the links you shorten on a list and you can refresh and your links will be there.
- You can copy the link with one click.
- It shows errors if field is empty or the request didn't work out.

### Links

- Live Site URL: [musing-wing-b86738.netlify.app/](www.musing-wing-b86738.netlify.app/)

## My process

### Built with

- HTML5
- CSS3
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

## Author

- Name - Grata Mena
- Location - Berlin

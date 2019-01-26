---
title: "What's new in React Router 4?"
date: '2016-11-22T23:00:00.000Z'
image_position: 'left'
image_expanded: 'true'
summaryMarkdown: 'The upcoming version of React Router - version 4 - is more or less a complete rewrite of the current React Router (v2/v3) with some new interesting features.'
tags:
  - React
  - React Router
  - Meetup
  - Vortrag
  - JavaScript
---

Some of the major changes in the new version are:

- No more central Route config. Instead you use the new `<Match />` component where ever you want to include a component according to the current URL/path
- Using the `<Match>` component you not only can specify a component to render but also a function that returns a component to be rendered. Using this function you can for example implement conditional rendering (like display different components if the user is logged in or not)
- The `<Link>` now can be used to render custom components instead of the standard `<a>` element rendered by the current React Router version

I've shown this and other changes at the [React Meetup Hamburg](https://www.meetup.com/de-DE/Hamburg-React-js-Meetup/events/235410383/) in a short talk.

You can find the slides of the talk: [here as PDF](http://bit.ly/react-rr4).

To play around with RR4 I've also build a simple demo application, that you can find on [GitHub](https://github.com/nilshartmann/react-rr4-example).

If you have any questions, comments or feedback feel free to ping via Twitter, E-Mail or a GitHub issue.

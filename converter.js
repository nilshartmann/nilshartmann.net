const fs = require('fs')
const folder = '/Users/nils/develop/javascript/simpleblog/content/public'

const targetFolder =
  '/Users/nils/develop/javascript/nilshartmann.net/content/blog/posts'

const FILES = [
  '272',
  'aufgeschmissen-ohne-aspirin-modularisierung-in-der-praxis',
  'bei-mir-funktionierts',
  'build-my-plugin',
  'das-osgi-buch',
  'die-osgi-service-platform-erschienen',
  'erfolgreich-mit-git-ein-erfahrungsbericht',
  'fifty-ways-to-build-your-bundle',
  'flux-einfuehrung-react-meetup-hh',
  'folien-mit-react-komponenten-entwicklen',
  'fuenf-gruende-fuer-react',
  'graphql-clients-mit-react-und-apollo',
  'graphql-mit-java-anwendungen',
  'heu-rundballen-2',
  'hilfe-ich-muss-javascript-programmieren',
  'jax-osgi-workshop-und-build-session-folien-erhaeltlich',
  'microfrontends-integrations-patterns-bei-javascript-anwendungen',
  'osgi-by-example',
  'osgi-in-the-tk-the-bundlemaker',
  'react-anwendungen-mit-webpack-bauen',
  'react-buch-erschienen',
  'react-talk-auf-der-jax-2016',
  'ruhe-vor-dem-sturm',
  'sonnenuntergang',
  'vergangene-talks',
  'von-wordpress-nach-react',
  'w-jax-workshop-werden-sie-git-experte',
  'wer-will-noch-git-experte-werden',
  'what-s-new-in-react-router-4',
  'workshop-unterlagen-w-jax-git-workshop',
  'zum-herbstbeginn-herbst-anemone',
]

function convertFile(name) {
  const fileName = `${folder}/${name}.json`
  const rawdata = fs.readFileSync(fileName)

  const post = JSON.parse(rawdata)

  const image = post.image ? `\nimage: '${post.image}'` : ''
  const image_position = post.image_position
    ? `\nimage_position: '${post.image_position}'`
    : ''
  const image_expanded = post.image_expanded
    ? `\nimage_expanded: '${post.image_expanded}'`
    : ''

  const output = `---
title: "${post.title.replace(/\"/g, '\\"')}"
date: '${post.publish_time}'
summaryMarkdown: '${post.summary.replace(
    /\'/g,
    "\\'"
  )}'${image}${image_position}${image_expanded}
tags:
${post.tags.map(t => ` - ${t}`).join('\n')}
---

${post.content}  
`
  const targetDir = `${targetFolder}/${post.slug}`
  const targetFile = `${targetFolder}/${post.slug}/index.md`

  console.log(`Converting '${fileName}' to '${targetFile}'...`)
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir)
  }
  fs.writeFileSync(targetFile, output, { encoding: 'UTF-8' })
}

FILES.forEach(convertFile)

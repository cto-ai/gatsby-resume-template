# gatsby-resume-template

Gatsby.js V2 starter template based on [gatsby-starter-resume](https://github.com/anubhavsrivastava/gatsby-starter-resume).

Check online preview [here](https://cto-ai.github.io/gatsby-resume-template/).

## Screenshot

![Screenshot](./src/assets/images/gatsby-resume-preview.png)

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new <site-name> https://github.com/cto-ai/gatsby-resume-template
```

Then you can run it by:

```sh
cd <site-name>
npm install
gatsby develop
```

### Personalization

Edit `config.js` with your details:

```javascript
const REPOSITORY = 'resume'
const FIRST_NAME = 'Jane'
const LAST_NAME = 'Doe'
const GITHUB_USERNAME = 'awesome-developer'
const TWITTER_USERNAME = 'awesome-developer'
const LINKEDIN_USERNAME = 'awesome-developer'
const PHONE_NUMBER = '604-XXX-XXXX'
const ADDRESS = 'Vancouver'
const EMAIL = 'jane.doe@email.com'
const FOOTER_URL = 'https://www.cto.ai'

const BIO = ...

const EXPERIENCE_LIST = ...

const EDUCATION_LIST = ...

const LANGUAGES_AND_TOOLS = ...

const SKILLS = ...

const PORTFOLIO = ...

const CERTIFICATIONS = ...
```

### Automated deployment to Github pages using Github actions

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on Github Pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js` as `REPOSITORY`. Change `REPOSITORY` to relevant path if your gatsby site is hosted on subpath of a domain, `https://domain.com/somePath/`. If you are hosting it as root site, i.e, `https://domain.com/` , remove the `pathPrefix` configuration entirely or set it an empty string.

The present project leverages [Github Actions](./.github/workflows/deploy.yml) for automated deployment to Github pages. Any push to the `master` branch will trigger the workflow that builds and pushes the built code to the `gh-pages`, triggering a deployment. In order for the deployment to work, it is necessary for the repository to be [configured correctly for Github Pages](https://help.github.com/en/enterprise/2.14/user/articles/configuring-a-publishing-source-for-github-pages), as well as for an `ACCESS_TOKEN` secret to be set up in the repository. To generate it, go to [Personal access tokens](https://github.com/settings/tokens) and create a new token with the `repo` scope enabled.

## Contributing

See the [Contributing Docs](CONTRIBUTING.md) for more information.

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/ruxandrafed"><img src="https://avatars2.githubusercontent.com/u/11021586?s=100" width="100px;" alt=""/><br /><sub><b>Ruxandra Fediuc</b></sub></a><br/></td>
  </tr>
</table>

## License

[MIT](LICENSE)

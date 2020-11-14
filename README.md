# Challenge for N-Project

    Slack Clone with react and firebase.

### 3rd party libraries

1. create-react-app (MIT)
2. node-sass
   - the major version was just bumped, and CRA does not match sass-loader ^4.0.0. so, Installed prev version of node-sass. (4.14.1) (MIT)
3. react-icons
   - Each Icons Library has different license.
   * check [React Icons](https://github.com/react-icons/react-icons)

### Reusable component

1. Auth
   1. AuthHeader
   2. FormContainer - see Things to improve below
      1.AuthInput
      2.AuthButton

### Global Sass Variables

    - in order to change main theme, this can be found under /src/design-tokens/_scss_variables.scss

    1. $slack-color: #4d194e;

### Daily Work

- 11/11 - Work assigned 🚀 1. create react app - get some reference from slack.com 2. create firestore app - didn't implement yet 🥱
  (1hr of work)

- 11/12 - Auth Part
  1. Create register, login page, focused on making reusable component. for scalable page.
  2. firebase setup
  3. learn useContext, since it is a small project. <= never been used it for strong user. I've used redux most of my project

### Things to improve

- Made a single form, it will render correspond input component, by its prop "TYPE"
  so, we don't have to repeat submit and keyboard event function. However, It made code hard to read and maintain.(Nested if), (cannot use useRef or disable button while loading directly, need to send props to communicate🤢. for scalable app, I should make seperate login, and sign up page.

### mokey patching warning

- // eslint-disable-next-line
  AuthContext (no-unused-vars) => this is a wrapper function for context, so variables is not used inside of return.

src\context\AuthContext.js
Line 10:10: 'currentUser' is assigned a value but never used no-unused-vars
Line 14:9: 'login' is assigned a value but never used no-unused-vars
Line 22:9: 'signUp' is assigned a value but never used no-unused-vars

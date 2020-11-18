# Challenge for N-Project

    Slack Clone with react and firebase.

### 3rd party libraries

1. create-react-app (MIT)
2. node-sass
   - the major version was just bumped, and CRA does not match sass-loader ^4.0.0. so, Installed prev version of node-sass. (4.14.1) (MIT)
3. react-icons

   - Each Icons Library has different license.

   * check [React Icons](https://github.com/react-icons/react-icons)

4. react-responsive-modal (MIT)
   https://www.npmjs.com/package/react-responsive-modal
   -this package is not very popular but, looks much better and smaller than popular react-modal package.

### Reusable component

1.  Auth
    1.  AuthHeader
        <<<<<<< HEAD
    2.  # FormContainer - see Things to improve below
    3.  FormContainer
        > > > > > > > 44063dd109f980ad40d8289571dc203072c5d227
              1.AuthInput
              2.AuthButton <- used in Modal form as well.> need to change naming

### Global Sass Variables

    - in order to change main theme, this can be found under /src/design-tokens/_scss_variables.scss

    1. $slack-color: #4d194e;
    2. $slack-header-color: #241524;

### Daily Work

<<<<<<< HEAD

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
=======
11/11 - Work assigned 🚀 1. create react app - get some reference from slack.com 2. create firestore app - didn't implement yet 🥱
(1hr of work)

11/12 - Auth Part 1. Create register, login page, focused on making reusable component. for scalable page.

> > > > > > > 44063dd109f980ad40d8289571dc203072c5d227

# Challenge for N-Project

    Slack Clone with react and firebase.

### 3rd party libraries

1. create-react-app (MIT)
2. node-sass (4.14.1) (MIT)

   - the major version was just bumped, and CRA does not match sass-loader ^4.0.0. so, Installed prev version of node-sass.

3. react-icons

   - Each Icons Library has different license.

   BsPencilSquare (MIT) -LeftPanelHeader-

   - check [React Icons](https://github.com/react-icons/react-icons)

4. ## react-router-dom (MIT)

   https://reactrouter.com/web/guides/quick-start

5. ### react-modal (MIT)
   https://reactcommunity.org/react-modal/

### Reusable component

1. Auth
   1. AuthHeader
   2. FormContainer - see  
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

- 11/13 Auth Part

  1. finish Auth (LOGIN, REGISTER, Oauth)

- 11/14 Chat Part

  1. Implement layouts of chat app

  11/15

  1. Worked on LEFT channel context and UI,
     learn firebase

  2. implement firebase firestore.
     refactored left panel category => left panel body

### Things to improve

- Made a single form, it will render correspond input component, by its prop "TYPE"
  so, we don't have to repeat submit and keyboard event function. However, It made code hard to read and maintain.(Nested if), (cannot use useRef or disable button while loading directly, need to send props to communicate🤢. for scalable app, I should make seperate login, and sign up page.

### mokey patching warning

- // eslint-disable-next-line
  AuthContext (no-unused-vars) => google token and user is not used, but left it for future references

src\context\AuthContext.js
Line 42:13: 'token' is assigned a value but never used no-unused-vars
Line 44:13: 'user' is assigned a value but never used no-unused-vars
Compiled with warnings.

### bug fix issue

1. A data breach on a site or app exposed your password. Chrome recommends changing your password
   When user login with email and password

   dang... just do not test password with 123123 or abcabc..

=> https://www.consumeraffairs.com/news/new-version-of-chrome-warns-users-if-their-password-was-exposed-in-a-data-breach-121119.html

"Chrome will now warn you if your username and password have been compromised in a data breach on some site or app,” the tech giant wrote in a blog post. “It will suggest that you change them everywhere they were used."

2. After hitting submit button on login, register, <the email address is badly formatted>
   => reset error on hitting.

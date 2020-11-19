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

6. firebase (MIT)
   https://yarnpkg.com/package/firebase

7. "moment": "^2.29.1",
   https://momentjs.com/

### Reusable component

1. Auth
   1. AuthHeader
   2. FormContainer -  
      1.AuthInput
      2.AuthButton

### Global Sass Variables

    - in order to change main theme, this can be found under /src/design-tokens/_scss_variables.scss

1.  \$slack-color: #4d194e;
2.  \$slack-header-color: #2b092b;

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

  11/16

  1.  used to pass only id for selecting channel, but it requires extra fetching data from server when getting other info, so changed it to fetching all necessary data object in selecting channel function.

  11/17

  1.  Finish mid part of the main app page.
      Decided to implement thread, and it seems really expensive to have counter :(

  11/18

  1. Implementing moment.js
  2. Fount that there were so many bugs in this app, spend most of the time fixing issues.

  11/19

  1. Implemented Responsive design
  2. OH MY GOD!

  MY APP ONLY WORKS IN LOCAL BROWSWER, It does not update live chat or channel add.
  L figured there is a realtime function on firebase, Its 7:09 AM.
  AND I NEED TO GET IT DONE.
  and Done. onSnapshot

### Things to improve

- Made a single form, it will render correspond input component, by its prop "TYPE"
  so, we don't have to repeat submit and keyboard event function. However, It made code hard to read and maintain.(Nested if) I should have made seperate login, and sign up page for making more readable code.

  - I thought I was able to do handling all features with using just seperated context API, but If I have time, I would like to use useReducer, to combine all context APIs into a single state.

### mokey patching warning

- // eslint-disable-next-line
  AuthContext (no-unused-vars) => google token and user is not used, but left it for future references

src\context\AuthContext.js
Line 42:13: 'token' is assigned a value but never used no-unused-vars
Line 44:13: 'user' is assigned a value but never used no-unused-vars
Compiled with warnings.

some other useEffect does that too, because I used Context API

### bug fix issue

1. A data breach on a site or app exposed your password. Chrome recommends changing your password
   When user login with email and password

   dang... just do not test password with 123123 or abcabc..

=> https://www.consumeraffairs.com/news/new-version-of-chrome-warns-users-if-their-password-was-exposed-in-a-data-breach-121119.html

"Chrome will now warn you if your username and password have been compromised in a data breach on some site or app,” the tech giant wrote in a blog post. “It will suggest that you change them everywhere they were used."

2. After hitting submit button on login, register, <the email address is badly formatted>
   => reset error on hitting button.

3. After creating multiple channels on ChatContext, auto selected value is stacked.
   => Added Id outside of promise, so adding Id function happened before firebase server create Uid for channel.

4. getting selectedChat had an undefined issue for chat input.
   took about 1 hours to figure out.
   => T Y P O !

5. After submitting a chat message, the message shows twice on the main page
   => changed fetching function.

   6. IT's NOT LIVE.
      => changed whole chat Context code. WOW....

### things to refactor

1.  Change Mid Pannel Message to Message
    L the code is reused in right panel too

2.  Google firebase firestore does not have function that counts number of docs in a collection
    So, I had to qurey into each message, and count the total the number of threads.
    If this app is not a chat app, I would cache the prev number and increment, but in order to sync data with server every time, I had to fetch message data and threads every time user changes chat room.

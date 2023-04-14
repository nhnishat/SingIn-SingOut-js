/*
                ---------------------
                * Initial SetUp
                ---------------------
1. visit: console.firebase.google.com
2. Create Project (skip google analytics)
3. Register app(Create config)
4. install fireBase : npm install firebase
5. Add config file your project 
6. Danger : do not publish or make firebase config to public by pushing those   to github;
            --------------------------
*               INTEGRATION
            --------------------------

7. Visit: Go to Docs > Build > Authentication >web > Get started
8. export app from the firebase.config.js file : export default app
9. Login.jsx import getAuth from firebase/firebase
10. create const auth = getAuth(app)

                --------------------------
 *                   Provider setUp
                --------------------------


11. import googleAuthProvider and create a new provider
12. use singInWithPopUP and pass auth and provider
13.Activate sing in method enable(google,github etc)
14. [VITE]: change 127.0.0.1 to localhost
*
            -------------------
            More Provider
            -------------------
1. active the auth provider (create app,provider,redirect url ,client id,client secret)
2.
*/

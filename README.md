## Notes

#### Older React Version
this old react version for fixing hot reloading that you should copy those instad of current version and del nodeModule and npm install again :

```
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-scripts": "3.4.3",
```
#### Current React Version

```
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.0",
```

#### Alternative fix

.env file in the root
FAST_REFRESH=FALSE

#### Auth0 

## Tenant Domain for Auth0 signIn: 
dev-4p0ti3wa

Main Docs https://auth0.com/

1-Create Application

2-Choose : Single Page Web Applications

3-Choose : React

4-Go to Settings Tab

5-Copy/Paste Domain, ClientID - can be public (or use .env)

6-Add Domain - for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

Allowed Callback URLs
Allowed Logout URLs
Allowed Web Origins
7-SAVE CHANGES!!!!!!!!!!!!!!!

8-Authentication email,social

9-React SDK Docs  https://auth0.com/docs/libraries/auth0-react

10-REACT SDK API Docs  https://auth0.github.io/auth0-react/
# viadriveTask

### how to run this project

## ios

`yarn && cd ios && pod install && cd .. && yarn ios`

## android

`yarn  && yarn android`


### how to test darkmode

`toggle darkmode from setting`

### how to test deep linking

run this command from terminal or copy this link and open it from note in your phone `newsapp://news?id=1234`
## ios
 `npx uri-scheme open "newsapp://news?id=1234" --ios`
 
 ## android
 `npx uri-scheme open "newsapp://news?id=1234" --android`

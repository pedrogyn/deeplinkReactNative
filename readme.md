-- To Install

npm install or yarn install

-- To run

react-native run-ios or react-native run-android

-- To test deeplink on ios

install app
run app and enter on background mode (optional)
open safari or chrome browser in device
touch url deeplinkApp://profile or deeplinkApp://offerings

-- To test deeplink on android
install app
run app and enter on background mode (optional)
open safari or chrome browser in device
run on bash adb shell am start -W -a android.intent.action.VIEW -d "deeplinkApp://profile" com.testedeeplink or
adb shell am start -W -a android.intent.action.VIEW -d "deeplinkApp://offerings" com.testedeeplink

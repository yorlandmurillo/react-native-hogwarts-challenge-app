
# Adding Unit Testing with Maestro

## Check if we have Java SDK installed

java -version

## download maestro repository
curl -fsSL "https://get.maestro.mobile.dev" | bash    

## Install some tools for maestro
brew tap mobile-dev-inc/tap

## install maestro in your PC

brew install maestro 

## create a yaml test file and execute

maestro test navigation.yaml  

# zero-expo

This quickstart/template is an example of Zero running in React Native w/ Expo.

## Setup

### Server

Follow the instructions in [@rocicorp/hello-zero](https://github.com/rocicorp/hello-zero) to get a `zero-cache` server up and running with Docker. You may need to update `@rocicorp/zero` ([example here](https://github.com/rocicorp/hello-zero/compare/main...kevinschaich:hello-zero:main?diff=unified&w=1)).

You should have 3 screens up and running in your terminal – one to run Postgres, one to run `zero-cache`, and another to run the web server for `hello-zero` to verify your setup is working correctly.

### Client

Clone this repository, run `bun i` to install dependencies, then run `bunx expo run:ios` to start an iOS simulator.

You should see the same messages as you see in `hello-zero` that will automatically update on any additions, deletions, or edits.

# Relay TodoMVC

## Bug description

This repo is a copy of the Relay TodoMVC example, editted to reproduce a bug: 

Setting a custom ID field with `nodeInterfaceIdField` breaks the normal behavior of refetching fragments. Namely, upon calling `refetch`,  the GraphQL server responds with an error complaining about the id missing in the `node` query variables.

The only way of working around that is passing the id explicitely as part of the `refetch` variables, which of course, is not necessary when using the default `id` field.

In the app, there are a couple of buttons below the list of TODOs. Both of them refetch the todos with a `first` variable different than the initial one, but one of the buttons does so passing the `nodeId` and it works, and the other doesn't and it crashes.


## Installation

```
yarn
```

## Running

Set up generated files:

```
yarn update-schema
yarn build
```

Start a local server:

```
yarn start
```

## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

If at any time you make changes to `data/schema.js`, stop the server,
regenerate `data/schema.graphql`, and restart the server:

```
yarn update-schema
yarn build
yarn start
```

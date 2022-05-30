# Changelog

## Part 1.1: Orientation

- Clear out all example app code,
- Add styles to app.css,
- Create new `static/images` folder,
- Add Tomster to `static/images/` folder,
- Add welcome message to routes/index.svelte.

## Part 1.2: Building pages

- Create a new page for `about`
- Create a new page for `getting-in-touch`
- Add links between the pages

## Part 1.3: Automated testing

- Update the 'tests/test.ts' file to align with the usage in our app

## Part 1.4: Component basics

- Add a new `__layout.svelte` route to handle the global navigation bar
- Add the new `nav-bar.svelte` component
- Add the new `jumbo.svelte` component
- Update the routes to use the `Jumbo` component
- Add a new test to make sure the `nav-bar` component is functioning as expected

## Part 1.5: More about components

- Add the rental/index and rental/image components
- Hardcode some data to showcase the new components (this will be populated from somewhere else in the future)

## Part 1.6: Interactive components

- Update the `Rental/Image` component to be interactive

## Part 1.7: Reusable components

- Create the new `Map` component
- Add the Mapbox integration
- Create the `stores.ts` file to store the mapbox access token so that it can be accessed from everywhere in the app

## Part 1.7: Working with data

- Add seed data, in the form of JSON files, to the project
- Update the `index` route to load the data from the JSON file
- Add new `Rental` model to keep typescript happy
- Update the existing `Rental` component to receive the loaded data from the `index` route

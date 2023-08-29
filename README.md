# Sign Inventory

This is an internal web app for auditing the condition of bus stop signs, shelters and amenities, for use by MTD's planning department. The app is built on top of NextJS, and communicates with a .NET EF Core API to communicate with a SQL database. The application tracks data points including the sign condition, general notes, photos, accessibility features and more.

## Architecture Overview

This app will only function with the sign inventory API running, an [EF Core](https://learn.microsoft.com/en-us/ef/core/) API that communicates with the `mtdsql4` SignInventory database. More info can be found on the API's README.

The app was bootstrapped with `create-next-app` and built with the **NextJS page router**, which (at the time of writing) is the newest way to structure NextJS apps.

State is managed by the **Recoil** library. The UI is built with a mixture of **React** and **MUI** (formerly known as material UI).

## Dependencies

- npm packages
  - h
- Other APIs
  - Sign Inventory API
  - Stop Search API v?
  - MTDSQL4 database

Dependencies can be found in `package.json`:

### Deploy dependencies

TODO

### Development dependencies

TODO

## Getting things running

TODO

## Deployment Info

TODO

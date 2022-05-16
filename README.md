# Project Title

Event planner

## Table of Content:

- [About The App](#about-the-app)
- [Entities](#entities)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)
- [Further development](#further-development)
- [Credits](#credits)
- [License](#license)

## About The App

Event planner is an app that user can subscribe an event, look for upcoming and past events. Also, the application has Admin management page. 
The application has two types of users. One type of user is an admin, and the second is a regular user.
Admins can do CRUD operations on events, users and event types. Regular users can subscribe an event, view his/her subscribed events/upcoming events/past events. 
The application has login system. User and event information are fetched from json files while application is setting up. 

## Entities

### Events
`"Id"
"EventTypeId"
"SubscribedUserIds"
"Name"
"DescriptionEN"
"DescriptionDE"
"Start"
"End"
"Location"`

### Users
`"Id"
"Name"
"Surname"
"Email"
"Password"
"Role"
"SubscribedEvents"`

### Event Types
`"Id"
"Name"`

## Technologies

I used `HTML`, `CSS`, `React`, `TypeScript`, `Context API`, `MaterialUI`, `JSDoc`, `ESLint`, `Prettier`, `i18next`.

## Setup

- download or clone the repository
- run `npm install`

## Status

Project is done. 

## Further development

A database can be added to project in the future. Also, UI design can be improve and more unit tests can be write in the future.

## Credits

List of contriubutors:

- [Ceren Battal](https://www.github.com/cerenbattal)

## License

MIT license @[Ceren Battal](https://www.github.com/cerenbattal)

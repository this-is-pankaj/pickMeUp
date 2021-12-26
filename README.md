# PickMeUp

## Index
1. [Introduction](#introduction)
2. [Features](#features)
3. [Running On Your System](#running-on-your-system)
4. [Limitations](#limitations)
5. [Tech Stack](#techStack)

## Introduction
*PickMeUp* is a delivery tracking web-app meant to help users easily track their parcels.

## Features
This delivery app comes with the following features:
1. Authentication: From a list of 5 customers and 10 delivery personnel. The username and passwords are as below:

| Username | Password | Role |
| -------- | -------- | ---- |
| customer1 | 123456789 | Customer|
| customer3 | 123456789 | Customer|
| customer4 | 123456789 | Customer|
| customer5 | 123456789 | Customer|
| customer6 | 123456789 | Customer|
| delivery1 | 123456789 | Delivery Guy|
| delivery2 | 123456789 | Delivery Guy|
| delivery3 | 123456789 | Delivery Guy|
| delivery4 | 123456789 | Delivery Guy|
| delivery5 | 123456789 | Delivery Guy|
| delivery6 | 123456789 | Delivery Guy|
| delivery7 | 123456789 | Delivery Guy|
| delivery8 | 123456789 | Delivery Guy|
| delivery9 | 123456789 | Delivery Guy|
| delivery10 | 123456789 | Delivery Guy|

2. Create a Pickup Request: When logged in as a customer, user can schedule a pickup request. The only desired inputs are the source and destination address.

3. Self-assigning a pickup request: When logged in as a delivery guy, the scheduled pickups from customer awaiting assignee can be viewed and the user can self-assign a parcel by a simple click.

4. Live-Tracking: The status of the parcel can be tracked with real time status updates by users - both customer and delviery guy.

5. History: Both delivery folks and customers can view their deliveries/ orders.

6. Logout: Logs users out of the app

7. Responsive Design: The app can be used on bith mobile devices and desktops alike.

## Running on your System
To get started with the application, follow these simple steps:
1. Checkout this repository
```bash
git clone https://github.com/this-is-pankaj/pickMeUp.git
```
2. Install all of the package dependencies
```bash
npm install
```
3. Run the application
```bash
npm run start
```
This should spin up a server on port 3000 and even bundle the front-end. Open up `http://localhost:3000` to experience the app.

## Limitations
The application is just a POC and the scope of implementations are limited.
- Data is not persistent. So you will lose all sample pickups and updates once you restart the server.
- Token exchange is done as a POC to make authentication applicable on APIs and not with JWT or Bearer tokens. These tokens don't expire as long as you don't restart the server.
- Validations on form fields have not been implemented. All text fields are free flowing but expects inputs for smooth operation.
- Some URL's like About, Contact, Help, etc won't work and have been put in place to showcase the use of 404 pages.

## Tech Stack
The web-app is build using:
- ReactJS: Client side
- Express: Server Side Routes

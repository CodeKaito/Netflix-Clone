# Netflix 2.0 with React.js

This is a complete movie streaming application built with React.js. The app is fully responsive and is intended for both desktop and mobile devices. This app is made to look and function just like Netflix.

## Features

- Fully responsive across all devices
- User authentication using Google Auth
- Integrated Stripe Checkout & Webhooks
- Movie filtering capabilities by genre or rating
- User can add movies to their favorites
- User can see their watch history
- User can view trailer previews
- User can search for movies

## Technologies Used

- React.js (Frontend)
- Redux (State management)
- Firestore (Database)
- Google Authentication
- Stripe Checkout & Webhooks

## Installation

1. Clone the repository to your local machine
2. Install dependencies by running `npm install`
3. Create a `.env` file with the following credentials:
   - `REACT_APP_GOOGLE_AUTH_CLIENT_ID=YOUR_CLIENT_ID`
   - `REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY`
   - `REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN`
   - `REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID`
   - `REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET`
   - `REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID`
   - `REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID`
   - `REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID`
   - `REACT_APP_STRIPE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY`
   - `REACT_APP_STRIPE_SECRET_KEY=YOUR_SECRET_KEY`
   - `REACT_APP_STRIPE_WEBHOOK_SECRET=YOUR_WEBHOOK_SECRET`
4. To run the app on your local machine, start the development server by running `npm start`

## Deployment

1. [Create an account](https://firebase.google.com/) with Firebase and create a new Firebase project
2. Update the `.env` file with your Firebase project credentials
3. Build the app by running `npm run build`
4. Deploy the app to Firebase by running `firebase deploy`

## Conclusion

That's it! You now have a fully functioning movie streaming application using React.js. Feel free to fork or clone this repository and customize it according to your needs.

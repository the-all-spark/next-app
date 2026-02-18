# About the project

**Name**: HCare - a platform for doctors  
**Description**: Next-application for doctors to manage their patients' data.

# Deploy

Application is available at the [address](https://next-app-dusky-eight.vercel.app/).

# Functionality

## Pages

Implemented the following pages and their functionality:

1. **Main page**:  
   When user is not logged in, **"Login form"** and demo credentials are displayed.
   - An error message is shown:
     - while submitting form with empty fields;
     - if the login failed (if the credentials are incorrect);
   - When any of fields gets at least one character, the button "Reset" becomes enabled.

   When user is successfully logged in, **"Welcome info"** is displayed instead of "Login form". Also additional menu items ("Profile", "Patients") and button ("Logout") are appeared in header.

2. **About us** - the general information about the application;

3. **Patients** - a table with general patients' data:
   - gets users' data from DummyJSON API;
   - removes current doctor's data from the list;
   - automatically sorts data by last name;
   - displays filtered data in a table format;
   - rows may include "Link to details" icon (link is enabled only for patients, that are selected by current doctor). Link leads to the **Patient's details page**;
   - rows include button ("+" or "-") for adding or removing patients from the personal doctor's list. Button appearance changes according to whether the patient is already in the doctor's list (then remove the patient) or not (then add the patient). When the button is clicked, the alert dialog appears.

   Page is protected (only for logged in users).

4. **Profile** - the personal doctor's profile page.  
    It includes the following sections (tabs):
   - Personal data (main data, account data, other data);
   - Contacts (preferred, other contacts);
   - Education and Experience;
   - Financial data (bank account, crypto data).

   Data is fetched from DummyJSON API with 'access-token' value, stored in cookies.  
   Page is protected (only for logged in users).

5. **Patient's details page** - the page, where the patient's data is displayed dynamically in the format of tabs and cards.  
   It includes the following sections (tabs):
   - Personal data (main data, other data);
   - Contacts (preferred, other contacts);
   - Job data (job data, occupation).

   Current doctor's ID and name are displayed in the header of the card.  
   Data is fetched from DummyJSON API.  
   Pages are protected (only for logged in users; also doctor has access only to his/her patients).

## Working with Zustand store

The Zustand stores are used for:

1. `authStore`

- storing the current doctor's data (save it in localStorage too);
- set user, set loading status, set error status during login and logout process (`useAuth` hook);

2. `selectedUsersStore`

- storing the lists of selected patients by all authenticated doctors separately (save it in localStorage too);
- add user to the list of selected patients (by doctor Id);
- remove user from the list of selected patients (by doctor Id);
- check if the user is selected by the current doctor.

## Working with Cookies

Cookies are used for storing the current doctor's ID, access token and refresh token.

## Working with API

Fetched data from the [DummyJSON API](https://dummyjson.com/docs):

- login and logout doctor;
- get authenticated doctor's data via 'access-token' cookie (for "Profile" and "Patient Details" pages);
- get all patients' data (for "Patients" page);
- get single patient data by id (for detailed patient page);

## Other functionality

- Created a responsive layout (from 320px to 1536px);

# Dependencies

## Main dependencies:

- `"react"`, `"react-dom"`;
- `"next"` - for file-based routing, data fetching, server-side rendering and as a build tool;
- `"zustand"` - for state management;
- `"shadcn"`, `"tailwindcss"` - for for UI component styling using shadcn and Tailwind CSS;
- `"typescript"` - for TypeScript support;

## Other dependencies:

- `"@base-ui/react"`, `"radix-ui"`, `"lucide-react"` - for styling and icons support;
- `"prettier"` - for code formatting;
- `"eslint"` - for code linting;

# How to run the app locally

1. download the project from the repository using [link](https://github.com/the-all-spark/next-app) ('<> Code' > 'Download ZIP'), then unpack it  
   or clone the repository using git command  
   `$ git clone https://github.com/the-all-spark/next-app.git`

2. move to the application folder and open Visual Studio code (or other code editor)  
   `$ cd next-app`  
   `$ code .`

3. install dependencies  
   `$ npm install`

4. run application  
   `$ npm run dev`

5. open http://localhost:3000/ in browser

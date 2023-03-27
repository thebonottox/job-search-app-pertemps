# App Intro

This is a job search website built with Vue.js and Tailwind. The purpose of this app is to allow users to search and browse through job listings, filter jobs by category, and view job details. This file provides instructions for running the code locally and an overview of the app's functionality.

## Deployed version:
[Website](https://job-search-app-pertemps.netlify.app/) hosted with Netlify.

## Running the Code Locally:
This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# Functionality
## Browse and Search Jobs.
The main page of the app displays a list of all available jobs. Users can browse through the list, or they can search for specific jobs using the search bar. The search bar dynamically updates as the user types, making it easy to find the desired job.

## Sort by Most Recent and Highest Salary
Users can sort the job listings by most recent or highest salary. Sorting is done using buttons on the main page of the app.

## Filter by Job Category
Users can filter job listings by job category. The app displays a list of job categories, and users can click on a category to filter the job listings.

## View Job Details
When users click on a job listing, they are taken to a job details page. The page displays information about the job, including the job title, salary and job description. Users can also apply for the job by clicking on the apply button, which returns an alert box.

## Disclaimer
The view button (job detail feature) is working but sometimes it gets stuck for some reason, so you might need to refresh the page and try again a couple of times.
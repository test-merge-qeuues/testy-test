# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# testy-test

## Simple React App for Merge Queue CI Testing

This repository contains a minimal React app with a Jest test suite and a GitHub Actions workflow for CI. It is designed to help you test GitHub Merge Queues.

---

## How to Enable and Use GitHub Merge Queues

### 1. Enable Branch Protection Rules

1. Go to your repository on GitHub.
2. Click on **Settings** > **Branches**.
3. Under "Branch protection rules," click **Add rule**.
4. Set the rule for your main branch (e.g., `main`).
5. Enable:
   - **Require status checks to pass before merging**
   - Select your CI workflow (e.g., `ci (ubuntu-latest, 20.x)`)
   - **Require pull request reviews before merging** (optional, but recommended)
   - **Require merge queue** (this is the key option)
6. Save changes.

### 2. How Merge Queue Works

- When a pull request (PR) is ready to merge, click "Merge when ready."
- The PR is added to the merge queue.
- GitHub creates a temporary branch that combines the latest `main` with the PR, then runs your CI workflow.
- If the tests pass, the PR is merged automatically. If not, it's removed from the queue.

### 3. Testing Merge Queue

- Open two or more PRs targeting `main`.
- Mark both as "Ready to merge" (or use the "Merge queue" button).
- Watch as GitHub serializes the merges, running your CI for each in order.

### 4. Notes

- Merge queue is only available for repositories where branch protection rules are set up as described.
- For private repos, you need GitHub Enterprise Cloud. For public repos, it works on free accounts.

---

Happy testing!

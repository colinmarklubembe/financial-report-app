# Financial Report App

## Overview

The Financial Report App is a web application that allows users to view, filter, and export financial transaction reports. It provides the following features:

- **View Transaction Reports**: Display detailed transaction information including Transaction ID, Date, Account Holder, Transaction Type, Amount, and Account Balance.
- **Search Functionality**: Allows users to search reports by transaction type or account holder name.
- **Export to CSV**: Users can export filtered transaction reports to a CSV file for further analysis.

## Features

- **Filter reports** by transaction type or account holder name.
- **Dynamic data fetching**: Reports are fetched from a server-side API and displayed dynamically on the client-side.
- **CSV Export**: Allows the user to export the displayed reports to a CSV file.

## Technologies Used

- **Next.js**: Framework used for server-side rendering and routing.
- **React**: Frontend library used for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **CSVLink (react-csv)**: Used to enable CSV export functionality.
- **TypeScript**: For static typing to improve code quality and readability.

## Prerequisites

Before running the app locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

## Installation

Follow these steps to get the application running locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/financial-report-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd financial-report-app
   ```

3. Install the project dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

4. Set up any required environment variables. For this application, if you have any custom API configurations, ensure they are set in a `.env.local` file.

5. Start the development server:

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

   The application should now be running locally at [http://localhost:3000](http://localhost:3000).

## Usage

Once the app is running, open your browser and go to [http://localhost:3000](http://localhost:3000) to view the financial reports.
Use the search bar to filter reports based on transaction type or account holder name.
Click the "Export to CSV" button to download the filtered reports as a CSV file.

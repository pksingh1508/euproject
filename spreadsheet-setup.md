# Google Spreadsheet Setup for Form Submissions

Follow these steps to set up your Google Cloud project and Spreadsheet to receive form submissions.

## 1. Create a Google Cloud Project

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Click on the project dropdown at the top left.
3.  Click **"New Project"**.
4.  Enter a name (e.g., "eu-prime-serwis-forms") and click **"Create"**.
5.  Select the newly created project.

## 2. Enable Google Sheets API

1.  In the Dashboard side menu, go to **"APIs & Services" > "Library"**.
2.  Search for **"Google Sheets API"**.
3.  Click on it and click **"Enable"**.

## 3. Create a Service Account

1.  In the Dashboard side menu, go to **"IAM & Admin" > "Service Accounts"**.
2.  Click **"+ CREATE SERVICE ACCOUNT"**.
3.  **Service account name**: `form-handler` (or anything you like).
4.  Click **"Create and Continue"**.
5.  **Role**: Select **"Editor"** (Basic > Editor) or Project > Editor. This gives the account permission to read/write.
6.  Click **"Continue"** then **"Done"**.

## 4. Generate a Key

1.  In the Service Accounts list, click on the **email address** of the service account you just created.
2.  Go to the **"Keys"** tab.
3.  Click **"ADD KEY" > "Create new key"**.
4.  Select **"JSON"** and click **"Create"**.
5.  A JSON file will automatically download to your computer. **Keep this file safe!**
6.  Rename this file to `service_account_key.json` (or similar) but **DO NOT commit it to Git**.

## 5. Set up the Spreadsheet

1.  Create a new Google Sheet at [docs.google.com/spreadsheets](https://docs.google.com/spreadsheets).
2.  Name it something recognizable (e.g., "Website Form Enquiries").
3.  In the first row (Header), add the following columns:
    *   Date
    *   First Name
    *   Last Name
    *   Email
    *   Phone
    *   User Type
    *   Subject
    *   Message
4.  **Important**: Share the sheet with the Service Account.
    *   Open your downloaded JSON key file.
    *   Find the `"client_email"` field (e.g., `form-handler@your-project.iam.gserviceaccount.com`).
    *   In your Google Sheet, click the green **"Share"** button.
    *   Paste the service account email and give it **"Editor"** access.
    *   Click **"Send"** (uncheck "Notify people" if you want).

## 6. Configure Environment Variables

1.  Open or create a `.env.local` file in the root of your project.
2.  Add the following variables using the details from your spreadsheet and JSON key file:

```env
# Google Sheets Configuration
GOOGLE_SHEET_ID=your_spreadsheet_id_here
# You can find the ID in the URL: docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit

# Service Account Details (from the JSON file)
GOOGLE_SERVICE_ACCOUNT_EMAIL=client_email_from_json
GOOGLE_PRIVATE_KEY="private_key_from_json"
```

**Note regarding the Private Key**:
*   The private key in the JSON file contains `\n`. When pasting into `.env.local`, make sure it is wrapped in double quotes.
*   Sometimes frameworks struggle with the newlines. In the code, we will handle replacing `\\n` with real newlines just in case.

## 7. Next Steps

The application code is already set up to read these variables and append data to your sheet. Once you've added the `.env.local` variables and restarted the server, it should work!

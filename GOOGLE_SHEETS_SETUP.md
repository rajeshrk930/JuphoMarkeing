# Google Sheets Integration Setup

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Jupho Lead Form"
3. Add headers in row 1:
   - `Timestamp` (A1)
   - `Name` (B1)
   - `Email` (C1)
   - `Phone` (D1)
   - `Website` (E1)
   - `Monthly Spend` (F1)
   - `Message` (G1)
   - `Consent` (H1)

## Step 2: Create Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete the default code
3. Paste this code:

\`\`\`javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = parseFormData(e.postData.contents);
    
    // Append row with timestamp
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.website || '',
      data.spend || '',
      data.message || '',
      data.consent || 'false'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function parseFormData(postData) {
  const params = {};
  const pairs = postData.split('&');
  
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    const key = decodeURIComponent(pair[0]);
    const value = decodeURIComponent(pair[1] || '');
    params[key] = value;
  }
  
  return params;
}

// Test function (optional)
function test() {
  const testData = {
    postData: {
      contents: 'name=Test%20User&email=test@example.com&phone=1234567890&website=https://example.com&spend=25-100k&message=Test%20message&consent=true'
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
\`\`\`

## Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Settings:
   - **Description**: "Jupho Contact Form Handler"
   - **Execute as**: **Me** (your account)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. **Authorize** the script (click Review Permissions, select your account, click Advanced → Go to [project name], then Allow)
7. **Copy the Web App URL** (looks like: \`https://script.google.com/macros/s/XXXXX.../exec\`)

## Step 4: Add to Next.js Project

1. Create \`.env.local\` in your project root:

\`\`\`bash
GOOGLE_SCRIPT_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOY_ID/exec
\`\`\`

2. Replace \`YOUR_DEPLOY_ID\` with the actual ID from step 3

3. Restart your dev server:

\`\`\`bash
npm run dev
\`\`\`

## Step 5: Test

1. Go to \`http://localhost:3000/contact\`
2. Fill out and submit the form
3. Check your Google Sheet for the new row

## Optional: Email Notifications

Add to your Apps Script after \`sheet.appendRow(...)\`:

\`\`\`javascript
// Send email notification
MailApp.sendEmail({
  to: 'your-email@example.com',
  subject: 'New Lead: ' + data.name,
  body: \`New form submission:
  
Name: \${data.name}
Email: \${data.email}
Phone: \${data.phone}
Website: \${data.website}
Monthly Spend: \${data.spend}
Message: \${data.message}
  \`
});
\`\`\`

## Troubleshooting

- **403 error**: Redeploy and ensure "Who has access" is set to "Anyone"
- **No data appearing**: Check Apps Script logs (Executions tab)
- **CORS issues**: Ensure you're using POST and form-encoded data (already configured)

## Security Notes

- Rate limiting: Add IP tracking in Apps Script if needed
- The honeypot field in ContactForm prevents basic spam
- Consider adding reCAPTCHA for production

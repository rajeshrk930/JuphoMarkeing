# Contact Form Integration Issues - Tracking Document

## Current Status: Form Submission Failing ❌

**Last Updated:** November 22, 2025

---

## Issue Summary
Form shows "Failed to submit" error when user tries to submit the contact form.

---

## Setup Completed ✅

1. **Google Sheet Created**
   - URL: https://docs.google.com/spreadsheets/d/1Fuq0l4lqOuyHExPoMv-IqBuIrItRh55J4O6854CZzPA/edit
   - Headers added in Row 1: Timestamp, Name, Email, Phone, Website, Budget, Message

2. **Google Apps Script Deployed**
   - Script created FROM the Google Sheet (Extensions → Apps Script)
   - Web App URL: https://script.google.com/macros/s/AKfycbzWLaZrQ5Wh3CVCmYz_3aIFdgMuurgeUnqWSRdFWDZoBE6x5ESnun8uEWEcB4YYfOA-fA/exec
   - Deployment Version: 2 (Nov 22, 2025, 15:26)
   - Access: Anyone

3. **Environment Variable Set**
   - File: `.env.local`
   - Variable: `GOOGLE_SCRIPT_ENDPOINT`
   - Value: [Web App URL above]

4. **Dev Server Restarted**
   - Port 3000 cleared
   - Server running on http://localhost:3000

---

## Current Problem ❌

**What's Happening:**
- User fills out form with all required fields
- Clicks "Book A Call" button
- Form shows "Failed to submit" error message
- Data NOT appearing in Google Sheet

**Test Data Used:**
- Name: rajesh
- Email: gugulothrajesh114@gmail.com
- Phone: 07337420588
- Budget: 10000
- Website: gugulothrajesh114@gmail.com
- Message: hello
- Consent: Checked ✓

---

## Troubleshooting Steps Needed

### Step 1: Check Server Logs
**Action:** Look at terminal where `npm run dev` is running
**Look for:** 
- "Sending to Google Script: [URL]"
- "Form data: [data]"
- "Google Script response status: [number]"
- "Google Script response: [message]"

**Expected:** Status should be 200, response should show success

---

### Step 2: Check Browser Console
**Action:** 
1. Open browser (http://localhost:3000)
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Submit form again
5. Look for error messages

**Look for:**
- Red error messages
- Failed fetch requests
- CORS errors
- Network errors

---

### Step 3: Test Google Script Directly
**Action:** Test if Google Script is working independently

**Test URL in browser:**
```
https://script.google.com/macros/s/AKfycbzWLaZrQ5Wh3CVCmYz_3aIFdgMuurgeUnqWSRdFWDZoBE6x5ESnun8uEWEcB4YYfOA-fA/exec?name=test&email=test@test.com&spend=1000
```

**Expected:** Should return `{"success":true}` and add row to Google Sheet

---

## Possible Issues & Solutions

### Issue 1: Google Script Not Receiving Data
**Symptoms:** Server logs show 302 redirect or error from Google
**Solution:** 
- Re-deploy Google Apps Script
- Make sure "Who has access" is set to "Anyone"
- Check script execution permissions

### Issue 2: CORS Error
**Symptoms:** Browser console shows CORS policy error
**Solution:** Google Apps Script should handle CORS automatically, but may need to add CORS headers

### Issue 3: Wrong Data Format
**Symptoms:** Google Script receives data but doesn't save
**Solution:** Check that Google Apps Script is handling `e.parameter` correctly

### Issue 4: Environment Variable Not Loading
**Symptoms:** Server logs show default placeholder URL instead of real URL
**Solution:** 
- Restart dev server completely
- Check `.env.local` file exists in project root
- Verify no typos in variable name

---

## Next Debug Steps

1. **Start dev server if not running:**
   ```powershell
   npm run dev
   ```

2. **Submit test form and collect info:**
   - [ ] Copy server terminal logs (all console.log messages)
   - [ ] Copy browser console errors (F12 → Console tab)
   - [ ] Check if Google Script URL in logs matches deployed URL

3. **Test Google Script directly:**
   - [ ] Visit test URL in browser
   - [ ] Check if row appears in Google Sheet
   - [ ] If fails, check Apps Script execution logs (in Apps Script editor → Executions)

---

## Google Apps Script Code (Current)

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = e.parameter;
    
    // Add row with form data
    sheet.appendRow([
      new Date(),
      params.name || '',
      params.email || '',
      params.phone || '',
      params.website || '',
      params.spend || '',
      params.message || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Files Modified in Project

1. **app/api/contact/route.ts** - API endpoint with debugging logs
2. **components/ContactForm.tsx** - Form component
3. **components/ContactModal.tsx** - Modal wrapper
4. **.env.local** - Environment variables
5. **app/page.tsx** - Modal state management

---

## Contact for Help

When asking for help, provide:
1. Server terminal logs (the console.log messages)
2. Browser console errors
3. Result from testing Google Script URL directly
4. Screenshot of Google Apps Script deployment settings

---

## Resolution Checklist

When issue is fixed, verify:
- [ ] Form submits without errors
- [ ] "Submitted Successfully!" message appears
- [ ] Data appears in Google Sheet with timestamp
- [ ] All fields saved correctly (name, email, phone, website, budget, message)
- [ ] Multiple submissions work
- [ ] Form resets after successful submission

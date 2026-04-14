# Cloudinary Upload Preset Configuration

To make image listings work, update your Cloudinary upload preset:

1. Go to: https://console.cloudinary.com/settings/upload
2. Find your preset: **jupho-ads**
3. Click Edit
4. **Important Settings**:
   - Signing Mode: **Unsigned**
   - Folder: **ads**
   - Allowed formats: **jpg, png, jpeg, webp**
   - Context metadata: **Allowed** ✅
   - Unique filename: **true** (recommended)
5. Click **Save**

Your upload will now store campaign data as metadata in Cloudinary!

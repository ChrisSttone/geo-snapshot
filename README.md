# 🌍 GeoSnapshot Photo Editor

**GeoSnapshot Photo Editor** is a simple web-based photo editing application with AI-powered features. Built using **React** and **Flask**, this tool allows users to:

- Upload and manage photos
- Automatically remove image backgrounds
- Manually erase objects from photos
- Extract individuals from group photos using AI (YOLOv8 + SAM)

---

## ✨ Features

- 📸 **Image Upload & Gallery View**
- 🖼️ **Background Removal** (powered by `rembg`)
- ❌ **Object Removal Tool** *(manual selection with inpainting)*
- 👥 **Group Photo Cutout**
  - Upload a group image
  - Automatically detect and cut out each person
  - Download individual cutouts
- ⚡ **Clean UI**
  - Minimal, responsive layout
  - Smooth CSS animations

---

## 🛠️ Tech Stack

### 🔹 Frontend (React)

- React.js
- React Router DOM
- Axios (for communicating with Flask)
- Vanilla CSS (animations, layout)


### 🔹 Backend (Flask)

- Flask (Python API server)
- `rembg` for background removal
- OpenCV & NumPy for object masking and editing (not accurate)
- YOLOv8 + SAM for cutout detection (person segmentation)
- Flask-CORS
- `.env` for secret keys and tokens

---

## 📁 Folder Structure

ai-geosnapshot/
├── geosnapshot-front/ # React frontend
├── photo-ai-flask/ # Flask backend

yaml
Copy
Edit

---

## 🚀 How to Run Locally

### 1️⃣ Start Flask Backend

```bash
cd photo-ai-flask
python app.py
# Runs on http://localhost:5001
2️⃣ Start React Frontend
bash
Copy
Edit
cd geosnapshot-front
npm install
npm start
# Opens at http://localhost:3000
📦 Dependencies
Backend
flask

flask-cors

rembg

opencv-python

numpy

python-dotenv

ultralytics (for YOLOv8)

segment_anything (Meta's SAM)

Frontend
axios

react-router-dom

🔒 Security Notes
.env file is excluded from version control.

To use advanced features like Replicate (optional), create a .env file in photo-ai-flask/ and add:

env
Copy
Edit
REPLICATE_API_TOKEN=your-token-here
📸 Demo Instructions
Upload an image

Remove background using rembg

(Optional) Select and remove objects manually

Try "Group Photo Cutout" to automatically extract people

Download results with one click

⚠️ Note on Large Files
To avoid GitHub’s 100MB limit:

Haven't uploaded large models (.pth, .weights, .dll, etc.) to the repo. These need to be downloaded at runtime.



👨‍💻 Author
Developed by Chris Livingstone
For academic submission and demonstration purposes.

📦 GitHub Repository: https://github.com/ChrisSttone/geosnapshot-ai


markdown
Copy
Edit
# GeoSnapshot Photo Editor

**GeoSnapshot Photo Editor** is a simple web-based photo editing application with AI-powered background removal. Built using React and Flask, the tool allows users to upload images, view them in a gallery, and edit them using smart features like background removal and (optionally) object removal.

---

## ✨ Features

- 📸 **Image Upload & Gallery View**
- 🖼️ **Background Removal** (powered by `rembg`)
- ❌ **Object Removal** *(currently under testing / demo-ready only)*
- 🧰 **Basic Editor Interface**
  - Manual selection tool for object areas
  - Download edited images
- ⚡ **Clean UI with Animations**
  - Frontend styled with basic CSS and animations
  - Responsive and simple layout

---

## 🛠️ Technologies Used

### Frontend (React)

- React.js
- React Router DOM
- Axios (for API requests)
- CSS Animations
- Optionally supports Tailwind/Sakura UI for styling

### Backend (Flask)

- Python Flask (API server)
- `rembg` for background removal
- OpenCV and NumPy (for selection/masking)
- CORS-enabled API endpoints
- (Optional) Replicate API — commented out as fallback due to billing

---

## 📂 Folder Structure

```bash
ai-geosnapshot/
├── geosnapshot-front/      # React frontend
└── photo-ai-flask/         # Flask backend (merged into same repo)
🚀 How to Run Locally
1. Start Flask Backend
bash
Copy
Edit
cd photo-ai-flask
python app.py
Default runs on http://localhost:5001

2. Start React Frontend
bash
Copy
Edit
cd geosnapshot-front
npm install
npm start
Opens at http://localhost:3000

📦 Dependencies
Flask
flask

flask-cors

rembg

opencv-python

numpy

python-dotenv

React
axios

react-router-dom

🔒 Note on Security
.env file is excluded from GitHub for security reasons.

Replicate API key (if used) must be placed in .env file:

env
Copy
Edit
REPLICATE_API_TOKEN=your-token-here
📸 Demo Notes
Since Replicate API (used for object removal) requires billing, the current object removal is simulated using selection and placeholder logic for demo purposes.

📥 Output Example
Users can upload an image

Remove the background

Optionally select an area for object removal

Download the result with one click

🧑‍💻 Author
Developed by Chris Stone
For project submission / demo purposes.
Repository maintained at: https://github.com/ChrisSttone/geosnapshot-ai

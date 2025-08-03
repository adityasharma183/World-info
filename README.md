🌍 WorldAtlas - React Country Explorer
WorldAtlas is a modern React.js web application that allows users to explore countries around the globe. It features country search, region filtering, sorting, and interactive UI sections like About, Contact, and more.

🚀 Features
🌐 Explore Countries: View details about countries including names, capitals, populations, and interesting facts.

🔍 Search and Filter: Easily search countries by name and filter them by region (Asia, Africa, etc.).

🔄 Sort Functionality: Sort countries alphabetically in ascending or descending order.

💬 Contact Form: Submit your contact details and message.

🧠 Interesting Facts: Learn fun facts about different countries in the About section.

📱 Responsive UI: Fully mobile-friendly design with reusable components.

🛠️ Technologies Used
React.js

React Router

React Icons

JSON Server / Local JSON API

CSS Grid & Flexbox

Hooks (useState, useEffect, useTransition)

Context API (Auth)

📁 Folder Structure
src/
├── api/                  # JSON and API helper files
├── components/
│   ├── Layouts/          # Layout components like CountryCard, CountryDetails
│   └── UI/               # Reusable UI like Loader, SearchFilter
├── pages/                # Main pages like Home, About, Country, Contact
├── utills/              # Utility functions (e.g. localStorage helper)
├── App.jsx              # App component with router
└── main.jsx             # Entry point

🔧 Installation & Setup
Clone the repository:
git clone https://github.com/your-username/worldatlas.git
cd worldatlas

Install dependencies:
npm install
Run the app:

npm run dev
(Optional) Start mock API (if using json-server):
npx json-server --watch api/countryData.json --port 3001

📃 License
This project is licensed under the MIT License.


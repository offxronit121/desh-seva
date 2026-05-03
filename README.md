# Desh Seva App

An interactive election education platform and AI assistant designed to prepare citizens for the Indian democratic process through contextual guidance, gamification, and interactive visualization tools.

## 🚀 Live Demo
**[Insert Your Live Server Link Here]** *(Please replace this placeholder with your actual deployed URL)*

## 🌟 Features
- **Desh Seva AI Assistant:** Contextual guidance and answers to election-related queries.
- **Phase Flashcards:** A gamification module to educate users on different election phases.
- **Timeline Tracker:** Visual tracking of the election lifecycle.
- **Know Your Candidate:** Tools to learn more about the representatives.
- **EVM Simulator:** Hands-on virtual experience with Electronic Voting Machines.
- **Myth-Busting Content:** Combating misinformation regarding the democratic process.

## 📊 Project Flowchart

```mermaid
graph TD;
    A[App Initialization] --> B{Main Dashboard};
    B --> C[Desh Seva AI Assistant];
    B --> D[Phase Flashcards];
    B --> E[Timeline Tracker];
    B --> F[EVM Simulator];
    C --> G[User Queries & Guidance];
    D --> H[Gamified Learning Modules];
    E --> I[Election Lifecycle Visuals];
    F --> J[Virtual Voting Experience];
```

## 📈 Election Lifecycle Graph

Below is a representation of the election phases covered in the timeline tracker:

```mermaid
gantt
    title Indian Election Lifecycle Phases
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section Pre-Election
    Delimitation           :done,    des1, 2024-01-01, 30d
    Voter List Update      :active,  des2, after des1, 30d
    
    section Announcement
    Election Announcement  :         des3, after des2, 5d
    Model Code of Conduct  :         des4, after des3, 45d
    
    section Core Process
    Nominations & Scrutiny :         des5, after des3, 10d
    Campaigning            :         des6, after des5, 25d
    Polling                :         des7, after des6, 5d
    
    section Post-Election
    Counting               :         des8, after des7, 2d
    Result Declaration     :         des9, after des8, 1d
```

## 🛠️ Technology Stack
- **Frontend:** React, Vite
- **Styling:** CSS
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd current
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start the app using Vite. Open `http://localhost:5173` to view it in the browser.

### Building for Production
To build the app for production to the `dist` folder, run:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).

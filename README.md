# Desh Seva App

An interactive, comprehensive election education platform and AI assistant designed to prepare citizens for the Indian democratic process. It provides contextual guidance, gamified learning, and interactive visualization tools to make learning about elections engaging and accessible.

## 🚀 Live Demo
**[Click here to view the Live Application](https://desh-seva-858067523048.us-central1.run.app/)** 

## 🌟 Features in Detail

- **Desh Seva AI Assistant:** A specialized contextual chatbot that helps users navigate complex election-related queries in real-time.
- **Phase Flashcards:** A gamification module utilizing interactive flashcards to educate users on different election phases, testing their knowledge dynamically.
- **Timeline Tracker:** A visual, step-by-step tracking system of the entire election lifecycle, from delimitation to the final result declaration.
- **Know Your Candidate:** Integrated tools and resources to help voters learn more about their local representatives and their track records.
- **EVM Simulator:** A hands-on, virtual experience with Electronic Voting Machines to familiarize first-time voters with the physical process of casting a vote.
- **Myth-Busting Content:** Dedicated sections aimed at combating misinformation and clarifying common misconceptions regarding the democratic process.

## 📊 Project Architecture & Flow

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

Below is the detailed timeline structure used to educate voters on the phases of the election:

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
- **Frontend Framework:** React 19, Vite
- **Styling:** CSS3 (Custom responsive design)
- **Icons:** Lucide React
- **Deployment & Server:** Docker, Nginx, Google Cloud Run (based on the live server URL)

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/offxronit121/desh-seva.git
   cd desh-seva
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
Contributions are welcome! Feel free to open issues or submit pull requests to help improve the project.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).

---
**Author:** Gaurav Shiswar

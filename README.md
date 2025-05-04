# Ballot: Civic Engagement Platform
*A neutral space connecting constituents and representatives to reduce political polarization*

**Developed by Dream Team USA**:
👨‍💻 [Louis Jager](https://github.com/LouisJager) (Backend/Scrum Master)
🎨 [Elijah Hawes](https://github.com/passwordd009) (Frontend Lead)
🛠️ [Xhenis Malecaj](https://github.com/xhenis01) (Feature Developer)

---

## 🚀 Key Features
### **For Representatives**
- Create/manage posts *(Xhenis)*
- View followers and follow other reps *(Louis)*
- Delete posts *(Xhenis)*

### **For Constituents**
- Create profiles *(Team)*
- Follow/unfollow representatives *(Louis)*
- View representative posts *(Elijah)*

---

## 🛠️ **Team Contributions**
| Member | Role | Key Work |
|-------------------|-----------------------|----------|
| **Louis Jager** | Backend/Scrum Master | - Designed `users`/`follows` database schema <br> - Built follow/unfollow API endpoints <br> - Led agile workflows |
| **Elijah Hawes** | Frontend Lead | - Implemented React UI (profiles, feeds) <br> - Integrated Radix UI components <br> - Connected frontend to Louis’s APIs |
| **Xhenis Malecaj**| Feature Developer | - Created post creation/deletion system <br> - Collaborated on database models |

---

## 📂 **Repository Structure**
```bash
ballot_usa/
├── backend/ # Louis & Xhenis
│ ├── migrations/ # Schema versions (Louis)
│ ├── models/ # Post & User logic (Xhenis/Louis)
│ └── controllers/ # API handlers (Louis: follows, Xhenis: posts)
├── frontend/ # Elijah
│ ├── src/components/ # React UI (profiles, feeds)
│ └── src/api/ # Frontend-Backend integration
└── docs/ # ERD, proposals (Team)
```

---

## 🔗 **Technical Documentation**
- **[ERD Diagram](https://dbdiagram.io/d/663256d65b24a634d0425b3c)** *(Team)*
- **[API Docs](docs/api_endpoints.md)** *(Louis/Xhenis)*
- **[Project Proposal](docs/proposal.pdf)** *(Team)*

---

## 💻 **Tech Stack**
| Area | Technologies | Owners |
|------------|--------------|--------|
| **Backend** | Node.js, Express, PostgreSQL | Louis, Xhenis |
| **Frontend**| React, Radix UI | Elijah |
| **Design** | Figma, CSS | Elijah |

---

## 🚀 **Getting Started**
1. Clone the repo:
```bash
git clone https://github.com/DreamTeamUSA/ballot_usa.git
```
2. Set up the database (Louis’s schema):
```bash
npm run migrate
```
3. Start the backend (Xhenis/Louis) & frontend (Elijah):
```bash
npm run dev
cd frontend && npm start
```

---

## 🌟 **Why This Project?**
Ballot tackles **political polarization** by:
- Replacing toxic social media with **structured discourse** *(Team)*
- Enabling **transparent rep-constituent communication** *(Louis’s follow system, Xhenis’s posts)*
- Promoting **informed voting** via clean UI *(Elijah)*

---

## 👏 **Credits**
| Member | GitHub | Contribution Highlight |
|-------------------|--------|------------------------|
| Louis Jager | [@LouisJager](https://github.com/LeaderLou1) | Database design, API architecture |
| Elijah Hawes | [@ElijahHawes](https://github.com/passwordd009) | Interactive React frontend |
| Xhenis Malecaj | [@XhenisM](https://github.com/xhenis01) | Post feature implementation |

---

*Built with civic passion and technical collaboration.* 🏛️💻

---


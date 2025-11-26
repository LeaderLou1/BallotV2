# 🏛️ Ballot: Civic Engagement Platform
**A neutral space connecting constituents and representatives to reduce political polarization**

**Developed by Dream Team USA**:
- Xhenis Malecaj
- Louis Jager
- Elijah Hawes

---

## 😞 The Problem & Mission
### The Problem
The United States faces significant challenges from intense political polarization. This is fueled by a two-party system representing extreme ideologies, which leads to legislative inefficiency, discourages political engagement, and erodes trust. This division is significantly exacerbated by for-profit social media, which creates echo chambers and promotes divisive, inflammatory rhetoric.

### 🤔 Our Hypothesis
If citizens had an alternative to for-profit social media websites like Facebook and X to engage with politicians, then they would encounter less inflammatory and divisive political information, encouraging more rational decision-making and less political and ideological division.

### 🏙️ Mission Statement
Our mission is to **connect citizens and representatives through problems and solutions.**

### 🫂 Who do we serve?
US citizens who are of age and seek to be informed on local politics, create change in their community, and have meaningful discourse.

---

## 🚀 Key Features & Product Overview

Our platform offers a robust suite of features tailored to both Representatives and Constituents, fostering meaningful engagement and collaboration.

### For Representatives
| Feature | Description | Technical Owner |
| :--- | :--- | :--- |
| **Post Management** | Create, share updates, address concerns, and manage content by deleting posts. | Xhenis Malecaj |
| **Follower Engagement**| View followers and follow other Representatives for cross-collaboration. | Louis Jager |

### For Constituents
| Feature | Description | Technical Owner |
| :--- | :--- | :--- |
| **Profile Creation** | Create profiles to voice opinions and participate in community initiatives. | Team |
| **Following Representatives** | Follow/unfollow representatives to stay informed and control the content feed. | Louis Jager |
| **View Feed** | Easily access posts from followed Representatives. | Elijah Hawes |

---

## 💻 Technical Documentation & Team Contributions

### 🛠️ Tech Stack
| Area | Technologies | Owners |
| :--- | :--- | :--- |
| **Backend** | Node.js, Express, **PostgreSQL** (Database) | Louis Jager, Xhenis Malecaj |
| **Frontend**| React, Radix UI, CSS | Elijah Hawes |

### 👥 Team Contributions
| Member | Role | Key Work |
| :--- | :--- | :--- |
| **Louis Jager** | Backend/Scrum Master | Designed `users`/`follows` database schema, built follow/unfollow API endpoints, led agile workflows. |
| **Elijah Hawes** | Frontend Lead | Implemented React UI (profiles, feeds), integrated Radix UI, connected frontend to APIs. |
| **Xhenis Malecaj**| Feature Developer | Created post creation/deletion system, collaborated on database models. |

### 📂 Repository Structure
```bash
ballot_usa/
├── backend/ # API logic and database migrations (Louis & Xhenis)
├── frontend/ # React UI components and integration (Elijah)
└── docs/ # ERD, proposals, API endpoints (Team)

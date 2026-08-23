# EasyTrip - Smart Multi-Language Trip Manager

> **Live Demo:** [https://amansahu13.github.io/TripEsey/](https://amansahu13.github.io/TripEsey/)

EasyTrip is a real-time collaborative group expense and pool-fund management web application. It streamlines trip budgeting by handling central pool money, individual out-of-pocket expenses, driver logs, and settlement math.

---

### Features

* **Central Pool & Cash Box Tracking**: Track upfront pool collections, split balances across cash box and digital (UPI) modes, and monitor remaining funds in real time.


* **Flexible Money Handling Modes**: Choose between a single cashier/manager managing funds or group multi-spender mode.


* **Driver & Toll Ledger**: Dedicated tracking for vehicle advances, driver payments, fuel, and toll taxes.


* **Smart Split & Debt Minimization**: Automated calculation of member balances and minimal transaction steps (*Who Pays Whom*).


* **Multi-Language Support**: Built-in full UI localization for English, Hindi, and Hinglish.


* **1-Tap Quick Pick**: Fast categorization chips for common travel items (Cabs, Food, Tea, Parking, Fuel, etc.).


* **Built-in Quick Calculator**: In-app calculator widget with direct amount transfer to expense forms.


* **Cloud Sync & Local Backup**: Real-time multi-user syncing via Firebase Firestore alongside `localStorage` persistence.


* **Export & Sharing**: One-click summary text copying for chat apps and CSV report downloads.



---

### Tech Stack

* **Frontend**: HTML5, Vanilla JavaScript (ES6+)


* **Styling**: Tailwind CSS (CDN), FontAwesome 6


* **Backend & Sync**: Firebase 11 (Authentication & Firestore)


* **Storage**: Browser `localStorage` for offline persistence



---

### Project Structure

```text
├── index.html       # Application UI, modals, and Firebase init
├── app.js           # Business logic, state management, translations & calculations
├── styles.css       # Custom scrollbars, animations, and touch styling
└── README.md        # Documentation

```

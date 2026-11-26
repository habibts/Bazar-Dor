# 🛒 Bazar Dor (বাজার দর)

### Bangladesh Daily Market Price Tracker

**Bazar Dor** is a modern, responsive web application designed to make daily commodity prices in Bangladesh easily accessible. It provides a centralized platform where users can explore essential product prices, compare market rates, monitor price fluctuations, and make informed purchasing decisions.

The platform focuses on transparency, accessibility, and a user-friendly experience, helping consumers stay informed about the daily cost of essential goods.

---

## 🌟 Overview

In Bangladesh, the prices of essential commodities frequently fluctuate across markets. Keeping track of these changes can be difficult for ordinary consumers.

**Bazar Dor** aims to solve this problem by providing a digital platform that brings essential commodity prices together in one place, allowing users to:

- Check daily prices of essential commodities.
- Browse products by category.
- Compare prices across different markets.
- Monitor price increases and decreases.
- View detailed product price information.
- Access market information through a responsive and Bengali-friendly interface.

---

## ✨ Features

### 📊 Daily Market Prices
Explore the latest available prices of essential commodities in Bangladesh through a centralized dashboard.

### 🗂️ Product Categories
Browse products organized into different categories:

- 🌾 Rice
- 🫘 Lentils
- 🛢️ Cooking Oil
- 🥬 Vegetables
- 🐟 Fish
- 🥩 Meat
- 🥚 Eggs & Milk
- 🌶️ Spices

### 📈 Price Trend Monitoring
- Identify products with increasing prices.
- Find products with decreasing prices.
- Track price fluctuations compared with previous available data.

### 🔍 Product Details
View detailed information about individual commodities, including:

- Product name
- Product category
- Current price
- Measurement unit
- Price change
- Available market price information

### ⚖️ Market Price Comparison
Compare commodity prices across different markets to identify:

- Minimum available price
- Maximum available price
- Estimated average price
- Market-to-market price differences

### 🔐 Authentication & User Management
- User registration and login
- Secure authentication with Better Auth
- Session management
- Protected routes
- Authenticated user profile

### 👤 User Profile
Access a personalized profile section through the authentication system.

### 🇧🇩 Bengali-Friendly Interface
Designed with Bengali users in mind, featuring Bengali product names, prices, and interface content where applicable.

### 📱 Responsive Design
Optimized for different screen sizes and devices:

- Desktop
- Laptop
- Tablet
- Mobile

### ⚡ Interactive User Experience
- Smooth navigation
- Reusable UI components
- Loading states
- Error handling
- Success and error notifications
- Clean and intuitive interface

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | Full-stack React framework and application routing |
| **React** | Interactive UI development |
| **TypeScript** | Static typing and improved code reliability |
| **Tailwind CSS** | Responsive styling and utility-first design |
| **HeroUI** | Modern and reusable UI components |
| **Better Auth** | Authentication and session management |
| **MongoDB** | Database for authentication and user data |
| **React Hot Toast** | User feedback and notifications |
| **REST API** | Data fetching and API communication |
| **Git** | Version control |
| **GitHub** | Repository hosting and collaboration |

---

## 🏗️ Project Architecture

Bazar Dor follows a modern web application architecture built around Next.js.

```text
┌──────────────────────────────┐
│          Frontend           │
│   Next.js + React + TS       │
│   Tailwind CSS + HeroUI      │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Application Logic     │
│   Routing • Authentication   │
│   Protected Routes • APIs    │
└──────────────┬───────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐ ┌──────────────┐
│  REST APIs   │ │  Better Auth │
│ Market Data  │ │   Sessions   │
└──────────────┘ └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │   MongoDB    │
                │ User Data    │
                └──────────────┘
```

---

## 📂 Product Categories

| Category | Example Products |
|---|---|
| Rice | Miniket, Najirshail, Basmati |
| Lentils | Masoor Dal, Moong Dal, Chickpeas |
| Cooking Oil | Soybean Oil, Palm Oil |
| Vegetables | Potato, Onion, Tomato, Brinjal |
| Fish | Rui, Katla, Tilapia |
| Meat | Beef, Chicken, Mutton |
| Eggs & Milk | Eggs, Milk |
| Spices | Turmeric, Chili, Garlic, Ginger |

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git
- MongoDB database

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bazar-dor.git
```

### 2. Navigate to the Project Directory

```bash
cd bazar-dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and configure the required environment variables.

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

> Configure additional environment variables if required by your API or application setup.

### 5. Run the Development Server

```bash
npm run dev
```

### 6. Open the Application

Visit:

```text
http://localhost:3000
```

---

## 🎯 Project Goals

The primary objectives of Bazar Dor are:

- **Accessibility:** Make daily market price information easily accessible.
- **Transparency:** Provide clear commodity pricing information.
- **Awareness:** Help consumers understand price fluctuations.
- **Comparison:** Enable users to compare prices across markets.
- **Convenience:** Reduce the effort required to find essential commodity prices.
- **Digital Innovation:** Introduce a modern digital solution for everyday market information in Bangladesh.

---

## 🔮 Future Improvements

Potential future enhancements include:

- 📉 Historical price charts and analytics
- 🔔 Price alerts and notifications
- 📍 Location-based market prices
- 🏪 More local market coverage
- 📅 Weekly and monthly price reports
- ❤️ Favorite products and watchlists
- 🧾 Shopping list functionality
- 📊 Advanced market analytics
- 🌐 Improved multilingual support
- 📲 Progressive Web App (PWA) support

---

## 🤝 Contributing

Contributions, suggestions, bug reports, and feature requests are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Submit a Pull Request.

---

## 📄 License

This project is developed for educational and practical purposes. A license can be added to the repository to define the terms of use and distribution.

---

<div align="center">

### 🛒 Bazar Dor — বাজার দর

**Making everyday market prices easier to access, compare, and understand.**

Made with ❤️ in Bangladesh 🇧🇩

</div>

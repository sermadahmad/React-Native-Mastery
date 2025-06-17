# React Native Mastery - E-commerce Product Showcase App

## 📱 Project Summary

**E-commerce Product Showcase App** is a modern, cross-platform mobile application built with React Native and Expo that demonstrates advanced e-commerce product showcasing capabilities. This project serves as a comprehensive example of React Native development best practices, featuring a beautiful product catalog with detailed product views, navigation, and interactive UI components.

### 🎯 Key Features

- **Product Catalog**: Displays products in a responsive 2-column grid layout
- **Product Cards**: Beautiful, interactive product cards with images, pricing, and badges
- **Detailed Product Views**: Comprehensive product detail screens with full information
- **Navigation**: Smooth stack navigation between screens
- **Interactive UI**: Press animations, badges for delivery and coins
- **Responsive Design**: Optimized for different screen sizes

### 🛠️ Technical Stack

- **Framework**: React Native 0.76.3
- **Development Platform**: Expo SDK 52
- **Navigation**: React Navigation v7 (Stack Navigator)
- **Icons**: React Native Vector Icons
- **UI Components**: Custom-built components with StyleSheet

## 🚀 Features in Detail

### Product Catalog Screen
- Grid layout with 2 columns
- Product cards with images, titles, prices, and discounts
- Interactive badges for free delivery and coin savings
- Rating display with star icons
- Sold count with number formatting (k, M, B)

### Product Detail Screen
- Full-screen product images
- Comprehensive product information
- Price and discount display
- Rating and review count
- Delivery information
- Coin savings details

### UI/UX Highlights
- Smooth press animations
- Color-coded badges and labels
- Professional e-commerce styling
- Responsive image handling
- Clean typography and spacing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/sermadahmad/React-Native-Mastery/tree/Daraz-Clone
   cd React-Native-Mastery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   
   # For Web
   npm run web
   ```

## 📱 App Structure

```
React-Native-Mastery/
├── App.js                 # Main app component with navigation
├── index.js              # Entry point
├── productCard.js        # Reusable product card component
├── products.js           # Product data array
├── screens/
│   ├── home.js          # Product catalog screen
│   └── detail.js        # Product detail screen
├── assets/              # App icons and images
└── package.json         # Dependencies and scripts
```

## 🎨 Component Architecture

### ProductCard Component
- **Purpose**: Reusable product display component
- **Features**: Image, title, price, discount, badges, ratings
- **Interactivity**: Press animations and navigation

### Navigation Structure
- **Stack Navigator**: Home → Detail
- **Data Passing**: Product data passed via route params
- **Smooth Transitions**: Native navigation animations

## 📊 Product Data Structure

Each product object contains:
```javascript
{
  id: number,
  imgsrc: string,
  title: string,
  price: number,
  discount: number,
  coinsSave: number,
  rating: number,
  reviewCount: number,
  sold: number,
  freeDelivery: boolean,
  coins: boolean
}
```

## 🎥 Demo Video

https://github.com/user-attachments/assets/3c0c00ee-7898-4378-b9d5-0653664d7335

## 🔧 Development

### Available Scripts
- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

### Key Dependencies
- `@react-navigation/native` - Navigation framework
- `@react-navigation/stack` - Stack navigation
- `react-native-vector-icons` - Icon library
- `expo` - Development platform

## 📱 Platform Support

- ✅ iOS (iPhone & iPad)
- ✅ Android
- ✅ Web (Expo Web)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React Native](https://reactnative.dev/)
- Powered by [Expo](https://expo.dev/)
- Icons from [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- Navigation by [React Navigation](https://reactnavigation.org/)

---


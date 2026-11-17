import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import HeroSection from './components/HeroSection';
import ShopByCategory from './components/ShopByCategory';
import TrendingProducts from './components/TrendingProducts';
import FlashDeals from './components/FlashDeals';
import NewArrivals from './components/NewArrivals';
import MeqyEdit from './components/MeqyEdit';
import WhyShopWithMeqy from './components/WhyShopWithMeqy';
import CustomerReviews from './components/CustomerReviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Drawers & Modals
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import QuickViewModal from './components/QuickViewModal';
import CheckoutModal from './components/CheckoutModal';
import MobileMenuDrawer from './components/MobileMenuDrawer';
import AuthModal from './components/AuthModal';
import NotificationToast from './components/NotificationToast';

import { PRODUCTS } from './data/products';

export default function App() {
  const [selectedCity, setSelectedCity] = useState('Lahore');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  
  // Cart state initialized with 2 realistic placeholder items for immediate demo feel
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0],
      quantity: 1,
      selectedColor: 'Midnight Black'
    },
    {
      ...PRODUCTS[1],
      quantity: 1,
      selectedSize: '100ml Bottle'
    }
  ]);

  // Wishlist state initialized with 1 item
  const [wishlistIds, setWishlistIds] = useState([PRODUCTS[2].id]);

  // Modal & Drawer visibility state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);

  // Show Toast notification helper
  const showToast = (title, message, type = 'cart') => {
    setToast({ title, message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Add to cart handler
  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(i => i.id === productToAdd.id);
      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += (productToAdd.quantity || 1);
        return updated;
      }
      return [...prevItems, { ...productToAdd, quantity: productToAdd.quantity || 1 }];
    });
    showToast('Added to Shopping Bag!', `${productToAdd.name} (Rs. ${productToAdd.price.toLocaleString()})`, 'cart');
  };

  // Cart quantity updater
  const handleUpdateCartQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  // Remove cart item
  const handleRemoveCartItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Wishlist toggle
  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast('Removed from Wishlist', product.name, 'wishlist');
        return prev.filter(id => id !== product.id);
      } else {
        showToast('Saved to Wishlist!', product.name, 'wishlist');
        return [...prev, product.id];
      }
    });
  };

  // Cart totals calculation
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Wishlist products array
  const wishlistProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#171A18] font-sans antialiased">
      
      {/* 1. Announcement Top Bar */}
      <AnnouncementBar
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      {/* 2. Premium Header */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenQuickView={(prod) => setQuickViewProduct(prod)}
        onOpenAuth={() => setIsAuthOpen(true)}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      {/* 3. Category Mega Navigation */}
      <CategoryNav
        activeCategoryFilter={activeCategoryFilter}
        setActiveCategoryFilter={setActiveCategoryFilter}
      />

      {/* Main Homepage Sections */}
      <main className="flex-1">
        
        {/* 4. Large Editorial Hero Section */}
        <HeroSection
          onExploreClick={() => {
            const section = document.getElementById('categories');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          featuredProduct={PRODUCTS[0]}
        />

        {/* 5. Shop by Category Visual Grid */}
        <ShopByCategory
          activeCategoryFilter={activeCategoryFilter}
          onSelectCategory={(catId) => setActiveCategoryFilter(catId)}
        />

        {/* 6. Trending Products Grid */}
        <TrendingProducts
          activeCategoryFilter={activeCategoryFilter}
          setActiveCategoryFilter={setActiveCategoryFilter}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          wishlistIds={wishlistIds}
        />

        {/* 7. Today's Flash Deals */}
        <FlashDeals
          onAddToCart={handleAddToCart}
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 8. New Arrivals */}
        <NewArrivals
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          wishlistIds={wishlistIds}
        />

        {/* 9. The MEQY Edit Curated Collection */}
        <MeqyEdit
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* 10. Why Shop With MEQY Trust Pillars */}
        <WhyShopWithMeqy />

        {/* 11. Customer Reviews Social Proof */}
        <CustomerReviews />

        {/* 12. Newsletter Voucher Subscription */}
        <Newsletter />

      </main>

      {/* 13. Premium Footer */}
      <Footer
        onSelectCategory={(catId) => setActiveCategoryFilter(catId)}
      />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        selectedCity={selectedCity}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={(id) => setWishlistIds(prev => prev.filter(item => item !== id))}
        onAddToCart={handleAddToCart}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        selectedCity={selectedCity}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        selectedCity={selectedCity}
        onClearCart={() => setCartItems([])}
      />

      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeCategoryFilter={activeCategoryFilter}
        onSelectCategory={(catId) => setActiveCategoryFilter(catId)}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <NotificationToast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}

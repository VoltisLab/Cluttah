import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingNotifications from "./BookingNotifications";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>{children}</main>
      <Footer />
      <BookingNotifications />
    </div>
  );
};

export default Layout;
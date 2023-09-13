"use client"
import SignupWithLinkButton from "./components/SignupWithLinkButton";
import googleLogo from "./assets/google.svg";
import microsoftLogo from "./assets/microsoft.svg";
import linkedinLogo from "./assets/linkedin.svg";
import H1 from "./components/H1";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import SignupForm from "./components/SignupForm";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebarHandler = (e) => {
    e.preventDefault();
    setIsSidebarOpen((prevState) => !prevState);
  }

  return (
    <>
      <Header />
      <Sidebar toggleSidebarHandler={toggleSidebarHandler} isSidebarOpen={isSidebarOpen} />
      <main className="max-w-[550px] w-full mx-auto">
        <div className="px-10 py-16 space-y-8">
          <div>
            <H1 />
          </div>
          <div className="space-y-4">
            <SignupWithLinkButton logo={microsoftLogo} text={"Sign up with microsoft"} />
            <SignupWithLinkButton logo={googleLogo} text={"Sign up with google"} />
            <SignupWithLinkButton logo={linkedinLogo} text={"Sign up with linkedin"} />
          </div>
          <SignupForm />
        </div>
      </main>
      <Footer toggleSidebarHandler={toggleSidebarHandler} />
    </>
  )
}

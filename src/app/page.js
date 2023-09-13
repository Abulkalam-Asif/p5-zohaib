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
      <main className="px-10 py-12.5 md:px-0 md:py-0">
        <div className="max-w-[550px] mx-auto px-12.5 pt-10 pb-12 space-y-5 sm:px-6 py-10">
          <div>
            <H1 />
          </div>
          <div className="flex flex-col gap-y-4">
            <SignupWithLinkButton logo={microsoftLogo} text={"Sign up with microsoft"} logoSize="w-6 md:w-4" />
            <SignupWithLinkButton logo={googleLogo} text={"Sign up with google"} logoSize="w-7 md:w-5" />
            <SignupWithLinkButton logo={linkedinLogo} text={"Sign up with linkedin"} logoSize="w-7 md:w-5" />
          </div>
          <SignupForm />
        </div>
      </main>
      <Footer toggleSidebarHandler={toggleSidebarHandler} />
    </>
  )
}

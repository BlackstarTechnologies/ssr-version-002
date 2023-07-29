import { connectToDB } from "@engine/DB/connect_to_db";
import Nav from "@parts/components/nav";
import Image from "next/image";

import React from "react";

connectToDB();

export default function HomePage() {
  return (
    <main className=" relative bg-[aliceblue]">
      <Nav />
      <HomeSection />
      <AboutSection />
      <SubscriptionSection />
      <ReviewsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

function Section({ children, className }) {
  return (
    <div
      className={
        "h-screen w-screen flex items-center justify-center flex-col " +
        className
      }
    >
      {children}
    </div>
  );
}

function HomeSection(props) {
  return <Section className="bg-[aliceblue]">Home</Section>;
}
function AboutSection(props) {
  return <Section>About</Section>;
}
function SubscriptionSection(props) {
  return <Section>Subscriptions</Section>;
}
function ContactSection(props) {
  return <Section>Contact Us</Section>;
}
function ReviewsSection(props) {
  return <Section>Reviews</Section>;
}
function FooterSection(props) {
  return <div>Footer</div>;
}

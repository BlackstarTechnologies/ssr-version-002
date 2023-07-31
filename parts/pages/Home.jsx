import Nav from "@components/nav";

import React from "react";

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

function Section({ id, children, className }) {
  return (
    <div
      id={id}
      className={
        "h-[calc(100vh-2rem)] w-screen flex items-center justify-center flex-col " +
        className
      }
    >
      {children}
    </div>
  );
}

function HomeSection(props) {
  return (
    <Section id="Home" className="bg-[aliceblue] home_page_home_section">
      <div className="relative h-full w-full bg-[#0000007e]">
       {/* <img src="" alt=""  />  */}
      </div>
    </Section>
  );
}
function AboutSection(props) {
  return <Section id="About">About</Section>;
}
function SubscriptionSection(props) {
  return <Section id="Subsciption">Subscriptions</Section>;
}
function ContactSection(props) {
  return <Section id="Contact">Contact Us</Section>;
}
function ReviewsSection(props) {
  return <Section id="Reviews">Reviews</Section>;
}
function FooterSection(props) {
  return <div id="Footer">Footer</div>;
}

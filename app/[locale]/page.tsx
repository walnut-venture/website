"use client";

import { useState } from "react";
import Header from "components/Header";
import DrivingInnovationSection from "components/DrivingInnovationSection";
import JoinUsSection from "components/JoinUsSection";
import ServicesSection from "components/ServicesSection";
import TeamSection from "components/TeamSection";
import CareerSection from "components/CareerSection";

import {
  WalnutContent,
  WalnutBackground,
  WhoWeAreSection,
  ContactUsSection,
  Footer,
  CookieBanner,
  MethodologySection
} from "components";
import { BurgerContext } from "context";

export default function Home() {
  const [ activeBurger, setActiveBurger ] = useState(false);

  return (
    <BurgerContext.Provider value={{ activeBurger, setActiveBurger }}>
      <main>
        {
          activeBurger ?
            <style jsx global>{`
              body {
                overflow-y: hidden;
              }
          `}</style>
            :
            <style jsx global>{`
              body {
                overflow-y: auto;
              }
          `}</style>
        }
        <Header />
        <WalnutBackground />
        <WalnutContent />
        <DrivingInnovationSection />
        <JoinUsSection />
        <WhoWeAreSection />
        <ServicesSection />
        <TeamSection />
        <MethodologySection />
        <CareerSection />
        <ContactUsSection />
        <Footer />
        <CookieBanner />
      </main>
    </BurgerContext.Provider>
  );
};

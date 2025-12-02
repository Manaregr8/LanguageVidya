
// "use client";

import EnglishCourseBenefits from "@/components/Layers/EnglishCourseBenefits";
import HeroSection from "@/components/Layers/HeroSection";
import WhoCanLearn from "@/components/Layers/WhoCanLearn";
import OnlineCourses from "@/components/Layers/OnlineCourses";
import LookingFor from "@/components/Layers/LookingFor"; 
import TeachersSection from "@/components/Layers/TeachersSection";
import StudyRoadmap from "@/components/Layers/TimelineSteps";
import ReviewsSection from "@/components/Layers/ReviewsSection";
import TimelineSteps from "@/components/Layers/TimelineSteps";
import PracticeHero from "@/components/Layers/PracticeHero";
import MotivationSection from "@/components/Layers/MotivationSection";
import TimelineSection from "@/components/Layers/TimelineSection1";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoCanLearn />
      <EnglishCourseBenefits />
      <OnlineCourses/>
      <LookingFor/>
      <PracticeHero/>
      <MotivationSection/>
      <TimelineSection/>
      {/* <TeachersSection/> */}
      <ReviewsSection/>
      <TimelineSteps/>

    </div>


  );
}

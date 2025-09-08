import HommerBanner from "../components/Banners/HommerBanner";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import MeetTheTeam from "../components/Team/MeetTheTeam";


export default function Home() {
  return (
    <section>
      <HommerBanner />
      <SectionSpacing />
      <MeetTheTeam
        title="Meet Our Speakers"
        className="bg-black py-24"
        bgText="text-white"
      />
    </section>
  );
}

import PageBanner from "../components/Banners/PageBanner";
import MeetTheTeam from "../components/Team/MeetTheTeam";


export default function Home() {
  return (
    <section>
      <PageBanner title="MEET THE SPEAKERS" />
      <MeetTheTeam
        title="Meet Our Speakers"
        className="bg-white py-24"
        bgText="text-black"
      />
    </section>
  );
}

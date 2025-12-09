import WelcomeSection from './WelcomeSection';
import StatsGrid from './StatGrid';
import EligibilityCard from './EligiblityCard';
import CriticalMatchesSection from './CrticalMatchesSection';
import RecentDonationActivity from './RecentDonationActivity';

export default function DashboardSection() {
  return (
    <>
      <WelcomeSection />
        <StatsGrid />
        <EligibilityCard />
        <CriticalMatchesSection />
        <RecentDonationActivity />
    </>
  )
}

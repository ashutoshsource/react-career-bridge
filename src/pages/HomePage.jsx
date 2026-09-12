import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs';
    import { toast } from 'react-toastify';

function HomePage() {
  
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListings  isHome={true}/>
    <ViewAllJobs />

<button onClick={() => toast.success('Test toast')}>
  Test Toast
</button>
    </>
  );
}




export default HomePage;
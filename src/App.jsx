import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<MainLayout />}>
      <Route index element={ <HomePage />} /> 
      <Route path='/jobs' element={ <JobsPage />} /> 
      <Route path='/*' element={ <NotFoundPage />} /> 

    </Route>  
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


// (
//     <>
//       <Navbar />
//       <Hero />
//       <HomeCards />
//       <JobListings />     
//       <ViewAllJobs />  
//     </>
//   )



// import Navbar from './components/Navbar';
// import Hero from './components/Hero'
// import HomeCards from './components/HomeCards'
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

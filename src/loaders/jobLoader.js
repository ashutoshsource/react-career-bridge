import { API_URL } from '../api';

const jobLoader = async ({ params }) => {
  const res = await fetch(`${API_URL}/jobs/${params.id}`);

  if (!res.ok) {
    throw new Error('Job not found');
  }

  const data = await res.json();
  return data;
};

export default jobLoader;
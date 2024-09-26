import StatusLabel, { Status } from '@/app/components/StatusLabel';
import { headers } from 'next/headers';
import AddCompanyButton from './components/AddCompanyButton';
// import AddCompanyButton from './components/AddCompanyButton';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home page{new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      {/* <AddCompanyButton /> */}
    </main>
  );
}

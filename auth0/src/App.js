import React from 'react';
import './App.css';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Document from './_document'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Document />
      <LogoutButton />
      <Profile />
    </>
    
  );
}

export default App;

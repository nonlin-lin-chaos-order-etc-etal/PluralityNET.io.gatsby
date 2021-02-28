import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>PluralityNET</title>
      </Helmet>
      <img src="/src/images/logo/vector/default.svg"/>
      <hr noshade/>
      <p>Copyright © 2021, {date ? date : 'Loading date...'} PluralityNET.io. All Rights Reserved.</p>
    </main>
  );
}

export default Index;

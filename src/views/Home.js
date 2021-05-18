import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { getPublicPins } from '../helpers/data/pinsData';
import PinCard from '../components/PinCard';

function Home({ user }) {
  const [publicPins, setPublicPins] = useState();
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    getPublicPins().then((response) => {
      if (isMounted.current) {
        setPublicPins(response);
      }
      isMounted.current = true;
    });
  }, []);

  return (
    <div className="home-content-container d-flex flex-row">
     {publicPins?.length && publicPins.map((object) => (
     <PinCard
      key={object.id}
      user={user}
      isPublic={true}
      {...object}
      />
     ))}
    </div>
  );
}
Home.propTypes = {
  user: PropTypes.any,
};

export default Home;

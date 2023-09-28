import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetings/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, error, loading } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return (
    <div className="container-fluid text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-5">
              <div className="card-header bg-info text-white">
                <h2 className="text-center">Greetings</h2>
              </div>
              <div className="card-body text-center">
                {loading && <p>Loading...</p>}
                {error && <p className="text-danger">{error}</p>}
                {greeting && <p className="text-success display-3">{greeting}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;

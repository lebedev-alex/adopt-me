import React from 'react';

const SearchParams = () => {
  const location = 'Seattle, WA';

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
          />
          <button type="button">Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;

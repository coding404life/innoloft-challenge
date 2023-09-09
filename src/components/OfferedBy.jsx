/* eslint-disable react/prop-types */
import Avatar from './Avatar';
import LeafletMap from './LeafletMap';

const OfferedBy = ({ productData }) => {
  const { address, logo } = productData.company;
  const { street, house, zipCode, country, city, latitude, longitude } = address;

  return (
    <div className="p-4 mt-4 md:mt-0 md:border-l-2 md:col-span-2">
      <h1>Offered By</h1>
      <img className="my-5" src={logo} alt={logo} />
      <Avatar />

      <p className="mt-4">
        {street} {house}, {zipCode},{city.name} {country.name}
      </p>

      <LeafletMap latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default OfferedBy;

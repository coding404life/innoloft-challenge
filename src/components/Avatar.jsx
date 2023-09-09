import { useSelector } from 'react-redux';

const Avatar = () => {
  const { productData } = useSelector((state) => state.product);

  if (!productData) return null;

  const { user } = productData;

  return (
    <div className="flex items-center">
      <img className="rounded-full w-14 h-14" src={user?.profilePicture} alt={user?.profilePicture} />

      <div className="ml-3">
        <h1 className="font-bold ">
          {user?.firstName} {user?.lastName}
        </h1>
        <p>{user?.position}</p>
      </div>
    </div>
  );
};

export default Avatar;

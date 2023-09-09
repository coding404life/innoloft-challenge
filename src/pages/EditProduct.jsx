import { Helmet } from 'react-helmet-async';
import ReactQuill from 'react-quill';
import { Link, useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import OfferedBy from '../components/OfferedBy';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { editProduct } from '../store/reducers/productSlice';

const EditProduct = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);
  const { configurationData } = useSelector((state) => state.configuration);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    dispatch(editProduct({ data, productId: productData?.id }));
    navigate('/product');
  };

  if (!productData)
    return (
      <div className="flex flex-col items-center justify-center p-10 mt-20">
        <h1 className="text-2xl ">Loading... </h1>

        <p className="mt-5 text-gray-500">if Loading take more times Fix CORS issue with &#34;Moesif CORS&#34; Chrome extention</p>
      </div>
    );

  return (
    <>
      <Helmet>
        <title>Edit Product - InnoLoft</title>
        <meta name="description" content="This is the EditProduct page description." />
      </Helmet>

      <div className="flex justify-between mx-2 mb-2 lg:mx-1">
        <h1 className="text-2xl font-bold">Edit Product</h1>

        <div className="flex">
          <Link to="/product" className="px-4 py-1 mr-2 text-black bg-gray-200 rounded">
            Cancel
          </Link>

          <button onClick={handleSubmit(onSubmit)} className="px-4 py-1 text-white bg-blue-900 rounded">
            Save
          </button>
        </div>
      </div>

      <section className="grid m-3 mt-5 bg-white border-2 border-gray-100 rounded-md lg:m-0 md:grid-cols-7">
        <figure className="bg-white md:p-4 md:col-span-5">
          <img src={productData.picture} alt="img" className="w-full max-h-80" />

          <figcaption className="p-4">
            <input
              defaultValue={productData?.name}
              {...register('name', { required: true, minLength: 4, message: 'not less than 4' })}
              type="text"
              className="w-full p-1 my-5 border-2 border-gray-200 rounded"
            />

            {errors.title?.type === 'required' && (
              <p className="mb-2 text-red-500" role="alert">
                Title is required
              </p>
            )}

            <Controller
              name="description"
              control={control}
              rules={{ required: true, minLength: 20, maxLength: 1200 }}
              defaultValue={productData.description}
              render={({ field }) => <ReactQuill theme="snow" {...field} />}
            />

            {errors.description?.type === 'minLength' && (
              <p className="mt-2 text-red-500" role="alert">
                Description is less than 20 charcter
              </p>
            )}
          </figcaption>
        </figure>

        {configurationData?.hasUserSection && <OfferedBy productData={productData} />}
      </section>

      <section className="p-4 m-3 mt-5 bg-white border-2 border-gray-100 rounded-md lg:m-0">
        <h1>Video</h1>
        <input
          defaultValue={productData.video}
          {...register('video', { required: true, minLength: 4, message: 'not less than 4' })}
          placeholder="add a youtube or vimeo link"
          className="w-full p-1 my-5 border-2 border-gray-200 rounded"
        />

        {errors.video?.type === 'required' && (
          <p className="mb-2 text-red-500" role="alert">
            Video link is required
          </p>
        )}
      </section>

      {/* TODO: */}
      {/* <section className="p-4 mt-5 bg-white border-2 border-gray-100 rounded-md">
        <h1>Offer details</h1>

        <div>tags</div>
      </section> */}
    </>
  );
};

export default EditProduct;

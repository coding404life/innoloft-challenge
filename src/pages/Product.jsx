import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { extractVideoIdAndConstructEmbedUrl } from '../util/extract-YT-URL';
import OfferedBy from '../components/OfferedBy';

const Product = () => {
  const { productData } = useSelector((state) => state.product);
  const { configurationData } = useSelector((state) => state.configuration);
  const embdedYT = extractVideoIdAndConstructEmbedUrl(productData?.video);

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
        <title>Product - InnoLoft</title>
        <meta name="description" content="This is the product page description." />
      </Helmet>

      <div className="flex justify-between mx-2 mb-2 lg:mx-1">
        <h1 className="text-2xl font-bold ">Prdouct</h1>
        <Link to="/product/edit" className="px-4 py-1 text-white bg-blue-900 rounded">
          Edit
        </Link>
      </div>

      <section className="grid m-3 mt-5 bg-white border-2 border-gray-100 rounded-md lg:m-0 md:grid-cols-7">
        <figure className="bg-white md:p-4 md:col-span-5">
          <img src={productData.picture} alt="img" className="w-full max-h-80" />

          <figcaption className="p-4 ">
            <h1>{productData.name}</h1>

            <ReactQuill className="z-0" style={{ maxWidth: '550px' }} theme={null} readOnly value={productData.description} />
          </figcaption>
        </figure>

        {configurationData?.hasUserSection && <OfferedBy productData={productData} />}
      </section>

      <section className="p-4 m-3 mt-5 bg-white border-2 border-gray-100 rounded-md lg:m-0">
        <h1>Video</h1>
        <div className="flex justify-center mt-4">
          <iframe
            className="w-full md:w-4/5 md:aspect-video"
            height="415"
            src={embdedYT}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="p-4 m-3 mt-5 mb-10 bg-white border-2 border-gray-100 rounded-md lg:m-0">
        <h1>Offer details</h1>

        <div className="mt-4 ">
          <div className="columns-1 sm:columns-2">
            <div className="p-2">
              <div>
                <h1 className="text-gray-500 ">Categories</h1>
                <div className="flex flex-wrap gap-2 mt-2 ">
                  {productData.categories?.map((item, i) => (
                    <p key={i} className="px-3 ml-2 bg-gray-200 rounded-full w-fit">
                      {item.name}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h1 className="text-gray-500 ">TRL</h1>
                <p className="p-3 mt-2 bg-gray-200 rounded-full w-fit">{productData.trl?.name}</p>
              </div>
            </div>

            <div className="p-2">
              <div>
                <h1 className="text-gray-500">Business Model</h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  {productData.businessModels?.map((item, i) => (
                    <p key={i} className="px-3 ml-2 bg-gray-200 rounded-full w-fit">
                      {item.name}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <h1 className="text-gray-500">Costs</h1>
                <p className="px-3 mt-2 bg-gray-200 rounded-full w-fit">{productData.investmentEffort}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

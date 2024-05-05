import { StarIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import axiosClient from "../axios";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      axiosClient.get('/home')
        .then(({ data }) => {
          setProductData(data.data);
          setLoading(false);
        })
        .catch(()=>{  
          setLoading(false);
        })
      console.log(productData)
    }, [])

    const navigate = useNavigate();

    function handleClick(ev, id) {
      navigate(`/product/${id}`);
    }
    return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm text-primary">Top Selling Products for you</p>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-xs text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              suscipit architecto nihil iure perferendis explicabo, cumque
              assumenda dolores aperiam officia, natus sapiente! Molestiae
              eveniet perspiciatis vitae beatae temporibus dignissimos deserunt.
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-datas-center gap-5">
              {loading && <h1 className="text-center">Loading..</h1>}
              {productData.map((data) => (
                <div 
                  data-aos='fade-up'
                  data-aos-delay={data.aosDelay}
                  key={data.id} className="space-y-3 w-100 cursor-pointer"
                  onClick={(ev)=>handleClick(ev, data.id)}
                >
                  <img
                    src={data.img_url}
                    alt="Product"
                    className="h-[220px] w-[150px] rounded-md object-contain"
                  />
                  <div>
                    <h3 className="font-semibold">{data.name}</h3>
                    <p className="text-sm text-gray-600">{data.price+' VNĐ'}</p>
                    <div className="flex datas-center gap-1">
                      <StarIcon className="size-6 text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

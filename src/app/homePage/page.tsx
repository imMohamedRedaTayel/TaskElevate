"use client"
import { State } from '@/interface/state';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../lip/productsSlice';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { TiStarFullOutline } from "react-icons/ti";

type Props = {}

const page = (props: Props) => {

  const dispatch = useDispatch();
  const { allProducts, isLoading, isError } = useSelector((state: State) => state.productsSlice);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(allProducts, 'allProducts');

  return <>
    <section>
      <div className="container mx-auto ">
        <div className="row  ">
          {allProducts.map((item: any, index: any) => {
            return <>
              <div className="w-full md:w-4/12 lg:w-4/12 mb-5 p-2 " key={item.id} >
                <Card className="p-[12px] relative  cursor-pointer " >
                  <CardHeader className="w-full  items-center">
                    <div className='w-full relative ' >
                      <Image
                        alt="Card background"
                        className="rounded-xl w-full object-contain "
                        src={item?.image}
                        height={150}
                        width={'w-full'}
                      />
                      <div className=' absolute top-[10px] left-0 bg-[#FF6685] px-[8px] py-[10px] rounded-r-3xl z-10 ' >
                        <h4 className="font-[700] text-[14px] text-white  "> count: {item?.rating.count} </h4>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <p className="font-[600] text-[16px] "> {item?.title} </p>
                    <div className=' flex items-center gap-x-2 ' >
                      <h4 className="font-bold text-[14px]"> rate: {item?.rating.rate} </h4>
                      <TiStarFullOutline className='text-orange-400' width={12} />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </>
          })}
        </div>
      </div>
    </section>
  </>
}

export default page
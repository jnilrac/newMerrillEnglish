import React from "react";
import Link from "next/link";
import { PrimaryButton } from "./PrimaryButton";
import { PrimaryOutlineButton } from "./PrimaryOutlineButton";


interface props {
  classesPerMonth: string;
  price: string;
  pricePerClass: string;
  buyUrl: string;
  trialUrl: string;
  buyButtonText: string;
  trialButtonText: string;
  
}

export const PricingCard = ({classesPerMonth, price, pricePerClass, buyUrl, trialUrl, buyButtonText,trialButtonText}: props) => {
    return(
        <>
            <div className="rounded-2xl h-pricing-card w-pricing-card border-4 border-blue-3 bg-white flex flex-col space-y-7">
                <div className="flex flex-col text-center mt-14 space-y-9">
                    <span className="text-xl font-semibold">{classesPerMonth}</span>
                    <span className="text-5xl font-bold">{price}</span>
                    <span className="font-semibold">{pricePerClass}</span>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="self-center">
                        <Link href={buyUrl} legacyBehavior>
                        <a>
                            <PrimaryButton
                                key="PrimaryButton"
                                text={buyButtonText}
                               
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="self-center">
                        <Link href={trialUrl} legacyBehavior>
                            <a>
                                <PrimaryOutlineButton
                                strokeColor="border-blue-4"
                                strokeWidth="border-2"
                                text={trialButtonText}
                                textColor="blue-4"
                                />
                            </a>
                        </Link>
                       
                        
                    </div>
                </div>
            </div>
        </>
    )
}
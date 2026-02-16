import React from "react";

const Template = ({ title, description1, description2, image, formType, setIsLoggedIn }) => {
    return (
        <div className="w-11/12 max-w-[450px]">
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
            <p className="text-[1.125rem] leading[1.625rem] mt-4">
                <span className="text-richblack-100">{description1}</span>
                <br />
                <span className="text-blue-100 italic">{description2}</span>
            </p>
            <div className="relative w-full max-w-[450px] mt-8">
                <img src={image} alt="image" width={558} height={490} loading="lazy" className="rounded-md" />
            </div>
        </div>
    )
}
export default Template;
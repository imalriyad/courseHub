import PropTypes from "prop-types"; // ES6
import { useState } from "react";
const Card = ({ info, handleSelect }) => {
  const { courseTitle, courseDetails, courseCredit, coursePrice, thumbnail } =
    info;
    const [select, setSelect] = useState(false)

  return (
    <div>
      <div className="card h-[424px] card-compact bg-base-100 shadow-xl rounded-md">
        <figure className=" p-4 rounded-md">
          <img className="w-full" src={thumbnail} alt="courses" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{courseTitle}</h2>
          <p className="text-[#1C1B1B99]">{courseDetails}</p>
          <div className="flex gap-6 items-center text-[#0a0a0aca] font-medium my-3 text-base">
            <p className="flex items-center">
              <img src="/src/assets/dollar-sign 1.svg" alt="" />
              Price: {coursePrice}
            </p>

            <p className="flex items-center">
              <img src="/src/assets/credit.svg" alt="" className="mr-2" />{" "}
              Credit: {courseCredit}hours
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                handleSelect(info);
                setSelect(true)
              }}
              className="bg-[#2F80ED] hover:bg-[#2F80ED] py-2 text-base rounded-md text-white w-full "
            >
             {select?'Selected': 'Select'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  info: PropTypes.object.isRequired,
  handleSelect: PropTypes.func,
};
export default Card;

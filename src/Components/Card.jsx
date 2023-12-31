import PropTypes from "prop-types"; // ES6
const Card = ({ info, handleSelect }) => {
  const { courseTitle, courseDetails, courseCredit, coursePrice, thumbnail } =
    info;

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
              <img src="https://i.ibb.co/ZJ42WfF/dollar-sign.png" alt="" />
              Price: {coursePrice}
            </p>

            <p className="flex items-center">
              <img src="https://i.ibb.co/jfvMQpY/credit.png" alt="" className="mr-2" />{" "}
              Credit: {courseCredit}hours
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelect(info)}
              className="bg-[#2F80ED] hover:bg-[#2F80ED] py-2 text-base rounded-md text-white w-full flex justify-center items-center"
            >
              Select
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

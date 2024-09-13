import PropTypes from "prop-types";

const CookingReady = ({ cooksReady }) => {
  const { recipe_name, preparing_time, calories } = cooksReady;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="flex justify-between table my-2">
          <tbody className="">
            <tr className="text-[16px] text-[#282828B3] ">
              <td className="pr-12">{recipe_name}</td>
              <td className="pr-12">{preparing_time}</td>
              <td>{calories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

CookingReady.propTypes = {
  cooksReady: PropTypes.object,
};

export default CookingReady;

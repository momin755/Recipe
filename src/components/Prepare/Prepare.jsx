import PropTypes from "prop-types";

const Prepare = ({ recipe_id, prepared, handleAddCooking }) => {
  const { recipe_name, preparing_time, calories } = prepared;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table gap-3 my-2">
          {/* head */}
          <thead>
            <tr></tr>
          </thead>
          <tbody className="">
            <tr className="text-[16px] text-[#282828B3] ">
              <td>{recipe_name}</td>
              <td>{preparing_time} min</td>
              <td>{calories} calories</td>
              <td>
                <button
                  onClick={() => handleAddCooking(recipe_id, prepared, preparing_time, calories)}
                  className="rounded-full bg-[#0BE58A] text-[#150B2B] text-[18px] px-6 py-[13px] "
                >
                  Preparing
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Prepare.propTypes = {
  prepared: PropTypes.object,
  handleAddCooking: PropTypes.func,
  recipe_id: PropTypes.number,
};

export default Prepare;

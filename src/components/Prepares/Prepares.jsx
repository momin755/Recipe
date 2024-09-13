import PropTypes from "prop-types";
import Prepare from "../Prepare/Prepare";
import CookingReady from "../CookingReady/CookingReady";

const Prepares = ({ recipes, handleAddCooking, cooking, time, caloriesCount }) => {
  return (
    <div className="w-1/3 p-4 mx-auto shadow-2xl rounded-xl">
      <h1 className="text-center text-[#282828] text-[24px] font-semibold border-b-4 pb-3">
        Want to Cook: {recipes.length}
      </h1>
      <div className="flex gap-6">
        <h1></h1>
        <h1>Name</h1>
        <h1>Time</h1>
        <h1>Calories</h1>
      </div>

      {recipes.map((prepared, idx) => (
        <Prepare key={idx}
        handleAddCooking={handleAddCooking} prepared={prepared}></Prepare>
      ))}

      <h1 className="text-center mt-20 text-[#282828] text-[24px] font-semibold border-b-4 pb-3">
        Currently Cooking: {cooking.length}
      </h1>

      <div className="flex justify-between mx-8 my-3">
        <h1>Name</h1>
        <h1>Time</h1>
        <h1>Calories</h1>
      </div>

      <div>
        {
          cooking.map((cooksReady, idx) => <CookingReady
          key={idx}
          cooksReady={cooksReady}></CookingReady>)
        }
      </div>

      <div className="mt-24 w-[248px] mx-20 flex justify-between">
        <div>
          <h1>Total Time = <br /> <b> {time}  minutes</b></h1>
        </div>
        <div>
          <h1>Total Calories = <br /> <b>{caloriesCount}  Calories</b></h1>
        </div>
      </div>

    </div>
  );
};

Prepares.propTypes = {
  recipes: PropTypes.array,
  handleAddCooking: PropTypes.func,
  cooking: PropTypes.array,
  time: PropTypes.number,
  caloriesCount: PropTypes.number
};

export default Prepares;

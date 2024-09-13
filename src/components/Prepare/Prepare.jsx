import PropTypes from "prop-types";

const Prepare = ({ prepared }) => {
  const { recipe_name, preparing_time, calories } = prepared;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>

            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
            
          </thead>
          <tbody>
            <tr>

              <th></th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              <td>
                <button className="rounded-full bg-[#0BE58A] text-[#150B2B] text-[18px] px-6 py-[13px] ">
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
};

export default Prepare;

// StepOne.js
import React from "react";

const StepOne = ({ register, errors }) => {
  return (
    <div>
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          {...register("firstName", { required: true })}
          className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm ${
            errors.firstName ? "border-red-500" : ""
          }`}
        />
        {errors.firstName && (
          <p className="mt-2 text-sm text-red-600">{errors.firstName.message}</p>
        )}
      </div>
      {/* Repeat similar blocks for lastName, relation, and type */}
    </div>
  );
};

export default StepOne;

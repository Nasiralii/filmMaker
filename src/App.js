// App.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StepOne from "./components/form/StepOne";
import StepTwo from "./components/form/StepTwo";

function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [page, setPage] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            {page === 1 && <StepOne register={register} errors={errors} />}
            {page === 2 && <StepTwo register={register} errors={errors} />}
          </div>
          <div className="flex justify-between">
            {page !== 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Previous
              </button>
            )}
            {page !== 2 && (
              <button
                type="button"
                onClick={handleNext}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Next
              </button>
            )}
            {page === 2 && (
              <button
                type="submit"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

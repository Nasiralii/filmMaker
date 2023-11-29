import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
const StepperForm = () => {
    const { handleSubmit, control, formState } = useForm({
      mode: 'onChange',
    });
  
    const { errors, isValid } = formState;
  
    const [step, setStep] = useState(1);
  
    const onSubmit = (data) => {
      if (step === 1) {
        setStep(2);
      } else {
        console.log(data);
        // Perform actions with form data, such as API calls or data processing
      }
    };
  
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md"
      >
        {step === 1 && (
          // eslint-disable-next-line react/jsx-no-undef
          <StepOne control={control} errors={errors} setStep={() => setStep(2)} />
        )}
        {step === 2 && <StepTwo control={control} errors={errors} isValid={isValid} setStep={() => setStep(1)} />}
      </form>
    );
  };
  
  // ... (StepOne component remains unchanged)
  
  const StepTwo = ({ control, errors, isValid, setStep }) => {
    return (
      <div className={isValid ? 'block' : 'hidden'}>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name:
          </label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  className={`w-full border p-2 ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>
                )}
              </>
            )}
          />
        </div>
  
        <button type="button" onClick={setStep} className="text-blue-500">
          Go Back
        </button>
  
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    );
  };
  
  export default StepperForm;
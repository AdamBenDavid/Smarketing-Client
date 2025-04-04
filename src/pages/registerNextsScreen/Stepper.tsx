import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";

const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />]; // מערך של קומפוננטות
const stepsHeader = [
  "מידע כללי",
  "קהל יעד",
  "מוצרים ושירותים",
  "מותג וזיהוי ויזואלי",
  "מטרות עסקיות",
];

const MultiStepForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const methods = useForm();

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const onSubmit = () => {
  };

  return (
    <FormProvider {...methods} data-testid="form-provider">
      <form
        className="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ height: "100%" }}
      >
        <Box
          data-testid="multi-step-form"
          sx={{
            direction: "rtl",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            flexShrink: 0,
            padding: 2,
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          {/* Stepper למעלה */}
          <Stepper activeStep={activeStep}>
            {steps.map((_, index) => (
              <Step key={index}>
                <StepLabel>{stepsHeader[index]}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* תוכן השלב */}

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {steps[activeStep]}
          </Box>

          {/* כפתורי שליטה */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              חזור
            </Button>
            {activeStep === steps.length ? (
              <Button type="submit" variant="contained">
                שלח
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                הבא
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;

import CustomTextField from "../../hook-form/custom-text-field";
import { Divider, IconButton, InputAdornment, Stack } from "@mui/material";
import { useBoolean } from "../../../hooks/use-boolean";
import Iconify from "../../iconify";

function FirstStepForm() {
  const newPassword = useBoolean();
  const confirmPassword = useBoolean();
  return (
    <Stack spacing={2.5}>
      <CustomTextField
      preventedChars={[',']}
        name="fullName"
        label="full name"
        placeholder="Enter your full name"
      />
      <CustomTextField
        type="email"
        name="email"
        label="Business Email"
        placeholder="Enter your email address"
      />

      <CustomTextField
        name="phoneNumber"
        preventedChars={['e', '.' ,',']}
        label="Phone Number"
        placeholder="Enter your phone number"
        type="number"
        InputProps={{
          startAdornment: (
            <>
              <InputAdornment position="start">+20 </InputAdornment>{" "}
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ mr: "10px" }}
              />
            </>
          ),
        }}
      />
      <CustomTextField
        name="password"
        label="password"
        placeholder="choose a password"
        type={newPassword.value ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={newPassword.onToggle} edge="end">
                <Iconify
                  icon={
                    newPassword.value
                      ? "solar:eye-bold"
                      : "solar:eye-closed-bold"
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <CustomTextField
        name="confirmPassword"
        label="confirm  password"
        type={confirmPassword.value ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={confirmPassword.onToggle} edge="end">
                <Iconify
                  icon={
                    confirmPassword.value
                      ? "solar:eye-bold"
                      : "solar:eye-closed-bold"
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

export default FirstStepForm;

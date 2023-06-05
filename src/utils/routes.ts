export const AuthRoutes = {
  LOGIN: "/auth/login",
  RESET_PASSWORD: "/auth/reset-password",
  RESET_OTP: "/auth/otp",
  FORGOT_PASSWORD: "/auth/forgot-password",
  LOGIN_OTP: "/auth/login-otp",
};

export const OnboardRoutes = {
  SIGN_UP: "/auth/signup",
  CONFIRM_EMAIL: "/auth/signup/confirm-email",
  SET_PASSWORD: "/auth/signup/set-password",
  GET_STARTED: "/auth/signup/get-started",
  KYC_UPLOAD: "/auth/signup/kyc-upload",
  REGISTRATION_SUCCESSFUL: "/auth/signup/registration-successful",
};

export const DashBoardRoutes = {
  DASHBOARD: "/",
  STORAGE: "/storage",
  STORAGE_DETAILS: "/storage/[[facility]]",
  STORAGE_BOOKING: "/storage/booking",
  BOOKING_DETAILS: "/storage/booking/gffaf",
  BOOKING_PAYMENT: "/storage/booking/payment",
  INVENTORY: "/inventory",
  INVENTORY_DETAILS: "/inventory/details",
  INVENTORY_ALL: "/inventory/allInventory",
  INVENTORY_NEW_UPLOAD: "/inventory/newUpload",
  INVENTORY_CONFIRM_INVENTORY: "/inventory/newUpload/confirmInventory",
};

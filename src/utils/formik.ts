const formikCaption = (key: string, formik: any) => {
  return formik.errors[key] && formik.touched[key] ? formik.errors[key] : "";
};
const formikError = (key: string, formik: any) => {
  return formik.errors[key] && formik.touched[key] ? true : false;
};
export { formikCaption, formikError };

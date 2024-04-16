import { Field, Form, Formik } from "formik";

export const Enquiry = () => {
  const initialValues = {
    firstName: "",
    email: "",
    from: "",
    location: "",
    event: "",
  };

  return (
    <div className="m-3">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          const user = {
            firstName: values.firstName,
            email: values.email,
            from: values.from,
            location: values.location,
            event: values.event,
          };
          console.log("user:-", user);
        }}
      >
        {(formik) => {
          return (
            <Form>
              <div className="mb-3">
                <label className="form-label">
                  Your Name and Your Partener Name
                </label>
                <Field type="text" className="form-control" name="firstName" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <Field type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Where are you from</label>
                <Field type="text" className="form-control" name="from" />
              </div>
              <div className="mb-3">
                <label className="form-label">Date And Location</label>
                <Field type="text" className="form-control" name="location" />
              </div>
              <div className="mb-3">
                <label className="form-label">What type of event</label>
                <Field type="text" className="form-control" name="event" />
              </div>

              <button
                type="submit"
                className="btn btn-primary justify-content-center align-items-center"
              >
                send
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

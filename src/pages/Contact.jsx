import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit, 
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    try {
        console.log(data);
        reset();
    } catch (error) {
        console.error(error.data);
    }
  };

  return (
    <div className="relative mt-5 px-5">
      <div className="row">
        <div className="col-sm-10 mx-auto pt-5 text-center justify-content-center">
          <h1 className="text-primary fw-light">Contact Us</h1>
          <p className="text-xl">
            We would like to hear from you! Feel free to tell us something.
          </p>
        </div>
        <div className="col-sm-6 col-md-8 mx-auto rounded-3 justify-content-center">
          <form
            className="bg-warning my-4 mx-auto p-2 rounded-3 d-flex flex-column align-items-center justify-content-center border border-light"
            autoComplete="off"
            method="post"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div className="py-2">
              <label className="d-block text-left text-sm fw-normal" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-100 px-2 py-1 bg-white border-0 text-sm rounded-3"
                {...register("name", {
                  required: "Name is required.",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Name is not valid.",
                  },
                })}
              />
              <small className="text-danger fw-semibold">
                {errors.name && (
                  <p className="errorMsg">{errors.name.message}</p>
                )}
              </small>
            </div>
            <div className="pb-2">
              <label className="d-block text-left text-sm fw-normal" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-100 px-2 py-1 bg-white border-0 text-sm rounded-3"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              <small className="text-danger fw-semibold">
                {errors.email && <p className="errorMsg">{errors.email.message}</p>}
              </small>
            </div>
            <div className="d-block pb-2">
              <label className="d-block text-left text-sm fw-normal" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="w-100 px-2 py-1 bg-white border-0 text-sm rounded-3"
                {...register("phone", {
                  required: "Phone is required.",
                  pattern: {
                    value: /^[0-9\s]+$/,
                    message: "Phone is not valid.",
                  },
                })}
              />
              <small className="text-danger fw-semibold">
                {errors.email && <p className="errorMsg">{errors.email.message}</p>}
              </small>
            </div>
            <div className="pb-2">
              <label htmlFor="message" className="d-block text-left text-sm fw-normal">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                {...register("message", {
                  required: "message is required.",
                  pattern: {
                    value: /^(?=.*[A-Z0-9])[\w.,!"'/$ ]+$/i,
                    message: "Message is not valid.",
                  },
                })}
                className="w-100 px-2 py-1 bg-white border-0 text-sm rounded-3"> 
              </textarea>
              <small className="text-danger fw-semibold">
                {errors.message && (
                  <p className="errorMsg">{errors.message.message}</p>
                )}
              </small>
            </div>
            <div className="pt-3 mb-4">
              <button
                className="w-100 bg-primary border-0 text-white rounded-3 p-2 py-1"
                type="submit"            >
                Submit your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

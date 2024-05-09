import { useState } from "react";
import ActionButton from "../conponents/shared/ActionButton";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useData from "../hooks/useData";

const Register = () => {
  const { register, updateProfile } = useAuth();
  const { setPageLoading } = useData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  // handle the change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle the login button
  const handleLoginButton = async (e) => {
    e.preventDefault();
    setPageLoading(true);

    register(formData.email, formData.pass)
      .then((result) => {
        updateProfile(result.user, {
          displayName: formData.name,
        }).then((result) => {
          setPageLoading(false);
          navigate("/");
        });
      })
      .catch((err) => {
        setErrMsg(err.message);
        setPageLoading(false);
      });
  };
  return (
    <div className="hero  bg-base-200 min-h-[calc(100vh-290px)]">
      <div className="hero-content flex  lg:flex-row flex-col-reverse gap-8">
        <div className="text-center lg:text-left w-1/2 ">
          <img src="/images/login/login.svg" alt="" />
        </div>
        <div className="card w-[90%] shadow-2xl bg-base-100 lg:w-1/2">
          <form className="card-body" onSubmit={handleLoginButton}>
            <h1 className="text-3xl text-center font-bold">Register!</h1>
            <h1 className="text-xl text-prime text-center ">{errMsg}</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onChange={handleChange}
                name="name"
                value={formData.name || ""}
                type="text"
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleChange}
                name="email"
                value={formData.email || ""}
                type="email"
                placeholder="name@domain.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handleChange}
                name="pass"
                value={formData.pass || ""}
                type="password"
                placeholder="* * * * * * * * * * "
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <ActionButton buttonText="Register" />
            </div>
            <div className="divider">OR</div>
            <div className="label-text-alt text-center ">
              <span className="mr-2">Already have an account?</span>
              <Link to="/login" className="link link-hover text-prime ">
                Login Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { useContext, useState } from "react";
import ActionButton from "../conponents/shared/ActionButton";
import { AuthContext } from "../providers/AuthProvider";
import { DataContext } from "../providers/DataProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const location = useLocation();
  const { setPageLoading } = useContext(DataContext);
  const { signIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
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
  const handleLoginButton = (e) => {
    e.preventDefault();
    setPageLoading(true);

    signIn(formData.email, formData.pass)
      .then(async (result) => {
        const response = await axios.post(
          `${baseUrl}/api/jwt`,
          { uid: result.user.uid },
          { withCredentials: true }
        );

        if (response) {
          setPageLoading(false);
          navigate(location?.state ? location?.state : "/");
        }
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
          <img src="../../public/images/login/login.svg" alt="" />
        </div>
        <div className="card w-[90%] shadow-2xl bg-base-100 lg:w-1/2">
          <form className="card-body" onSubmit={handleLoginButton}>
            <h1 className="text-3xl text-center font-bold">Login!</h1>
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
              <ActionButton buttonText="Login" />
            </div>
            <div className="divider">OR</div>
            <div className="label-text-alt text-center ">
              <span className="mr-2">Don't have an account?</span>
              <Link to="/register" className="link link-hover text-prime ">
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

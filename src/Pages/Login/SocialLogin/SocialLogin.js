import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="flex">
        <div>
          <img
            className="rounded-tr-lg"
            width={50}
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1651855975/warehouse-management/images/ware-house_u54a5q.jpg`}
            alt=""
          />
        </div>
        <div>
          <h2 className="ml-3 text-xl text-white font-semibold">Dhaka Motorbike Warehouse</h2>
        </div>
      </div>
      <button onClick={() => signInWithGoogle()} className="my-4 border rounded py-2 px-1 flex">
        <img
          src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1651857488/warehouse-management/images/social/google_sxjyb2.png`}
          alt=""
        />
        <span className="mx-3 font-semibold text-white text-xl">Login with google</span>
      </button>
    </div>
  );
};

export default SocialLogin;

import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();


  const auth = useAuth();
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const loadCreditsData = async () => {
    try {
      const token = await auth.getToken();
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token },
      });

      if (data.success) {
        console.log("Full response from backend:", data);
        setCredit(data.credits); // update if your backend returns { success, data: 50 }
        console.log("User credit balance:", data.credits);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };

  const removeBg = async (image) => {

    try {

      if (!isSignedIn) {
        return openSignIn();
      }

      setImage(image);
      setResultImage(false);

      navigate("/result");

      const token = await getToken();

      // const token = await getToken({ template: "default" }); // ✅ more reliable
      // console.log("🚀 Frontend token:", token); // ✅ log it


      const formData = new FormData();

      image && formData.append('image', image)

      const { data } = await axios.post(`${backendUrl}/api/image/remove-bg`, formData, { headers: { token } })

      if (data.success) {
        setResultImage(data.resultImage)
        data.creditBalance && setCredit(data.creditBalance)
      } else {
        toast.error(data.message)
        data.creditBalance && setCredit(data.creditBalance)
        if (data.creditBalance === 0) {
          navigate('/buy-credit')
        }
      }
      // console.log("Image received in removeBg:", image);

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage, setResultImage
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

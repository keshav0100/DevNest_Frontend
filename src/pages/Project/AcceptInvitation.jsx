import { Button } from "@/components/ui/button";
import { acceptInvitation } from "@/Redux/Project/Action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const AcceptInvitation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAcceptInvitation = () => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");

    if (!token) {
      console.error("Invitation token not found in URL");
      return;
    }

    dispatch(acceptInvitation({ token, navigate }));
  };

  return (
    <div className='h-[85vh] flex flex-col justify-center items-center'>
      <h1 className='py-5 text-extrabold text-lg'>
        Hey, You are invited to join the project
      </h1>
      <Button onClick={handleAcceptInvitation} className='font-extrabold'>
        Accept Invitation
      </Button>
    </div>
  );
};

export default AcceptInvitation;

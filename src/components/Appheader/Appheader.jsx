import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../withStrapi/contextStore/AuthContext";
import { removeToken } from "../withStrapi/helpers/helpers";

const AppHeader = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/signin", {replace : true});
  }
  return(
    <Space>
      <Button href="/" type="link">
        Button
      </Button>
      <Space>
        {user ? (
          <>
          <Button href="/profile" type='link'>
            {user.username}
          </Button>
          <Button onClick={handleLogout}>
            Logout
          </Button>
          </>
        ): (
        <>
          <Button href="/signin" type='link' >
            Login
          </Button>
          <Button href="/signup" type='primary'>
            SignUp
          </Button>
        </>)}
      </Space>
    </Space>
  )
}
export default AppHeader
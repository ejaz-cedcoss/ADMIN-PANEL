import {
  Button,
  Card,
  FormElement,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../../services/Request/Request";
import style from "./Login.module.css";
// import { useNavigate } from "react-router-dom";
// import {request} from ''

const Login: FC = () => {
  // var id = 2;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const loginDetail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let url = `https://fbapi.sellernext.com/user/login`;
    getRequest(url, { username: user.username, password: user.password })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/panel/dashboard");
          sessionStorage.setItem(`${Date.now()}_token`, data.data);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={style.login_wrapper}>
      <Card>
        <form action="#" onSubmit={loginDetail}>
          <FormElement>
            <TextStyles content="Login Form" />
            <TextField
              name="USER NAME"
              placeHolder="Enter User Name"
              onChange={(e) =>
                setUser((val) => {
                  return { ...val, username: e };
                })
              }
              value={user.username}
            />
            <TextField
              name="PASSWORD"
              onChange={(e) => {
                setUser((val) => {
                  return { ...val, password: e };
                });
              }}
              placeHolder="Enter Password"
              value={user.password}
            />
            <Button content="Login" type="Primary" />
          </FormElement>
        </form>
      </Card>
    </div>
  );
};
export default Login;

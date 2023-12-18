import {
  UserLoginPayloadType,
  UserRegisterPayloadType,
} from "../types/userTypes";
import httpClient from "./httpClient";

export const signup = async (payload: UserRegisterPayloadType) => {
  try {
    const { data } = await httpClient.post("auth/signup", payload);
    // console.log(data);
    storeAccessTokenToLocal(data.accessToken);
  } catch (error) {
    // TODO: Error handling displayed to UI
    console.error(error);
  }
};

export const login = async (payload: UserLoginPayloadType) => {
  try {
    const { data } = await httpClient.post("auth/login", payload);
    // console.log(data);
    // localStorage.setItem("accessToken", data.accessToken);
    storeAccessTokenToLocal(data.accessToken);
  } catch (error) {
    // TODO: Error handling displayed to UI
    console.error(error);
  }
};

function storeAccessTokenToLocal(accessToken: string): void {
  localStorage.setItem("accessToken", accessToken);
}

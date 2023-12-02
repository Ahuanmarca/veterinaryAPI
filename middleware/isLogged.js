import jwt from "jsonwebtoken";
import * as userService from "../api/users/3-users-service.js";

function unauthorized(res) {
  res.status(401);
  res.json({ msg: "Unauthorized" });
  // return;
}

// isLogged
export default function (req, res, next) {
  const publicRoutes = ["/auth/login", "/auth/register", "/clients/filter"];

  const isPublicRoute = publicRoutes.some((publicRoute) => {
    const requestedURL = req.url;
    return requestedURL.startsWith(publicRoute);
  });

  if (isPublicRoute) {
    next();
    return;
  }

  const token = req.headers.authorization;
  // if (req.headers.authorization !== "patata") {
  if (!token) {
    unauthorized(res);
    return;
  }

  const secretWord = "youwillneverguess";
  jwt.verify(token, secretWord, async (error, payload) => {
    if (error) {
      console.error("jwt ERROR !! 👹");
      unauthorized(res);
      return;
    }
    const user = await userService.getById(payload.userId);
    req.user = user;
    next();
  });

}

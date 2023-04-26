import express from "express";
import auth from "basic-auth";
import { getUserByEmail, register } from "../users";
import encrypt from "../helpers/encrypt";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json("ok auth");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.post("/login", (req, res) => {
  try {
    const user = auth(req);
    // Verificar si el usuario está autenticado
    if (!user || !user.name || !user.pass) {
      res.setHeader("WWW-Authenticate", 'Basic realm="Enter credentials"');
      res.status(401).send("Authentication required");
    }

    // Verificar las credenciales del usuario
    if (user.name === "username" && user.pass === "password") {
      req.session.loggedin = true;
      req.session.username = user.name;
      res.send("Logged in successfully");
    } else {
      res.setHeader("WWW-Authenticate", 'Basic realm="Enter credentials"');
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Ruta para verificar la sesión del usuario
router.get("/profile", (req, res) => {
  if (req.session.loggedin) {
    res.send("Welcome " + req.session.username);
  } else {
    res.status(401).send("Unauthorized");
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, name, lastname, email, password } = req.body;

    const user = await getUserByEmail(email);

    if (user.length > 0) {
      return res.status(500).send("User exist");
    }

    const passwordEncrypted = await encrypt(password);

    const usuario = {
      username,
      name,
      lastname,
      email,
      password: passwordEncrypted,
    };

    const userId = await register(usuario);

    res.json(userId);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Ruta para cerrar sesión
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

export default router;

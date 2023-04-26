const logged = (req: Request, res: Response, next: Function) => {
  console.log(`${req.method} ${req.url}`);
  if (!req.session.loggedin) {
    res.status(401).send("Unauthorized");
    return;
  }
  next();
};

export default logged;

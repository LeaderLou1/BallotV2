const checkUserRole = (req, res) => {
  const userRole = req.session.role;

  if (userRole === "representative") {
    res.status(200).json({ role: "Representative" });
  } else {
    res.status(200).json({ role: "Constituent" });
  }
};

module.exports = {
  checkUserRole,
};

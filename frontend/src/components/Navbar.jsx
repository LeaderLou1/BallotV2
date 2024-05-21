import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logUserOut } from "../adapters/auth-adapter";
import { Flex, Box, Button, Separator } from "@radix-ui/themes";
import homeIcon from "../Photo/homeIcon.png";
import profileIcon from "../Photo/placeholder.png";
import aboutIcon from "../Photo/aboutIcon.png";
import logo from "../Photo/Logo.png";
import CurrentUserContext from "../contexts/current-user-context";

const NavBar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
  };

  return (
    <Box
      minHeight="100vh"
      width="300px"
      style={{
        background: "white",
        border: ".2px solid black",
        borderRightWidth: ".2px",
      }}
    >
      <>
        <Flex columns={{ initial: "1", md: "2" }} gap="2" width="auto">
          <img
            src={logo}
            alt="Verified"
            style={{
              width: "6rem",
              height: "6rem",
              marginTop: "4rem",
              marginLeft: "1rem",
            }}
          />
          <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>Ballot</h1>
        </Flex>

        <Flex justify="center">
          <Separator color="black" orientation="horizontal" size="3" />
        </Flex>
        <br />

        <Flex>
          <NavLink to="/">
            <Button
              size="4"
              color="grey"
              variant="ghost"
              style={{
                fontSize: "30px",
                width: "300px",
                height: "60px",
                marginBottom: ".5rem",
              }}
              onMouseEnter={() => setHoveredIcon("home")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={homeIcon}
                alt="Home"
                style={{
                  width: hoveredIcon === "home" ? "25px" : "20px",
                  height: hoveredIcon === "home" ? "25px" : "20px",
                }}
              />
              Home
            </Button>
          </NavLink>
        </Flex>

        <Flex justify="center">
          <Separator color="black" orientation="horizontal" size="3.5" />
        </Flex>

        <Flex>
          {" "}
          <NavLink
            to={currentUser ? `/users/${currentUser.id}` : `/login`}
            end={true}
          >
            <Button
              size="3"
              variant="ghost"
              style={{
                fontSize: "30px",
                width: "300px",
                height: "60px",
                marginBottom: ".5rem",
              }}
              onMouseEnter={() => setHoveredIcon("profile")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={profileIcon}
                alt="Profile"
                style={{
                  width: hoveredIcon === "profile" ? "25px" : "20px",
                  height: hoveredIcon === "profile" ? "25px" : "20px",
                }}
              />
              Profile
            </Button>
          </NavLink>
        </Flex>

        <Flex justify="center">
          <Separator color="black" orientation="horizontal" size="3.5" />
        </Flex>

        <Flex>
          <Button
            size="4"
            variant="ghost"
            style={{
              fontSize: "30px",
              width: "300px",
              height: "60px",
              marginBottom: ".5rem",
            }}
            onMouseEnter={() => setHoveredIcon("about")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={aboutIcon}
              alt="About"
              style={{
                width: hoveredIcon === "about" ? "25px" : "20px",
                height: hoveredIcon === "about" ? "25px" : "20px",
              }}
            />
            About
          </Button>
        </Flex>

        <div style={{ marginTop: "335px" }}>
          <Flex>
            <NavLink to={"/login"}>
              <Button
                color="gray"
                variant="solid"
                onClick={handleLogout}
                highContrast
                style={{ fontSize: "30px", width: "300px", height: "60px" }}
              >
                Log Out
              </Button>
            </NavLink>
          </Flex>
        </div>
      </>
    </Box>
  );
};

export default NavBar;

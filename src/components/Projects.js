import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Carousel from "react-bootstrap/Carousel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

//UML diagrams
import bugSquasherMinigameUML from "../assets/documentImages/Bug Squasher Minigame Enhanced.png";
import buildSafeComputerMinigameUML from "../assets/documentImages/Build Safe Computer.png";
import cameraSystemUML from "../assets/documentImages/Camera System UML.png";
import cutSceneUML from "../assets/documentImages/CutScene UML.png";
import cyberpalShootingSystemUML from "../assets/documentImages/CyberpalShootingSystem.png";
import dialogueSystemUML from "../assets/documentImages/Dialogue System New.png";
import stateMachineUML from "../assets/documentImages/FSM UML.png";
import haywireRobotUML from "../assets/documentImages/Haywire Robot UML.png";
import HUDUML from "../assets/documentImages/HUD UML (New).png";
import interactionSystemUML from "../assets/documentImages/Interaction System.png";
import missionsHandlerUML from "../assets/documentImages/Missions Handler.png";
import shootingsystemUML from "../assets/documentImages/shootingsystem.png";
import saveLoadDataUML from "../assets/documentImages/SaveLoadData UML.png";
import saveLoadDataDFD from "../assets/documentImages/SaveLoadData DFD.png";

//Project Images
import Azure1 from "../assets/projectImages/Azure1.png";
import Azure2 from "../assets/projectImages/Azure2.png";
import Azure3 from "../assets/projectImages/Azure3.png";
import Azure4 from "../assets/projectImages/Azure4.png";
import Azure5 from "../assets/projectImages/Azure5.png";
import burgermaking1 from "../assets/projectImages/burgermaking1.png";
import burgermaking2 from "../assets/projectImages/burgermaking2.png";
import burgermaking3 from "../assets/projectImages/burgermaking3.png";
import burgermaking4 from "../assets/projectImages/burgermaking4.png";
import burgermaking5 from "../assets/projectImages/burgermaking5.png";
import funnyShooter1 from "../assets/projectImages/funnyShooter1.png";
import funnyShooter2 from "../assets/projectImages/funnyShooter2.png";
import funnyShooter3 from "../assets/projectImages/funnyShooter3.png";
import funnyShooter4 from "../assets/projectImages/funnyShooter4.png";
import carparking1 from "../assets/projectImages/carparking1.png";
import carparking2 from "../assets/projectImages/carparking2.png";
import carparking3 from "../assets/projectImages/carparking3.png";
import carparking4 from "../assets/projectImages/carparking4.png";
import carparking5 from "../assets/projectImages/carparking5.png";
import drcarparking1 from "../assets/projectImages/drcarparking0.jpg";
import drcarparking2 from "../assets/projectImages/drcarparking3.jpg";
import drcarparking3 from "../assets/projectImages/drcarparking1.jpg";
import drcarparking4 from "../assets/projectImages/drcarparking2.jpg";
import fpsShooter1 from "../assets/projectImages/fpsShooter0.jpg";
import fpsShooter2 from "../assets/projectImages/fpsShooter4.jpg";
import fpsShooter3 from "../assets/projectImages/fpsShooter1.jpg";
import fpsShooter4 from "../assets/projectImages/fpsShooter3.jpg";
import fpsShooter5 from "../assets/projectImages/fpsShooter2.jpg";
import cowboyShootingcover from "../assets/projectImages/CowboyShootingfeaturedimage.png";
import CowboyShooting1 from "../assets/projectImages/CowboyShooting6.png";
import CowboyShooting2 from "../assets/projectImages/CowboyShooting2.jpeg";
import CowboyShooting3 from "../assets/projectImages/CowboyShooting1.png";
import CowboyShooting4 from "../assets/projectImages/CowboyShooting3.png";
import CowboyShooting5 from "../assets/projectImages/CowboyShooting4.png";
import CowboyShooting6 from "../assets/projectImages/CowboyShooting5.png";
import CowboyShootingVideo from "../assets/projectImages/DontTouch-video.mp4";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = React.useState([]);
  const [currentProjectTitle, setCurrentProjectTitle] = React.useState("");
  const [currentProjectLink, setCurrentProjectLink] = React.useState("");
  const [currentProjectDescription, setCurrentProjectDescription] =
    React.useState("");
  const [playingVideo, setPlayingVideo] = useState(null);
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const handleOpen = (images, title, description, link) => {
    setCurrentProjectImages(images);
    setCurrentProjectTitle(title);
    setCurrentProjectDescription(description);
    setCurrentProjectLink(link);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentProjectImages([]);
    setCurrentProjectTitle("");
    setCurrentProjectDescription("");
    setCurrentProjectLink("");
  };

  const gradientStyle = {
    color: "white",
    fontSize: "2rem",
    filter:
      "drop-shadow(2px 2px 10px #aa367c) drop-shadow(-2px -2px 10px #4a2fbd)",
  };

  const handlePlayVideo = (index) => {
    const videoSrc = currentProjectImages[index];
    setCurrentVideoSrc(videoSrc);
    setOpenVideoDialog(true);
  };

  const handleCloseVideoDialog = () => {
    setOpenVideoDialog(false);
    setCurrentVideoSrc("");
  };

  const projects = [
    {
      title: "Azure Dungeon Survivor (Computer Game)",
      description:
        "The Bug Squasher Minigame uses a modular architecture to manage bug spawning, behavior, " +
        "and gameplay mechanics through controllers and configurations.",
      link: "https://github.com/",
      imgUrl: Azure5,
      images: [Azure4, Azure3, Azure1, CowboyShootingVideo],
    },
    {
      title: "Top Burger (Mobile Game)",
      description: "",
      link: null,
      imgUrl: burgermaking3,
      images: [burgermaking1, burgermaking2, burgermaking4, burgermaking5],
    },
    {
      title: "Funny Shooter 2 (WebGL Game)",
      description: "",
      link: null,
      imgUrl: funnyShooter1,
      images: [funnyShooter2, funnyShooter3, funnyShooter4],
    },
    {
      title: "3D Car Parking (Mobile Game)",
      description: "",
      link: "https://www.linkedin.com/",
      imgUrl: carparking1,
      images: [carparking2, carparking3, carparking4, carparking5],
    },
    {
      title: "Toon Car Parking 3D (Mobile Game)",
      description: "",
      link: null,
      imgUrl: drcarparking1,
      images: [drcarparking2, drcarparking3, drcarparking4],
    },
    {
      title: "FPS Shooter (Mobile Game)",
      description: "",
      link: null,
      imgUrl: fpsShooter1,
      images: [fpsShooter2, fpsShooter3, fpsShooter4, fpsShooter5],
    },
    {
      title: "Cowboy Shooting (Mobile Game)",
      description: "",
      link: null,
      imgUrl: cowboyShootingcover,
      images: [
        CowboyShooting1,
        CowboyShooting2,
        CowboyShooting3,
        CowboyShooting4,
        CowboyShooting5,
        CowboyShooting6,
      ],
    },
  ];

  const documents = [
    {
      title: "Save Load Data UML",
      description: "",
      imgUrl: [saveLoadDataUML],
    },
    {
      title: "Interaction System UML",
      description: "",
      imgUrl: [interactionSystemUML],
    },
    {
      title: "Haywire Robot UML",
      description: "",
      imgUrl: [haywireRobotUML],
    },
    {
      title: "Save Load Data DFD",
      description: "",
      imgUrl: [saveLoadDataDFD],
    },
    {
      title: "Bug Squasher Minigame UML",
      description:
        "The Bug Squasher Minigame uses a modular architecture to manage bug spawning, behavior, " +
        "and gameplay mechanics through controllers and configurations.",
      imgUrl: [bugSquasherMinigameUML],
    },
    {
      title: "Build Safe Computer Minigame UML",
      description:
        "This UML diagram outlines a Build Safe Computer minigame, showing interactions between draggable components, events, and UI/logic managers to validate and categorize computer components as safe or unsafe.",
      imgUrl: [buildSafeComputerMinigameUML],
    },
    {
      title: "Camera System UML",
      description:
        "This UML diagram represents a camera system where the ThirdPersonCamera manages player camera movements, while ObstacleTransparencyHandle uses ObjectFader to handle obstacle transparency when the player is obstructed.",
      imgUrl: [cameraSystemUML],
    },
    {
      title: "CutScene UML",
      description:
        "This UML diagram outlines a CutScene Management System, where CutSceneManager coordinates video playback using VideoPlayerHandler, triggers using TriggerObject, and manages UI transitions with CutSceneUIHandler, leveraging event channels for decoupled communication.",
      imgUrl: [cutSceneUML],
    },
    {
      title: "Cyberpal Shooting System UML",
      description: "",
      imgUrl: [cyberpalShootingSystemUML],
    },
    {
      title: "Dialogue System UML",
      description: "",
      imgUrl: [dialogueSystemUML],
    },
    {
      title: "State Machine UML",
      description: "",
      imgUrl: [stateMachineUML],
    },
    {
      title: "Missions Handler UML",
      description: "",
      imgUrl: [missionsHandlerUML],
    },
    {
      title: "Shooting System UML",
      description: "",
      imgUrl: [shootingsystemUML],
    },
    {
      title: "HUD UML",
      description: "",
      imgUrl: [HUDUML],
    },
  ];

  return (
    <>
      <div>
        {/* Modal for displaying the video */}
        <BootstrapDialog
          onClose={handleCloseVideoDialog}
          aria-labelledby="video-dialog-title"
          open={openVideoDialog}
          fullWidth
          maxWidth="sm"
          style={{ zIndex: "100000" }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#1f1d1d",
              color: "#fff",
              padding: 0,
            },
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseVideoDialog}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              zIndex: 100,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent className="p-3">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="d-block w-100 carousel-img"
              style={{ backgroundColor: "#1f1d1d" }}
            >
              <source src={currentVideoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DialogContent>
        </BootstrapDialog>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          scroll="paper"
          fullWidth={true}
          maxWidth="lg"
          style={{ zIndex: "100000" }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#1f1d1d",
              color: "#fff",
            },
          }}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {currentProjectTitle}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent style={{ borderTop: "1px solid white" }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography variant="h5" gutterBottom>
                  Description:
                </Typography>
                <Typography gutterBottom>
                  {currentProjectDescription}
                </Typography>
                {currentProjectLink && (
                  <Typography className="mt-4">
                    <span className="anim-btn">
                      <a
                        href={currentProjectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white ms-0"
                        style={{ textDecoration: "none" }}
                      >
                        <span>Project Link</span>
                      </a>
                    </span>
                  </Typography>
                )}
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                {currentProjectImages.length > 0 && (
                  <Carousel
                    interval={null}
                    prevIcon={
                      currentProjectImages.length > 1 ? (
                        <FaArrowLeft style={gradientStyle} />
                      ) : null
                    }
                    nextIcon={
                      currentProjectImages.length > 1 ? (
                        <FaArrowRight style={gradientStyle} />
                      ) : null
                    }
                  >
                    {currentProjectImages.map((media, index) => (
                      <Carousel.Item key={index}>
                        {typeof media === "string" && media.includes(".mp4") ? (
                          <div className="position-relative">
                            <video
                              loop
                              muted
                              className="d-block w-100 carousel-img"
                              poster="https://via.placeholder.com/800x450"
                            >
                              <source src={media} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <button
                              onClick={() => handlePlayVideo(index)}
                              className="position-absolute top-50 start-50 translate-middle btn btn-light"
                            >
                              Play video
                            </button>
                          </div>
                        ) : (
                          <img
                            src={media}
                            className="d-block w-100 carousel-img"
                            alt={`Slide ${index + 1}`}
                          />
                        )}
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </Grid>
            </Grid>
          </DialogContent>
        </BootstrapDialog>
      </div>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => {
                  if (isVisible && !hasAnimated) setHasAnimated(true); // Prevent blinking

                  return (
                    <div
                      className={
                        hasAnimated ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <h2>Projects</h2>
                      <p>
                        This portfolio showcases a collection of game
                        development projects, demonstrating expertise in
                        creating engaging and immersive gaming experiences. It
                        highlights proficiency in game design, programming, and
                        interactive storytelling.
                      </p>
                      <Tab.Container
                        id="projects-tabs"
                        defaultActiveKey="first"
                      >
                        <Nav
                          variant="pills"
                          className="nav-pills mb-5 justify-content-center align-items-center"
                          id="pills-tab"
                        >
                          <Nav.Item>
                            <Nav.Link eventKey="first">
                              Developed Projects
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">UML Diagrams</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">
                              Architecture Demo Project
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>

                        <Tab.Content
                          id="slideInUp"
                          className="animate__animated animate__slideInUp"
                        >
                          <Tab.Pane eventKey="first">
                            <Row>
                              {projects.map((project, index) => (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() =>
                                    handleOpen(
                                      project.images,
                                      project.title,
                                      project.description,
                                      project.link
                                    )
                                  }
                                />
                              ))}
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <Row>
                              {documents.map((document, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...document}
                                    onClick={() =>
                                      handleOpen(
                                        document.imgUrl,
                                        document.title,
                                        document.description
                                      )
                                    }
                                  />
                                );
                              })}
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="d-flex justify-content-center align-items-center">
                              <a
                                href="https://github.com/MTA25/Architecture-Demo"
                                target="_blank"
                                className="diagram-btn"
                                rel="noopener noreferrer"
                              >
                                Demo Project
                              </a>
                            </div>
                            <p>
                              I write clean, well-structured, and reusable code
                              by following best practices, such as maintaining
                              modularity, adhering to naming conventions, and
                              using design patterns where applicable. I focus on
                              simplicity and clarity while ensuring reusability
                              by creating generic components, functions, or
                              classes that can be easily adapted for different
                              use cases. Regarding the project, you can find it
                              on the attached GitHub link. Please feel free to
                              review the code structure and see if it aligns
                              with your needs. Additionally, I can adapt and
                              work according to your specific requirements.
                            </p>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                  );
                }}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </>
  );
};

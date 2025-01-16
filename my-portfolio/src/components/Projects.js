import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Modal, Box, Typography, Button } from "@mui/material";
import * as React from 'react';

//UML diagrams
import bugSquasherMinigameUML from "../assets/documentImages/Bug Squasher Minigame Enhanced.png";
import buildSafeComputerMinigameUML from "../assets/documentImages/Build Safe Computer.png";
import cameraSystemUML from "../assets/documentImages/Camera System UML.png";
import cutSceneUML from "../assets/documentImages/CutScene UML.png";
import cyberpalShootingSystemUML from "../assets/documentImages/CyberpalShootingSystem.png";
import dialogueSystemUML from "../assets/documentImages/Dialogue System New.png";
import stateMachineUML from "../assets/documentImages/FSM UML.png";
import haywireRobotUML  from "../assets/documentImages/Haywire Robot UML.png";
import HUDUML  from "../assets/documentImages/HUD UML (New).png";
import interactionSystemUML  from "../assets/documentImages/Interaction System.png";
import missionsHandlerUML  from "../assets/documentImages/Missions Handler.png";
import shootingsystemUML  from "../assets/documentImages/shootingsystem.png";
import saveLoadDataUML  from "../assets/documentImages/SaveLoadData UML.png";
import saveLoadDataDFD  from "../assets/documentImages/SaveLoadData DFD.png";

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


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const projects = [
    {
      title: "Azure Dungeon Survivor (Computer Game)",
      description: "",
      imgUrl: Azure5, Azure4, Azure3, Azure2, Azure1,
    },
    {
      title: "Top Burger (Mobile Game)",
      description: "",
      imgUrl: burgermaking3,
    },
    {
      title: "Funny Shooter 2 (WebGL Game)",
      description: "",
      imgUrl: funnyShooter1,
    },
    {
      title: "3D Car Parking (Mobile Game)",
      description: "",
      imgUrl: carparking1,
    },
    {
      title: "Toon Car Parking 3D (Mobile Game)",
      description: "",
      imgUrl: drcarparking1,
    },
    {
      title: "FPS Shooter (Mobile Game)",
      description: "",
      imgUrl: fpsShooter1,
    },
    {
      title: "Cowboy Shooting (Mobile Game)",
      description: "",
      imgUrl: cowboyShootingcover,
    },
    {
      title: "Cowboy Shooting (Mobile Game)",
      description: "",
      imgUrl: CowboyShooting2,
    },
    {
      title: "Cowboy Shooting (Mobile Game)",
      description: "",
      imgUrl: cowboyShootingcover,
    },
  ];
  
  const documents = [
    {
      title: "Save Load Data UML",
      description: "",
      imgUrl: saveLoadDataUML,
    },
    {
      title: "Interaction System UML",
      description: "",
      imgUrl: interactionSystemUML,
    },
    {
      title: "Haywire Robot UML",
      description: "",
      imgUrl: haywireRobotUML,
    },
    {
      title: "Save Load Data DFD",
      description: "",
      imgUrl: saveLoadDataDFD,
    },
    {
      title: "Bug Squasher Minigame UML",
      description: "The Bug Squasher Minigame uses a modular architecture to manage bug spawning, behavior, " +
          "and gameplay mechanics through controllers and configurations.",
      imgUrl: bugSquasherMinigameUML,
    },
    {
      title: "Build Safe Computer Minigame UML",
      description: "This UML diagram outlines a Build Safe Computer minigame, showing interactions between draggable components, events, and UI/logic managers to validate and categorize computer components as safe or unsafe.",
      imgUrl: buildSafeComputerMinigameUML,
    },
    {
      title: "Camera System UML",
      description: "This UML diagram represents a camera system where the ThirdPersonCamera manages player camera movements, while ObstacleTransparencyHandle uses ObjectFader to handle obstacle transparency when the player is obstructed.",
      imgUrl: cameraSystemUML,
    },
    {
      title: "CutScene UML",
      description: "This UML diagram outlines a CutScene Management System, where CutSceneManager coordinates video playback using VideoPlayerHandler, triggers using TriggerObject, and manages UI transitions with CutSceneUIHandler, leveraging event channels for decoupled communication.",
      imgUrl: cutSceneUML,
    },
    {
      title: "Cyberpal Shooting System UML",
      description: "",
      imgUrl: cyberpalShootingSystemUML,
    },
    {
      title: "Dialogue System UML",
      description: "",
      imgUrl: dialogueSystemUML,
    },
    {
      title: "State Machine UML",
      description: "",
      imgUrl: stateMachineUML,
    },
    {
      title: "Missions Handler UML",
      description: "",
      imgUrl: missionsHandlerUML,
    },
    {
      title: "Shooting System UML",
      description: "",
      imgUrl: shootingsystemUML,
    },
    {
      title: "HUD UML",
      description: "",
      imgUrl: HUDUML,
    },
  ];

  return (
    <>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={projImg1}></img>
        </Box>
      </Modal>
    </div>
    <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>This portfolio showcases a collection of game development projects, demonstrating expertise in creating engaging 
                    and immersive gaming experiences. It highlights proficiency in game design, programming, and interactive storytelling.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Developed Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UML Diagrams</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" href="https://github.com/MTA25/Architecture-Demo" target="_blank">
                          Architecture Demo Project
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={handleOpen} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {documents.map((documents, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...documents}
                                    onClick={handleOpen} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I write clean, well-structured, and reusable code by following best practices, such as maintaining modularity, 
                          adhering to naming conventions, and using design patterns where applicable. I focus on simplicity and clarity while 
                          ensuring reusability by creating generic components, functions, or classes that can be easily adapted for different 
                          use cases. Regarding the project, you can find it on the attached GitHub link. Please feel free to review the code structure 
                          and see if it aligns with your needs. Additionally, I can adapt and work according to your specific requirements.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section></>
  )
}

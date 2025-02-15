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
import DontTouchVideo from "../assets/projectImages/DontTouch-video.mp4";
import DontTouchIcon from "../assets/projectImages/DontTouchIcon.png";
import DontTouch1 from "../assets/projectImages/DontTouch1.png";
import DontTouch2 from "../assets/projectImages/DontTouch2.png";
import DontTouch3 from "../assets/projectImages/DontTouch3.png";
import DontTouch4 from "../assets/projectImages/DontTouch4.png";
import USPoliceDogCityCrimeChase1 from "../assets/projectImages/US Police Dog City Crime Chase (1).png";
import USPoliceDogCityCrimeChase2 from "../assets/projectImages/US Police Dog City Crime Chase (2).png";
import USPoliceDogCityCrimeChase3 from "../assets/projectImages/US Police Dog City Crime Chase (3).png";
import Daleela1 from "../assets/projectImages/Daleela (1).jpg";
import Daleela2 from "../assets/projectImages/Daleela (2).jpg";
import Daleela3 from "../assets/projectImages/Daleela (3).jpg";
import Daleela4 from "../assets/projectImages/Daleela (4).jpg";
import Daleela5 from "../assets/projectImages/Daleela (5).jpg";
import Daleela6 from "../assets/projectImages/Daleela (6).jpg";
import Daleela7 from "../assets/projectImages/Daleela (7).jpg";
import Daleela8 from "../assets/projectImages/Daleela (8).jpg";
import Daleela9 from "../assets/projectImages/Daleela (9).jpg";
import Daleela10 from "../assets/projectImages/Daleela (10).jpg";
import Daleela11 from "../assets/projectImages/Daleela (11).jpg";
import Daleela12 from "../assets/projectImages/Daleela (12).jpg";
import Daleela13 from "../assets/projectImages/Daleela (13).jpg";
import SupperDelivery0 from "../assets/projectImages/demo-superdelivery (icon).jpg";
import SupperDelivery1 from "../assets/projectImages/demo-superdelivery (1).jpg";
import SupperDelivery2 from "../assets/projectImages/demo-superdelivery (2).jpg";
import SupperDelivery3 from "../assets/projectImages/demo-superdelivery (3).jpg";
import SupperDeliveryVideo from "../assets/projectImages/demo-superdelivery.mp4";
import Bimparkour from "../assets/projectImages/BIMParkor0 .png";
import Bimparkour1 from "../assets/projectImages/BIMParkor (1).jpg";
import Bimparkour2 from "../assets/projectImages/BIMParkor (2).jpg";
import Bimparkour3 from "../assets/projectImages/BIMParkor (3).jpg";
import Bimparkour4 from "../assets/projectImages/BIMParkor (4).jpg";
import Bimparkour5 from "../assets/projectImages/BIMParkor (5).jpg";
import Bimparkour6 from "../assets/projectImages/BIMParkor (6).jpg";
import Bimparkour7 from "../assets/projectImages/BIMParkor (7).jpg";
import Bimparkour8 from "../assets/projectImages/BIMParkor (8).jpg";
import BimparkourVideo from "../assets/projectImages/parkourdemo.mp4";
import Paratroopers0 from "../assets/projectImages/Paratroopers0.png";
import Paratroopers1 from "../assets/projectImages/Paratroopers1.png";
import Paratroopers2 from "../assets/projectImages/Paratroopers2.png";
import Paratroopers3 from "../assets/projectImages/Paratroopers3.png";
import Paratroopers4 from "../assets/projectImages/Paratroopers4.png";
import ParatroopersVideo from "../assets/projectImages/ParatroopersVideo.mp4";
import MakeWayVideo from "../assets/projectImages/ParatroopersVideo.mp4";
import MakeWay0 from "../assets/projectImages/MakeWayIcon.png";
import MakeWay1 from "../assets/projectImages/MakeWay1.png";
import MakeWay2 from "../assets/projectImages/MakeWay2.png";
import MakeWay3 from "../assets/projectImages/MakeWay3.png";
import MakeWayRep1 from "../assets/projectImages/fliptiles1.jpg";
import MakeWayRep2 from "../assets/projectImages/fliptiles2.jpg";
import MakeWayRep3 from "../assets/projectImages/fliptiles3.jpg";
import MakeWayRep4 from "../assets/projectImages/fliptiles4.jpg";
import MakeWayRep5 from "../assets/projectImages/fliptiles5.jpg";
import OhMyDice0 from "../assets/projectImages/OhMyDice (0).jpg";
import OhMyDice1 from "../assets/projectImages/OhMyDice (1).jpg";
import OhMyDice2 from "../assets/projectImages/OhMyDice (2).jpg";
import OhMyDice3 from "../assets/projectImages/OhMyDice (3).jpg";
import OhMyDicevideo from "../assets/projectImages/ohmydicedemo.mp4";

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
      description:"Azure Dungeon Survivor is a strategic grid-based, turn-based PC game where players attack first, followed by all enemies. Plan each move carefully, adapt to enemy tactics, and survive waves of dungeon threats. With challenging encounters and tactical combat, every decision matters in this battle for survival!",
      link: null,
      imgUrl: Azure5,
      images: [Azure5, Azure4, Azure3, Azure1],
    },
    {
      title: "Top Burger (Mobile Game)",
      description: "Top Burger is a fast-paced 2D burger-making simulation game where you serve delicious meals across multiple levels. Take orders, stack ingredients quickly, and satisfy hungry customers to earn rewards. With increasing difficulty and fun challenges, test your speed and accuracy to become the ultimate burger chef!",
      link: null,
      imgUrl: burgermaking1,
      images: [burgermaking1, burgermaking2, burgermaking3, burgermaking4, burgermaking5],
    },
    {
      title: "Daleela (Mobile Game)",
      description: "Daleela is an educational health app by UNICEF designed to provide vital maternal and child health information. It offers expert guidance on pregnancy, newborn care, and early childhood development, helping parents make informed decisions for their child’s well-being.",
      link: "https://play.google.com/store/apps/details?id=com.unicef.daleela&hl=en",
      imgUrl: Daleela1,
      images: [Daleela1, Daleela2, Daleela3, Daleela4, Daleela5, Daleela6, Daleela7, Daleela8, Daleela9, Daleela10, Daleela11, Daleela12, Daleela13],
    },
    {
      title: "Funny Shooter 2 (WebGL Game)",
      description: "Funny Shooter 2 is a fast-paced FPS where you battle wacky, absurd enemies in chaotic arenas. Armed with a wild arsenal of weapons, you take on bizarre foes like giant toilets and crazy soldiers. With smooth controls, explosive combat, and hilarious action, this game delivers non-stop fun and mayhem!",
      link: "https://poki.com/en/g/funny-shooter-2",
      imgUrl: funnyShooter1,
      images: [funnyShooter1, funnyShooter2, funnyShooter3, funnyShooter4],
    },
    {
      title: "3D Car Parking (Mobile Game)",
      description: "3D Car Parking is a realistic mobile driving game that tests your parking skills across challenging levels. Navigate tight spaces, avoid obstacles, and master precision parking with smooth controls and lifelike physics.",
      link: null,
      imgUrl: carparking1,
      images: [carparking1, carparking2, carparking3, carparking4, carparking5],
    },
    {
      title: "Toon Car Parking 3D (Mobile Game)",
      description: "Toon Car Parking 3D is a fun and colorful parking simulation game with cartoon-style graphics. Drive through challenging levels, navigate tricky obstacles, and park with precision. With smooth controls and engaging gameplay.",
      link: null,
      imgUrl: drcarparking1,
      images: [drcarparking1, drcarparking2, drcarparking3, drcarparking4],
    },
    {
      title: "Super Delivery (Mobile Game)",
      description: "A hypercasual project Demo made in collaboration with Reknown Hypercasual Publishers ( Cant reveal identity due to NDA Clauses). Game Involves doing deliveries of the products as a delivery boy.",
      link: null,
      imgUrl: SupperDelivery0,
      images: [SupperDelivery1, SupperDelivery2, SupperDelivery3, SupperDeliveryVideo],
    },
    {
      title: "Oh My Dice (Mobile Game)",
      description: "Oh My Dice is a puzzle grid-based game where players roll dice strategically to ensure all dice show the same top color. Solve each level by carefully planning your moves and aligning the dice correctly.",
      link: null,
      imgUrl: OhMyDice0,
      images: [OhMyDice1, OhMyDice2, OhMyDice3, OhMyDicevideo],
    },
    {
      title: "Parkour Race: Jungle Runner 3D (Mobile Game)",
      description: "Jungle Parkour Runner is a fast-paced running game where you dash through wild jungle environments, overcoming obstacles with fluid parkour moves. Jump, slide, and sprint to escape dangers while collecting rewards. With exciting levels and smooth controls, it's a thrilling adventure for all runners!",
      link: "https://play.google.com/store/apps/details?id=com.virtua.play.parkour.runner.jungle.race.game&hl=en",
      imgUrl: Bimparkour,
      images: [Bimparkour7, Bimparkour1, Bimparkour, Bimparkour3, Bimparkour4, Bimparkour5, Bimparkour6, Bimparkour8, BimparkourVideo],
    },
    {
      title: "FPS Shooter (Mobile Game)",
      description: "FPS Shooter is an action-packed mobile game featuring intense gunfights, realistic weapons, and fast-paced combat. Take on challenging missions, eliminate enemies, and test your shooting skills in immersive battle environments. Lock, load, and dominate the battlefield!",
      link: null,
      imgUrl: fpsShooter1,
      images: [fpsShooter1, fpsShooter2, fpsShooter3, fpsShooter4, fpsShooter5],
    },
    {
      title: "West World Cowboy Shooter (Mobile Game)",
      description: "Mafia Shooting Chronicles is an intense cover shooter where players battle ruthless crime syndicates across five action-packed chapters. " +
          "From New York’s gritty streets to Tokyo’s neon-lit underworld, they take down notorious mafia bosses, including the Chinese triads, " +
          "Russian mob, Yakuza, and a powerful South American cartel. Featuring dynamic cover mechanics, a vast arsenal, and a skill tree for " +
          "customization, the game blends strategy with fast-paced combat. Stunning noir-inspired visuals and cinematic sequences immerse players" +
          " in a high-stakes fight for underworld dominance.",
      link: "https://play.google.com/store/apps/details?id=com.westworld.mafia.shooting.game&hl=en&pli=1",
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
    {
      title: "Windy Paratroopers (Mobile Game)",
      description: "Windy Paratroopers is a fun and challenging arcade game where you guide paratroopers to safe landings while battling unpredictable winds. Time your jumps, adjust for wind speed, and avoid obstacles to ensure a smooth touchdown.",
      link: "https://play.google.com/store/apps/details?id=com.tinykrakengames.windy.paratroppers",
      imgUrl: Paratroopers0,
      images: [
        Paratroopers1,
        Paratroopers2,
        Paratroopers3,
        Paratroopers4,
        ParatroopersVideo,
      ],
    },
    {
      title: "Make Way (Mobile Game)",
      description: "Make Way is a creative puzzle game where you build paths to guide objects safely to their destination. Arrange tiles, avoid obstacles, and solve tricky challenges across multiple levels. With intuitive controls and engaging mechanics, it's a fun test of logic and strategy!",
      link: "https://play.google.com/store/apps/details?id=com.tinykrakengames.make.way",
      imgUrl: MakeWay0,
      images: [
        MakeWay1,
        MakeWay2,
        MakeWay3,
        MakeWayVideo,
        MakeWayRep1,
        MakeWayRep2,
        MakeWayRep3,
        MakeWayRep4,
        MakeWayRep5,
      ],
    },
    {
      title: "Don't Touch - Escape Prison (Mobile Game)",
      description: "Don't Touch It! is a casual arcade game where players must protect their precious object from waves of mischievous hands trying to steal it. Using quick reflexes and strategic taps, you fend off intruders while unlocking new defenses and upgrades. Simple yet addictive, it’s a fun challenge that keeps you on your toes!",
      link: "https://play.google.com/store/apps/details?id=com.tinykrakengames.dont.touch.it&hl=en",
      imgUrl: DontTouchIcon,
      images: [
        DontTouch1,
        DontTouch2,
        DontTouch3,
        DontTouch4,
        DontTouchVideo,
      ],
    },
    {
      title: "US Police Dog City Crime Chase (Mobile Game)",
      description: "Police Dog Crime Chase Game is an action-packed simulation where you play as a police dog assisting officers in catching criminals. Patrol shopping malls, track down thieves, and stop illegal activities using your sharp senses and agility. With realistic K9 gameplay and thrilling chases, this game delivers an exciting law enforcement experience!",
      link: "https://play.google.com/store/apps/details?id=com.gss.us.police.cop.dog.crime.chase.shoppingmall&hl=en",
      imgUrl: USPoliceDogCityCrimeChase1,
      images: [
        USPoliceDogCityCrimeChase1,
        USPoliceDogCityCrimeChase2,
        USPoliceDogCityCrimeChase3,
      ],
    },
  ];

  const documents = [
    {
      title: "Save Load Data UML",
      description: "The SaveLoadData class manages game progress by storing and retrieving data using a unique save key. It tracks player-related information, such as selected character type, current scene, and position across different regions, all stored in GameData. This system ensures that task progress, player location, and other critical gameplay elements persist across sessions. Methods for saving and loading both player position and task data allow seamless game state restoration.",
      imgUrl: [saveLoadDataUML],
    },
    {
      title: "Interaction System UML",
      description: "Outlines the mechanics of object and NPC interaction, including proximity detection, UI indicators, and triggered events.",
      imgUrl: [interactionSystemUML],
    },
    {
      title: "Haywire Robot UML",
      description: "Details the behaviors of the haywire robot, including movement patterns, chase logic, and player interaction.",
      imgUrl: [haywireRobotUML],
    },
    {
      title: "Save Load Data DFD",
      description: "A Data Flow Diagram (DFD) for the save/load system, detailing how game data is stored, retrieved, and managed.",
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
      description: "Represents the mechanics of shooting using the Cyberpal device, including input handling, projectile spawning, and hit detection.",
      imgUrl: [cyberpalShootingSystemUML],
    },
    {
      title: "Dialogue System UML",
      description: "Shows the structure of the dialogue system, including conversation flow, choice-based interactions, and NPC communication",
      imgUrl: [dialogueSystemUML],
    },
    {
      title: "State Machine UML",
      description: "Shows the player state system, likely handling movement, aiming, attacking, and other gameplay states.",
      imgUrl: [stateMachineUML],
    },
    {
      title: "Missions Handler UML",
      description: "Represents the mission system, including tracking objectives, updating mission status, and handling mission-related events.",
      imgUrl: [missionsHandlerUML],
    },
    {
      title: "Shooting System UML",
      description: "The Cyberpal Shooting System revolves around combat interactions with different enemy types, including Haywire robots and Virus enemies. The EnemyDetection component detects when a player is nearby, triggering appropriate behaviors. Players engage with enemies using the CyberpalShootingWidget, which manages aiming, shooting, and equip states. The system integrates with a PlayerStateMachine, ensuring smooth transitions between combat states. Events are managed through BoolEventChannelSO, facilitating dynamic interactions between components, while the AimUIHandler provides real-time aiming feedback.",
      imgUrl: [shootingsystemUML],
    },
    {
      title: "HUD UML",
      description: "Defines the structure of the Heads-Up Display (HUD), including elements like health bars, minimaps, notifications, and interaction prompts.",
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

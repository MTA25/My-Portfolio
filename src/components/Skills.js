import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faLightbulb, faProjectDiagram, faBug, faGamepad, faRocket } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <FontAwesomeIcon fontSize={30} icon={faCode} />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon fontSize={30} icon={faGamepad} />
                                    <h5>Game<br/>Development</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon fontSize={30} icon={faCogs} />
                                    <h5>Cross-Platform<br/>Development</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon fontSize={30} icon={faBug} />
                                    <h5>Debugging<br/>&<br/>Testing</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon fontSize={30} icon={faLightbulb} />
                                    <h5>Problem<br/>Solving</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon fontSize={30} icon={faRocket} />
                                    <h5>Performance<br/>Optimization</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon fontSize={30} icon={faProjectDiagram} />
                                    <h5>Project<br/>Management</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    );
};

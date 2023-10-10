import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import './script.js';
import { Image, Navbar, Nav, Dropdown, DropdownItem, DropdownButton, Container, Button, InputGroup, FormControl, NavDropdown, Row, Card, Col, Figure, ListGroup, NavItem } from 'react-bootstrap';
import { Apple, ArrowLeftShort, ArrowRightCircleFill, ArrowRightShort, CaretUpFill, CircleFill, Facebook, Globe, Linkedin, NintendoSwitch, Phone, Playstation, Search, Twitter, Windows, Xbox, Youtube } from 'react-bootstrap-icons';

const Logo = () => (
  <NavDropdown className={"logo navbar-brand my-1"} id="RiotDropdownLink"
               title={<svg className="logo" height="27" id="logo" viewBox="0 0 587.93 165" width="85">
    <path
      d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path>
  </svg>}>
    <NavDropdown.Item className="dropHeading">GAMES</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">LEAGUE OF LEGENDS</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">VALORANT</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">TEAMFIGHT TACTICS</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">LEGENDS OF RUNETERRA</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">LOL: WILD RIFT</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="dropHeading">FORGE</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">CONV/RGENCE</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="dropHeading">ESPORTS</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">LOL ESPORTS</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">VALORANT ESPORTS</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="dropHeading">ENTERTAINMENT</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">ARCANE</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">UNIVERSE</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">RIOT GAMES MUSIC</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="dropHeading">BUSINESS</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">RIOT GAMES</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">RIOT MERCH</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">RIOT MOBILE</NavDropdown.Item>
    <NavDropdown.Item className="dropItem">RIOT SUPPORT</NavDropdown.Item>
  </NavDropdown>
);

// Fistbump SVG Component
const Fistbump = () => (
  <Navbar.Brand>
    <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 32 32" width="27" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" fill="#f1f5f1" r="16"></circle>
      <polygon fill="#050505"
               points="16.42 8 6.75 12.47 9.16 21.64 11 21.41 10.49 15.65 11.1 15.38 12.13 21.27 15.27 20.89 14.71 14.53 15.3 14.27 16.45 20.75 19.62 20.36 19.01 13.38 19.61 13.12 20.86 20.2 24 19.82 24 9.89 16.42 8"></polygon>
      <polygon fill="#050505" points="16.65 21.9 16.81 22.8 24 24 24 21 16.66 21.9 16.65 21.9"></polygon>
    </svg>
  </Navbar.Brand>

);

// Actual Navbar component
function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <Navbar className={isScrolled ? 'navbar scrolled p-0 px-lg-2' : 'navbar p-0 px-lg-2'} fixed="top" id="topNav">
      <Container fluid>
        <Nav className="align-items-center">
          <Logo/>
          <Fistbump/>

          <NavDropdown renderMenuOnMount={true} title="WHO WE ARE" id="M2DropdownLink" className="d-none d-lg-block riotDropLabel">
            <NavDropdown.Item>About Riot</NavDropdown.Item>
            <NavDropdown.Item>Diversity & Inclusion</NavDropdown.Item>
            <NavDropdown.Item>Social Impact</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown renderMenuOnMount={true} title="WORK WITH US" id="M3DropdownLink" className="d-none d-lg-block">
            <NavDropdown.Item>Jobs</NavDropdown.Item>
            <NavDropdown.Item>Benefits</NavDropdown.Item>
            <NavDropdown.Item>Offices</NavDropdown.Item>
            <NavDropdown.Item>Life At Riot</NavDropdown.Item>
          </NavDropdown>

          <Nav.Item className="d-none d-lg-block" style={{ position: 'relative' }}>
            <Button className="navBtn btn btn-outline-secondary" href="#" id="newsUnderlined">NEWS</Button>
          </Nav.Item>
        </Nav>

        <Nav className="justify-content-end" id="rightNavTop">
          <Nav.Item className="col-1 py-1 mx-1">
            <Button className="navBtn btn btn-outline-secondary" href="#"><Globe/></Button>
          </Nav.Item>

          <Nav.Item className="d-none d-lg-block col-6 p-1">
            <InputGroup style={{ maxWidth: '164.3px', minHeight: '35px' }}>
              <FormControl className="form-control no-outline ps-4" id="searchField" placeholder="SEARCH"/>
              <InputGroup.Text id="searchIcon"><Search/> </InputGroup.Text>
            </InputGroup>
          </Nav.Item>

          <Nav.Item className={"d-flex justify-content-center align-items-center"} style={{ marginRight: '20px' }}>
            <Button className="col navBtn btn btn-outline-secondary" href="#" id="signIn" style={{ minWidth: '98px', minHeight: '35px' }}>SIGN IN</Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

function NunuInfo() {
  return (
    <div className="song-of-nunu">
      <Container fluid>
        <Row className="container" id="nunuInfo">
          <Container>
            <Image alt="Nunu" className="nunu" id="nunuImg" src={require("./images/son-light-logo-png-600.png")}/>

            <h2 id="nunuInfoH2">Developed by Tequila Works</h2>

            <p id="nunuInfoP">Dive headfirst into an immersive narrative set in the undiscovered reaches of the Freljord, where every snowy step brings you closer to the truth about Nunu and Willump’s past.</p>

            <Button type="button" href="#" id="preOrderBtn" className="container d-flex justify-content-center align-items-center col btn btn-outline-secondary">
              <div id="preOrderBtnArrowContainer">
                <span id="preOrderBtnArrowColor"><CircleFill id="preOrderBtnArrowSVG"/></span>
                <span id="preOrderBtnArrowCircle"><ArrowRightCircleFill/></span>
              </div>
              <span>Pre-Order Now</span>
            </Button>

          </Container>
        </Row>
      </Container>
    </div>
  );
}


function NewsSection() {
  return (
    <Row className="news m-0 px-lg-3 position-relative">
      <Col>
        <Row className="flex m-5 pt-5 justify-content-between">
          <Col className="col-5 p-0">
            <h1 className="title p-0 m-2">What's happening?</h1>
          </Col>
          <Col className="col-1 p-0">
            <Button type="button" href="#" id="seeMoreBtn" className="col m-2 btn btn-outline-secondary float-end">SEE MORE</Button>
          </Col>
        </Row>

        <Row className="m-5 flexRow d-flex align-items-start">
          <Col className="col-xl p-0">
            <Card className="newsCardLg card justify-content-end m-2" id="newsCinematic">
              <Row className="row justify-content-start">
                <Col className="col-md-12 p-5">
                  <span className="newsTitleLg">“THE GRIND. THE GLORY.” Cinematic Trailer | Worlds 2023<br/></span>
                  <span className="newsLabel">NEWS</span>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col className="p-0 col-xl-5 justify-content-center" id="newsCol">
            {renderNewsCard('Update on Our CEO Transition', 'newsCEO')}
            {renderNewsCard('Worlds 2023 Primer', 'newsWorlds')}
            {renderNewsCard('So You Want to Attend the TFT Vegas Open?', 'newsVegas')}
            {renderNewsCard('Champion Insights: Briar', 'newsBriar')}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

function renderNewsCard(newsTitle, newsId) {
  return (
    <Card className="newsCard card m-2 row-md justify-content-center" id={newsId}>
      <Row className="justify-content-center">
        <Col className="col-md-8">
          <span className="newsTitle">{newsTitle}<br/></span>
          <span className="newsLabel">NEWS</span>
        </Col>
        <Col className="col-md-3"></Col>
      </Row>
    </Card>
  );
}

function GamesSection() {
  return (
    <Row className="games m-0 px-lg-3 mt-5">
      <Col>
        <h1 className="title m-2">Games</h1>

        <Row className="mx-5 mb-4 mt-5 justify-content-center">
          {renderGameCard('League of Legends', require('./images/lol-logotype.png'), 'cardLOL', [Windows, Apple])}
          {renderGameCard('Valorant', require('./images/valorant-logotype.png'), 'cardValorant', [Windows])}
        </Row>

        <Row className="mx-5 my-4 justify-content-center">
          {renderGameCard('Team Fight Tactics', require('./images/tft-logotype-2021.png'), 'cardTFT', [Windows, Apple, Phone])}
          {renderGameCard('League of Legends Wild Rift', require('./images/lol-wildrift-logotype.png'), 'cardLOLWR', [Phone])}
        </Row>

        <Row className="mx-5 mt-4 mb-5 justify-content-center">
          {renderGameCard('Legends of Runeterra', require('./images/legends-of-runeterra-logotype.png'), 'cardLOR', [Windows, Phone], 'col-md-6')}
        </Row>
      </Col>
    </Row>
  );
}

function renderGameCard(title, imageSrc, id, platforms, customColClass) {
  return (
    <Card className={`m-2 ${customColClass || 'col-md'} justify-content-center`} id={id}>
      <Row className="justify-content-center">
        <Col className="col-md-3">
          <Image className="img-fluid rounded-start cardLogo" src={imageSrc} alt={title}/>

          <div className="osInfo">
            <span className="osInfoBox px-2 py-1">
              {platforms.map((PlatformIcon, idx) => <PlatformIcon key={idx}/>)}
            </span>
          </div>
        </Col>
        <Col className="col-md-8"/>
      </Row>
    </Card>
  );
}

function EsportsSection() {
  return (
    <Row className="esports m-0 px-lg-3">
      <Col>
        <h1 className="title m-2">Esports</h1>

        <Row className="m-5 justify-content-center">
          {renderEsportsCard('League of Legends Esports', require('./images/lol-esports-logo-full.png'), 'cardLOLEsport')}
          {renderEsportsCard('Valorant Championship Tour', require('./images/val-esports-logo-2023.png'), 'cardVCT')}
        </Row>
      </Col>
    </Row>
  )
}

function renderEsportsCard(altText, imgSrc, cardId) {
  return (
    <Card className="m-2 col-md justify-content-center" id={cardId}>
      <Row className="justify-content-center">
        <Col className="col-md-3">
          <Image alt={altText} className="img-fluid rounded-start cardLogo" src={imgSrc}/>
        </Col>
        <Col className="col-md-8"/>
      </Row>
    </Card>
  );
}

function EntertainmentSection() {
  return (
    <Row className="entertainment m-0 px-lg-3">
      <Col>
        <h1 className="title m-2">Entertainment</h1>

        <Row className="m-5 justify-content-center">
          {renderEntertainmentCard('League of Legends', require('./images/arcane-logo-white.png'), 'cardArcane')}
          {renderEntertainmentCard('Riot Games Music', require('./images/riotgames-music.png'), 'cardMusic')}
        </Row>
      </Col>
    </Row>
  )
}

function renderEntertainmentCard(altText, imgSrc, cardId) {
  return (
    <Card className="m-2 col-md justify-content-center" id={cardId}>
      <Row className="justify-content-center">
        <Col className="col-md-3">
          <Image alt={altText} className="img-fluid rounded-start cardLogo" src={imgSrc}/>
        </Col>
        <Col className="col-md-8"/>
      </Row>
    </Card>
  );
}

// Forge Section
function CardComponent(props) {
  const { id, imgSrc, imgAlt, platforms, hasPhone } = props; // Data passed into component

  return (
    <div className="card m-2 col-md-4 justify-content-center" id={id}>
      <Row className="justify-content-center">
        <Col md={3}>
          <Image alt={imgAlt} className="img-fluid rounded-start cardLogo" src={imgSrc}/>

          <div className="osInfoSmall">
                        <span className="osInfoBox px-1">
                            <Windows/>
                            <NintendoSwitch/>
                          {platforms.includes('playstation') && <Playstation/>}
                          {platforms.includes('xbox') && <Xbox/>}
                          {hasPhone && <Phone/>}
                        </span>
          </div>
        </Col>
        <Col md={8}></Col>
      </Row>
    </div>
  );
}

const cardsData = [
  { id: 'cardMageSeeker', imgSrc: require('./images/mageseeker-logo-white.png'), imgAlt: 'The Mageseeker LoL', platforms: ['playstation', 'xbox'], hasPhone: false },
  { id: 'cardRuinedKing', imgSrc: require('./images/ruined-king-logotype.png'), imgAlt: 'Ruined King', platforms: ['playstation', 'xbox'], hasPhone: false },
  { id: 'cardHextech', imgSrc: require('./images/hextech-mayhem-logotype.png'), imgAlt: 'League of Legends', platforms: [], hasPhone: true },
  { id: 'cardConvrgence', imgSrc: require('./images/convrgence-logotype.png'), imgAlt: 'Convrgence', platforms: [], hasPhone: false },
  { id: 'cardNunu', imgSrc: require('./images/songofnunu-logotype.png'), imgAlt: 'Song of Nunu', platforms: ['playstation', 'xbox'], hasPhone: false },
];

const RiotForgeSection = () => {
  return (
    <Container fluid className="forge m-0 px-lg-3">
      <Row>
        <Col>
          <Row className="mb-5">
            <Col className="p-0">
              <h1 className="title m-2">Riot Forge</h1>
            </Col>
            <Col className="me-5 d-flex align-items-end justify-content-end">
              <Button className="scrollArrow btn btn-outline-secondary float-end position-relative" type="button" id="scroll-left-button">
                <ArrowLeftShort/>
              </Button>

              <Button className="scrollArrow btn btn-outline-secondary float-end" type="button" id="scroll-right-button">
                <ArrowRightShort/>
              </Button>
            </Col>
          </Row>

          <Row className="mx-5 mt-4 mb-3 overflow-hidden" id="scrollContainer">
            {cardsData.map((card) =>
              <CardComponent
                key={card.id}
                id={card.id}
                imgSrc={card.imgSrc}
                imgAlt={card.imgAlt}
                platforms={card.platforms}
                hasPhone={card.hasPhone}
              />
            )}
          </Row>

          <Row className="mb-5 pb-5 pt-4">
            <Col className="me-5 d-flex align-items-start justify-content-center">
              <Button className="scrollCircle btn btn-outline-secondary float-end position-relative" type="button" id="scroll-left-circle">
                <CircleFill/>
              </Button>
              <Button className="scrollCircle btn btn-outline-secondary float-end" type="button" id="scroll-right-circle">
                <CircleFill/>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

const HiringSection = () => {
  return (
    <Row className="hiring m-0 px-lg-3">
      <Col>
        <Row className="m-5 justify-content-center">
          <Col md={5}>
            <Container className="p-4" style={{ marginLeft: '80px' }}>
              <h1 className="p-3">We’re hiring!</h1>
              <p>Team up with Riot to forge your path and craft unforgettable experiences for players</p>

              <Row className="justify-content-center">
                <Button className="hireBtnPrimary m-2 align-items-center btn btn-outline-secondary" type="button">
                  <span className="hiringNumber m-4">110</span><br/>
                  <span className="hiringDesc m-4">Open positions</span>
                </Button>
                <Button className="hireBtnPrimary m-2 align-items-center btn btn-outline-secondary" type="button">
                  <span className="hiringNumber m-4">24</span><br/>
                  <span className="hiringDesc m-4">Offices</span>
                </Button>
              </Row>
              <Row className="justify-content-center">
                <Button className="hireBtnPrimary m-3 exploreBtn btn btn-outline-secondary" type="button">
                  <span className="exploreText m-4">Explore Careers</span>
                </Button>
              </Row>
            </Container>
          </Col>
          <Col md={7}></Col>
        </Row>
      </Col>
    </Row>
  );
}

function FooterSection() {
  return (
    <footer className="px-5 py-2 pb-5">
        <Row className={"mx-5 mt-2"}>
          <Col style={{ padding: 0 }}>
            <Row>
              <Col xs={10} style={{ padding: 0 }}>
                <Navbar>
                  <Row>
                    <a className="riotButton d-flex align-items-center justify-content-center col btn btn-outline-secondary" href="#" id="firstBumpFooter" style={{ padding: 0 }} type="button">
                      <svg className="d-flex align-items-center" dataname="Layer 1" height="40" id="firstBumpFooterSVG" viewBox="0 0 185.47 163.51" width="38">
                        <path className="cls-1"
                              d="M98.77 0L0 45.74l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74 10.62 60.2 32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.38L98.77 0zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.21-.04.01zM176.17.71V0h3.64v.71zm1.41 3.94V.4h.81v4.25zm3 0V0h.8v4.65zm2.21 0L180.73 0h.83L183 3.41 184.44 0h.84l-2.06 4.65zm1.83 0V0h.81v4.65z"></path>
                      </svg>
                    </a>
                    <Col xs={11} className="d-flex align-items-center" style={{ padding: 0 }}>
                      <Nav>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">SECURITY</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">PRESS</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">LEGAL</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">LEADERSHIP</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">CANDIDATE PRIVACY</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">TERMS OF SERVICE</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">PRIVACY NOTICE</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">PLAYER SUPPORT</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">E-VERIFY</Nav.Link>
                        <Nav.Link className="px-3 py-2 d-flex justify-content-center align-items-center" href="#">ACCESSIBILITY</Nav.Link>
                      </Nav>
                    </Col>
                  </Row>
                </Navbar>
              </Col>
              <Col className="d-flex justify-content-end" style={{ padding: 0 }}>
                <Navbar style={{ padding: 0 }}>
                  <Nav className="d-flex justify-content-end">
                    <Nav.Link className="riotButton btn btn-outline-secondary" href="#" type="button">
                      <div className="d-flex justify-content-center align-items-center">
                        <Facebook/>
                      </div>
                    </Nav.Link>
                    <Nav.Link className="riotButton btn btn-outline-secondary" href="#" type="button">
                      <div className="d-flex justify-content-center align-items-center">
                        <Twitter/>
                      </div>
                    </Nav.Link>
                    <Nav.Link className="riotButton btn btn-outline-secondary" href="#" type="button">
                      <div className="d-flex justify-content-center align-items-center">
                        <Linkedin/>
                      </div>
                    </Nav.Link>
                    <Nav.Link className="riotButton btn btn-outline-secondary" href="#" type="button">
                      <div className="d-flex justify-content-center align-items-center">
                        <Youtube/>
                      </div>
                    </Nav.Link>
                  </Nav>
                </Navbar>
              </Col>

            </Row>
            <hr/>
            <div className="col-12 pt-3" style={{ position: 'relative' }}>
              <div className="col-5" id="copyright" style={{ position: 'absolute', bottom: '-28px', left: '15px' }}>
                              <span style={{ width: '2px', height: '20px', lineHeight: '20px' }}>
                                <svg fill="gray" height="22" viewBox="0 0 2 40"><path
                                  d="M1.7 4.2s.1-.1 0-.1c.1-.3 0-1.8 0-2.1.1-.5 0-.8.2-1.2 0 0-.2-.5-.2-.1 0-.2-.1 0-.2 0V.6C1.4.6.9.6.9.3.7.5.5.1.3.3.1.5.3 1.4.3 1.7c-.1.4-.1 1.2-.1 2-.1 3 0 6.1-.1 9.1 0 1 0 2-.1 3 0 1.6.2 3.2.2 4.8 0 2.7-.1 5.5 0 8.2 0 2 0 4 .1 5.9.1 1 .2 2.6 0 3.3-.1.2 0 .7 0 .9 0 .1.1.5.1.4.3 0 .2.6.4.7.4.3.5-.4.6-.7.3.3.2-.8.2-1v-8.6c0-3.5.1-7 .1-10.5v-4.5c0-.3-.1-1 .1-1.2V8.9c0-.8-.1-1.6 0-2.4 0-.5-.1-1.4.1-1.7-.2-.2-.2-.4-.2-.6M1.8.5s0 .1 0 0zM.3 38.3zM1.8.7c0-.1 0-.1 0 0z"></path></svg>
                              </span>
                <span> © 2023 Riot Games, Inc. All Rights Reserved. </span>
              </div>
              <div className="col-5" style={{ float: 'right' }}>
                <div>
                  <Button className="justify-content-center align-items-center col btn btn-outline-secondary" href="#" id="surfaceBtn" type="button">
                    <span id="surfaceBtnText">TO THE SURFACE</span>
                    <span id="surfaceBtnCaret"><CaretUpFill/></span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </footer>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container fluid className={"m-0 p-0"}>
    <TopNav/>
    <NunuInfo/>
    <NewsSection/>
    <GamesSection/>
    <EsportsSection/>
    <EntertainmentSection/>
    <RiotForgeSection/>
    <HiringSection/>
    <FooterSection/>
  </Container>
);
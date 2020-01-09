import React, { Component } from 'react';
import styled, { ThemeProvider, getSelector } from 'styled-components';

const theme = {
  font: 'sans-serif',
  fontSize: '1rem'
};
//Whole component Wrapper
const Wrapper = styled.div`
  background-color: #d5d8dc;
  width: 100%;
  height: 100%;
`;

//Whole component background
const Background = styled.div`
  flex-direction: column;
  border-radius: 5px;
  background-color: #ffffff;
  position: relative;
  height: 435px;
  width: 1500px;
`;

const SmartRank = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 50px;
  height: 50px;
  bottom: 0;
  position: absolute;
  &:hover {
    background-color: #3498db;
  }
`;
const Rankn = styled.span`
  font-size: 200%;
  padding-left: 30%;
  text-align: center;
  color: #ffffff;
`;
const Popup = styled.div`
  width: 400px;
  position: absolute;
  border-left: 20px solid white;
  border-top: 20px solid transparent;
  top: 100%;
  opacity: 1;
  display: flex;
  transition: width 0.5s, height 0.5s, opacity 0.5s 0.5s;
`;
const PopupClose = styled.div`
  width: 0px;
  height: 0;
  opacity: 0;
  transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
`;
const PopfadeOut = styled.div`
  opacity: 0;
  width: 0;
  display: none;
  height: 0;
  transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
`;

const PopupWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  flex-direction: column;
  display: flex;
`;
const PopupHeader = styled.div`
  flex: 1;
  margin: 2%;
  display: flex;
`;
const SmartH1 = styled.span`
  font-size: 120%;
`;
const PopupContentsPrice = styled.div`
  flex: 1;
  display: flex;
  padding: 2%;
  box-sizing: border-box;
`;
const Li = styled.li`
  display: flex;
  position: relative;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin: 1px;
`;
const PriceImgW = styled.div`
  box-sizing: border-box;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const PriceImg = styled.img`
  height: 35px;
  width: 35px;
`;
const PopupConTextW = styled.div`
  flex: 4;
  padding-top: 2%;
  padding-left: 2%;
`;
const PopupConText = styled.span`
  font-size: 100%;
  align-self: Right;
`;
const PopupConAve = styled.span`
  font-size: 110%;
  display: inline-block;
  color: #f1c40f;
`;
const PopupConGood = styled.span`
  font-size: 110%;
  display: inline-block;
  padding-left: 50%;
  color: green;
`;
const PopupConGreat = styled.span`
  font-size: 110%;
  display: inline-block;
  padding-left: 75%;
  color: #2e86c1;
`;
const PopContBarW = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;
const PopContBarWFunc = styled.div`
  display: flex;
  flex-direction: column;
`;
const PopContBarTop = styled.div`
  flex: 1;
`;
const PopContBarTopBack = styled.div`
  background-color: #aed6f1;
  width: 100%;
  height: 35%;
  margin-top: 5%;
`;
const PopContBarTopAve = styled.div`
  background-color: #2a7ce5;
  width: 33%;
  height: 100%;
`;
const PopContBarTopGood = styled.div`
  background-color: #2a7ce5;
  width: 66%;
  height: 100%;
`;
const PopContBarTopGreat = styled.div`
  background-color: #2a7ce5;
  width: 99%;
  height: 100%;
`;
const PopContBarBot = styled.div`
  flex: 1;
`;
const PopContPerks = styled.div`
  flex: 1;
  text-align: Right;
`;

//The dialog model DIVs
const ModelPopup = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
`;

const PopupHotelInfo = styled.div`
  max-height: 150px;
  max-width: 350px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 1%;
  position: relative;
`;
const ButtonCloseCon = styled.div`
  position: absolute;
  top: 0%;
  right: 1%;
`;
const ButtonClose = styled.button`
  font-size: 1em;
  flex: 1;
  border: none;
  background-color: #ffffff;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 12px;
    background-color: #5dade2;
  }
`;

//The Componets Under the DIVTOP
const Top = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  background-color: #3498db;
`;
const TopWrapper = styled.div`
  box-sizing: border-box;
  margin: 20px 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const TopH1 = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
`;
const TopH2 = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  padding-left: 20px;
`;
const H1txt = styled.div`
  box-sizing: border-box;
  flex: 18;
  align-items: center;
  justify-content: center;
`;
const H1img = styled.div`
  box-sizing: border-box;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Img = styled.img`
  max-height: 100%;
  max-width: 50%;
`;
const H1 = styled.h1`
  font-size: 2rem;
  font-family: ${props => props.theme.font};
  text-align: left-center;
  margin-top: 0;
  margin-bottom: 0;
  color: #ffffff;
`;

//THE MAIN IS Below the TOP and takes up all space under Top
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 5;
`;
//All styled components under Main1
const Main1 = styled.div`
  box-sizing: border-box;
  flex: 1;
  flex-direction: column;
  display: flex;
`;
const M1Img = styled.div`
  flex: 1;
`;
const Img2 = styled.img`
  height: 100%;
  width: 100%;
`;
const S1 = styled.span`
  font-size: 150%;
  font-family: ${props => props.theme.font};
  text-align: center;
  color: #ffffff;
`;

//All styled components under Main2
const Main2 = styled.div`
  box-sizing: border-box;
  flex: 1em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 12px;
  }
`;
const Main2Top = styled.div`
  flex: 3;

  margin: 1px;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-right: 10%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
`;

const Main2Bottom = styled.div`
  flex: 1;
  margin: 1px;
  display: flex;
`;
const Main2BotWrapper = styled.div`
  flex: 1;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 5%;
  align-items: center;
  display: flex;
`;
const Main2TopText = styled.div`
  flex: 2;
`;
const HotelName = styled.div``;
const Distance = styled.div``;
const M2BotWebsite = styled.div`
  flex: 1;
  align-items: center;
`;
const WebsiteName = styled.div``;
const WebsitePrice = styled.div``;
const DivImgR = styled.div`
  flex: 4;
`;
//Spans For MAIN2
const Dist = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: 'cambria';
  color: #808b96;
`;
const Distfrom = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
  color: #abb2b9;
`;
const HotelN = styled.span`
  font-size: 200%;
  font-family: 'Copperplate';
  text-align: left;
  flex-wrap: wrap;
`;
const WebName = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
`;
const WebPrice = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
`;

//All styled components under Main3
const Main3 = styled.div`
  box-sizing: border-box;
  flex: 1em;
  display: flex;
  flex-direction: column;
`;
const Main3Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Main3Top = styled.div`
  flex: 1;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-right: 10%;
  padding-left: 10%;
`;
const Main3Bot = styled.div`
  flex: 1;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-right: 10%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
`;
const M3Toptxt = styled.div``;
const M3Checkbox = styled.div`
  flex: 1;
  display: flex;
`;
const M3button = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #7dcdf4;
`;
const S1B = styled.button`
  font-family: 'Monospace';
  background-color: #317ce2;
  display: block;
  color: #ffffff;
  width: 100%;
  height: 100%;
  font-size: 290%;
`;
//Spans For MAin 3
const Main3txt = styled.span`
  font-size: 150%;
  font-family: 'Copperplate';
  text-align: left;
  flex-wrap: wrap;
  color: #abb2b9;
`;
const Main3txt2 = styled.span`
  font-size: 150%;
  font-family: 'Copperplate';
  text-align: left;
  flex-wrap: wrap;
  color: #e74c3c;
`;
//Check Box In Main3
const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 10px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #abb2b9;
`;
const Input1 = styled.input`
  -webkit-appearance: none;
  width: 10%;
  height: 30px;
  background: white;
  border-radius: 2px;
  border: 2px solid #abb2b9;
  margin-top: 5%;
`;

const styles = {
  transition: 'opacity 1s;'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smartHover: false,
      isOpen: false,
      opacitySmart: 0,
      opacityModel: 0
    };
    this.smartToggle = this.smartToggle.bind(this);
    this.smartOff = this.smartOff.bind(this);
    this.modelToggle = this.modelToggle.bind(this);
    this.modelOff = this.modelOff.bind(this);
    this.escapeClose = this.escapeClose.bind(this);
  }

  smartToggle() {
    this.setState({ smartHover: true });
    this.setState({ opacitySmart: 1 });
  }
  smartOff() {
    this.setState({ smartHover: false });
    this.setState({ opacitySmart: 0 });
  }
  modelToggle() {
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ opacityModel: 1 });
  }
  modelOff() {
    this.setState({ isOpen: false });
    this.setState({ opacityModel: 0 });
  }

  escapeClose(e) {
    if (e.keyCode === 27) {
      this.smartOff();
      this.modelOff();
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.escapeClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeClose);
  }

  render() {
    const Dropdown = [
      {
        icon: 'https://img.icons8.com/cotton/64/000000/us-dollar--v1.png',
        eName: 'Price',
        rating: 'Average'
      },
      {
        icon: 'https://img.icons8.com/wired/64/000000/point-objects.png',
        eName: 'Distance',
        rating: 'Good'
      },
      {
        icon: 'https://img.icons8.com/ios/50/000000/star.png',
        eName: 'Stars',
        rating: 'Great'
      },
      {
        icon: 'https://img.icons8.com/ios/50/000000/loyalty.png',
        eName: 'Loyalty',
        rating: 'Yes'
      },
      {
        icon: 'https://img.icons8.com/color/48/000000/walmart.png',
        eName: 'Walmart preferred',
        rating: 'Yes'
      }
    ];
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Background>
            <SmartRank
              onMouseOver={this.smartToggle}
              onMouseOut={this.smartOff}
            >
              <Rankn>1</Rankn>

              <Popup style={{ ...styles, opacity: this.state.opacitySmart }}>
                <PopupWrapper>
                  <PopupHeader>
                    <SmartH1>
                      <u>SmartRank: 1 out of 183 options</u>
                    </SmartH1>
                  </PopupHeader>
                  {Dropdown.map((model, index) => (
                    <div key={index}>
                      <Li>
                        <PopupContentsPrice>
                          <PriceImgW>
                            <PriceImg src={model.icon} />
                          </PriceImgW>
                          <PopupConTextW>
                            <PopupConText>{model.eName}</PopupConText>
                          </PopupConTextW>
                          <PopContBarW>
                            {(model.rating && model.rating === 'Yes' && (
                              <PopContPerks>
                                <PopupConText>
                                  <strong>Yes</strong>
                                </PopupConText>
                              </PopContPerks>
                            )) || (
                              <PopContBarWFunc>
                                <PopContBarTop>
                                  <PopContBarTopBack>
                                    {(model.rating &&
                                      model.rating === 'Average' && (
                                        <PopContBarTopAve></PopContBarTopAve>
                                      )) ||
                                      (model.rating &&
                                        model.rating === 'Good' && (
                                          <PopContBarTopGood></PopContBarTopGood>
                                        )) ||
                                      (model.rating &&
                                        model.rating === 'Great' && (
                                          <PopContBarTopGreat></PopContBarTopGreat>
                                        ))}
                                  </PopContBarTopBack>
                                </PopContBarTop>
                                <PopContBarBot>
                                  {(model.rating &&
                                    model.rating === 'Average' && (
                                      <PopupConAve>Average</PopupConAve>
                                    )) ||
                                    (model.rating &&
                                      model.rating === 'Good' && (
                                        <PopupConGood>Good</PopupConGood>
                                      )) ||
                                    (model.rating &&
                                      model.rating === 'Great' && (
                                        <PopupConGreat>Great</PopupConGreat>
                                      ))}
                                </PopContBarBot>
                              </PopContBarWFunc>
                            )}
                          </PopContBarW>
                        </PopupContentsPrice>
                      </Li>
                    </div>
                  ))}
                </PopupWrapper>
              </Popup>
            </SmartRank>

            <Top>
              <TopWrapper>
                <TopH1>
                  <H1img>
                    <Img src="https://www.iconsdb.com/icons/preview/white/star-xxl.png" />
                  </H1img>
                  <H1txt>
                    <H1>Smartest Choice</H1>
                  </H1txt>
                </TopH1>
                <TopH2>
                  <S1>Hover over the SmartRank to see why</S1>
                </TopH2>
              </TopWrapper>
            </Top>
            <Main>
              <Main1>
                <M1Img>
                  <Img2 src="https://r-cf.bstatic.com/images/hotel/max1024x768/541/54199027.jpg" />
                </M1Img>
              </Main1>
              <Main2>
                <Main2Top onClick={this.modelToggle} data-transition="fade">
                  <Main2TopText>
                    <HotelName>
                      <HotelN>Hotel Denver Glenwood Springs</HotelN>
                    </HotelName>
                    <Distance>
                      <Dist>1.2 Miles</Dist>
                      <Distfrom> from Cavern Adventure Park</Distfrom>
                    </Distance>
                  </Main2TopText>
                  <DivImgR>
                    <Img src="https://images.squarespace-cdn.com/content/v1/5854861be6f2e12337d023f3/1500174267031-P8B6COA5H5GKN4ZEQGN8/ke17ZwdGBToddI8pDm48kJavBWPA1e4jLbTMWk7i2fgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcZ_rLReN0qaNtaKMgUquzWx72PBOwAKmo94vXCQj9zMKGf-Rd4saLfAsce8h76zY3/image-asset.png?format=1500w" />
                  </DivImgR>
                </Main2Top>
                <Main2Bottom>
                  <Main2BotWrapper>
                    <M2BotWebsite>
                      <WebsiteName>
                        <WebName>KAYAK</WebName>
                      </WebsiteName>
                      <WebsitePrice>
                        <WebPrice>$289</WebPrice>
                      </WebsitePrice>
                    </M2BotWebsite>
                    <M2BotWebsite>
                      <WebsiteName>
                        <WebName>Hotels.com</WebName>
                      </WebsiteName>
                      <WebsitePrice>
                        <WebPrice>$289</WebPrice>
                      </WebsitePrice>
                    </M2BotWebsite>
                    <M2BotWebsite>
                      <WebsiteName>
                        <WebName>Booking.com</WebName>
                      </WebsiteName>
                      <WebsitePrice>
                        <WebPrice>$329</WebPrice>
                      </WebsitePrice>
                    </M2BotWebsite>
                    <M2BotWebsite>
                      <WebsiteName>
                        <WebName>7 more Sites</WebName>
                      </WebsiteName>
                      <WebsitePrice>
                        <WebPrice>$329</WebPrice>
                      </WebsitePrice>
                    </M2BotWebsite>
                  </Main2BotWrapper>
                </Main2Bottom>
              </Main2>
              <Main3>
                <Main3Wrapper>
                  <Main3Top>
                    <M3Toptxt>
                      <Main3txt>Refundable Rates from</Main3txt>
                    </M3Toptxt>
                    <M3Toptxt>
                      <Main3txt2>$345</Main3txt2>
                    </M3Toptxt>
                    <M3Toptxt>
                      <HotelN>$345/night</HotelN>
                    </M3Toptxt>
                  </Main3Top>
                  <Main3Bot>
                    <M3Checkbox>
                      <Input1 type="checkbox" />
                      <Label>
                        Book Non-Refundable to save additional 50 USD
                      </Label>
                    </M3Checkbox>
                    <M3button>
                      <S1B>CHOOSE ROOM</S1B>
                    </M3button>
                  </Main3Bot>
                </Main3Wrapper>
              </Main3>
            </Main>
          </Background>

          <ModelPopup
            style={{
              ...styles,
              opacity: this.state.opacityModel,
              display: this.state.isOpen ? 'flex' : 'none'
            }}
          >
            <PopupHotelInfo>
              <ButtonCloseCon>
                <ButtonClose onClick={this.modelOff}>x</ButtonClose>
              </ButtonCloseCon>
              <Main2TopText>
                <HotelName>
                  <HotelN>Hotel Denver Glenwood Springs</HotelN>
                </HotelName>
                <Distance>
                  <Dist>1.2 Miles</Dist>
                  <Distfrom> from Cavern Adventure Park</Distfrom>
                </Distance>
              </Main2TopText>
              <DivImgR>
                <Img src="https://images.squarespace-cdn.com/content/v1/5854861be6f2e12337d023f3/1500174267031-P8B6COA5H5GKN4ZEQGN8/ke17ZwdGBToddI8pDm48kJavBWPA1e4jLbTMWk7i2fgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcZ_rLReN0qaNtaKMgUquzWx72PBOwAKmo94vXCQj9zMKGf-Rd4saLfAsce8h76zY3/image-asset.png?format=1500w" />
              </DivImgR>
            </PopupHotelInfo>
          </ModelPopup>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;

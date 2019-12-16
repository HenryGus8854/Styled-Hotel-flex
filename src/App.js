import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';

const theme = {
  font: 'sans-serif',
  fontSize: '1rem'
};

const DivW = styled.div`
  background-color: #d5d8dc;
  flex: 1;
`;
const Div1 = styled.div`
  border-color: #000000;
  height: 500px;
  width: 1500px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #ffffff;
`;

const DivM = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 5;
`;

//BIG CONTAINERS
const DivC = styled.div`
  box-sizing: border-box;
  flex: 1em;
  flex-direction: column;
  display: flex;
`;

const Div2 = styled.div`
  box-sizing: border-box;
  flex: 1em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  margin: 2px;
`;
const Div3 = styled.div`
  box-sizing: border-box;
  flex: 1em;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 2px;
`;

//Header Divs
const DivH = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  background-color: #3498db;
`;

const DivH1 = styled.div`
  box-sizing: border-box;
  margin: 20px 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DivH2 = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
`;

const DivH22 = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  padding-left: 20px;
`;

const DivHh = styled.div`
  box-sizing: border-box;
  flex: 18;
  align-items: center;
  justify-content: center;
`;

const DivHi = styled.div`
  box-sizing: border-box;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;

//Headers
const H1 = styled.h1`
  font-size: 2rem;
  font-family: ${props => props.theme.font};
  text-align: left-center;
  margin-top: 0;
  margin-bottom: 0;
  color: #ffffff;
`;

//TEXT CONTAINERS
const DivCB = styled.div`
  flex: 1;
  border: 1px solid black;
  margin: 1px;
`;

const DivPFOBA = styled.div`
  flex: 1;
  border: 1px solid black;
  margin: 1px;
  display: flex;
`;

const DivHNA_RP = styled.div`
  flex: 3;
  border: 1px solid black;
  margin: 1px;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-right: 10%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
`;
const DivHNA_R = styled.div`
  flex: 2;
`;

const DivHNA = styled.div``;
const Div_R = styled.div``;

const DivOBIO = styled.div`
  flex: 1;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 5%;
  align-items: center;
  display: flex;
`;

const DivOBI = styled.div`
  flex: 1;
  align-items: center;
`;
const DivOBI_N = styled.div``;
const DivOBI_P = styled.div``;

const Div3CM = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Div3C1 = styled.div`
  flex: 1;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-right: 10%;
  padding-left: 10%;
`;
const Div3C2 = styled.div`
  flex: 1;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-right: 10%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
`;
const Div3C1H = styled.div``;

const Div3C2H = styled.div`
  flex: 1;
  display: flex;
`;

const Div3C2HB = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #7dcdf4;
`;

//SPANS
const S1 = styled.span`
  font-size: 150%;
  font-family: ${props => props.theme.font};
  text-align: center;
  color: #ffffff;
`;

const S1B = styled.button`
  font-size: 150%;
  font-family: 'Monospace';
  background-color: #317ce2;
  display: block;
  color: #ffffff;
  width: 100%;
  height: 100%;
  font-size: 290%;
`;

const Pc = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
`;
const SDFO = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: 'cambria';
  color: #808b96;
`;
const SDFO2 = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
  color: #abb2b9;
`;

const SHNAA = styled.span`
  font-size: 200%;
  font-family: 'Copperplate';
  text-align: left;
  flex-wrap: wrap;
`;

const SOBN = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
`;
const SOBP = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
`;

const SHNAA3 = styled.span`
  font-size: 150%;
  font-family: 'Copperplate';
  text-align: left;
  flex-wrap: wrap;
  color: #abb2b9;
`;
const SHNAA4 = styled.span`
  font-size: 150%;
  font-family: 'Copperplate';
  text-align: left;
  flex-wrap: wrap;
  color: #e74c3c;
`;

//IMAGES
const DivImg = styled.div`
  flex: 1;
`;
const DivImgR = styled.div`
  flex: 4;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 50%;
`;

const Img2 = styled.img`
  height: 100%;
  width: 100%;
`;

//Check Box
const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 5px;
  margin-bottom: 12px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #abb2b9;
`;

const Input1 = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const SVG = styled.span`
  stroke: $brand;
  stroke-width: 2px;
  height: 0; //Firefox fix
  width: 24px;
  position: absolute;
  left: -48px;
  top: -4px;
  stroke-dasharray: 33;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <DivW>
          <Div1>
            <DivH>
              <DivH1>
                <DivH2>
                  <DivHi>
                    <Img src="https://www.iconsdb.com/icons/preview/white/star-xxl.png" />
                  </DivHi>
                  <DivHh>
                    <H1>Smartest Choice</H1>
                  </DivHh>
                </DivH2>
                <DivH22>
                  <S1>Hover over the SmartRank to see why</S1>
                </DivH22>
              </DivH1>
            </DivH>
            <DivM>
              <DivC>
                <DivImg>
                  <Img2 src="https://r-cf.bstatic.com/images/hotel/max1024x768/541/54199027.jpg" />
                </DivImg>
              </DivC>
              <Div2>
                <DivHNA_RP>
                  <DivHNA_R>
                    <DivHNA>
                      <SHNAA>Hotel Denver Glenwood Springs</SHNAA>
                    </DivHNA>
                    <Div_R>
                      <SDFO>1.2 Miles</SDFO>
                      <SDFO2> from Cavern Adventure Park</SDFO2>
                    </Div_R>
                  </DivHNA_R>
                  <DivImgR>
                    <Img src="https://images.squarespace-cdn.com/content/v1/5854861be6f2e12337d023f3/1500174267031-P8B6COA5H5GKN4ZEQGN8/ke17ZwdGBToddI8pDm48kJavBWPA1e4jLbTMWk7i2fgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcZ_rLReN0qaNtaKMgUquzWx72PBOwAKmo94vXCQj9zMKGf-Rd4saLfAsce8h76zY3/image-asset.png?format=1500w" />
                  </DivImgR>
                </DivHNA_RP>
                <DivPFOBA>
                  <DivOBIO>
                    <DivOBI>
                      <DivOBI_N>
                        <SOBN>KAYAK</SOBN>
                      </DivOBI_N>
                      <DivOBI_P>
                        <SOBP>$289</SOBP>
                      </DivOBI_P>
                    </DivOBI>
                    <DivOBI>
                      <DivOBI_N>
                        <SOBN>Hotels.com</SOBN>
                      </DivOBI_N>
                      <DivOBI_P>
                        <SOBP>$289</SOBP>
                      </DivOBI_P>
                    </DivOBI>
                    <DivOBI>
                      <DivOBI_N>
                        <SOBN>Booking.com</SOBN>
                      </DivOBI_N>
                      <DivOBI_P>
                        <SOBP>$329</SOBP>
                      </DivOBI_P>
                    </DivOBI>
                    <DivOBI>
                      <DivOBI_N>
                        <SOBN>7 more Sites</SOBN>
                      </DivOBI_N>
                      <DivOBI_P>
                        <SOBP>$329</SOBP>
                      </DivOBI_P>
                    </DivOBI>
                  </DivOBIO>
                </DivPFOBA>
              </Div2>
              <Div3>
                <Div3CM>
                  <Div3C1>
                    <Div3C1H>
                      <SHNAA3>Refundable Rates from</SHNAA3>
                    </Div3C1H>
                    <Div3C1H>
                      <SHNAA4>$345</SHNAA4>
                    </Div3C1H>
                    <Div3C1H>
                      <SHNAA>$345/night</SHNAA>
                    </Div3C1H>
                  </Div3C1>
                  <Div3C2>
                    <Div3C2H>
                      <Input1 type="checkbox" />
                      <Label>
                        <SVG>
                          <use href="#checkmark" />
                        </SVG>
                        Book Non-Refundable to save additional 50 USD
                      </Label>
                    </Div3C2H>
                    <Div3C2HB>
                      <S1B>CHOOSE ROOM</S1B>
                    </Div3C2HB>
                  </Div3C2>
                </Div3CM>
              </Div3>
            </DivM>
          </Div1>
        </DivW>
      </ThemeProvider>
    );
  }
}

export default App;

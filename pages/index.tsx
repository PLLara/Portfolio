/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { CColumn, Column } from "../src/commons/flexible/1_Column";
import { Flex } from "../src/commons/flexible/0_Flex";
import { CRow, Row } from "../src/commons/flexible/1_Row";
import { FullViewHeight } from "../src/commons/full_sized/FullViewHeight";
import { Fieldset, Legend } from "../src/commons/styled/fieldset";
import { Absolute, Relative } from "../src/commons/flexible/2_zIndex";
import { Lp } from "../src/commons/styled/Lp";
import { CSSProperties, useState } from "react";
import { Popover } from "react-tiny-popover";
import styles from "../styles/src/Index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <FullViewHeight style={{ padding: "1rem" }}>
        <CRow>
          <CColumn>
            <h1>Portfólio do Lara</h1>
            <Lp>
              Opa! Tudo bom? Meu nome é Pedro Lucas de Oliveira Lara, e eu sou
              um desenvolvedor FullStack.
            </Lp>
            <p>
              Bem-vindo{"(a)"} ao meu portfólio pessoal ;{")"}
            </p>
          </CColumn>
        </CRow>

        <Fieldset>
          <Legend>
            <h2>Projetos</h2>
          </Legend>
          
          <CColumn>
            Obs: Nenhum tutorial / curso / bootcamp etc... foi utilizado durante
            a produção destes softwares, todos foram feitos indivualmente por
            mim.
          </CColumn>

          <CRow>
            <Fieldset>
              <Legend properties={{ align: "center" }}>
                <h3>Clone do Whatsapp</h3>
              </Legend>
              <CRow>
                <Flex>
                  <div></div>
                </Flex>
                <Flex
                  style={{
                    flex: 3,
                  }}
                >
                  <div></div>
                  <Column>
                    <h4>Tecnologias utilizadas:</h4>
                    <Fieldset>
                      <Legend>Front</Legend>

                      <Row>
                        <IconPopOver iconName={"Dart"} />
                        <IconPopOver iconName={"Flutter"} />
                      </Row>
                    </Fieldset>

                    <Fieldset>
                      <Legend>Back</Legend>
                      <Row>
                        <IconPopOver iconName={"Nodejs"} />
                        <IconPopOver iconName={"Express"} />
                        <IconPopOver iconName={"Firebase"} />
                      </Row>
                    </Fieldset>

                    <Fieldset>
                      <Legend>Misc</Legend>
                      <Row>
                        <IconPopOver iconName={"Python"} />
                      </Row>
                    </Fieldset>
                    <Lp>passe o mouse por cima :)</Lp>

                    <h4>Descrição:</h4>
                    <Lp>
                      Primeiro grande projeto em flutter desenvolvido 100% por
                      mim. <br />
                      Firebase e Flutter foram as principais tecnologias com o
                      auxílio de python para webscraping envolvido na criação
                      deu um widget envolvido na seleção do países
                    </Lp>
                  </Column>
                </Flex>
                <Flex
                  style={{
                    flex: 6,
                  }}
                >
                  <div>
                    <CColumn>
                      <Relative
                        style={{
                          height: "90vh",
                        }}
                      >
                        <Absolute zIndex={1}>
                          <img
                            style={{
                              margin: "auto",
                              left: 0,
                              right: 0,
                              textAlign: "center",
                              height: "90vh",
                              aspectRatio: "280/600",
                            }}
                            src="./images/mockup_phone.png"
                            alt=""
                          />
                        </Absolute>
                        <Absolute zIndex={2}>
                          <iframe
                            style={{
                              margin: "auto",
                              left: 0,
                              textAlign: "center",
                              height: "90vh",
                              aspectRatio: "280/600",
                              borderRadius: "4rem",
                              paddingTop: "20px",
                              paddingRight: "9px",
                              paddingLeft: "9px",
                              paddingBottom: "15px",
                            }}
                            src={"https://whatsappi-2.web.app/#/"}
                          ></iframe>
                        </Absolute>
                      </Relative>
                    </CColumn>
                  </div>
                </Flex>
              </CRow>
            </Fieldset>
          </CRow>
        </Fieldset>
      </FullViewHeight>
    </>
  );
};

export default Home;

function IconPopOver({ iconName }: { iconName: String }) {
  return (
    <div
      style={{
        paddingRight: "0.5rem",
      }}
    >
      <MyPopOver popover={<div>{iconName}</div>}>
        <img
          src={`https://skillicons.dev/icons?i=` + iconName.toLowerCase()}
          alt=""
        />
      </MyPopOver>
    </div>
  );
}

function MyPopOver({
  children,
  style,
  popover,
}: {
  children?: React.ReactNode;
  style?: CSSProperties | undefined;
  popover: React.ReactElement;
}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Relative>
      {" "}
      <Popover
        isOpen={isPopoverOpen}
        positions={["bottom"]} // preferred positions by priority
        content={
          <div
            className={styles.popover}
            style={{
              backgroundColor: "#000000C6",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              maxWidth: "250px",
              paddingRight: "1rem",
              border: "1px solid grey",
              borderRadius: "8px",
              backdropFilter: "blur(2px)",
            }}
          >
            <h2
              style={{
                textShadow:
                  "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000",
              }}
            >
              {popover}
            </h2>
            <Lp
              style={{
                textShadow:
                  "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              architecto, similique, illo quaerat blanditiis atque voluptas at
              soluta dolorum dicta, minima tempora eius dignissimos fugit iusto
              maiores labore doloremque? Asperiores?
            </Lp>
          </div>
        }
      >
        <div
          className={styles.popoverContent}
          onMouseEnter={() => setIsPopoverOpen(true)}
          onMouseLeave={() => setIsPopoverOpen(false)}
        >
          {children}
        </div>
      </Popover>
    </Relative>
  );
}

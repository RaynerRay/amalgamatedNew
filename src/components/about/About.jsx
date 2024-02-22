import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Story" subtitle="" />
            <h2 className="font-bold mb-2"> Amalgamated Fresh Solutions</h2>
            <p>
              Amalgamated Fresh Solutions (AFS) Private Limited is a company
              targeted at meeting the nutritional needs of our growing
              Zimbabwean population, starting off in Mutare, as well as
              addressing the scarcity of horticulture produce as well as reduce
              post-harvest wastage through value addition. Our commitment is to
              increase not only our farm production capacity and market linkage
              as a business, but also that of other farmers in my community,
              thereby increasing permanent employment opportunities for the
              youth and women in Mutare.{" "}
            </p>
            <h2 className="font-bold" mb-2>Mbeu Platform</h2>
            <p>
              MBEU is a platform connecting and empowering under- and
              un-utilized farms and plots throughout Zimbabwe. It is a
              partnership between Young Entrepreneurs Trust Zimbabwe (YETZ) and
              Amalgamated Fresh Solutions Private Limited (AFS). The partnership
              has adapted elements of crowdsourcing to show entrepreneurs that
              they too can have a positive impact on farmer livelihood and
              benefit from such an arrangement. The platform brings together the
              most important stakeholders: investors (individual and
              institutional), farmers and supervisors, landowners, seed
              distributors, and crop buyers. Focus is in improving the potato
              value chain
            </p>
            <p>
              The platform was launched with the philosophy that a fun way to
              match crowdfunding for agriculture (specifically small-scale
              farmers), with farmer livelihood could alleviate many of the most
              important pain points for farmers and landowners at the same time,
              enhancing the bonds between them. It is a strong demonstration
              that by building social and human capital with an aim toward
              natural capital, it can bring financial returns as well. YETZ and
              AFS seeks to improve smallholder production, the governance of
              community resources and access finance and markets, strengthening
              and expanding on-farm and off-farm livelihood opportunities in
              order for household to be less vulnerable to recurrent crisis as
              assets are better utilized and incomes increased. The project
              seeks to empower 10,000 smallholder farmers by December 2026
            </p>
            <p>
              Adding on, the MBEU is also a platform for those who hold a
              certificate in Agriculture or currently studying with a tertiary
              or vocational institution and interested in engaging with our
              farmers, we offer an opportunity to join our task-force. MBEU is
              here for your convenience. Our target is to attach two workers to
              each plot, therefore by December 2026 we will have employed 40,000
              agriculture graduates.{" "}
            </p>
            <h3 className="font-bold mb-2">Objectives</h3>
            <ul>
              <li>
                To improve access to finance and increase saving capacity of
                smallholder farmers particularly youths and women
              </li>
              <li>
                To improve access to markets through enhancing the capacity of
                farmers to engage with market players
              </li>
              <li>
                To reduce post-harvest losses through developing capacity of
                farmers in post-harvest handling
              </li>
            </ul>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

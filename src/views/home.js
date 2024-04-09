import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import PlansContainer from '../components/plans-container'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  The fastest way to join WhatsAppX
                </h1>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </header>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text">Get started</span>
                </div>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image1 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image2 avatar"
                />
              </div>
              <label className="home-caption1">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="/SectionImages/heroimage-1500h.png"
              className="home-image4"
            />
          </div>
          <div className="home-image5">
            <img
              alt="image"
              src="/SectionImages/heroimage-1500h.png"
              className="home-image6"
            />
          </div>
        </div>
      </section>
      <section className="home-section1">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left side"></div>
        </div>
      </section>
      <section className="home-section2">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left1 side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header1">
            <header className="home-left2">
              <span className="section-head">Paru Voprosikov</span>
              <h2 className="section-heading home-heading1">
                Start small, think big
              </h2>
            </header>
            <div className="home-right">
              <p className="home-paragraph section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </header>
          <PlansContainer></PlansContainer>
        </main>
        <div className="home-help">
          <div className="home-contact-support">
            <p className="home-text01">Davayte sdelayem zayvku -&gt;</p>
          </div>
        </div>
      </section>
      <div className="home-content1">
        <div className="home-container1">
          <main className="home-main-content">
            <section className="home-copyright"></section>
          </main>
        </div>
        <img
          src="/external/pngtree-whatsapp-mobile-software-icon-png-image_6315991-200h-300h.png"
          alt="image"
          className="home-image7"
        />
        <main className="home-subscribe">
          <main className="home-main1">
            <div className="home-input-field">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-buy button">
                <span className="home-text02">-&gt;</span>
                <span className="home-text03">
                  <span>Subscribe now</span>
                  <br></br>
                </span>
              </div>
            </div>
          </main>
          <main className="home-main2">
            <h1 className="home-heading2">Subscribe to our newsletter</h1>
            <div className="home-input-field1">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput1 input"
              />
              <div className="home-buy1 button">
                <span className="home-text06">-&gt;</span>
                <span className="home-text07">
                  <span>Subscribe now</span>
                  <br></br>
                </span>
              </div>
            </div>
          </main>
          <main className="home-main3">
            <h1 className="home-heading3">Subscribe to our newsletter</h1>
            <div className="home-input-field2">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput2 input"
              />
              <div className="home-buy2 button">
                <span className="home-text10">-&gt;</span>
                <span className="home-text11">
                  <span>Subscribe now</span>
                  <br></br>
                </span>
              </div>
            </div>
          </main>
          <main className="home-main4">
            <h1 className="home-heading4">Subscribe to our newsletter</h1>
            <div className="home-input-field3">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput3 input"
              />
              <div className="home-buy3 button">
                <span className="home-text14">-&gt;</span>
                <span className="home-text15">
                  <span>Subscribe now</span>
                  <br></br>
                </span>
              </div>
            </div>
          </main>
        </main>
        <section className="home-copyright1">
          <span className="home-text18">
            © 2022 latitude. All Rights Reserved.
          </span>
        </section>
        <main className="home-main5"></main>
      </div>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home

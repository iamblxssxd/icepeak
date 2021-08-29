import React from "react"
import { Link } from "gatsby"

// styled components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
} from "../../styles/homeStyles"

const HomeFeatured = () => {
  return (
    <HomeFeaturedSection>
      <Container>
        <Link>
          <FeaturedContent>
            <Flex spaceBetween>
              <h3>Featured</h3>
              <div className="meta">
                <h4>Death No More</h4>
                <h4>2018</h4>
              </div>
            </Flex>
            <h2 className="featured-title">
              DEATH <br /> NO MORE
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              muted
              src={require("../../assets/video/death-no-more.mp4")}
            ></video>
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button>
              <span>More Videos</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured

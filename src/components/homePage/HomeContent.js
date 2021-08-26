import React from "react"

import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/homeStyles"

const HomeContent = () => {
  return (
    <HomeContentSection>
      <Container>
        <Content>
          IC3PEAK is a Russian electronic music band created by Anastasia
          Kreslina and Nikolay Kostilev. They achieved worldwide notoriety
          because of the political undertones in their music criticizing the
          Russian government, which lead to attempts of censorship of their
          music in 2019. Their effects in mainstream media led to outpouring
          support throughout the West, and in Russia.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent

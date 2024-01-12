import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            They say home is where the heart is. <br /> <br />

            Taking this further, we say the heart is home wherein all your furniture is made to cherish.

            We; at Urban Woods, have been at the forefront of the industry creating beautiful spaces for you within your homes and offices since 1985. <br />
            With a successful start by importing our furniture we came up with our own factories that manufactures Sofas, Beds and Chairs. <br /> <br /> We are humbled to have touched the lives of millions of people with our range of world class home and office furniture, innovative laminates, sturdy designer doors, exquisite veneers and top-grade plywood.

            From being the pioneers in veneer business to being the leading furniture company and a lifestyle brand we have come a long way since then and the journey, so far, has been an enriching and memorable one.

          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage

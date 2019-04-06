import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.section`

`

class Story extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {    
    return (
      <Wrap>
        <h2>Story</h2>

        <p>At Lunarworks, we succeed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Urna nec tincidunt praesent semper. Facilisi cras fermentum odio eu feugiat. Sagittis eu volutpat odio facilisis mauris sit amet massa. Blandit aliquam etiam erat velit.</p>
        <p>Arcu non sodales neque sodales ut etiam sit. Ac felis donec et odio pellentesque. Libero id faucibus nisl tincidunt eget nullam non. Integer malesuada nunc vel risus commodo viverra maecenas. In metus vulputate eu scelerisque. Dignissim suspendisse in est ante in. Vitae et leo duis ut diam quam.</p>

      </Wrap>
    )
  }

}
export default Story

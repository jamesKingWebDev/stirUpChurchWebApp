import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  a {
    display: block;
    border-radius: 50%;
    transition: .2s;
  }
  .icon {
    color: var(--gray-8);
    transition: color .2s;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

function Social(props) {
  return (
    <Wrap>
      <a href="https://twitter.com/csspurge" target="_blank">
        <svg className="icon" viewBox="0 0 32 32">
          <title>Share on Twitter</title>
          <g>
            <path d="M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3 c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5 c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z"></path>
          </g>
        </svg>
      </a>
    </Wrap>
  );
}

export default Social;

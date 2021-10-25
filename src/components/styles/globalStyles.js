import { createGlobalStyle } from 'styled-components'
import mq from './mq';


export default createGlobalStyle`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  //Typography
    h1{
        font-size: 2.2rem;
        ${mq.sm}{
            font-size: 2.4rem;
        }
        ${mq.md}{
            font-size: 3rem;
        }
        ${mq.lg}{
            font-size: 4rem;
        }
        ${mq.xl}{
            font-size: 5rem;
        }
    }

 h2{
     font-size: 2rem;
    ${mq.sm}{
        font-size: 2.2rem;
    }
    ${mq.md}{
        font-size: 2.5rem;
    }
    ${mq.lg}{
        font-size: 3rem;
    }
    ${mq.xl}{
        font-size: 3rem;
    }  
 }

 h3{
    font-size: 1.9rem;
    ${mq.sm}{
        font-size: 2rem;
    }
    ${mq.md}{
        font-size: 2.2rem;
    }
    ${mq.lg}{
        font-size: 2.5rem;
    }
    ${mq.xl}{
        font-size: 2.5rem;
    }
 }

  h4{
    font-size: 1.8rem;
    ${mq.sm}{
        font-size: 1.9rem;
    }
    ${mq.md}{
        font-size: 2rem;
    }
    ${mq.lg}{
        font-size: 2.2rem;
    }
    ${mq.xl}{
        font-size: 2.2rem;
    }

 }

  h5{
        font-size: 1.7rem;
    ${mq.sm}{
        font-size: 1.8rem;
    }
    ${mq.md}{
        font-size: 1.9rem;
    }
    ${mq.lg}{
        font-size: 2rem;
    }
    ${mq.xl}{
        font-size: 2rem;
    }   
    }

    h6{
        font-size: 1.6rem;
    ${mq.sm}{
        font-size: 1.7rem;
    }
    ${mq.md}{
        font-size: 1.8rem;
    }
    ${mq.lg}{
        font-size: 1.8rem;
    }
    ${mq.xl}{
        font-size: 1.8rem;
    }
    }


  li {
    list-style: none;
    margin: 0;
  }

`;
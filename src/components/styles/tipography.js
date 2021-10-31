import styled from "styled-components";
import mq from "./mq";

export const h1 = `
  font-size: 2.9rem;
  ${mq.sm}{
    font-size: 3.2rem;
  }
  ${mq.md}{
    font-size: 3.4rem;
  }
  ${mq.lg}{
    font-size: 3.6rem;
  }
  ${mq.xl}{
    font-size: 4rem;
  }
`;

export const h2 = `

  font-size: 2rem;
 ${mq.sm}{
     font-size: 2.2rem;
 }
 ${mq.md}{
     font-size: 2.5rem;
 }
 ${mq.lg}{
     font-size: 2.7rem;
 }
 ${mq.xl}{
     font-size: 2.7rem;
 }  

`;

export const h5 = `
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
`;

export const h6 = `
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

`;

export default { h1, h2, h5, h6 };

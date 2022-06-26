const easeOut = 'easeOut';
const easeIn = 'easeIn';

export const rotateDown = {
  initial: {
    transform: 'translateY(100px) rotate(-10deg)',
    opacity: 0
  },
  animate: {
    transform: 'translateY(0px) rotate(0deg)',
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 1,
      ease: 'backOut'
    }
  },
  exit: {
    transform: 'translateY(100px) rotate(10deg)',
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'backIn'
    }
  }
};

export const fadeDown = {
  initial: {
    transform: 'translateY(100px)',
    opacity: 0
  },
  animate: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 1,
      ease: 'backOut'
    }
  },
  exit: {
    transform: 'translateY(100px)',
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'backIn'
    }
  }
};

export const fadeUp = {
  initial: {
    transform: 'translateY(-100px)',
    opacity: 0
  },
  animate: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 1,
      ease: 'backOut'
    }
  },
  exit: {
    transform: 'translateY(-100px)',
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'backIn'
    }
  }
};

export const fade = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'backOut'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.25,
      duration: 1,
      ease: 'backIn'
    }
  }
};

export const slideLeft = {
  initial: {
    transform: 'translateX(-100px)',
    opacity: 0
  },
  animate: {
    transform: 'translateX(0px)',
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 1,
      ease: easeOut
    }
  },
  exit: {
    transform: 'translateX(-100px)',
    opacity: 0,
    transition: {
      duration: 1,
      ease: easeIn
    }
  }
};

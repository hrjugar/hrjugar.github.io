import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavLinks() {  
  const [isResumeLinkHovered, setIsResumeLinkHovered] = useState(false);

  return (
    <div className="nav-links">
      <a href="https://github.com/hrjugar" target="_blank" className="icon-link">
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 80 80" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M40 3.18939C19.1581 3.18939 2.25751 20.0863 2.25751 40.9319C2.25751 57.6081 13.0719 71.755 28.0681 76.7463C29.9538 77.0963 30.6463 75.9275 30.6463 74.9306C30.6463 74.0306 30.6113 71.0575 30.595 67.9038C20.095 70.1869 17.8794 63.4507 17.8794 63.4507C16.1625 59.0882 13.6888 57.9281 13.6888 57.9281C10.2638 55.5856 13.9469 55.6344 13.9469 55.6344C17.7363 55.9 19.7325 59.5238 19.7325 59.5238C23.0988 65.2925 28.5619 63.625 30.7156 62.6613C31.0544 60.2219 32.0325 58.5563 33.1119 57.6138C24.7288 56.6606 15.9156 53.4238 15.9156 38.9619C15.9156 34.8413 17.3906 31.4744 19.805 28.8306C19.4125 27.8806 18.1206 24.0419 20.17 18.8431C20.17 18.8431 23.3388 17.8288 30.5513 22.7119C33.5625 21.875 36.7919 21.4544 40 21.44C43.2063 21.4544 46.4375 21.8738 49.4544 22.7106C56.6581 17.8275 59.8231 18.8419 59.8231 18.8419C61.8775 24.04 60.5856 27.8794 60.1938 28.8294C62.6138 31.4731 64.0781 34.84 64.0781 38.9606C64.0781 53.4569 55.2488 56.6482 46.8444 57.5832C48.1988 58.7544 49.405 61.0519 49.405 64.5725C49.405 69.6225 49.3613 73.6869 49.3613 74.93C49.3613 75.9344 50.0413 77.1113 51.9538 76.7407C66.9413 71.7444 77.7431 57.6019 77.7431 40.9319C77.7425 20.0875 60.8438 3.18939 40 3.18939Z"
          />
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/hernanjugar/" target="_blank" className="icon-link">
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 80 80" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M72.5 1.87498H7.5C6.0252 1.85997 4.60467 2.43064 3.55012 3.46175C2.49557 4.49287 1.89313 5.90021 1.875 7.37498V72.6375C1.89641 74.1101 2.50029 75.5142 3.55448 76.5426C4.60867 77.5711 6.02733 78.14 7.5 78.125H72.5C73.9749 78.1367 75.3945 77.5641 76.4485 76.5323C77.5025 75.5006 78.1052 74.0935 78.125 72.6187V7.35623C78.0987 5.88579 77.4931 4.48515 76.4398 3.45877C75.3865 2.43239 73.9706 1.86322 72.5 1.87498Z"
          />
          <path
            className="path-hole"
            d="M13.1625 30.4562H24.4813V66.875H13.1625V30.4562ZM18.825 12.3312C20.1232 12.3312 21.3923 12.7163 22.4716 13.4377C23.5509 14.159 24.3921 15.1843 24.8886 16.3838C25.3851 17.5833 25.5147 18.9031 25.261 20.1763C25.0072 21.4495 24.3816 22.6188 23.4632 23.5363C22.5448 24.4539 21.3749 25.0784 20.1015 25.3309C18.828 25.5834 17.5084 25.4526 16.3093 24.9549C15.1103 24.4572 14.0858 23.6151 13.3655 22.5351C12.6451 21.4551 12.2613 20.1857 12.2625 18.8875C12.2642 17.1481 12.9563 15.4805 14.1868 14.2511C15.4174 13.0218 17.0856 12.3312 18.825 12.3312ZM31.5813 30.4562H42.4313V35.4562H42.5813C44.0938 32.5937 47.7813 29.575 53.2875 29.575C64.75 29.55 66.875 37.0937 66.875 46.875V66.875H55.5563V49.1562C55.5563 44.9375 55.4813 39.5062 49.675 39.5062C43.8688 39.5062 42.8813 44.1062 42.8813 48.8812V66.875H31.5813V30.4562Z"
          />
        </svg>
      </a>

      <a href="mailto:hernanjugar123@gmail.com" target="_blank" className="icon-link">
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 80 80" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M73.3334 20C73.3334 16.3333 70.3334 13.3333 66.6667 13.3333H13.3334C9.66669 13.3333 6.66669 16.3333 6.66669 20V60C6.66669 63.6666 9.66669 66.6666 13.3334 66.6666H66.6667C70.3334 66.6666 73.3334 63.6666 73.3334 60V20ZM66.6667 20L40 36.6666L13.3334 20H66.6667ZM66.6667 60H13.3334V26.6666L40 43.3333L66.6667 26.6666V60Z"
          />
        </svg>
      </a>
      
      <a
        href="resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-link"
        onMouseEnter={() => setIsResumeLinkHovered(true)}
        onMouseLeave={() => setIsResumeLinkHovered(false)}
      >
        <span>
          View Résumé
        </span>

        <motion.svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
          className={"resume-link-arrow"}
          animate={{
            x: isResumeLinkHovered ? [0, 2] : 0, 
            ...(isResumeLinkHovered ? {
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0,
                ease: "easeInOut",
                duration: 0.5
              }
            } : {}),
          }}
        >
          <path d="M0 50 H80Z M40 20 L80 50Z M40 80 L80 50Z" strokeWidth={8} stroke="currentColor" />
        </motion.svg>
      </a>
    </div>
  )
}

export default function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <motion.nav className="navbar" animate={isNavMenuOpen ? "open" : "closed"}>
      <div className="nav-row">
        <NavLink to="/" className={"home-link"}>Hernan Jugar</NavLink>
        <NavLinks />

        <div 
          className={`nav-burger ${isNavMenuOpen ? "nav-burger--open" : "nav-burger--closed"}`}
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
        >
          <div className="nav-burger-line nav-burger-line--1" />
          <div className="nav-burger-line nav-burger-line--2" />
        </div>
      </div>

      <AnimatePresence>
        {isNavMenuOpen ? (
          <motion.div 
            className="nav-menu"
            initial={{
              height: "0px"
            }}
            animate={{
              height: "calc(100dvh - 80px)"
            }}
            exit={{
              height: "0px"
            }}
          >
            <NavLinks />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  )
}
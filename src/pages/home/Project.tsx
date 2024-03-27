import SkillsList from "./SkillsList"

interface ProjectProps {
  cssClass: string,
  title: string,
  description: string,
  skills: string[],
  imageUrls: string[],
  links: {
    github?: string,
    live?: string
  }
}

export default function Project({
  cssClass,
  title,
  description,
  skills,
  imageUrls,
  links
}: ProjectProps) {
  return (
    <div className={`project project--${cssClass}`}>
      <div className="project-images">
        {imageUrls.map((imageUrl) => (
          <img src={imageUrl} key={`project-image-${cssClass}-${imageUrl}`} />
        ))}
      </div>

      <div className="project-text">
        <div className="project-text-header">
          <h2>{title}</h2>
          <div className="project-links">
            {links.github ? (
              <a href={links.github} target="_blank" className="project-link">
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
                <span>Open in Github</span>
              </a>
            ) : null}

            {links.live ? (
              <a href={links.live} target="_blank" className="project-link">
                <span>Open website</span>
                <svg 
                  width="100" 
                  height="100" 
                  viewBox="0 0 100 100" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M20 80 L80 20Z M40 20 L80 20Z M80 60 L80 20Z"
                    strokeWidth={7}
                  />
                </svg>
              </a>
            ) : null}
          </div>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-skills">
          <SkillsList skills={skills}/>
        </div>
      </div>
    </div>
  )
}
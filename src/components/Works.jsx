import Tilt from "react-tilt"
import { link } from "../assets"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from "../styles"

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt 
        options ={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="card--img-container relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="card--img w-full h-full object-cover rounded-2x1"
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
             src={link}
             alt='github'
             className="w-1/2 h-1/2 object-fit"
            />
          </div>
        </div>
        <div className="card--header mt-5">
          <h3 className="text-white font-bold text-[1.5rem]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`card--tags text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[1.1rem] max-w-3xl leading-[1.8rem]"
        >
        Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to the website. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, '')

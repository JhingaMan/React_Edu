import './index.css'

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="container">
      <Avatar />
        <div className='data'>
          <Intro />
          <SkillList/>  
        </div>
    </div>
  )
}

const Avatar = ()=>{
  return(
  <img src='https://images.alphacoders.com/475/475526.jpg' alt="img" className="image"/>
  )
}
const Intro = () => {
  return(
  <div>
    <h1>Kunal Gupta</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam quasi nostrum deleniti eveniet libero at ad autem culpa in perspiciatis ab, omnis dolorem? Provident tempore perspiciatis animi, aliquid est quae dolorem commodi exercitationem unde dignissimos esse vero, ex suscipit tempora iste magnam eaque, necessitatibus illo nam! Facilis, numquam! Modi?</p>
  </div>
  )
}

const SkillList = () => {
  return(
    <div className='skill-list'>
      {skills.map((skill)=><Skill color = {skill.color} skill = {skill.skill} level={skill.level}/>)}
    </div>
  )
}

const Skill = ({color , skill , level}) =>{
  return(
    <div className='skill' style={{backgroundColor : color}}>
      <span>{skill}</span>
      <span>{level === 'beginner' && "👶"}
            {level === 'intermediate' && "💪"}
            {level === 'advanced' && "💪"}
      </span>
    </div>
  )
}
export default App

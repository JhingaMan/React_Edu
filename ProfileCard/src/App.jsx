import './index.css'

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
      <Skill color="orange" skill="JavaScript" emoji="💪"/>
      <Skill color="blue" skill="CSS" emoji="👶"/>
      <Skill color="green" skill="HTML" emoji="💪"/>
      <Skill color="pink" skill="Python" emoji="👶"/>
    </div>
  )
}

const Skill = (props) =>{
  return(
    <div className='skill' style={{backgroundColor : props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}
export default App

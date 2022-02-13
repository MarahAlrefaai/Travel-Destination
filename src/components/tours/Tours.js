import './Tours.css';
export default function Tours(props) {
//taking data from props(key = tourData) from home 
  return (
    <div >
      {
        props.tourData.map(element => {
          return (
          <div className="tstyle">
            <h3 className="namestyle">{element.name}</h3>
            <img  className="imgstyle" src={element.image} alt="error" />

          </div>)
        })


      }
    </div>
  )
}
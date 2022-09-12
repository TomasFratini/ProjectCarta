import Card from 'react-bootstrap/Card';
import home from '../img/home.jpg'

const Home = () => {
  return (
    <Card border="light" className="bg-dark text-white fluid">
      <Card.Img src={home} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title> 

        </Card.Title>
        <Card.Text>
    
        </Card.Text>
        <Card.Text>
          
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}
export default Home
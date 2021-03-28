import { Card, CardContent } from "@material-ui/core";

const About = () => {
  return (
    <Card variant="outlined" className="about">
      <CardContent>
        <h3>About</h3>
        <p>This is an informative app on various types of foods</p>
        <p>Version: 0.5</p>
        <p>Technology: React</p>
      </CardContent>
    </Card>
  )
}

export default About;
interface CollaborateFormEmailProps {
  name: string
  email: string
  position: string
  goals: string
}

const CollaborateFormEmail: React.FC<Readonly<CollaborateFormEmailProps>> = ({
  name,
  email,
  position,
  goals
}) => (
  <div>
    <h1>Collaboration Request</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Current Position & Challenges:</h2>
    <p>{position}</p>
    <h2>Goals and Support Needed:</h2>
    <p>{goals}</p>
  </div>
)

export default CollaborateFormEmail
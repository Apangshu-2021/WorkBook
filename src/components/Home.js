import Notes from './Notes'

export const Home = (props) => {
  return (
    <main>
      <Notes showAlert={props.showAlert} />
    </main>
  )
}

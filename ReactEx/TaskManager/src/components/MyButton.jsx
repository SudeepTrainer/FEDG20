import "./buttonStyle.css"
function MyButton(props) {
    // Object destructuring
    // const { title } = props;
    console.log(props);
    return <button className={props.type}>{props.title}</button>
}

export default MyButton;
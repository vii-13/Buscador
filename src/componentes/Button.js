const Button = ({
onClick = null,
children = null



}) =>
(

<Button onClick={onClick} >{children} </Button>

);

export default Button;
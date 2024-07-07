import PropTypes  from 'prop-types';

export default function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // } else {
    //     return <h2>Please, log in...</h2>
    // }

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-propmt">Please, log in...</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)

    UserGreeting.proptypes = {
        isLoggedIn: PropTypes.bool,
        username: PropTypes.string,
    }

    UserGreeting.defaultProps = {
        isLoggedIn: false,
        username: "Guest",
    }


}
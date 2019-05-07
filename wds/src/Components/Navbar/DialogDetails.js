import React, { Component } from 'react';
// import Button from '@material-ui/core/Button'; 
import SignOutButton from '../signOut/index'
import { ChangePasswordLink } from './NavDialog'
import { withFirebase } from '../Firebase';
import { userInfo } from 'os';
import { object } from 'prop-types';




const DialogDetails = ({ authUser, UserInfo }) => (
    <>
    <p>Unique Id: {authUser.uid}</p>
    <hr></hr>
    <p>email: {authUser.email}</p>
    <hr></hr>
    <p>Name: {UserInfo.username}</p>
    <hr></hr>
    <p>Last Paymennt: {UserInfo.paymentDate}</p>
    <p>payment details: {UserInfo.payment.paymentID}</p>
    <div>
    <ChangePasswordLink></ChangePasswordLink>
    <SignOutButton></SignOutButton>
    </div>
    </>
);
const Add_To = {
    UserInfo: []
}
class Contain extends Component {
    constructor(props) {
        super(props);
        this.state = {...Add_To};
        // console.log(this.state);
    }
    componentDidMount() {
        this.props.firebase.users().on('value', snapshot => {
            const userObject = snapshot.val();
            const userList = Object.keys(userObject).map(key => ({
                ...userObject[key],
                uid: key,
              }));
            // let valuetomatch = this.props.authUser.email;
            // let found = Object.keys(userObject).some(function (k) {
            // if (userObject[k].email === valuetomatch) {
            //     return true;
            // }
            const match = userList.find((userList) => userList.email == this.props.authUser.email); 
            const newmatch = match.payment;
            console.log(newmatch);
            const newList = Object.values(newmatch);
            console.log(newList);
            this.setState({
                UserInfo: match
            })
            // console.log(match);
        });
}
    render() {
        const { authUser } = this.props;
        const { UserInfo } = this.state;
        console.log(UserInfo)
        // console.log(UserInfo);
        return (
            <>
            <DialogDetails authUser={authUser} UserInfo={UserInfo}></DialogDetails>
            </>
        )
    }
}
export { DialogDetails };

export default withFirebase(Contain);
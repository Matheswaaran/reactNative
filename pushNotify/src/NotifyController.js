import React from 'react';
import PushNotification from 'react-native-push-notification';

export default class NotifyController extends React.Component{

	componentDidMount(){
		PushNotification.configure({
			onNotification: function (notification) {
				console.log(notification);
			},

			permissions: {
				alert: true,
				badge: true,
				sound: true,
			},

			popInitialNotification: true,
			requestPermissions: true,
		});
	}

	render(){
		return null;
	}
}
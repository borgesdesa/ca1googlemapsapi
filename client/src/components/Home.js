import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 53.350140, lng: -6.266155}}
					height='500px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Home;

import React, { Component } from 'react';

class Panel extends Component {
	render() {
		return (
			<div className="row valign-wrapper">
				<table className="col s10">
				  <tbody>
				  	<tr>
				  		<th>Location</th>
				  		<th>Points</th>
				  	</tr>
				  </tbody>
				  <tbody>
				    <tr>
				      <td>Golden Gate Park</td>
				      <td>3</td>
				    </tr>
				    <tr>
				      <td>Museum of Modern Art</td>
				      <td>4</td>
				    </tr>
				    <tr>
				      <td>Exploratorium</td>
				      <td>1</td>
				    </tr>
				  </tbody>
				</table>
			</div>
		)
	}
}

export default Panel;

			// <ul class="collection with-header">
			//   <li class="collection-header"><h4>Points of interest near you</h4></li>
			//   <li class="collection-item"><div>Golden Gate Park<a href="#!" class="secondary-content"><i class="material-icons">add</i></a></div></li>
			//   <li class="collection-item"><div>Museum of Modern Art<a href="#!" class="secondary-content"><i class="material-icons">add</i></a></div></li>
			//   <li class="collection-item"><div>Exploratorium<a href="#!" class="secondary-content"><i class="material-icons">add</i></a></div></li>
			// </ul>
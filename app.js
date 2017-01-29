var Port = React.createClass({
	getInitialState: function(){
		return{
			home: true,
			bio: false,
			contact: false
		};
	},
	homeClicked: function(){
		this.setState({
			home: true,
			bio: false,
			contact: false
		});
	},
	bioClicked: function(){
		this.setState({
			home: false,
			bio: true,
			contact: false
		});
	},
	contactClicked: function(){
		this.setState({
			home: false,
			bio: false,
			contact: true
		});
	},
	render: function(){
		return(
			<div> 
 				<div className="homepage" onClick={this.homeClicked}>Home</div>
 				<div className="biopage" onClick={this.bioClicked}>About Me</div>
 				<div className="contactpage" onClick={this.contactClicked}>Contact</div>

 				<div className="mainLayout"> 
 					{this.state.home ? <Home /> : null} 
 					{this.state.bio ? <Bio /> : null}
 					{this.state.contact ? <Contact /> : null}
 				</div>
			</div>
		);
	}
});

var Home = React.createClass({
	getInitialState: function(){
		return {
			home: true,
			bio: false,
			contact: false
		};
	},
	render: function(){
		return(
			<div>
			<div><img src="https://images.unsplash.com/photo-1476733419970-c703149c016b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="/></div>
			</div>

		)
	}
});
var Bio = React.createClass({
	getInitialState: function(){
		return {
			home: false,
			bio: true,
			contact: false
		};
	},
	render: function(){
		return(
			<div>
				<div className="bioContainer">Hi, my name is Annie.</div>
			</div>
		)
	}
});
var Contact = React.createClass({
	getInitialState: function(){
		return {
			home: false,
			bio: false,
			contact: true
		};
	},
	render: function(){
		return(
			<div>
				<div className="contactContainer">This is my contact.</div>
			</div>
		)
	}
});

ReactDOM.render(
	<div>
	<Port />
	</div>,
	document.getElementById('container')
);
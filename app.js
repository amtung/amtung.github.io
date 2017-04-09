var Port = React.createClass({
	getInitialState: function(){
		return{
			home: true,
			about: false,
			work: false
		};
	},
	homeClicked: function(){
		this.setState({
			home: true,
			about: false,
			work: false
		});
	},
	workClicked: function(){
		this.setState({
			home: false,
			about: false,
			work: true
		});
	},
	render: function(){
		return(
			<div> 
			<div className="header">
 				<div className="nav" id="homepage" onClick={this.homeClicked}>Home</div>
 				<div className="nav" id="aboutpage" onClick={this.homeClicked}><a href="#section">About</a></div>
 				<div className="nav" id="workpage" onClick={this.workClicked}>Work</div>
</div>
 				<div className="mainLayout"> 
 					{this.state.home ? <Home /> : null} 
 					{this.state.work ? <Work /> : null}
 				</div>
			</div>
		);
	}
});

var Home = React.createClass({
	getInitialState: function(){
		return {
			home: true,
			about: false,
			work: false
		};
	},
	render: function(){
		return(
			<div>
			<div className="laptop-img"> <img className="images" src="Image/laptop-shadow.png"/></div>
			<div className="aboutContainer" id="section"><p><br/></p></div>
			<div className="contactInfo"><br/>
				<a href="https://github.com/amtung"><img className="icons" src="Image/github.png"/></a>
				<a href="https://www.linkedin.com/in/amtung/"><img className="icons" src="Image/linkedin.png"/></a>
				<a href="mailto:annie.mmt@gmail.com"><img className="icons" src="Image/gmail.png"/></a>
				<a href="https://twitter.com/annietungg"><img className="icons" src="Image/twitter.png"/></a>
				<a href="https://medium.com/@amtung"><img className="icons" src="Image/medium.png"/></a>
			</div>
			</div> 
		)
	}
});
var Work = React.createClass({
	getInitialState: function(){
		return {
			home: false,
			about: false,
			work: true
		};
	},
	render: function(){
		return(
			<div>
				<div className="workContainer">Portfolio here.</div>
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
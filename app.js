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
			<div className="aboutContainer" id="section"><p><br/>Hi, I’m Annie. I am an iOS developer with a passion for art, music and technology. Born in Hong Kong, moved to New York at age 12, I’ve always been adventurous and adaptive to change. Graduated from University at Albany with a Bachelor’s degree in Communication and minor in Japanese. My background includes executing digital marketing strategies, managing operation in start-ups, and a successful track record in sales. Being exposed to the tech industry made me realize that I wanted to be a part of it, the possibility of combining art and technology is what initially drew me into this field. The power of building with code is what excites me and continues to inspire me everyday. Aside from coding, I enjoy doing arts and crafts, exploring museums and listening to Electronic dance music, most of all I like the small joys that a simple life brings.</p></div>
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
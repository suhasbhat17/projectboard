import React, { Component } from "react";

export default function NavBar() {
    return (
      <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span className="navbar-toggler-icon"></span>
				</button> <a className="navbar-brand" href="#">Project Board</a>

        <div className="ml-md-auto">
					<ul className="navbar-nav ml-md-auto">
						<li className="nav-item">
							 <a className="nav-link" href="#">Sign Up</a>
						</li>
						<li className="nav-item">
							 <a className="nav-link" href="#">Log In</a>
						</li>
					</ul>
				</div>
			</nav>
      </div>
	</div>
</div>
    );
}

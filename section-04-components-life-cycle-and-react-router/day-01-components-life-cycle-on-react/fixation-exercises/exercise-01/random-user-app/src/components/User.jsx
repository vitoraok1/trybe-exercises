import React, { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class User extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      person: [],
    }

  }

  componentDidMount() {
    const URL_API = 'https://api.randomuser.me/';

    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          person: data.results,
        });
      });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const requiredAge = 50;
    const validationAge = nextState.person[0].dob.age < requiredAge;

    if (validationAge) {
      return true;
    } else {
      return false;
    }
    
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    }
  }

  render() {
    const { loading, person } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <PersonCard
        person={ this.getUserElements(person[0])}
        />
      </div>
    );
  }
}

export default User;

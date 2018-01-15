import axios from 'axios';
import { Icon } from 'semantic-ui-react';
import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

/*
const source = [
  {
    "title": "Matt Upham",
    // "description": "Extended mobile protocol",
    // "image": "https://s3.amazonaws.com/uifaces/faces/twitter/lebronjennan/128.jpg",
    // "price": "$86.84"
  },
  {
    "title": "user 2",
    // "description": "Polarised well-modulated moratorium",
    // "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ifarafonow/128.jpg",
    // "price": "$72.49"
  },
  {
    "title": "user 3",
    // "description": "Networked next generation data-warehouse",
    // "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thatonetommy/128.jpg",
    // "price": "$71.05"
  },
  {
    "title": "Bogan Inc",
    // "description": "Fully-configurable mobile open architecture",
    // "image": "https://s3.amazonaws.com/uifaces/faces/twitter/arpitnj/128.jpg",
    // "price": "$32.34"
  },
  {
    "title": "Wyman Inc",
    // "description": "Networked client-server framework",
    // "image": "https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg",
    // "price": "$6.13"
  }
]
*/


// const source = [
  // {
  //   "id": 1,
  //   "username": "mattupham",
  //   "first_name": "Matt",
  //   "last_name": "Upham",
  //   "picture_url": "http://fb.com/mattuphamImage"
  // },
  // {
  //   "id": 2,
  //   "username": "user2",
  //   "first_name": "User",
  //   "last_name": "2",
  //   "picture_url": "http://fb.com/mattuphamImage"
  // },
  // {
  //   "id": 3,
  //   "username": "user3",
  //   "first_name": "User",
  //   "last_name": "3",
  //   "picture_url": "http://fb.com/mattuphamImage"
  // }
// ]

class SearchBar extends Component {
  //retrieve data using ajax call
  //parse names into title format

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    var user = this.state.username;
    axios.get(`/search/users`)
    .then((response) => {
      let searchNames = response.data.map(function(user){
        return { 
            "title": user.first_name + ' ' + user.last_name,
            "description": user.username
        }
      });
      this.setState({
        source: searchNames
      });
    })
    .catch((error) => {
      console.log(error);
    }); 
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleResultSelect(e, { result }) { 
    //go to profile
    // alert(result.description)
    this.setState({
      redirect: true,
      clickedName: result.description
    })
    // this.setState({ value: result.title }) 
  }

  handleSearchChange(e, { value }) {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)
      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results, source } = this.state
    const profileUrl = '/' + this.state.clickedName + '/profile/' + this.props.loggedInUser;
    if (this.state.redirect) {
      return <Redirect to={profileUrl} />
    }
    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect.bind(this)}
            onSearchChange={this.handleSearchChange.bind(this)}
            results={results}
            value={value}
            // {...this.props}
          />
        </Grid.Column>
        {/* <Grid.Column width={8}>
          <Header>State</Header>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <Header>Options</Header>
          <pre>{JSON.stringify(source, null, 2)}</pre>
        </Grid.Column> */}
      </Grid>
    )
  }
}

export default SearchBar;


/*
const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

// getUserInfo() {
//   var user = this.state.username;
//   axios.get(`/${user}`)
//     .then((response) => {
//       console.log('user info...', response.data);
//       this.setState({
//         userInfo: response.data[0]
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     }); 
// }




class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.handleResultSelect.bind(this)
    this.handleSearchChange.bind(this)
    
    this.state = {
      isLoading: false,
      value: '',
      results: []
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleResultSelect(e, { result }) {
    this.setState({ value: result.title })
  } 

  handleSearchChange(e, { value }){
    console.log('search val', this.state.value);
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={this.state.isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={this.state.results}
            value={this.state.value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header>State</Header>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <Header>Options</Header>
          <pre>{JSON.stringify(source, null, 2)}</pre>
        </Grid.Column>
      </Grid>
    )
  }
}

export default SearchBar;

*/





























// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   handleSearch(event) {
//     event.preventDefault();
//     let user = this.refs.searchUser.value;
//     let userName = 'Shubhra';
//     if (user) {
//       axios.get(`/${userName}/profile/${user}`)
//       .then((res) => {
//         this.props.getUserProfile(res.data[0].username);

//       })
//       .catch((err) => {
//         console.log('err: ', err);
//       })
//     }
//     this.refs.searchUser.value = '';
//   }

  // filter results with each letter entered
  // handleInputText(event) {
  //   event.preventDefault();
  //   let user = this.refs.searchUser.value;
  //   let userName = 'Shubhra';
  //   axios.get(`/${userName}/search/${user}`)
  //   .then((res) => {
  //   })
  //   .catch((err) => {
  //     console.log('err: ', err);
  //   })
  // }

//   render() {
//     return (
//       <form className="search-bar" onSubmit={this.handleSearch.bind(this)}>
//         <input 
//           className="search-input" 
//           type="text" 
//           placeholder="Search" 
//           ref="searchUser" 
//         />
//         <button className="search-btn">Find</button>

//       </form>
//     )
//   }
// }

// export default Search;

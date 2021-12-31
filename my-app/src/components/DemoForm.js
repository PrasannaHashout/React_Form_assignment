import React, { Component } from 'react'
import '../style.css';
class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personname: '',
            email: '',
            comment: '',
            language: 'react',
            gender: '',
            planguage: '',
            fileUpload: '',
            date: '',
            month: ''
        }
    }

    handleNameChange = event => {
          this.setState({
                personname: event.target.value
          })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleLanguageChange = event => {
        this.setState({
            language: event.target.value
        })
    }

    handleGender = event => {
          this.setState({
                gender:event.target.value
          })
    }

    handleCheck = event =>{
          this.setState({
                planguage: event.target.value
          })
          console.log(this.state.planguage)
    }

    handleFileUpload = event =>{
            this.setState({
                  fileUpload: event.target.value
            })
    }

    handleDate = event => {
          this.setState({
                date: event.target.value
          })
    }

    handleMonth = event => {
          this.setState({
                month: event.target.value
          })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(`
                     Name : ${this.state.personname} 
                     Email : ${this.state.email}   
                     Comment : ${this.state.comment} 
                     Language :${this.state.language}
                     Gender : ${this.state.gender}
                     Programming Languages : ${this.state.planguage}
                     File Upload : ${this.state.fileUpload}
                     Date : ${this.state.date}
                     Month : ${this.state.month} `);
    }
    
    render() {
        return (
              
            <form onSubmit={this.handleSubmit}>
                  <h1>Form Details</h1>

               <div className='form-content'>
                     <label htmlFor='name'>Name</label>
                     <input type="text" id="personname" value={this.state.personname} onChange={this.handleNameChange} />
               </div>



                <div className='form-content'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                </div>

                <div className='form-content'>
                    <label htmlFor="comment">Comments</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>

                <div className='form-content'>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="reactnative">React Native</option>
                        <option value="flutter">Flutter</option>
                    </select>
                </div>

                <div className='form-content' onChange={this.handleGender}>
                      <label htmlFor='gender'>Gender</label>
                      <input type="radio"name='gender' value="male" id='male' />Male
                      <input type="radio" name='gender' value="female" id='female' />Female
                </div>

                <div className='form-content' onChange={this.handleCheck}>
                      <label>Programming Languages</label>
                      <input type="checkbox" value="JavaScript" />JavaScript
                      <input type="checkbox" value="React" />React
                      <input type="checkbox" value="Java" />Java
                      <input type="checkbox" value="Python" />Python

                </div>

                <div className='form-content'>
                      <label>File Upload</label>
                      <input type="file" onChange={this.handleFileUpload} />
                </div>

                <div className='form-content'>
                      <label>Date</label>
                      <input type="date" onChange={this.handleDate} />
                </div>

                <div className='form-content'>
                      <label>Month</label>
                      <input type="month" onChange={this.handleMonth}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
import React from 'react' 

class ContactForm extends React.Component {
    constructor() {
        super() 
        this.state = {
            name: '', 
            email: '', 
            mobile: '' 
        }
        // bind methods, sets the context of the this keyword
        this.handleMobileChange = this.handleMobileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    // es6 arrow function
    handleNameChange = (e) => {
        const name = e.target.value 
        // console.log(this) 
        this.setState(() => ({ name }))
    }

    // es6 function - bind in constructor
    handleMobileChange(e) {
        const mobile = e.target.value 
        // console.log(this)
        this.setState(() => ({ mobile }))
    }

    // es6 function - bind when calling the function
    handleEmailChange(e) {
        const email = e.target.value 
        this.setState(() => ({ email }))
    }

    componentWillReceiveProps(nextProps){
        const{name, email,mobile} = nextProps.contact
        this.setState(()=>({
            name,
            email,
            mobile
        }))
    }
    
    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
            name: this.state.name, 
            email: this.state.email, 
            mobile: this.state.mobile 
        }

        this.props.handleSubmit(formData)

        // clear form 

        this.setState(() => ({ 
            name: '', email: '', mobile: ''
        }))
      
    }

    render() {
        return (
            <div>
                
                    <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label>
                            Name 
                            <input type="text" value={this.state.name} onChange={this.handleNameChange} /> 
                        </label> <br/> <br></br>

                        <label>
                            Mobile
                            <input type="text" value={this.state.mobile} onChange={this.handleMobileChange} />
                        </label> <br /> <br></br>

                        <label>
                            Email
                            <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                        </label> <br /> <br></br>

                        <input type="submit" /> 
                        </fieldset>
                    </form> 
               
            </div>
        )
    }
}

export default ContactForm

class App extends React.Component{
    constructor() {
        super();
        this.form1Data = {};
        this.form2Data = {};
        this.form3Data = {};
        this.state = {
            submittedForm: 0,
        }
    }

    onCheckoutSubmit(e) {
        e.preventDefault();
        this.setState({
            submittedForm: this.state.submittedForm+1,
        });
    }

    onForm1Submit(e) {
        e.preventDefault();
        var data = $("#firstForm").val();
        console.log(data)
        $('#firstForm').each((e) => {
            console.log($(this))
        })
        var nameElem = document.getElementById('name');
        var emailElem = document.getElementById('email');
        var passwordElem = document.getElementById('password');
        this.form1Data = {
            name: nameElem.value,
            email: emailElem.value,
            password: passwordElem.value,
        };
        // console.log(this.form1Data)
        this.setState({
            submittedForm: this.state.submittedForm+1,
        });
    }

    onForm2Submit(e) {
        e.preventDefault();
        var address1Elem = document.getElementById('address1');
        var address2Elem = document.getElementById('address2');
        var address3Elem = document.getElementById('address3');
        var cityElem = document.getElementById('city');
        var stateElem = document.getElementById('state');
        var zipCodeElem = document.getElementById('zipCode');
        var phoneNumberElem = document.getElementById('phoneNumber');
        this.form2Data = {
                address1: address1Elem.value,
                address2: address2Elem.value,
                address3: address3Elem.value,
                city: cityElem.value,
                state: stateElem.value,
                zipCode: zipCodeElem.value,
                phoneNumber: phoneNumberElem.value,
        };
        // console.log(this.form2Data)
        this.setState({
            submittedForm: this.state.submittedForm+1,
        });
    };

    onForm3Submit(e) {
        e.preventDefault();
        var creditCardElem = document.getElementById('creditCard');
        var expiryDateElem = document.getElementById('expiryDate');
        var ccvElem = document.getElementById('ccv');
        var billingZipCodeElem = document.getElementById('billingZipCode');
        this.form3Data = {
            creditCard: creditCardElem.value,
            expiryDate: expiryDateElem.value,
            ccv: ccvElem.value,
            billingZipCode: billingZipCodeElem.value,
        };
        // console.log(this.form3Data);
        this.setState({
            submittedForm: this.state.submittedForm+1,
        });
    };

    formSendHttpRequest(e) {
        e.preventDefault();
        var allData = Object.assign({}, this.form1Data, this.form2Data, this.form3Data);
        var endPoint = '/';
        $.ajax({
            url: endPoint,
            method: "POST",
            data: allData,
            success: (result) => {
                console.log(result);
                this.setState({
                    submittedForm: 0,
                });
            },
            error: () => {
                console.log('Error');
            }
        });
    };

    render() {
        let comp;
        switch (this.state.submittedForm) {
            case 0:
            comp = <Checkout 
            onCheckoutSubmit={this.onCheckoutSubmit.bind(this)}
                />;
            break;
            case 1:
            comp = <Form1 
                onForm1Submit={this.onForm1Submit.bind(this)}
                />;
            break;
            case 2:
            comp = <Form2 
                onForm2Submit={this.onForm2Submit.bind(this)}
                /> ;
            break;
            case 3:
            comp = <Form3 
                onForm3Submit={this.onForm3Submit.bind(this)}
                /> ;
            break;
            case 4:
            var allData = Object.assign({}, this.form1Data, this.form2Data, this.form3Data);
            comp = <Summary 
                allData={allData}
                formSendHttpRequest={this.formSendHttpRequest.bind(this)}
                />;
            break;
        }
        return (
            <div>
            <h1>Welcome to Roger's Store!</h1>
                {comp}
            </div>

        )
    }
}


var Checkout = ({onCheckoutSubmit}) => (
    <button onClick={(e) => onCheckoutSubmit(e)}>Checkout</button>
)






//F1 collects name, email, and password for account creation.


var Form1 = ({onForm1Submit}) => (
    <div id="form1">
        <h2>Step 1: Sign Up</h2>
        <form id="firstForm" action="">
            Name: <br></br>
            <input id="name" type="text"/><br></br>
            Email: <br></br>
            <input id="email" type="text"/><br></br>
            Password: <br></br>
            <input id="password" type="text"/><br></br>
            <button id="form1Submit" onClick={(e) => onForm1Submit(e)}>Next</button>
        </form>
    </div>
)

//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.


var Form2 = ({onForm2Submit}) => (
    <div id="form2">
    <h2>Step 2: Enter Shipping Address</h2>
        <form>
            Address (line1): <br></br>
            <input id="address1" type="text"/> <br></br>
            Address (line2): <br></br>
            <input id="address2" type="text"/> <br></br>
            Address (line3): <br></br>
            <input id="address3" type="text"/> <br></br>
            City: <br></br>
            <input id="city" type="text"/> <br></br>
            State: <br></br>
            <input id="state" type="text"/> <br></br>
            Zip Code: <br></br>
            <input id="zipCode" type="text"/> <br></br>
            Phone Number: <br></br>
            <input id="phoneNumber" type="text"/> <br></br>
            <button onClick={(e) => onForm2Submit(e)}>Next</button>
        </form>

    </div>
)



//F3 collects credit card #, expiry date, CVV, and billing zip code.



var Form3 = ({onForm3Submit}) => (
    <div id="form3">
        <h2>Step 3: Enter Payment Information</h2>
        <form action="">
            Credit Card#: <br></br>
            <input id="creditCard" type="text"/> <br></br>
            Expiry date: <br></br>
            <input id="expiryDate" type="text"/><br></br>
            CVV: <br></br>
            <input id="ccv" type="text"/><br></br>
            Billing Zip Code: <br></br>
            <input id="billingZipCode" type="text"/><br></br>
            <button onClick={(e) => onForm3Submit(e)} >Next</button>
        
        </form>
        
    </div>
)

var Summary = ({allData, formSendHttpRequest}) => (
    <div>
        Name: {allData.name}<br></br>
        Email: {allData.email}<br></br>
        Password: {allData.password}<br></br>
        Address1: {allData.address1}<br></br>
        Address2: {allData.address2}<br></br>
        Address3: {allData.address3}<br></br>
        City: {allData.city}<br></br>
        State: {allData.state}<br></br>
        Zip Code: {allData.zipCode}<br></br>
        Phone: {allData.phoneNumber}<br></br>
        CreditCard: {allData.creditCard}<br></br>
        Expiry Date: {allData.expiryDate}<br></br> 
        CCV: {allData.ccv}<br></br>
        Billing Zip Code: {allData.billingZipCode}<br></br>
        <button onClick={(e) => formSendHttpRequest(e)}>Purchase</button>
    </div>
)

export default App;
